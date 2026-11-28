// Lee las recetas de recetas.js (en la raíz del proyecto) y prepara lo que necesitan las páginas.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import texto from '../../recetas.js?raw';
import { nombreCategoria, CATEGORIAS } from './web.js';

// Receta de «La última receta :)» en la portada.
// Si está en null, sale la más reciente; si se pone un id, sale esa.
export const RECETA_DESTACADA = null;

const contexto = { window: {} };
vm.runInNewContext(texto, contexto);
const LISTA = contexto.window.RECETAS || [];

// ---------- Comprobaciones: si algo está mal, la publicación se para y dice qué es ----------

const ids = new Set();
const categoriasValidas = new Set(CATEGORIAS.map((c) => c.id));
for (const r of LISTA) {
  if (!r.id || !/^[a-z0-9-]+$/.test(r.id)) throw new Error(`La receta «${r.nombre}» tiene un id no válido: «${r.id}». Solo minúsculas, números y guiones.`);
  if (ids.has(r.id)) throw new Error(`Hay dos recetas con el mismo id: ${r.id}`);
  if (!categoriasValidas.has(r.categoria)) throw new Error(`La receta «${r.nombre}» tiene una categoría que no existe: «${r.categoria}».`);
  ids.add(r.id);
}

// ---------- Fotos: están en public/ o en public/img/ ----------

const PUBLICA = path.join(process.cwd(), 'public');
const avisadas = new Set();

export function rutaImagen(nombre) {
  if (!nombre) return '';
  const limpio = String(nombre).replace(/^\/+/, '').replace(/^img\//, '');
  if (fs.existsSync(path.join(PUBLICA, limpio))) return '/' + limpio;
  if (fs.existsSync(path.join(PUBLICA, 'img', limpio))) return '/img/' + limpio;
  if (!avisadas.has(nombre)) { console.warn(`  ⚠ No encuentro la imagen ${nombre}`); avisadas.add(nombre); }
  return '';
}

// ---------- Utilidades ----------

export const esSubtitulo = (linea) => /:\s*$/.test(linea);

export function tiempoTexto(minutos) {
  if (!minutos) return '';
  const h = Math.floor(minutos / 60);
  const m = minutos % 60;
  return h ? `${h} h${m ? ` ${m} min` : ''}` : `${m} min`;
}

function recortar(t, max) {
  if (t.length <= max) return t;
  const corte = t.slice(0, max - 1);
  return corte.slice(0, corte.lastIndexOf(' ')).replace(/[,;:.\s]+$/, '') + '…';
}

const minuscula = (s) => s.charAt(0).toLowerCase() + s.slice(1);

// ---------- Recetas preparadas para las páginas ----------

export const RECETAS = LISTA
  .map((r, orden) => {
    const ingredientes = r.ingredientes || [];
    const soloIngredientes = ingredientes.filter((i) => !esSubtitulo(i));
    const pasos = r.pasos || [];
    const tiempo = Number(r.tiempo) || null;
    const categoria = nombreCategoria(r.categoria);
    const descripcionMeta = recortar(
      r.descripcion ||
        `Receta de ${minuscula(r.nombre)} de IUKI: ${soloIngredientes.slice(0, 5).map(minuscula).join(', ')}. ${pasos.length ? 'Ingredientes, paso a paso y vídeo.' : 'Ingredientes y vídeo.'}`,
      158
    );
    return {
      ...r,
      orden,
      url: `/recetas/${r.id}/`,
      foto: rutaImagen(r.foto),
      fotograma: rutaImagen(r.fotograma),
      ingredientes,
      soloIngredientes,
      pasos,
      tiempo,
      etiquetas: r.etiquetas || [],
      preguntas: r.preguntas || [],
      nombreCategoria: categoria,
      // En las tarjetas, el tiempo solo si es de 30 minutos o menos
      etiquetaTarjeta: categoria + (tiempo && tiempo <= 30 ? ` · ${tiempoTexto(tiempo)}` : ''),
      descripcionMeta
    };
  })
  .sort((a, b) => (b.fecha || '').localeCompare(a.fecha || '') || a.orden - b.orden);

export const recetaPorId = (id) => RECETAS.find((r) => r.id === id);

export const destacada = () => (RECETA_DESTACADA && recetaPorId(RECETA_DESTACADA)) || RECETAS[0];

// «Si te gusta esta, prueba…»: de la misma categoría y con la fecha más cercana
export function relacionadas(receta, cuantas = 3) {
  const dias = (r) => Math.abs(new Date(r.fecha || 0) - new Date(receta.fecha || 0));
  const otras = RECETAS.filter((r) => r.id !== receta.id && r.foto);
  const misma = otras.filter((r) => r.categoria === receta.categoria).sort((a, b) => dias(a) - dias(b));
  const resto = otras.filter((r) => r.categoria !== receta.categoria);
  return [...misma, ...resto].slice(0, cuantas);
}

// Atajos de «¿Qué te apetece hoy?»: cada uno sale solo si tiene recetas
export function atajos() {
  const lista = [
    { nombre: 'En 30 minutos', url: '/recetas/?tiempo=30', hay: RECETAS.some((r) => r.tiempo && r.tiempo <= 30) },
    { nombre: 'De cuchara', url: '/recetas/?categoria=cuchara', hay: RECETAS.some((r) => r.categoria === 'cuchara') },
    { nombre: 'Con pollo', url: '/recetas/?buscar=pollo', hay: RECETAS.some((r) => /pollo/i.test(r.nombre + ' ' + r.soloIngredientes.join(' '))) },
    { nombre: 'Para el tupper', url: '/recetas/?etiqueta=tupper', hay: RECETAS.some((r) => r.etiquetas.includes('tupper')) },
    { nombre: 'Pasta y arroz', url: '/recetas/?categoria=pasta', hay: RECETAS.some((r) => r.categoria === 'pasta') },
    { nombre: 'Postres', url: '/recetas/?categoria=postres', hay: RECETAS.some((r) => r.categoria === 'postres') }
  ];
  return lista.filter((a) => a.hay);
}

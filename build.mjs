// Genera la web completa en la carpeta dist/ a partir de recetas.js.
// Cloudflare Pages lo ejecuta en cada publicación (comando: node build.mjs).
// Para probarlo en local: node build.mjs y abrir dist/.
//
// Qué hace:
//  - copia los archivos de la web (página, estilos, fotos...) a dist/
//  - crea una página propia para cada receta: /recetas/<id>/
//    con su título, descripción, foto para compartir y datos de receta para Google
//  - mete las tarjetas en la portada (para que Google las vea sin JavaScript)
//  - crea sitemap.xml, robots.txt y la página de error 404

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';

const SITIO = 'https://cocinaiuki.com';
const PERFIL_IG = 'https://www.instagram.com/cocina.iuki/';
const REDES = [
  PERFIL_IG,
  'https://www.tiktok.com/@cocina.iuki',
  'https://www.youtube.com/@cocinaIUKI'
];
const NOMBRES_CATEGORIA = {
  entrantes: 'Entrantes',
  pasta: 'Pasta y arroz',
  principales: 'Principales',
  cuchara: 'De cuchara',
  postres: 'Postres'
};
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const RAIZ = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(RAIZ, 'dist');
// Versión de cada archivo (cambia cuando cambia su contenido), para que el navegador no use una copia vieja
const version = (f) => crypto.createHash('md5').update(fs.readFileSync(path.join(RAIZ, f))).digest('hex').slice(0, 8);
const V = { css: version('estilos.css'), app: version('app.js'), recetas: version('recetas.js') };

const NO_COPIAR = new Set(['.git', '.github', 'dist', 'node_modules', 'build.mjs', 'README.md', 'package.json', 'package-lock.json', '.gitignore']);

// ---------- Utilidades ----------

const escapar = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const jsonLd = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');
const esSubtitulo = (linea) => /:\s*$/.test(linea);

function fechaLarga(f) {
  const p = String(f || '').split('-');
  if (p.length !== 3) return '';
  return `${parseInt(p[2], 10)} de ${MESES[parseInt(p[1], 10) - 1]} de ${p[0]}`;
}

function recortar(texto, max) {
  if (texto.length <= max) return texto;
  const corte = texto.slice(0, max - 1);
  return corte.slice(0, corte.lastIndexOf(' ')).replace(/[,;:.\s]+$/, '') + '…';
}

// Devuelve la ruta pública de una imagen: está en la raíz o en img/
function rutaImagen(nombre) {
  if (!nombre) return '';
  const limpio = String(nombre).replace(/^\/+/, '').replace(/^img\//, '');
  if (fs.existsSync(path.join(RAIZ, limpio))) return '/' + limpio;
  if (fs.existsSync(path.join(RAIZ, 'img', limpio))) return '/img/' + limpio;
  console.warn(`  ⚠ No encuentro la imagen ${nombre}`);
  return '/' + limpio;
}

function copiar(origen, destino) {
  const info = fs.statSync(origen);
  if (info.isDirectory()) {
    fs.mkdirSync(destino, { recursive: true });
    for (const f of fs.readdirSync(origen)) copiar(path.join(origen, f), path.join(destino, f));
  } else {
    fs.copyFileSync(origen, destino);
  }
}

function escribir(ruta, contenido) {
  const destino = path.join(DIST, ruta);
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  fs.writeFileSync(destino, contenido);
}

// ---------- Leer recetas.js ----------

const contexto = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(RAIZ, 'recetas.js'), 'utf8'), contexto);
const RECETAS = contexto.window.RECETAS || [];

const ids = new Set();
for (const r of RECETAS) {
  if (!r.id || !/^[a-z0-9-]+$/.test(r.id)) throw new Error(`La receta «${r.nombre}» tiene un id no válido: «${r.id}». Solo minúsculas, números y guiones.`);
  if (ids.has(r.id)) throw new Error(`Hay dos recetas con el mismo id: ${r.id}`);
  ids.add(r.id);
}

// ---------- Copiar la web a dist/ ----------

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });
for (const f of fs.readdirSync(RAIZ)) {
  if (NO_COPIAR.has(f) || f.startsWith('.')) continue;
  copiar(path.join(RAIZ, f), path.join(DIST, f));
}

// ---------- Trozos comunes ----------

const ICONO_ATRAS = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="M11 6l-6 6 6 6"/></svg>';
const ICONO_WA = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.6-4.3A8.5 8.5 0 1 1 20.5 11.5z"/></svg>';
const ICONO_PLAY = '<svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>';
const PLAN_B = ' onerror="this.onerror=null;this.src=this.src.replace(\'/img/\',\'/\')"';

const CABECERA_COMUN = `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#4A5E28">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%234A5E28'/%3E%3Ctext x='16' y='23' font-family='Georgia,serif' font-size='20' font-weight='700' text-anchor='middle' fill='white'%3EI%3C/text%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/estilos.css?v=${V.css}">`;

const PIE = `<footer class="footer">
    <div class="wrap footer-inner">
      <p>Recetas publicadas por Iuki en Instagram. Cada receta enlaza con su vídeo original.</p>
      <a href="${PERFIL_IG}" target="_blank" rel="noopener">Seguir a @cocina.iuki</a>
    </div>
  </footer>`;

const BARRA = `<header class="bar">
      <div class="wrap bar-inner">
        <a class="back" href="/">${ICONO_ATRAS}Todas las recetas</a>
        <a class="bar-title" href="/" style="text-decoration:none">Recetas de Iuki</a>
      </div>
    </header>`;

// ---------- Página de cada receta ----------

function descripcion(r) {
  const ingredientes = r.ingredientes.filter((i) => !esSubtitulo(i)).slice(0, 5).map((i) => i.charAt(0).toLowerCase() + i.slice(1));
  const base = `Receta de ${r.nombre.charAt(0).toLowerCase() + r.nombre.slice(1)} de @cocina.iuki`;
  const extra = r.pasos.length ? 'Ingredientes, paso a paso y vídeo.' : 'Ingredientes y vídeo.';
  return recortar(`${base}: ${ingredientes.join(', ')}. ${extra}`, 158);
}

function paginaReceta(r) {
  const url = `${SITIO}/recetas/${r.id}/`;
  const foto = rutaImagen(r.foto);
  const fotograma = rutaImagen(r.fotograma);
  const enlaceIg = r.instagram || PERFIL_IG;
  const categoria = NOMBRES_CATEGORIA[r.categoria] || '';
  const desc = descripcion(r);
  const titulo = `${r.nombre} | Receta de Iuki`;
  const whatsapp = 'https://wa.me/?text=' + encodeURIComponent(`Mira esta receta de Iuki: ${r.nombre}\n${url}`);

  const datos = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: r.nombre,
    description: desc,
    url,
    mainEntityOfPage: url,
    author: { '@type': 'Person', name: 'Iuki', url: PERFIL_IG },
    ...(r.fecha ? { datePublished: r.fecha } : {}),
    ...(foto ? { image: [SITIO + foto] } : {}),
    ...(categoria ? { recipeCategory: categoria } : {}),
    recipeIngredient: r.ingredientes.filter((i) => !esSubtitulo(i)),
    ...(r.pasos.length ? { recipeInstructions: r.pasos.map((p, i) => ({ '@type': 'HowToStep', position: i + 1, text: p })) } : {})
  };
  const migas = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Las recetas de Iuki', item: SITIO + '/' },
      { '@type': 'ListItem', position: 2, name: r.nombre, item: url }
    ]
  };

  const ingredientes = r.ingredientes.map((i) => esSubtitulo(i)
    ? `<li class="sub">${escapar(i.replace(/:\s*$/, ''))}</li>`
    : `<li>${escapar(i)}</li>`).join('');

  const pasos = r.pasos.length
    ? `<ol class="steps">${r.pasos.map((p, i) => `<li><span class="num" aria-hidden="true">${i + 1}</span><span>${escapar(p)}</span></li>`).join('')}</ol>`
    : '<p class="no-steps">Para esta receta, Iuki explica los pasos en el vídeo.</p>';

  const video = fotograma
    ? `<div class="video-wrap"><a class="video" href="${escapar(enlaceIg)}" target="_blank" rel="noopener" aria-label="Ver el vídeo de esta receta en Instagram"><img src="${escapar(fotograma)}" alt="" loading="lazy"${PLAN_B}><span class="play">${ICONO_PLAY}</span></a></div>`
    : '';

  return `<!doctype html>
<html lang="es">
<head>
${CABECERA_COMUN}
<title>${escapar(titulo)}</title>
<meta name="description" content="${escapar(desc)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Las recetas de Iuki">
<meta property="og:locale" content="es_ES">
<meta property="og:title" content="${escapar(r.nombre)}">
<meta property="og:description" content="${escapar(desc)}">
<meta property="og:url" content="${url}">
${foto ? `<meta property="og:image" content="${SITIO}${escapar(foto)}">` : ''}
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">${jsonLd(datos)}</script>
<script type="application/ld+json">${jsonLd(migas)}</script>
</head>
<body>
<div class="page">
  <div>
    ${BARRA}
    <main class="wrap main">
      <div class="recipe-top">
        <span class="badge">${escapar(categoria)}</span>
        <a class="btn-wa" href="${escapar(whatsapp)}" target="_blank" rel="noopener">${ICONO_WA}Compartir por WhatsApp</a>
      </div>
      <article class="detail">
        <div>
          ${foto ? `<img class="media" src="${escapar(foto)}" alt="${escapar(r.nombre)}" width="720" height="540"${PLAN_B}>` : ''}
          <div class="pad">
            <h1>${escapar(r.nombre)}</h1>
            <p class="label">Ingredientes</p>
            <ul class="ingredients">${ingredientes}</ul>
          </div>
        </div>
        <div>
          ${video}
          <div class="pad">
            <p class="label">Paso a paso</p>
            ${pasos}
            ${r.pasosDelVideo ? '<p class="fecha">Pasos resumidos de lo que cuenta Iuki en el vídeo.</p>' : ''}
            ${r.consejo ? `<div class="tip"><strong>Consejo de Iuki:</strong> ${escapar(r.consejo)}</div>` : ''}
            <a class="btn-ig" href="${escapar(enlaceIg)}" target="_blank" rel="noopener">${r.instagram ? 'Ver el vídeo en Instagram' : 'Ver los vídeos de Iuki en Instagram'}</a>
            ${r.fecha ? `<p class="fecha">Vídeo publicado el ${fechaLarga(r.fecha)}.</p>` : ''}
          </div>
        </div>
      </article>
      <a class="back back-bottom" href="/">${ICONO_ATRAS}Volver a todas las recetas</a>
    </main>
  </div>
  ${PIE}
</div>
</body>
</html>
`;
}

for (const r of RECETAS) escribir(`recetas/${r.id}/index.html`, paginaReceta(r));

// /recetas/ sin nada detrás lleva a la portada
escribir('recetas/index.html', `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Las recetas de Iuki</title><link rel="canonical" href="${SITIO}/"><meta http-equiv="refresh" content="0; url=/"></head><body><a href="/">Ver todas las recetas</a></body></html>`);

// ---------- Portada ----------

const tarjetas = RECETAS.map((r) => `<a class="card" href="/recetas/${r.id}/">` +
  (r.foto ? `<img class="card-photo" src="${escapar(rutaImagen(r.foto))}" alt="" loading="lazy" width="720" height="480">` : '<span class="card-photo card-nophoto"></span>') +
  `<span class="card-name">${escapar(r.nombre)}</span></a>`).join('');

const datosPortada = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Las recetas de Iuki',
    url: SITIO + '/',
    inLanguage: 'es'
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Iuki',
    alternateName: '@cocina.iuki',
    url: SITIO + '/',
    sameAs: REDES
  }
];

let portada = fs.readFileSync(path.join(RAIZ, 'index.html'), 'utf8');
portada = portada
  .replace('<meta property="og:image" content="/img/banner-iuki.jpg">', `<meta property="og:image" content="${SITIO}/img/banner-iuki.jpg">`)
  .replace('<!-- SEO -->', [
    `<link rel="canonical" href="${SITIO}/">`,
    '<meta property="og:type" content="website">',
    '<meta property="og:site_name" content="Las recetas de Iuki">',
    '<meta property="og:locale" content="es_ES">',
    `<meta property="og:url" content="${SITIO}/">`,
    '<meta name="twitter:card" content="summary_large_image">',
    ...datosPortada.map((d) => `<script type="application/ld+json">${jsonLd(d)}</script>`)
  ].join('\n'))
  .replace('<p id="contador" class="count" aria-live="polite"></p>', `<p id="contador" class="count" aria-live="polite">${RECETAS.length} recetas</p>`)
  .replace('<div id="rejilla" class="grid"></div>', `<div id="rejilla" class="grid">${tarjetas}</div>`)
  .replace('href="/estilos.css"', `href="/estilos.css?v=${V.css}"`)
  .replace('src="/recetas.js"', `src="/recetas.js?v=${V.recetas}"`)
  .replace('src="/app.js"', `src="/app.js?v=${V.app}"`);
escribir('index.html', portada);

// ---------- Error 404 ----------

escribir('404.html', `<!doctype html>
<html lang="es">
<head>
${CABECERA_COMUN}
<title>No encontramos esta página · Las recetas de Iuki</title>
<meta name="robots" content="noindex">
</head>
<body>
<div class="page">
  <div>
    ${BARRA}
    <main class="wrap main">
      <div class="empty">
        <p class="empty-title">Esta página no existe o ha cambiado de sitio.</p>
        <p>Todas las recetas siguen aquí, con buscador por plato o ingrediente.</p>
        <a class="back" href="/">Ver todas las recetas</a>
      </div>
    </main>
  </div>
  ${PIE}
</div>
</body>
</html>
`);

// ---------- Sitemap y robots ----------

const hoy = new Date().toISOString().slice(0, 10);
const ultima = RECETAS.map((r) => r.fecha).filter(Boolean).sort().pop() || hoy;
const urls = [
  `  <url><loc>${SITIO}/</loc><lastmod>${ultima}</lastmod></url>`,
  ...RECETAS.map((r) => `  <url><loc>${SITIO}/recetas/${r.id}/</loc>${r.fecha ? `<lastmod>${r.fecha}</lastmod>` : ''}</url>`)
];
escribir('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
escribir('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITIO}/sitemap.xml\n`);

console.log(`✓ Web generada en dist/: portada + ${RECETAS.length} páginas de receta, sitemap.xml, robots.txt y 404.html`);

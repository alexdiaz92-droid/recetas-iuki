// DATOS GENERALES DE LA WEB DE IUKI
// Marca, redes, menú y qué páginas existen ya.

export const SITIO = 'https://cocinaiuki.com';

// Marca para Google y las IA: se ve «.IUKI», pero se llama «IUKI»
export const MARCA = {
  nombre: 'IUKI',
  lema: 'Gastronomía desde Euskadi',
  frase: 'Siempre easy',
  correo: 'cocina.iuki@bushidotalent.com',
  logo: '/logo-iuki.png'
};

export const REDES = {
  instagram: { nombre: 'Instagram', usuario: '@cocina.iuki', url: 'https://www.instagram.com/cocina.iuki/' },
  tiktok: { nombre: 'TikTok', usuario: '@cocina.iuki', url: 'https://www.tiktok.com/@cocina.iuki' },
  youtube: { nombre: 'YouTube', usuario: '@cocinaIUKI', url: 'https://www.youtube.com/@cocinaIUKI' }
};

// Seguidores de Instagram para la franja «Casi 20.000 personas…».
// De momento se cambia a mano; más adelante saldrá sola de Instagram.
export const SEGUIDORES = { numero: 19884, fecha: '2026-11-26' };

// Páginas que todavía no existen: mientras estén en null, el menú lleva al
// bloque de la portada que corresponde, o el enlace no se enseña.
// Cuando una página esté lista, se pone aquí su dirección.
export const PAGINAS = {
  restaurantes: null,     // '/restaurantes/' (mapa de Bizkaia)
  series: null,           // '/series/'
  quienEs: null,          // '/quien-es-iuki/'
  colaboraciones: null,   // '/colaboraciones/'
  imprescindibles: null,  // '/imprescindibles/'  (no sale en el menú hasta que tenga contenido)
  siempreEasy: null,      // '/siempre-easy/'     (no sale en el menú hasta que tenga contenido)
  avisoLegal: null,       // '/aviso-legal/'
  privacidad: null        // '/privacidad/'
};

// Newsletter: mientras no esté activa, el formulario se ve pero no envía nada
export const NEWSLETTER = { activa: false, regalo: 'mi guía de tuppers para comer toda la semana cocinando una vez' };

export const CATEGORIAS = [
  { id: 'entrantes', nombre: 'Entrantes' },
  { id: 'pasta', nombre: 'Pasta y arroz' },
  { id: 'principales', nombre: 'Principales' },
  { id: 'cuchara', nombre: 'De cuchara' },
  { id: 'postres', nombre: 'Postres' }
];

export const nombreCategoria = (id) => (CATEGORIAS.find((c) => c.id === id) || {}).nombre || '';

export const urlCategoria = (id) => `/recetas/?categoria=${id}`;

// Menú principal (Recetas ▾ · Restaurantes · Series · Imprescindibles · Siempre easy · ¿Quién es IUKI?)
export const MENU = [
  { nombre: 'Recetas', url: '/recetas/', submenu: [{ nombre: 'Todas las recetas', url: '/recetas/' }, ...CATEGORIAS.map((c) => ({ nombre: c.nombre, url: urlCategoria(c.id) }))] },
  { nombre: 'Restaurantes', url: PAGINAS.restaurantes || '/#restaurantes' },
  { nombre: 'Series', url: PAGINAS.series || '/#series' },
  PAGINAS.imprescindibles && { nombre: 'Imprescindibles', url: PAGINAS.imprescindibles },
  PAGINAS.siempreEasy && { nombre: 'Siempre easy', url: PAGINAS.siempreEasy },
  { nombre: '¿Quién es IUKI?', url: PAGINAS.quienEs || '/#kaixo' }
].filter(Boolean);

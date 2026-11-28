// Genera la web completa en la carpeta dist/.
// Cloudflare Pages lo ejecuta en cada publicación (comando: node build.mjs).
// Antes, Cloudflare instala los paquetes de package.json (Astro y las letras).
//
// Para probarlo en local: npm install y después node build.mjs
//
// Dónde está cada cosa:
//  - recetas.js ................ las recetas (el único archivo que hay que tocar para añadir platos)
//  - public/ y public/img/ ..... las fotos (salen en la web con la misma dirección: /foto.jpg o /img/foto.jpg)
//  - src/estilos/tema.css ...... colores, letras y tamaños, todo en un único sitio
//  - src/datos/ ................ marca, menú, restaurantes y series
//  - src/pages/ ................ las páginas: portada, recetas, cada receta, 404, sitemap y robots

process.env.ASTRO_TELEMETRY_DISABLED = '1';

const { build } = await import('astro');
await build({ logLevel: 'warn' });

console.log('✓ Web generada en dist/');

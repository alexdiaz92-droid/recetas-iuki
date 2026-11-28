// Mapa del sitio para Google: portada, listado y cada receta
import { RECETAS } from '../datos/recetas.js';
import { SITIO } from '../datos/web.js';

export function GET() {
  const ultima = RECETAS.map((r) => r.fecha).filter(Boolean).sort().pop() || new Date().toISOString().slice(0, 10);
  const urls = [
    `  <url><loc>${SITIO}/</loc><lastmod>${ultima}</lastmod></url>`,
    `  <url><loc>${SITIO}/recetas/</loc><lastmod>${ultima}</lastmod></url>`,
    ...RECETAS.map((r) => `  <url><loc>${SITIO}${r.url}</loc>${r.fecha ? `<lastmod>${r.fecha}</lastmod>` : ''}</url>`)
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

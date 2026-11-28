import { SITIO } from '../datos/web.js';

export function GET() {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${SITIO}/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

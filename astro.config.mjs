// Configuración de Astro para cocinaiuki.com
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cocinaiuki.com',
  // Todas las direcciones acaban en «/», como las de siempre: /recetas/<id>/
  trailingSlash: 'always',
  build: { format: 'directory' },
  outDir: './dist',
  devToolbar: { enabled: false }
});

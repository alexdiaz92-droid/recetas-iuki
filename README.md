# cocinaiuki.com · la web de IUKI

Web de IUKI (@cocina.iuki): recetas, restaurantes y series. Hecha con [Astro](https://astro.build) y publicada en Cloudflare Pages.
Diseño: A.10 (lienzo «IUKI · Propuestas de diseño web»).

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| **Las recetas** | `recetas.js`. Es el único archivo que hay que tocar para añadir platos (las instrucciones están al principio del archivo) |
| Fotos de los platos y fotogramas de los vídeos | `public/` y `public/img/` (en la web salen como `/foto.jpg` o `/img/foto.jpg`) |
| **Colores, letras y tamaños** | `src/estilos/tema.css`, todo en un único sitio |
| Colocación de cada bloque | `src/estilos/web.css` |
| Marca, redes, menú, seguidores y qué páginas existen | `src/datos/web.js` |
| Último capítulo de Lluvia de estrellas y de Vuelo directo | `src/datos/restaurantes.js` |
| Las series de la portada | `src/datos/series.js` |
| Las páginas (portada, recetas, cada receta, 404, sitemap y robots) | `src/pages/` |
| Cabecera, pie, tarjetas y formulario de la newsletter | `src/componentes/` |

## Cómo se publica

Cloudflare Pages (proyecto «recetas-iuki») publica sola la web con cada cambio:

- La rama `main` es la web publicada en https://cocinaiuki.com
- Cada rama de prueba tiene su vista previa en `https://<rama>.recetas-iuki-8zf.pages.dev`
- Configuración de compilación: comando `node build.mjs`, carpeta `dist`. Cloudflare instala antes los paquetes de `package.json` (Astro y las letras) y usa la versión de Node de `.node-version`.

Todo cambio va primero a una rama de prueba y pasa a `main` solo cuando Peio da el sí en la vista previa.

## Añadir una receta nueva

1. Sube la foto del plato y el fotograma del vídeo a `public/img/` (por ejemplo `public/img/lentejas.jpg` y `public/img/lentejas-video.jpg`).
2. En `recetas.js`, copia el bloque de una receta, pégalo al principio de la lista y cambia los datos.
3. Guarda el cambio. Cloudflare genera de nuevo la portada, la página de la receta y el sitemap.

Cada receta tiene su propia dirección: `https://cocinaiuki.com/recetas/<id>/`. **No cambies el `id` de una receta ya publicada**: su dirección cambiaría y se perdería lo que Google ya conoce de ella.

Si algo está mal en `recetas.js` (un id repetido, una categoría que no existe, una coma de más), la publicación se para y Cloudflare dice qué falla; la web publicada sigue como estaba.

## Probar en local

```
npm install
node build.mjs        # genera la web en dist/
npx astro dev         # o verla mientras se edita, en http://localhost:4321
```

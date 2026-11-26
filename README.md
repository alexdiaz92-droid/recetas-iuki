# Las recetas de Iuki

Web sencilla para consultar las recetas que Iuki publica en Instagram (@cocina.iuki).
Está pensada sobre todo para el móvil.

## Qué hay en esta carpeta

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La página |
| `estilos.css` | Colores, tamaños y diseño (blanco, verde oliva y negro) |
| `app.js` | Buscador, categorías y apertura de recetas |
| `recetas.js` | **Las recetas.** Es el único archivo que hay que tocar para añadir platos |
| `img/` y raíz | Fotos del banner, de los platos y fotogramas de los vídeos |
| `build.mjs` | Genera la web en `dist/`: una página por receta (`/recetas/<id>/`), sitemap, robots y 404 |

## Publicarla por primera vez

### 1. Subir los archivos a GitHub

1. Crea una cuenta gratuita en https://github.com
2. Arriba a la derecha pulsa **+** → **New repository**.
3. En *Repository name* escribe `recetas-iuki`. Puede ser *Public* o *Private*. No marques ninguna casilla más y pulsa **Create repository**.
4. En la página que aparece, pulsa el enlace **uploading an existing file**.
5. Descomprime el ZIP en tu ordenador, abre la carpeta `recetas-iuki` y **arrastra todo su contenido** (los archivos y la carpeta `img`) a la ventana del navegador. No arrastres el ZIP ni la carpeta exterior: `index.html` tiene que quedar en la raíz del repositorio.
6. Abajo, pulsa **Commit changes**.

### 2. Publicarla en Cloudflare Pages

1. Crea una cuenta gratuita en https://dash.cloudflare.com
2. En el menú, entra en **Workers y Pages** → **Crear** → pestaña **Pages** → **Conectar a Git**.
3. Autoriza a Cloudflare a ver tu cuenta de GitHub y elige el repositorio `recetas-iuki`.
4. En la configuración de compilación:
   - *Framework preset*: **None** (Ninguno)
   - *Build command*: `node build.mjs`
   - *Build output directory*: `dist`
5. Pulsa **Guardar e implementar**. En un minuto la web estará en una dirección del tipo `https://recetas-iuki.pages.dev`.

Si más adelante queréis un dominio propio (por ejemplo `recetasdeiuki.com`), se añade desde el proyecto en Cloudflare, en **Dominios personalizados**.

## Añadir una receta nueva

1. Sube las dos imágenes a la carpeta `img/` del repositorio (botón **Add file** → **Upload files**):
   - la foto del plato, por ejemplo `img/lentejas.jpg`
   - el fotograma del vídeo, por ejemplo `img/lentejas-video.jpg`
   Mejor en horizontal, unos 720 × 480 píxeles.
2. Abre `recetas.js` en GitHub, pulsa el lápiz para editar, copia el bloque de una receta y cambia los datos. Las instrucciones están al principio del propio archivo.
3. Pulsa **Commit changes**. Cloudflare genera de nuevo la web (portada, página de la receta y sitemap) y la publica sola en un minuto.

Cada receta tiene su propia dirección: `https://cocinaiuki.com/recetas/<id>/`. No cambies el `id` de una receta ya publicada: su dirección cambiaría y se perdería lo que Google ya conoce de ella.

Si os equivocáis con una coma o unas comillas, la web puede quedarse en blanco: basta con corregir el archivo o deshacer el último cambio.

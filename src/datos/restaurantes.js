// RESTAURANTES DE LA PORTADA
// Datos de la hoja «LLUVIA DE ESTRELLAS» (pestaña Restaurantes) y de las fichas de Vuelo directo en Asana.
// Más adelante saldrán solos de la hoja; de momento se actualizan aquí con cada capítulo.
//
// En cada capítulo, si falta un dato, se deja en null y la web no lo enseña
// (por ejemplo, la foto o la nota de IUKI). La nota de IUKI va del 1 al 5, como en los vídeos.

export const LLUVIA_DE_ESTRELLAS = {
  nombre: 'Lluvia de estrellas',
  pueblos: 113,
  frase: 'El restaurante mejor valorado de Google en cada pueblo de Bizkaia. ¿Se merece sus estrellas?',
  capitulos: [
    {
      numero: 1,
      pueblo: 'Sopela',
      restaurante: 'El Parche',
      tipo: 'Hamburguesería',
      google: { nota: 4.8, resenas: 222 },
      notaIuki: null,
      publicado: '2026-11-02',
      video: 'https://www.instagram.com/reel/DfQCgCho6RA/'
    },
    {
      numero: 2,
      pueblo: 'Berango',
      restaurante: 'Bar On Egin Antojitos Mexicanos',
      tipo: 'Mexicano',
      google: { nota: 4.8, resenas: 262 },
      notaIuki: null,
      publicado: '2026-11-09',
      video: 'https://www.instagram.com/reel/DfiGFKwhZWB/'
    },
    {
      numero: 3,
      pueblo: 'Portugalete',
      restaurante: 'La Avenida',
      tipo: 'Hamburguesería y cocina latina',
      google: { nota: 4.8, resenas: 201 },
      notaIuki: 4,
      publicado: '2026-11-16',
      video: 'https://www.instagram.com/reel/Df0RwH4ocYi/'
    },
    {
      numero: 4,
      pueblo: 'Erandio',
      restaurante: 'Trust',
      tipo: 'Hamburguesería',
      google: { nota: 4.9, resenas: 63 },
      notaIuki: 4,       // media de comida, servicio y ambiente, del 1 al 5 (como en los vídeos)
      foto: null,        // por ejemplo '/img/trust.jpg'
      publicado: '2026-11-24',
      video: 'https://www.instagram.com/reel/DgIvOPyICsa/'
    }
  ],
  // El siguiente capítulo, ya grabado pero sin publicar (null si no hay)
  proximo: null
};

export const VUELO_DIRECTO = {
  nombre: 'Vuelo directo',
  frase: 'Cocinas del mundo sin salir de la ciudad.',
  capitulos: [
    {
      numero: 1,
      pais: 'Argentina',
      ciudad: 'Valencia',
      restaurante: 'La Valentina Empanadas Argentinas',
      origen: 'VLC',
      destino: 'EZE',
      publicado: '2026-11-12',
      video: null       // enlace al reel cuando se tenga
    }
  ]
};

/*
  RECETAS DE IUKI
  ----------------
  Para añadir una receta nueva, copia un bloque { ... } entero, pégalo
  al principio de la lista (debajo de "window.RECETAS = [") y cambia los datos.

  - id:            nombre corto sin espacios ni tildes (se usa en la dirección web)
  - nombre:        el nombre que se ve en la tarjeta
  - categoria:     una de estas: "entrantes", "principales", "sopas", "postres"
  - foto:          foto del plato, dentro de la carpeta img/
  - fotograma:     fotograma del vídeo, dentro de la carpeta img/
  - instagram:     enlace a la publicación
  - ingredientes:  lista entre comillas, separada por comas
  - pasos:         lista entre comillas, separada por comas
  - consejo:       opcional; si no hay, déjalo como ""
*/

window.RECETAS = [
  {
    id: "albondigas-a-la-antigua",
    nombre: "Albóndigas a la antigua",
    categoria: "principales",
    foto: "img/albondigas-a-la-antigua.jpg",
    fotograma: "img/albondigas-a-la-antigua-video.jpg",
    instagram: "https://www.instagram.com/p/DOL_fyhDGSy/",
    ingredientes: [
      "500 g de carne picada",
      "2 cebollas",
      "1 calabacín",
      "2 botes de nata",
      "Mostaza a la antigua",
      "Bacon",
      "Caldo de verduras",
      "1 rebanada de pan de molde",
      "Leche",
      "1 huevo",
      "Pan rallado",
      "Salsa de soja",
      "Sal y pimienta"
    ],
    pasos: [
      "Pon la rebanada de pan a remojar en leche y resérvala.",
      "En un bol, junta la carne picada, el pan remojado, el pan rallado, el huevo y la soja. Salpimienta y mezcla bien.",
      "Forma las bolas con las manos y márcalas en la sartén hasta que estén selladas. Retíralas.",
      "En la misma sartén, tuesta el bacon y sácalo.",
      "En la grasa del bacon cocina la cebolla y el calabacín.",
      "Añade la nata y la mostaza y deja unos minutos. Si la salsa queda muy espesa, rebájala con un poco de caldo.",
      "Vuelve a poner las albóndigas y dales un hervor rápido."
    ],
    consejo: "déjalas de un día para otro, el plato mejora mucho."
  }
];

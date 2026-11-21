/*
  RECETAS DE IUKI
  ----------------
  Para añadir una receta nueva, copia un bloque { ... } entero, pégalo
  al principio de la lista (justo después del primer corchete) y cambia los datos.

  - id:            nombre corto sin espacios ni tildes (se usa en la dirección web)
  - nombre:        el nombre que se ve en la tarjeta
  - categoria:     una de estas: "entrantes", "pasta", "principales", "cuchara", "postres"
  - fecha:         día en que se publicó el vídeo (año-mes-día)
  - foto:          opcional; foto del plato, dentro de la carpeta img/
  - fotograma:     opcional; fotograma del vídeo, dentro de la carpeta img/
  - instagram:     opcional; enlace a la publicación
  - ingredientes:  lista entre comillas, separada por comas.
                   Una línea que acaba en ":" sirve de subtítulo (p. ej. "Para el caramelo:")
  - pasos:         lista entre comillas; si está vacía [], la web indica que los pasos están en el vídeo
  - pasosDelVideo: true si los pasos se han sacado de lo que Iuki cuenta en el vídeo
  - consejo:       opcional; si no hay, déjalo como ""
*/

window.RECETAS = [
  {
    "id": "pasta-cremosa-con-crujiente-de-jamon",
    "nombre": "Pasta cremosa con crujiente de jamón",
    "categoria": "pasta",
    "fecha": "2026-11-03",
    "foto": "pasta-cremosa-con-crujiente-de-jamon.jpg",
    "fotograma": "pasta-cremosa-con-crujiente-de-jamon-video.jpg",
    "instagram": "https://www.instagram.com/p/DfSp2hxII3v/",
    "ingredientes": [
      "Espaguetis",
      "Para el crujiente:",
      "Taquitos de jamón (o chorizo)",
      "Aceite de oliva",
      "Media cucharadita de café de pimentón dulce",
      "2 cucharaditas de café de panko",
      "Para la salsa:",
      "Coliflor cocida",
      "Leche",
      "Agua de cocción (la misma cantidad que de leche)",
      "Grana Padano rallado"
    ],
    "pasos": [
      "En vuestra sartén de confianza, cocinamos los taquitos de jamón. Lo ideal sería chorizo, pero no tenía, y el jamón va bien también. Añadimos un buen chorro de aceite (luego ahí tostamos el panko), el pimentón y el panko, y removemos bien. Importante: fuego suave, para que no se queme el pimentón. Cuando esté crujiente, lo retiramos a un plato.",
      "Para la salsa, trituramos la coliflor cocida con la leche y la misma cantidad de agua de cocción. Tiene que quedar cremosa, pero no demasiado densa: si os queda muy espesa, añadid un poco más de leche o de agua.",
      "Mientras se cuecen los espaguetis (el tiempo que indique el paquete), ponemos la crema de coliflor en la sartén de antes. No hace falta echarla toda, con la mitad es suficiente. Añadimos Grana Padano a ojo, lo que queráis.",
      "Pasamos los espaguetis a la salsa caliente y removemos bien. Si veis que se seca, un poquito del agua de cocción de la pasta y volvemos a remover.",
      "Emplatamos, un poco más de salsa por encima y, para terminar, el crujiente, que es lo que le da el toque. A disfrutar."
    ],
    "consejo": ""
  },
  {
    "id": "garbanzos-a-la-crema",
    "nombre": "Garbanzos a la crema",
    "categoria": "cuchara",
    "fecha": "2026-10-21",
    "foto": "garbanzos-a-la-crema.jpg",
    "fotograma": "garbanzos-a-la-crema-video.jpg",
    "instagram": "https://www.instagram.com/p/DexEtm4I5dD/",
    "ingredientes": [
      "1 puerro",
      "1 cebolla",
      "Bote de garbanzos",
      "Taquitos de jamón",
      "Crema de cacahuete (o similar)",
      "Tomate concentrado",
      "Leche (opcional)"
    ],
    "pasos": [
      "Picamos la cebolla y el puerro y los cocinamos a fuego medio con un poco de aceite hasta que estén bien pochados. No hace falta que el corte sea perfecto, que esto va de cocinar rico y sin complicarnos la vida.",
      "Añadimos los taquitos de jamón y dejamos que se doren un poquito. Después, echamos un poco de tomate concentrado y removemos bien.",
      "Incorporamos los garbanzos. Yo los echo directamente con el líquido del bote, pero si lo preferís, podéis escurrirlos y pasarlos por agua antes.",
      "Añadimos una cucharada sopera de crema de cacahuete (o similar), removemos bien y echamos la misma cantidad de agua. Dejamos que espese un poquito y ya casi lo tenemos.",
      "Si queréis, podéis añadir un toque de leche para terminar, aunque es totalmente opcional. Emplatamos y a disfrutar."
    ],
    "consejo": ""
  },
  {
    "id": "marmitako-de-salmon",
    "nombre": "Marmitako de salmón",
    "categoria": "cuchara",
    "fecha": "2026-08-10",
    "foto": "marmitako-de-salmon.jpg",
    "fotograma": "marmitako-de-salmon-video.jpg",
    "instagram": "https://www.instagram.com/p/Db3uGfiscBQ/",
    "ingredientes": [
      "2 pimientos verdes",
      "2 pimientos rojos",
      "4 cebollas",
      "6 patatas",
      "4 rodajas de salmón",
      "1/2 bote de tomate frito",
      "3 cucharadas de carne de pimiento choricero",
      "2 L de caldo de pescado"
    ],
    "pasos": [
      "Troceamos la cebolla y la cocinamos en una olla grande.",
      "Mientras tanto, cortamos los pimientos rojos y verdes. Cuando la cebolla esté transparente, los añadimos a la olla. Os recomiendo taparla para que la verdura se cocine mejor y más rápido.",
      "Las patatas las chascamos, no las cortamos limpias, para que al cocinarse suelten el almidón y el caldo coja cuerpo.",
      "Aprovechamos también para limpiar el salmón. Si queréis hacerlo más fácil, podéis pedir en la pescadería cortes que vengan ya sin piel y sin espinas.",
      "Cuando la verdura esté bien pochada, añadimos el tomate frito, la carne de pimiento choricero y las patatas. Removemos todo bien y añadimos los caldos.",
      "Tapamos y dejamos que hierva hasta que la patata esté tierna. Hasta aquí podéis dejarlo hecho con antelación y terminarlo justo antes de comer.",
      "Cuando vayamos a servir, le damos un último hervor. Si queréis que el caldo quede más espeso, sacáis unas pocas patatas, las rompéis con un tenedor y las devolvéis a la olla. Si ya está espesito, no hace falta.",
      "Apagamos el fuego, echamos el salmón y servimos. Confiad: se cocina en un momento con el calor del propio guiso. Si lo dejáis demasiado, se acaba secando.",
      "Cazuela al centro, colegas alrededor y a disfrutar."
    ],
    "consejo": ""
  },
  {
    "id": "perritos-calientes-completos",
    "nombre": "Perritos calientes completos",
    "categoria": "principales",
    "fecha": "2026-08-07",
    "foto": "perritos-calientes-completos.jpg",
    "fotograma": "perritos-calientes-completos-video.jpg",
    "instagram": "https://www.instagram.com/p/DbwEFUFsWNM/",
    "ingredientes": [
      "Pan",
      "Salchichas",
      "Pepinillos",
      "Bacon",
      "Queso",
      "Cebolla",
      "Mayonesa",
      "Mostaza",
      "Ketchup"
    ],
    "pasos": [],
    "consejo": ""
  },
  {
    "id": "tarta-de-queso-con-roquefort",
    "nombre": "Tarta de queso con roquefort",
    "categoria": "postres",
    "fecha": "2026-07-30",
    "foto": "tarta-de-queso-con-roquefort.jpg",
    "fotograma": "tarta-de-queso-con-roquefort-video.jpg",
    "instagram": "https://www.instagram.com/p/DbbWk8eMiYO/",
    "ingredientes": [
      "900 g de queso crema",
      "100 g de queso roquefort",
      "600 ml de nata para montar",
      "6 huevos",
      "1 yema",
      "165 g de azúcar",
      "50 g de maizena",
      "6 g de sal"
    ],
    "pasos": [
      "Mezclamos todos los ingredientes excepto el queso crema.",
      "Ablandamos el queso crema en el microondas en tandas de 30 segundos y lo añadimos a la mezcla.",
      "Batimos sin sacar el cabezal de la batidora para evitar burbujas.",
      "Dejamos reposar unos minutos en la nevera.",
      "Forramos el molde con papel de horno y aluminio, vertemos la mezcla y quitamos las burbujas con un palillo.",
      "Horneamos 30 min a 220 ºC y después 15 min a 150 ºC.",
      "Si os gusta más tostada, dadle un toque de grill.",
      "Dejamos enfriar y reposar toda la noche en la nevera antes de desmoldar."
    ],
    "consejo": ""
  },
  {
    "id": "arroz-a-la-cerveza-con-pollo",
    "nombre": "Arroz a la cerveza con pollo",
    "categoria": "pasta",
    "fecha": "2026-07-21",
    "foto": "arroz-a-la-cerveza-con-pollo.jpg",
    "fotograma": "arroz-a-la-cerveza-con-pollo-video.jpg",
    "instagram": "https://www.instagram.com/p/DbEQRjDNRwg/",
    "ingredientes": [
      "1 bandeja de muslos de pollo",
      "2 cebollas",
      "1 calabacín",
      "2 zanahorias",
      "1 cuchara de café de ras el hanout",
      "1 cucharada sopera de curry",
      "1 cerveza",
      "3 vasos de agua",
      "1 vaso de arroz",
      "Limón"
    ],
    "pasos": [
      "Salpimentamos los muslos de pollo y los sellamos en la cazuela. Cuando estén bien doraditos, los reservamos.",
      "Troceamos las cebollas y las cocinamos aprovechando todo el sabor que ha quedado en el fondo de la cazuela.",
      "Cuando estén transparentes, añadimos el calabacín y la zanahoria.",
      "Cuando las verduras estén bien pochadas, incorporamos el ras el hanout y el curry.",
      "Devolvemos el pollo a la cazuela.",
      "Añadimos la cerveza y los 3 vasos de agua. Cuando rompa a hervir, tapamos y cocinamos unos 10 minutos.",
      "Incorporamos el arroz y cocinamos hasta que esté en su punto, removiendo de vez en cuando.",
      "Terminamos con un chorrito de limón y decoramos con unas rodajas."
    ],
    "consejo": ""
  },
  {
    "id": "bocadillo-txosnero",
    "nombre": "Bocadillo txosnero",
    "categoria": "principales",
    "fecha": "2026-07-16",
    "foto": "bocadillo-txosnero.jpg",
    "fotograma": "bocadillo-txosnero-video.jpg",
    "instagram": "https://www.instagram.com/p/Da3XDfQMt9T/",
    "ingredientes": [
      "Lomo",
      "Bacon",
      "Queso",
      "Un buen pan"
    ],
    "pasos": [],
    "consejo": ""
  },
  {
    "id": "tiramisu",
    "nombre": "Tiramisú",
    "categoria": "postres",
    "fecha": "2026-07-05",
    "foto": "tiramisu.jpg",
    "fotograma": "tiramisu-video.jpg",
    "instagram": "https://www.instagram.com/p/DabEcR_sgo6/",
    "ingredientes": [
      "10 huevos",
      "1 kg de queso mascarpone",
      "160 g de azúcar",
      "Café",
      "Bizcochos de soletilla",
      "Una pizca de sal",
      "Cacao en polvo"
    ],
    "pasos": [
      "Empezamos preparando el café para que se vaya enfriando.",
      "Separamos las claras de las yemas.",
      "Montamos las claras a punto de nieve con parte del azúcar y una pizca de sal. Reservamos.",
      "En otro bol, mezclamos las yemas con el resto del azúcar hasta que blanqueen.",
      "Añadimos el mascarpone y mezclamos bien durante unos minutos hasta conseguir una crema suave.",
      "Para estos pasos os recomiendo utilizar batidora eléctrica, os facilitará mucho el trabajo.",
      "Incorporamos las claras montadas en dos tandas, con movimientos envolventes y mejor de forma manual.",
      "Cuando tengamos la crema lista, empezamos el montaje: capa de crema, capa de bizcochos mojados en café, capa de crema, capa de bizcochos y última capa de crema.",
      "Es importante mojar los bizcochos lo justo. Si los dejáis poco tiempo, quedarán secos; y si os pasáis, se pueden romper al montar el tiramisú. Término medio. Lo probáis y enseguida vais a ver cuál es el punto.",
      "Yo sería generoso con la crema, que al final es la gracia del postre.",
      "Lo alisamos, lo tapamos y lo dejamos reposar en la nevera. Lo ideal sería unas 8-12 horas.",
      "Antes de servir, añadimos cacao en polvo por encima y a disfrutar."
    ],
    "consejo": ""
  },
  {
    "id": "arroz-con-leche",
    "nombre": "Arroz con leche",
    "categoria": "postres",
    "fecha": "2026-06-29",
    "foto": "arroz-con-leche.jpg",
    "fotograma": "arroz-con-leche-video.jpg",
    "instagram": "https://www.instagram.com/p/DaLl3hkMDAD/",
    "ingredientes": [
      "1 L de leche entera",
      "100 g de arroz",
      "75 g de azúcar",
      "Piel de naranja",
      "Piel de limón",
      "Canela en rama",
      "Canela en polvo"
    ],
    "pasos": [
      "En una cazuela, ponemos la leche fría, el arroz, la canela en rama y las pieles de naranja y limón.",
      "Cocinamos a fuego medio durante unos 35 minutos, removiendo a menudo para que quede bien cremoso.",
      "Pasado ese tiempo, retiramos las pieles y la canela en rama.",
      "Añadimos el azúcar y damos un último hervor suave de 3-5 minutos.",
      "Servimos en recipientes individuales y, cuando temple un poco, lo metemos en la nevera.",
      "Si habéis hecho mucha cantidad, también podéis congelarlo en raciones.",
      "Al servir, añadid canela en polvo por encima."
    ],
    "consejo": "La leche tiene que estar fría desde el principio. Mejor usar leche entera y, si puede ser, leche fresca. Cuanto más remováis, mejor. Como mínimo, cada 3-4 minutos hay que darle un buen revolcón. Si lo congeláis, hacedlo en raciones individuales. Después, dejadlo descongelar en la nevera y removed un poco antes de comer. La canela en rama se puede reutilizar. Cuando la retiréis, limpiadla bien, secadla y congeladla envuelta en papel film. Si sigue teniendo aroma, os puede servir 2-3 veces más."
  },
  {
    "id": "pasta-con-tomate-y-chorizo",
    "nombre": "Pasta con tomate y chorizo",
    "categoria": "pasta",
    "fecha": "2026-06-18",
    "foto": "pasta-con-tomate-y-chorizo.jpg",
    "fotograma": "pasta-con-tomate-y-chorizo-video.jpg",
    "instagram": "https://www.instagram.com/p/DZvIYsbM3ID/",
    "ingredientes": [
      "Chorizo",
      "Tomate concentrado",
      "Leche",
      "Salsa de tomate",
      "Pasta",
      "Orégano",
      "Queso rallado"
    ],
    "pasos": [
      "Cocinamos el chorizo en un cazo a fuego suave, para que vaya soltando la grasita poco a poco.",
      "Añadimos el tomate concentrado y removemos bien para que se integre con el chorizo.",
      "Echamos un poco de leche hasta conseguir una base densa y cremosa.",
      "Añadimos la salsa de tomate, un poco de orégano y dejamos que se cocine todo a fuego suave mientras preparamos la pasta.",
      "Cocemos la pasta y reservamos un poco del agua de cocción antes de escurrirla.",
      "Mezclamos la pasta con la salsa, añadimos el queso rallado y, si hace falta, un poco del agua de cocción para que quede más cremosa.",
      "Mezclamos todo bien y servimos."
    ],
    "consejo": ""
  },
  {
    "id": "poke-de-salmon-mango-y-aguacate",
    "nombre": "Poke de salmón, mango y aguacate",
    "categoria": "principales",
    "fecha": "2026-06-16",
    "foto": "poke-de-salmon-mango-y-aguacate.jpg",
    "fotograma": "poke-de-salmon-mango-y-aguacate-video.jpg",
    "instagram": "https://www.instagram.com/p/DZqFJwIs_cE/",
    "ingredientes": [
      "Arroz jazmín",
      "Salmón",
      "Mango",
      "Aguacate",
      "Queso crema",
      "Soja"
    ],
    "pasos": [
      "Preparamos el arroz. Lo ideal sería dejarlo enfriar, pero eran las 3 de la mañana y ya era hora de cenar.",
      "Troceamos el salmón y lo dejamos con soja unos 30 minutos para que coja sabor.",
      "Cortamos el mango y el aguacate.",
      "Emplatamos todo lo más bonito posible, sin volvernos locos.",
      "Podéis hacer unas bolitas de queso crema con la ayuda de dos cucharas.",
      "Terminamos con un toque de soja por encima."
    ],
    "consejo": ""
  },
  {
    "id": "huevos-rotos-con-pisto-y-morcilla",
    "nombre": "Huevos rotos con pisto y morcilla",
    "categoria": "principales",
    "fecha": "2026-06-12",
    "foto": "huevos-rotos-con-pisto-y-morcilla.jpg",
    "fotograma": "huevos-rotos-con-pisto-y-morcilla-video.jpg",
    "instagram": "https://www.instagram.com/p/DZfI1WpMegh/",
    "ingredientes": [
      "Bote de pisto",
      "Patatas",
      "Huevos",
      "Morcilla"
    ],
    "pasos": [],
    "consejo": ""
  },
  {
    "id": "bocadillo-de-pollo-pesto-y-tomate",
    "nombre": "Bocadillo de pollo, pesto y tomate",
    "categoria": "principales",
    "fecha": "2026-06-10",
    "foto": "bocadillo-de-pollo-pesto-y-tomate.jpg",
    "fotograma": "bocadillo-de-pollo-pesto-y-tomate-video.jpg",
    "instagram": "https://www.instagram.com/p/DZam6RFsSfH/",
    "ingredientes": [
      "Pan crujiente",
      "Pesto",
      "Tomate",
      "Pollo asado 98% de pollo",
      "Queso (el que más os guste)"
    ],
    "pasos": [],
    "consejo": ""
  },
  {
    "id": "risotto-de-setas",
    "nombre": "Risotto de setas",
    "categoria": "pasta",
    "fecha": "2026-06-08",
    "foto": "risotto-de-setas.jpg",
    "fotograma": "risotto-de-setas-video.jpg",
    "instagram": "https://www.instagram.com/p/DZVcP0jMpPB/",
    "ingredientes": [
      "2 cebollas",
      "Setas ostra",
      "Setas shitake",
      "400gr arroz",
      "Vino blanco",
      "1,2L caldo de verduras",
      "Mantequilla",
      "Grana padano",
      "Perejil"
    ],
    "pasos": [
      "Picamos bien la cebolla y la cocinamos a fuego medio con un poco de aceite hasta que quede bien pochada.",
      "Añadimos las setas y dejamos que suelten todo el agua.",
      "Cuando esté todo bien cocinado, echamos el arroz y lo nacaramos un par de minutos, removiendo bien para que coja todo el sabor.",
      "Añadimos un chorrito de vino blanco y dejamos que evapore el alcohol.",
      "Ahora toca tener un poco de paciencia: vamos añadiendo el caldo caliente poco a poco, sin dejar que el arroz se quede seco y removiendo de vez en cuando.",
      "Cuando el arroz esté en su punto, apagamos el fuego y añadimos mantequilla, el parmesano y el perejil.",
      "Removemos bien hasta que quede cremoso, dejamos reposar un minutito y ya lo tenemos.",
      "Solo queda servir y disfrutar."
    ],
    "consejo": ""
  },
  {
    "id": "pimientos-rojos-en-salsa-cremosa",
    "nombre": "Pimientos rojos en salsa cremosa",
    "categoria": "entrantes",
    "fecha": "2026-06-01",
    "foto": "pimientos-rojos-en-salsa-cremosa.jpg",
    "fotograma": "pimientos-rojos-en-salsa-cremosa-video.jpg",
    "instagram": "https://www.instagram.com/p/DZDaKrYsbjX/",
    "ingredientes": [
      "Pimientos rojos",
      "Leche entera",
      "Soja (opcional)"
    ],
    "pasos": [
      "Escurrimos los pimientos, pero reservamos el líquido del bote porque lo vamos a utilizar después.",
      "Cortamos los pimientos en tiras.",
      "Los cocinamos en una sartén con un chorrito de aceite, a fuego alto, hasta que queden bien pochaditos y con sabor.",
      "Cuando estén bien cocinados, añadimos el líquido de los pimientos y dejamos que reduzca unos minutos.",
      "Añadimos medio bote de agua y dejamos que se cocine todo bien, para que los pimientos se acaben de ablandar.",
      "En este punto añadimos sal o, si preferís, un toque de soja. A mí me gusta mucho el puntito que le da.",
      "Para acabar, echamos un chorrito de leche entera, mezclamos bien y dejamos que se integre todo hasta conseguir una salsita cremosa."
    ],
    "consejo": ""
  },
  {
    "id": "noquis-con-setas",
    "nombre": "Ñoquis con setas",
    "categoria": "pasta",
    "fecha": "2026-05-24",
    "foto": "noquis-con-setas.jpg",
    "fotograma": "noquis-con-setas-video.jpg",
    "instagram": "https://www.instagram.com/p/DYu1fUts0iQ/",
    "ingredientes": [
      "Ñoquis",
      "Cebolla",
      "Champiñones",
      "Shitake",
      "Tomate concentrado",
      "200ml nata para cocinar",
      "200 ml leche entera",
      "Grana Padano"
    ],
    "pasos": [
      "Empezamos tostando los ñoquis en una sartén con un poco de aceite. Cuando estén doraditos, los retiramos y reservamos.",
      "En esa misma sartén cocinamos la cebolla a fuego medio hasta que quede bien pochada.",
      "Añadimos las setas y dejamos que suelten todo el agua, para que queden bien cocinadas y con sabor.",
      "Cuando la cebolla y las setas estén bien cocinadas, añadimos el tomate concentrado y removemos bien para que se integre y se cocine un poco.",
      "Cuando esté todo bien integrado, echamos la nata y la leche entera, y dejamos que hierva un minutito.",
      "Devolvemos los ñoquis a la sartén y mezclamos bien para que queden bien impregnados de la salsa.",
      "Servimos, añadimos el queso y a disfrutar."
    ],
    "consejo": ""
  },
  {
    "id": "pasta-con-chistorra-y-nata",
    "nombre": "Pasta con chistorra y nata",
    "categoria": "pasta",
    "fecha": "2026-05-18",
    "foto": "pasta-con-chistorra-y-nata.jpg",
    "fotograma": "pasta-con-chistorra-y-nata-video.jpg",
    "instagram": "https://www.instagram.com/p/DYfYPcJsGg0/",
    "ingredientes": [
      "Media chistorra",
      "2 Cebollas",
      "Pasta",
      "1 bote de nata",
      "Grana padano al gusto",
      "Pimentón"
    ],
    "pasos": [
      "Cocinamos la chistorra en una sartén para que suelte toda la grasita y nos deje una buena base de sabor.",
      "Retiramos la chistorra y, en ese mismo fondo, cocinamos la cebolla a fuego medio hasta que quede bien pochada.",
      "Cuando la cebolla esté bien cocinada, volvemos a añadir la chistorra, echamos un poco de pimentón y removemos bien para que se integre todo.",
      "Añadimos la nata y dejamos que se cocine un par de minutos, hasta que la salsa empiece a coger cuerpo.",
      "Incorporamos la pasta y, si hace falta, añadimos un poco de agua de cocción para que quede más cremosa.",
      "Echamos el grana padano, removemos bien hasta que se funda y servimos."
    ],
    "consejo": "Para los amantes del picante, podéis utilizar chistorra picante, pimentón picante o ambas."
  },
  {
    "id": "pinsa-de-calabaza-y-guanciale",
    "nombre": "Pinsa de calabaza y guanciale",
    "categoria": "principales",
    "fecha": "2026-05-15",
    "foto": "pinsa-de-calabaza-y-guanciale.jpg",
    "fotograma": "pinsa-de-calabaza-y-guanciale-video.jpg",
    "instagram": "https://www.instagram.com/p/DYXpeGUMR-V/",
    "ingredientes": [
      "Pinsa",
      "Crema de calabaza",
      "Guanciale",
      "Queso mozzarella",
      "Burrata"
    ],
    "pasos": [],
    "consejo": ""
  },
  {
    "id": "noquis-con-salsa-de-pimientos-y-pollo",
    "nombre": "Ñoquis con salsa de pimientos y pollo",
    "categoria": "pasta",
    "fecha": "2026-05-10",
    "foto": "noquis-con-salsa-de-pimientos-y-pollo.jpg",
    "fotograma": "noquis-con-salsa-de-pimientos-y-pollo-video.jpg",
    "instagram": "https://www.instagram.com/p/DYK3m7OMtnL/",
    "ingredientes": [
      "Paquete de ñoquis",
      "Cebolla",
      "Lata de pimientos rojos",
      "Lata de tomate triturado",
      "Leche",
      "Orégano",
      "Queso",
      "Pollo"
    ],
    "pasos": [
      "Hacemos la salsa: cocinamos bien la cebolla y los pimientos para que cojan sabor, y añadimos el resto de ingredientes de la salsa.",
      "Doramos los ñoquis: se pueden hacer en la freidora de aire sin aceite, aunque quedan mejor directamente en la sartén.",
      "Si queréis una cena más contundente, añadid pechuga de pollo en taquitos.",
      "Mezclamos todo bien, ponemos el queso por encima y listo. Si lo gratináis, mejor todavía."
    ],
    "pasosDelVideo": true,
    "consejo": ""
  },
  {
    "id": "roll-de-hojaldre-y-carne",
    "nombre": "Roll de hojaldre y carne",
    "categoria": "entrantes",
    "fecha": "2026-05-03",
    "foto": "roll-de-hojaldre-y-carne.jpg",
    "fotograma": "roll-de-hojaldre-y-carne-video.jpg",
    "instagram": "https://www.instagram.com/p/DX4tl6Vs_bq/",
    "ingredientes": [
      "1 lámina de hojaldre",
      "Carne picada",
      "Pimienta negra",
      "Cebolla caramelizada",
      "Mozzarella",
      "1 yema de huevo",
      "Un poco de leche",
      "Sésamo"
    ],
    "pasos": [
      "Rellenamos bien el hojaldre con la carne picada, la cebolla caramelizada y la mozzarella.",
      "Lo enrollamos.",
      "Lo pintamos con la yema y un poco de leche y añadimos sésamo.",
      "Horneamos hasta que quede bien doradito."
    ],
    "consejo": ""
  },
  {
    "id": "pastel-de-pollo-con-hojaldre",
    "nombre": "Pastel de pollo con hojaldre",
    "categoria": "principales",
    "fecha": "2026-04-29",
    "foto": "pastel-de-pollo-con-hojaldre.jpg",
    "fotograma": "pastel-de-pollo-con-hojaldre-video.jpg",
    "instagram": "https://www.instagram.com/p/DXunkDSjErT/",
    "ingredientes": [
      "2 cebollas",
      "2 puerros",
      "1 pollo asado",
      "200 g de bacon",
      "1 diente de ajo",
      "1 cucharada de mostaza a la antigua",
      "200 ml de nata para cocinar",
      "Un chorrito de agua",
      "1 lámina de hojaldre",
      "1 yema de huevo",
      "Un poco de leche"
    ],
    "pasos": [
      "Troceamos la cebolla y el puerro y lo cocinamos hasta que esté bien pochado.",
      "Para esta receta necesitamos un pollo asado. Lo podéis comprar hecho o hacerlo en casa. Lo desmenuzamos bien y le quitamos todos los huesos. Yo lo he comprado hecho para que sea mucho más rápido.",
      "Cuando las verduras estén bien cocinadas, añadimos el bacon y lo cocinamos a fuego suave para que suelte toda la grasita. Rallamos un diente de ajo y removemos.",
      "Ponemos el horno a precalentar a 200 ºC.",
      "Echamos el pollo a la sartén, añadimos una buena cucharada de mostaza a la antigua y mezclamos bien.",
      "Añadimos la nata para cocinar, un chorrito de agua y le damos un hervor suave durante 5-10 minutos.",
      "Pasamos toda la mezcla a un recipiente apto para horno y lo cubrimos con el hojaldre. Los bordes los podéis decorar como más os guste. Aquí entra en juego la mano de cada persona",
      "Importante: pinchamos el hojaldre con la punta de un cuchillo para que no reviente la masa.",
      "Lo pintamos con yema y un poco de leche, y lo horneamos.",
      "Cuando el hojaldre esté bien tostado, lo sacamos del horno.",
      "Dejamos reposar unos minutos y servimos."
    ],
    "consejo": "Es una receta perfecta para aprovechar sobras de pollo asado."
  },
  {
    "id": "fideua-de-pollo-y-piquillos",
    "nombre": "Fideuá de pollo y piquillos",
    "categoria": "pasta",
    "fecha": "2026-04-27",
    "foto": "fideua-de-pollo-y-piquillos.jpg",
    "fotograma": "fideua-de-pollo-y-piquillos-video.jpg",
    "instagram": "https://www.instagram.com/p/DXpVXzns2H0/",
    "ingredientes": [
      "1kilo de fideuá",
      "3 pechugas de pollo",
      "Verduras (yo utilicé el sofrito congelado)",
      "1 bote de pimientos del piquillo",
      "2 cucharadas grandes de cúrcuma",
      "Chipotle al gusto (yo eché un par de cucharaditas de café y quedó picantón)",
      "800 g de tomate triturado",
      "1 L de caldo de pollo",
      "1,6 L de agua",
      "1 vaso grande de leche entera",
      "1 cucharada de miel",
      "Perejil"
    ],
    "pasos": [
      "En una cazuela grande sellamos los taquitos de pollo y reservamos.",
      "En ese mismo fondo cocinamos las verduras y los pimientos del piquillo. Cuando esté todo bien pochado, añadimos la cúrcuma y el chipotle.",
      "Se formará una pasta densa, eso es buena señal.",
      "Añadimos el tomate triturado y dejamos reducir. Cuando haya espesado, volvemos a echar el pollo.",
      "Incorporamos los fideos, removemos bien y añadimos el caldo de pollo y 1,6 L de agua.",
      "Cuando prácticamente haya absorbido todo el líquido, añadimos un vaso grande de leche entera y le damos un último hervor.",
      "Con el fuego apagado, echamos una cucharada de miel y decoramos con perejil.",
      "Dejamos reposar unos minutos y servimos."
    ],
    "consejo": ""
  },
  {
    "id": "pasta-a-la-amatriciana",
    "nombre": "Pasta a la amatriciana",
    "categoria": "pasta",
    "fecha": "2026-04-19",
    "foto": "pasta-a-la-amatriciana.jpg",
    "fotograma": "pasta-a-la-amatriciana-video.jpg",
    "instagram": "https://www.instagram.com/p/DXUyeTdMYl1/",
    "ingredientes": [
      "Pasta (la que más os guste)",
      "1 cebolla",
      "Tomate entero",
      "Pecorino o similar",
      "Guanciale",
      "Orégano"
    ],
    "pasos": [],
    "consejo": ""
  },
  {
    "id": "lentejas-de-la-abuela",
    "nombre": "Lentejas de la abuela",
    "categoria": "cuchara",
    "fecha": "2026-01-07",
    "foto": "lentejas-de-la-abuela.jpg",
    "fotograma": "lentejas-de-la-abuela-video.jpg",
    "instagram": "https://www.instagram.com/p/DTOLZtmDJlo/",
    "ingredientes": [
      "1 kg de lentejas",
      "4 litros de caldo (2 de caldo de pollo + 2 de agua)",
      "2 cebollas",
      "1 pimiento rojo",
      "4 zanahorias",
      "2 patatas",
      "5 trozos de panceta",
      "2 chorizos",
      "3 hojas de laurel",
      "1 cucharadita de tomate concentrado",
      "1 cucharadita de pimentón dulce o picante",
      "1 cucharadita de comino"
    ],
    "pasos": [
      "Troceamos las verduras y pelamos y troceamos las patatas (esto ayuda a que luego espese el caldo).",
      "En la olla doramos la panceta y la retiramos.",
      "En ese mismo fondo cocinamos la cebolla, el pimiento y la zanahoria con un poco de sal. Añadimos los chorizos y dejamos 10 minutos desde que empiece a hervir.",
      "Añadimos el pimentón, el comino y el tomate concentrado y dejamos que se mezcle todo un par de minutos.",
      "Reservamos parte de las verduras. Añadimos las lentejas, el laurel, el caldo de pollo, las patatas y el agua, y volvemos a meter la panceta.",
      "Tapamos y, cuando suba el pitorro, cocinamos 15 minutos.",
      "Abrimos la olla con muchísimo cuidado y retiramos la panceta. Trituramos las verduras reservadas con un poco del caldo y lo añadimos a las lentejas para que queden cremosas.",
      "Volvemos a meter la panceta y el chorizo y damos un hervor suave de 5 minutos."
    ],
    "pasosDelVideo": true,
    "consejo": ""
  },
  {
    "id": "arroz-al-horno-con-conejo",
    "nombre": "Arroz al horno con conejo",
    "categoria": "pasta",
    "fecha": "2025-12-09",
    "foto": "arroz-al-horno-con-conejo.jpg",
    "fotograma": "arroz-al-horno-con-conejo-video.jpg",
    "instagram": "https://www.instagram.com/p/DSDoBNejNyL/",
    "ingredientes": [
      "1 vaso de arroz",
      "3 vasos de caldo",
      "Medio conejo",
      "1 Cebolla blanca",
      "1 Cebolla morada",
      "Medio pimiento rojo",
      "Tomate concentrado",
      "Pimentón de la Vera",
      "Agua",
      "Sal"
    ],
    "pasos": [
      "Troceamos todas las verduras, no tiene que ser un corte perfecto, lo imperfecto acaba siendo lo mejor",
      "Empezamos sellando el conejo, cuando veamos que está tostadito lo retiramos",
      "En ese mismo fondo cocinamos las verduras. Echar sal ayudará a que se cocine todo mucho mejor.",
      "Añadimos el tomate concentrado y el pimentón y removemos un par de minutos.",
      "Volvemos a poner el conejo, echamos el agua y dejamos que se guise bien.",
      "Precalentamos el horno a 200º",
      "Echamos el arroz, removemos bien y añadimos el caldo.",
      "Cocinamos 5 minutos en el fuego y lo llevamos al horno durante 15 minutos a 200º",
      "Dejamos reposar unos minutos el arroz fuera del horno",
      "Servimos y disfrutamos"
    ],
    "consejo": "Es una opción perfecta para cuando tienes invitados en casa. Podéis dejar preparado hasta el paso 5 a la mañana y al volver a casa acabar de hacer los pasos 6-10 (mientras que sacas un poco de picoteo y algo de beber)."
  },
  {
    "id": "cocido",
    "nombre": "Cocido",
    "categoria": "cuchara",
    "fecha": "2025-11-30",
    "foto": "cocido.jpg",
    "fotograma": "cocido-video.jpg",
    "instagram": "https://www.instagram.com/p/DRsbFNoDC6o/",
    "ingredientes": [
      "Garbanzos",
      "Costilla",
      "Muslo de pollo",
      "Cebolla",
      "Puerros",
      "Vino blanco",
      "Salsa de soja",
      "Fideos",
      "Agua"
    ],
    "pasos": [],
    "consejo": ""
  },
  {
    "id": "ramen-facil",
    "nombre": "Ramen fácil",
    "categoria": "cuchara",
    "fecha": "2025-11-28",
    "foto": "ramen-facil.jpg",
    "fotograma": "ramen-facil-video.jpg",
    "instagram": "https://www.instagram.com/p/DRmfPIpDHM4/",
    "ingredientes": [
      "Paquete de noodles",
      "Contramuslo de pollo",
      "Huevos",
      "Caldo de pollo",
      "Pasta de tahini",
      "Salsa de soja",
      "Sésamo blanco/negro"
    ],
    "pasos": [
      "Troceamos el pollo y lo cocinamos a fuego fuerte en una sartén.",
      "Cuando esté doradito, bajamos el fuego, echamos la soja y el agua y lo cocinamos hasta que prácticamente se haya reducido toda la salsa. La idea es que el pollo quede con un color intenso.",
      "Cocemos los huevos 6 minutos y medio y directamente los pasamos a un bol con agua fría para bajar la temperatura y evitar que se sigan cociendo (si es agua con hielo mejor).",
      "En el bol donde vayamos a servir el ramen colocamos la pasta de tahini o la crema de frutos secos, la soja y el caldo. Es mejor echar el caldo poco a poco para mezclar todo bien.",
      "Ahora solo queda montar: primero los noodles, luego el pollo y por último el huevo.",
      "Para decorar ponemos un poco de sésamo."
    ],
    "consejo": "Podéis utilizar la crema de frutos secos que más os guste, yo lo he probado con unas cuentas y queda muy bien."
  },
  {
    "id": "coliflor-gratinada",
    "nombre": "Coliflor gratinada",
    "categoria": "principales",
    "fecha": "2025-11-26",
    "foto": "coliflor-gratinada.jpg",
    "fotograma": "coliflor-gratinada-video.jpg",
    "instagram": "https://www.instagram.com/p/DRiGxZUjMc-/",
    "ingredientes": [
      "1 Coliflor",
      "Taquitos de jamón",
      "Queso rallado",
      "Para la bechamel:",
      "1 puerro",
      "40gr harina",
      "40gr mantequilla",
      "600ml leche"
    ],
    "pasos": [
      "Cocemos la coliflor en una cazuela y reservamos.",
      "En una sartén ponemos un poco de aceite y cocinamos el puerro. Cuando esté bien pochadito, añadimos un dado de mantequilla y echamos la harina. Cocinamos la harina un par de minutos.",
      "Echamos la leche y no dejamos de remover. Pasados 5 minutos pasamos todo por la batidora.",
      "Es hora de montar la bandeja del horno: colocamos la coliflor, los taquitos de jamón y la bechamel por encima. Por último, añadimos el queso al gusto.",
      "Gratinamos en el horno… y listo."
    ],
    "consejo": ""
  },
  {
    "id": "tostada-de-espinacas-cremosas-y-tomate",
    "nombre": "Tostada de espinacas cremosas y tomate",
    "categoria": "entrantes",
    "fecha": "2025-11-16",
    "foto": "tostada-de-espinacas-cremosas-y-tomate.jpg",
    "fotograma": "menu-siempre-easy-video.jpg",
    "instagram": "https://www.instagram.com/p/DRIPAw4jMEm/",
    "ingredientes": [
      "Pan",
      "Tomates cherry",
      "Espinacas",
      "Harina",
      "Leche",
      "Mozzarella"
    ],
    "pasos": [
      "Troceamos los tomates y reservamos.",
      "En una sartén cocinamos las espinacas con un poco de aceite (reducen mucho y se quedan de un verde intenso).",
      "Añadimos una cucharada de harina, la cocinamos con las espinacas y pasado un minuto añadimos leche poco a poco, hasta la textura que más os guste.",
      "Montamos la tostada y la gratinamos en el horno o en la freidora de aire."
    ],
    "consejo": ""
  },
  {
    "id": "pasta-con-merluza-y-verduras-en-una-sola-sarten",
    "nombre": "Pasta con merluza y verduras en una sola sartén",
    "categoria": "pasta",
    "fecha": "2025-11-16",
    "foto": "pasta-con-merluza-y-verduras-en-una-sola-sarten.jpg",
    "fotograma": "menu-siempre-easy-video.jpg",
    "instagram": "https://www.instagram.com/p/DRIPAw4jMEm/",
    "ingredientes": [
      "Merluza",
      "Verduras asadas (vale un paquete congelado)",
      "Tomate",
      "Pasta",
      "Mozzarella"
    ],
    "pasos": [
      "Cocinamos la merluza en una sartén y la retiramos.",
      "En ese mismo fondo cocinamos las verduras (cebolla, pimiento rojo, berenjena… lo que más os apetezca).",
      "Volvemos a echar la merluza y añadimos el tomate.",
      "Echamos la pasta y agua, poco a poco, y dejamos que se cueza todo en la misma sartén. Si la pasta sigue dura, un poco más de agua.",
      "Emplatamos con mozzarella. Si queréis, se puede gratinar en el horno."
    ],
    "consejo": ""
  },
  {
    "id": "compota-de-manzana-con-yogur",
    "nombre": "Compota de manzana con yogur",
    "categoria": "postres",
    "fecha": "2025-11-16",
    "foto": "compota-de-manzana-con-yogur.jpg",
    "fotograma": "menu-siempre-easy-video.jpg",
    "instagram": "https://www.instagram.com/p/DRIPAw4jMEm/",
    "ingredientes": [
      "Manzana",
      "Agua",
      "Canela en rama",
      "Yogur"
    ],
    "pasos": [
      "Ponemos la manzana en una cazuela con un poco de agua y la canela en rama.",
      "Cocinamos a fuego medio hasta la textura que queramos (si se queda seca, un poco más de agua).",
      "Dejamos enfriar y lo mezclamos con yogur o kéfir."
    ],
    "consejo": ""
  },
  {
    "id": "natillas-de-chocolate",
    "nombre": "Natillas de chocolate",
    "categoria": "postres",
    "fecha": "2025-11-13",
    "foto": "natillas-de-chocolate.jpg",
    "fotograma": "natillas-de-chocolate-video.jpg",
    "instagram": "https://www.instagram.com/p/DRAjr_VjDQY/",
    "ingredientes": [
      "500ml leche entera",
      "15 onzas de chocolate negro",
      "4 yemas",
      "40 gr azúcar",
      "Maicena 10gr",
      "Aroma de vainilla",
      "Piel de limón"
    ],
    "pasos": [
      "En un cazo colocamos la leche, el aroma de vainilla y la piel de limón (solo la parte amarilla). Calentamos la leche a fuego lento, queremos infusionar la leche.",
      "En un bol de cristal ponemos el chocolate y lo derretimos al baño maría.",
      "Una vez derretido, en ese mismo bol añadimos el azucar, las yemas y la maicena (recomendable hacerlo uno a uno y manteniendo ese orden). Mezclamos bien.",
      "Añadimos la leche infusionada y una vez que esté todo bien mezclado lo cocinamos al baño maría durante 13-15 minutos. Fuego medio y es importante no dejar de remover.",
      "Añadimos en los moldes y cuando esté frío lo dejamos una noche en la nevera.",
      "Lo podemos sacar unos minutos antes o directamente para comer."
    ],
    "consejo": "Esconderlas bien en la nevera ya que son adictivas."
  },
  {
    "id": "pasta-con-crema-de-tomate-seco",
    "nombre": "Pasta con crema de tomate seco",
    "categoria": "pasta",
    "fecha": "2025-11-05",
    "foto": "pasta-con-crema-de-tomate-seco.jpg",
    "fotograma": "pasta-con-crema-de-tomate-seco-video.jpg",
    "instagram": "https://www.instagram.com/p/DQr8JRfjE3v/",
    "ingredientes": [
      "Pasta fresca",
      "Tomate seco",
      "Nata",
      "Queso",
      "Tomate concentrado",
      "Pimienta negra molida"
    ],
    "pasos": [],
    "consejo": ""
  },
  {
    "id": "flan-de-queso",
    "nombre": "Flan de queso",
    "categoria": "postres",
    "fecha": "2025-10-30",
    "foto": "flan-de-queso.jpg",
    "fotograma": "flan-de-queso-video.jpg",
    "instagram": "https://www.instagram.com/p/DQclUlIjA7k/",
    "ingredientes": [
      "Para la mezcla:",
      "200ml nata para montar",
      "240ml leche entera",
      "200gr queso crema",
      "1 sobre de cuajada",
      "40gr azúcar",
      "Para el caramelo:",
      "40 gr azúcar",
      "Cucharada y media de agua"
    ],
    "pasos": [
      "En un cazo colocamos el azúcar y el agua para hacer el caramelo.",
      "Cuando tengamos el caramelo preparado lo echamos en los recipientes",
      "En un vaso colocamos 100ml de leche y la cuajada, removemos y reservamos.",
      "En la cazuela ponemos la leche restante (140ml), el queso crema, la nata y el azúcar. Calentamos y añadimos la mezcla que hemos reservado.",
      "Cocinamos unos minutos y lo retiramos del fuego. Añadimos en los moldes y cuando esté frío lo dejamos una noche en la nevera.",
      "Sacamos de la nevera media hora antes de comerlo."
    ],
    "consejo": "Antes de desmoldarlo colocar el recipiente unos minutos en agua caliente, de esta forma el caramelo quedará mucho mejor (al estar en la nevera el caramelo se endurece)"
  },
  {
    "id": "alcachofas-con-burrata-y-jamon",
    "nombre": "Alcachofas con burrata y jamón",
    "categoria": "entrantes",
    "fecha": "2025-10-26",
    "foto": "alcachofas-con-burrata-y-jamon.jpg",
    "fotograma": "alcachofas-con-burrata-y-jamon-video.jpg",
    "instagram": "https://www.instagram.com/p/DQSVYeLjGU1/",
    "ingredientes": [
      "Bote de alcachofas",
      "Burrata",
      "Taquitos de jamón",
      "Pimienta negra molida"
    ],
    "pasos": [],
    "consejo": ""
  },
  {
    "id": "noquis-con-guanciale-y-tomate",
    "nombre": "Ñoquis con guanciale y tomate",
    "categoria": "pasta",
    "fecha": "2025-10-21",
    "foto": "noquis-con-guanciale-y-tomate.jpg",
    "fotograma": "noquis-con-guanciale-y-tomate-video.jpg",
    "instagram": "https://www.instagram.com/p/DQFWbzejPmo/",
    "ingredientes": [
      "Paquete de ñoquis",
      "Guanciale",
      "Salsa de tomate",
      "Queso crema",
      "Orégano",
      "Leche",
      "Queso mozzarella",
      "Queso azul (opcional)"
    ],
    "pasos": [
      "Tostamos los ñoquis en la sartén (quedan mucho mejor que cocidos) y los retiramos.",
      "En la misma sartén, con el fuego más bajo, cocinamos el guanciale poco a poco.",
      "Sobre el guanciale añadimos el tomate, el queso crema, el orégano y un poco de leche, y removemos bien.",
      "Volvemos a echar los ñoquis, removemos y ponemos bastante mozzarella por encima. Si queréis, también un poco de queso azul.",
      "Lo llevamos al horno, a máxima potencia, hasta que el queso esté tostadito."
    ],
    "pasosDelVideo": true,
    "consejo": ""
  },
  {
    "id": "noodles-con-salsa-de-cacahuete",
    "nombre": "Noodles con salsa de cacahuete",
    "categoria": "pasta",
    "fecha": "2025-10-19",
    "foto": "noodles-con-salsa-de-cacahuete.jpg",
    "fotograma": "noodles-con-salsa-de-cacahuete-video.jpg",
    "instagram": "https://www.instagram.com/p/DQAHhQNjA6B/",
    "ingredientes": [
      "Paquete de noodles",
      "1 cebolla",
      "2 zanahorias",
      "Taquitos de jamón",
      "Crema de cacahuete (3 cucharillas de café)",
      "Salsa de soja (3 cucharadas soperas)",
      "Mezcla picante",
      "Pimienta negra molida"
    ],
    "pasos": [
      "Cocinamos la cebolla y la zanahoria en una sartén. Cuando tengamos las verduras a nuestro gusto añadimos los taquitos de jamón y reservamos.",
      "Ponemos agua caliente en un bol y dejamos los noodles unos minutos. Se podrían echar directamente del paquete a la sartén pero es más fácil que se rompan. Yo lo haría de esta forma.",
      "En un bol colocamos la crema de cacahuete, la soja, la pimienta y la mezcla picante. Mezclamos todo bien.",
      "Echamos los noodles en la sarten y removemos un par de minutos.",
      "Añadimos un poco del agua de los noodles en el bol, mezclamos y echamos la mezcla en la sarten. Dejamos que coja la consistencia que nos gusta. Si vemos que ha quedado muy espeso podemos ajustarlo con el agua de los noodles."
    ],
    "consejo": "Guardar parte del agua que hemos utilizado para ablandar los noodles hasta que sirvamos el plato, ya tendremos luego tiempo de echarlo."
  },
  {
    "id": "pinsa-para-aprovechar-el-guiso-de-carne",
    "nombre": "Pinsa para aprovechar el guiso de carne",
    "categoria": "principales",
    "fecha": "2025-10-10",
    "foto": "pinsa-para-aprovechar-el-guiso-de-carne.jpg",
    "fotograma": "pinsa-para-aprovechar-el-guiso-de-carne-video.jpg",
    "instagram": "https://www.instagram.com/p/DPpI7vzjNiM/",
    "ingredientes": [
      "Bote de nata",
      "Tupper de guiso de carne",
      "Queso mozzarela",
      "Pimienta negra molida",
      "Sal"
    ],
    "pasos": [],
    "consejo": "Esta salsa se puede hacer con cualquier guiso de carne, y también sirve para mezclarla con pasta."
  },
  {
    "id": "nachos-gratinados-con-carne",
    "nombre": "Nachos gratinados con carne",
    "categoria": "entrantes",
    "fecha": "2025-09-24",
    "foto": "nachos-gratinados-con-carne.jpg",
    "fotograma": "nachos-gratinados-con-carne-video.jpg",
    "instagram": "https://www.instagram.com/p/DO_u2jXDGKv/",
    "ingredientes": [
      "Nachos",
      "Guacamole",
      "Mozzarella",
      "Carne picada",
      "Tomate",
      "Pimentón",
      "Ajo en polvo",
      "Queso fresco batido",
      "Queso cottage",
      "Sriracha",
      "Pimienta negra",
      "Aceite",
      "Sal"
    ],
    "pasos": [
      "En una sartén cocinamos la carne y echamos un poco de pimentón (si os gusta el picante que sea pimentón picante). Echamos el tomate y dejamos que se cocina suave suave hasta que tenga la consistencia que nos gusta.",
      "En un bol echamos queso fresco batido, el queso cottage, un poco de pimienta y removemos. Salsita blanca rica y muy sana :)",
      "Ponemos los nachos en una fuente y los intercalamos con queso. Gratinamos bien y luego solo queda añadir el resto de los ingredientes."
    ],
    "consejo": ""
  },
  {
    "id": "albondigas-a-la-antigua",
    "nombre": "Albóndigas a la antigua",
    "categoria": "principales",
    "fecha": "2025-09-04",
    "foto": "albondigas-a-la-antigua.jpg",
    "fotograma": "albondigas-a-la-antigua-video.jpg",
    "instagram": "https://www.instagram.com/p/DOL_fyhDGSy/",
    "ingredientes": [
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
    "pasos": [
      "Pon la rebanada de pan a remojar en leche y resérvala.",
      "En un bol, junta la carne picada, el pan remojado, el pan rallado, el huevo y la soja. Salpimienta y mezcla bien.",
      "Forma las bolas con las manos y márcalas en la sartén hasta que estén selladas. Retíralas.",
      "En la misma sartén, tuesta el bacon y sácalo.",
      "En la grasa del bacon cocina la cebolla y el calabacín.",
      "Añade la nata y la mostaza y deja unos minutos. Si la salsa queda muy espesa, rebájala con un poco de caldo.",
      "Vuelve a poner las albóndigas y dales un hervor rápido."
    ],
    "consejo": "Déjalas de un día para otro, el plato mejora mucho."
  },
  {
    "id": "pinsa-de-calabaza-setas-bacon-y-burrata",
    "nombre": "Pinsa de calabaza, setas, bacon y burrata",
    "categoria": "principales",
    "fecha": "2025-06-24",
    "foto": "pinsa-de-calabaza-setas-bacon-y-burrata.jpg",
    "fotograma": "pinsa-de-calabaza-setas-bacon-y-burrata-video.jpg",
    "instagram": "https://www.instagram.com/p/DLTF8CiorSV/?img_index=1",
    "ingredientes": [
      "Pinsa",
      "Crema de calabaza",
      "Setas",
      "Bacon",
      "Burrata"
    ],
    "pasos": [],
    "consejo": "Preparar los ingredientes, montar y disfrutar. Muy rápido y terriblemente rico."
  },
  {
    "id": "entrecot-con-pure-de-patatas-y-mantequilla-de-ajo",
    "nombre": "Entrecot con puré de patatas y mantequilla de ajo",
    "categoria": "principales",
    "fecha": "2025-06-23",
    "foto": "entrecot-con-pure-de-patatas-y-mantequilla-de-ajo.jpg",
    "fotograma": "entrecot-con-pure-de-patatas-y-mantequilla-de-ajo-video.jpg",
    "instagram": "https://www.instagram.com/p/DLQVcARIFoU/",
    "ingredientes": [
      "Entrecot",
      "Nata",
      "Ajo",
      "Tomillo",
      "Patatas",
      "Mantequilla",
      "Queso rallado",
      "Perejil",
      "Aceite",
      "Sal",
      "Pimienta"
    ],
    "pasos": [
      "En una cazuela calentamos la nata con ajo y tomillo.",
      "Cocemos las patatas.",
      "Añadimos la nata a las patatas, con sal, pimienta y mucho queso rallado, y hacemos el puré.",
      "Cocinamos la carne con sal y pimienta y le añadimos mantequilla.",
      "Servimos el puré de base, la carne encima y, por encima, la mantequilla con ajo y perejil."
    ],
    "pasosDelVideo": true,
    "consejo": ""
  },
  {
    "id": "mayonesa-de-apio",
    "nombre": "Mayonesa de apio",
    "categoria": "entrantes",
    "fecha": "2025-06-19",
    "foto": "mayonesa-de-apio.jpg",
    "fotograma": "mayonesa-de-apio-video.jpg",
    "instagram": "https://www.instagram.com/p/DLFu34aoZCU/",
    "ingredientes": [
      "2 huevos",
      "Aceite de girasol",
      "Apio",
      "Sal",
      "Limón"
    ],
    "pasos": [
      "Ponemos los dos huevos en el vaso de la batidora y batimos mientras vamos echando el aceite poco a poco.",
      "Cortamos el apio y lo añadimos. Batimos hasta que quede bien verde.",
      "Añadimos sal y, por último, un poco de limón."
    ],
    "pasosDelVideo": true,
    "consejo": "También la podéis untar en el pan para hacer un buen bocadillo."
  },
  {
    "id": "pinsa-de-pesto-burrata-y-mortadela",
    "nombre": "Pinsa de pesto, burrata y mortadela",
    "categoria": "principales",
    "fecha": "2025-06-18",
    "foto": "pinsa-de-pesto-burrata-y-mortadela.jpg",
    "fotograma": "pinsa-de-pesto-burrata-y-mortadela-video.jpg",
    "instagram": "https://www.instagram.com/p/DLDlWBaItqA/",
    "ingredientes": [
      "Pinsa",
      "Pesto",
      "Queso Mozzarella",
      "Burrata",
      "Mortadella"
    ],
    "pasos": [],
    "consejo": ""
  },
  {
    "id": "ensalada-de-garbanzos",
    "nombre": "Ensalada de garbanzos",
    "categoria": "entrantes",
    "fecha": "2025-06-17",
    "foto": "ensalada-de-garbanzos.jpg",
    "fotograma": "ensalada-de-garbanzos-video.jpg",
    "instagram": "https://www.instagram.com/p/DLA4p-zI_4l/",
    "ingredientes": [
      "Garbanzos",
      "Queso fresco",
      "Leche",
      "Pimiento rojo",
      "Huevo",
      "Anchoas",
      "Curry",
      "Pimentón",
      "Vinagre balsámico",
      "Aceite",
      "Sal"
    ],
    "pasos": [],
    "consejo": ""
  },
  {
    "id": "lentejas-boom-boom",
    "nombre": "Lentejas boom boom",
    "categoria": "cuchara",
    "fecha": "2025-06-13",
    "foto": "lentejas-boom-boom.jpg",
    "fotograma": "lentejas-boom-boom-video.jpg",
    "instagram": "https://www.instagram.com/p/DK2cUc7oFX4/",
    "ingredientes": [
      "Panceta",
      "Lentejas",
      "Cebolla",
      "Calabaza",
      "Comino",
      "Curry",
      "Pimentón dulce",
      "Pimentón picante",
      "Caldo de verduras/pollo",
      "Queso crema"
    ],
    "pasos": [
      "En la olla a presión cocinamos la cebolla con un poco de sal hasta que esté transparente.",
      "Añadimos la calabaza y dejamos que se cocine 5 minutos.",
      "Echamos las especias: comino, curry y pimentón dulce y picante.",
      "Añadimos las lentejas, el caldo y la panceta.",
      "Tapamos bien y, cuando suba la válvula, cocinamos 12 minutos.",
      "Dejamos que la olla baje del todo antes de abrirla.",
      "Para terminar, el toque cremoso: un poco de queso crema."
    ],
    "pasosDelVideo": true,
    "consejo": "Si queréis que espesen más, dejadlas unos minutos a fuego lento con la tapa quitada. Se pueden congelar o llevar en un táper."
  },
  {
    "id": "pinsa-carbonara",
    "nombre": "Pinsa carbonara",
    "categoria": "principales",
    "fecha": "2025-06-11",
    "foto": "pinsa-carbonara.jpg",
    "fotograma": "pinsa-carbonara-video.jpg",
    "instagram": "https://www.instagram.com/p/DKxhrjwonls/",
    "ingredientes": [
      "Pinsa",
      "Nata",
      "Parmesano",
      "Queso Mozzarella",
      "Guanciale",
      "Yemas",
      "Pimienta"
    ],
    "pasos": [
      "Empezamos con una capa fina de nata sobre la pinsa.",
      "Espolvoreamos parmesano y añadimos una buena capa de mozzarella.",
      "Pasamos el guanciale por la sartén para que suelte la grasa, sin que llegue a hacerse del todo.",
      "Lo ponemos sobre la pinsa y la metemos al horno.",
      "En un bol mezclamos las yemas, el parmesano y la grasa del guanciale.",
      "Sacamos la pinsa del horno y extendemos la crema por encima con una cuchara."
    ],
    "pasosDelVideo": true,
    "consejo": ""
  },
  {
    "id": "salsa-fresca-para-burritos",
    "nombre": "Salsa fresca para burritos",
    "categoria": "entrantes",
    "fecha": "2025-06-09",
    "foto": "salsa-fresca-para-burritos.jpg",
    "fotograma": "salsa-fresca-para-burritos-video.jpg",
    "instagram": "https://www.instagram.com/p/DKsSZPHIZ7A/",
    "ingredientes": [
      "Tomate",
      "Queso crema",
      "Yogurt",
      "Miel",
      "Perejil / Orégano",
      "Aceite",
      "Sal"
    ],
    "pasos": [
      "Troceamos el tomate en dados pequeños y lo colocamos en un bol",
      "Añadimos el queso crema, el yogurt y la miel",
      "He utilizado aceite verde de perejil pero se puede añadir al momento aceite y perejil / orégano (lo que más os guste) y queda igual de rico :)",
      "El último paso es lo mejor: no parar de untar"
    ],
    "consejo": "Esta salsa es perfecta para cualquier burrito, muy refrescante y perfecta para este verano"
  },
  {
    "id": "burrito-alto-en-proteinas",
    "nombre": "Burrito alto en proteínas",
    "categoria": "principales",
    "fecha": "2025-06-08",
    "foto": "burrito-alto-en-proteinas.jpg",
    "fotograma": "burrito-alto-en-proteinas-video.jpg",
    "instagram": "https://www.instagram.com/p/DKpoaW5IuU8/",
    "ingredientes": [
      "Tortilla de trigo",
      "Solomillo de cerdo (lo podéis sustituir)",
      "Huevos",
      "Pimientos rojos",
      "Queso mozzarella",
      "Anacardos"
    ],
    "pasos": [
      "Rellenamos la tortilla con el solomillo de cerdo, dos huevos fritos y mucho queso.",
      "Cerramos el burrito y lo pasamos por la sartén."
    ],
    "pasosDelVideo": true,
    "consejo": ""
  },
  {
    "id": "ensalada-de-pasta-con-alino-verde",
    "nombre": "Ensalada de pasta con aliño verde",
    "categoria": "pasta",
    "fecha": "2025-05-27",
    "foto": "ensalada-de-pasta-con-alino-verde.jpg",
    "fotograma": "ensalada-de-pasta-con-alino-verde-video.jpg",
    "instagram": "https://www.instagram.com/p/DKKzfRqowre/",
    "ingredientes": [
      "Pasta",
      "Pepino",
      "Tomates confitados",
      "Burrata",
      "Yogurt cremoso",
      "Queso crema",
      "Albahaca",
      "Menta",
      "Zumo de limón",
      "Aceite de oliva",
      "Sal"
    ],
    "pasos": [
      "Para el aliño. Colocamos en un bol el yogurt, el queso crema, las hierbas, el aceite, el zumo de limón y la sal. Trituramos y reservamos.",
      "Tenéis en mi perfil cómo preparar los tomates confitados, son perfectos para tenerlos en un bote en la nevera y añadirlos en el último momento (ensaladas, carnes, pastas…)",
      "Montamos la ensalada. Seguro que no todo el mundo es fan del pepino, pero lo podéis sustituir o directamente quitar.",
      "Añadimos el aliño verde, mezclamos y lo coronamos con una buena burrata.",
      "El último paso es lo mejor: disfrutar de esta delicia"
    ],
    "consejo": "El aliño verde es perfecto para cualquier ensalada este verano, es sano y las hierbas le dan un toque súper refrescante"
  },
  {
    "id": "pinsa-de-calabacin-y-mozzarella",
    "nombre": "Pinsa de calabacín y mozzarella",
    "categoria": "principales",
    "fecha": "2025-05-16",
    "foto": "pinsa-de-calabacin.jpg",
    "fotograma": "pinsa-de-calabacin-video.jpg",
    "instagram": "https://www.instagram.com/p/DJuPR69oU5C/?img_index=1",
    "ingredientes": [
      "Pinsa",
      "Nata",
      "Mozzarella rallada",
      "Calabacín",
      "Mozzarella di bufala"
    ],
    "pasos": [],
    "consejo": ""
  },
  {
    "id": "fideua-con-pollo-y-setas",
    "nombre": "Fideuá con pollo y setas",
    "categoria": "pasta",
    "fecha": "2025-04-29",
    "foto": "fideua-con-pollo-y-setas.jpg",
    "fotograma": "fideua-con-pollo-y-setas-video.jpg",
    "instagram": "https://www.instagram.com/p/DJCowcMoRiI/",
    "ingredientes": [
      "Pollo",
      "Cebolla",
      "Pimiento rojo y verde",
      "Setas",
      "Tomate",
      "Pimentón picante y dulce",
      "Fideuá",
      "Caldo de verduras o de pollo (o mix)",
      "Aceite de oliva",
      "Sal",
      "Miso (opcional)"
    ],
    "pasos": [
      "Sellamos el pollo con un poquito de aceite y lo retiramos.",
      "En ese mismo fondo cocinamos la cebolla, el pimiento rojo y verde y las setas.",
      "Añadimos el tomate troceado y el pimentón picante y dulce, y dejamos que coja todo el sabor.",
      "Echamos la fideuá y volvemos a poner el pollo.",
      "Añadimos el caldo de verduras y el de pollo y dejamos unos 10 minutos.",
      "Si queréis, una cucharadita de miso.",
      "Apagamos el fuego y dejamos reposar 5-10 minutos antes de comer."
    ],
    "pasosDelVideo": true,
    "consejo": ""
  },
  {
    "id": "bacalao-con-patatas",
    "nombre": "Bacalao con patatas",
    "categoria": "principales",
    "fecha": "2025-04-07",
    "foto": "bacalao-con-patatas.jpg",
    "fotograma": "bacalao-con-patatas-video.jpg",
    "instagram": "https://www.instagram.com/p/DIJ-ADcojly/",
    "ingredientes": [
      "Bacalao",
      "Patatas",
      "Cebolla",
      "Pimienta negra",
      "Ajo",
      "Pimentón dulce/picante",
      "Aceite de oliva",
      "Sal"
    ],
    "pasos": [],
    "consejo": "Podéis sustituir por el pescado que más os guste"
  },
  {
    "id": "sopa-de-estrellas-con-setas-y-miso",
    "nombre": "Sopa de estrellas con setas y miso",
    "categoria": "cuchara",
    "fecha": "2025-03-31",
    "foto": "sopa-de-estrellas-con-setas-y-miso.jpg",
    "fotograma": "sopa-de-estrellas-con-setas-y-miso-video.jpg",
    "instagram": "https://www.instagram.com/p/DH3_-swIR9t/",
    "ingredientes": [
      "Setas",
      "Cebolla caramelizada",
      "Soja",
      "Caldo de verduras o pollo",
      "Miso",
      "Maizena (cucharilla de café)",
      "Estrellitas",
      "Perejil",
      "Aceite de oliva",
      "Sal"
    ],
    "pasos": [
      "Cocinamos las setas en una cazuela hasta que estén tostadas",
      "Echamos la cebolla pochada y la soja y el 80% del caldo",
      "En un cazo pequeño, ponemos el caldo restante, el miso y la maizena (esto hará que la sopa coja cuerpo)",
      "Ahora mezclamos todo en la cazuela.",
      "Para acabar, echamos las estrellitas y dejamos unos minutos en el fuego hasta que estén blanditas",
      "Emplatamos y decoramos con un poco de perejil."
    ],
    "consejo": ""
  },
  {
    "id": "bolas-de-calabacin-y-feta-con-salsa-de-yogur-y-pep",
    "nombre": "Bolas de calabacín y feta con salsa de yogur y pepino",
    "categoria": "entrantes",
    "fecha": "2025-03-14",
    "foto": "bolas-de-calabacin-y-feta-con-salsa-de-yogur-y-pep.jpg",
    "fotograma": "bolas-de-calabacin-y-feta-con-salsa-de-yogur-y-pep-video.jpg",
    "instagram": "https://www.instagram.com/p/DHMP1gTond-/",
    "ingredientes": [
      "Pepino",
      "Yogur cremoso",
      "Calabacín",
      "Queso feta",
      "Huevo",
      "Limón",
      "Perejil",
      "Granada",
      "Pimienta negra",
      "Sal"
    ],
    "pasos": [
      "Rallamos el pepino y lo escurrimos con la ayuda de un trapo limpio (importante quitarle bien el agua)",
      "Añadimos el yogur cremoso, la sal, la ralladura y el jugo de limón, la pimienta y el perejil. Ya tenemos la base preparada.",
      "Repetimos el paso 1 con el calabacín.",
      "Troceamos el queso feta (previamente lo hemos tenido envuelto en papel de cocina para quitar el exceso de humedad) y echamos un huevo.",
      "Toca mancharse las manos. Boleamos y cocinamos en aceite.",
      "Emplatamos y añadimos la granada. Esto le da el toque fresco al plato."
    ],
    "consejo": "Comer las bolas de calabacín templadas, de esa forma notaréis el contraste de texturas y temperaturas."
  },
  {
    "id": "revuelto-de-hongos",
    "nombre": "Revuelto de hongos",
    "categoria": "entrantes",
    "fecha": "2025-02-12",
    "foto": "revuelto-de-hongos.jpg",
    "fotograma": "revuelto-de-hongos-video.jpg",
    "instagram": "https://www.instagram.com/p/DF_GfUzIiRX/",
    "ingredientes": [
      "Hongos (si no tenemos hongos le podemos poner las setas que más nos gusten, os aseguro que queda muy rico)",
      "Huevos de calidad",
      "Aceite de oliva",
      "Sal",
      "Una buena hogaza de pan"
    ],
    "pasos": [
      "Cocinamos los hongos en una sartén con un poco de aceite.",
      "Echamos los huevos y no paramos de remover. La idea es que tengamos el fuego bajo para que se vaya cuajando poco a poco.",
      "Es importante que tengáis un poco de paciencia :)",
      "Si vemos que la sartén está muy caliente la podemos retirar un poco del fuego.",
      "Cuando lo tengamos listo retiramos del fuego y añadimos una yema. Removemos y emplatamos."
    ],
    "consejo": ""
  },
  {
    "id": "muslos-de-pollo-a-la-cerveza",
    "nombre": "Muslos de pollo a la cerveza",
    "categoria": "principales",
    "fecha": "2025-02-09",
    "foto": "muslos-de-pollo-a-la-cerveza.jpg",
    "fotograma": "muslos-de-pollo-a-la-cerveza-video.jpg",
    "instagram": "https://www.instagram.com/p/DF3TNTzoW_H/?img_index=1",
    "ingredientes": [
      "Muslos de pollo",
      "Cebolla",
      "Zanahoria",
      "Patatas",
      "Cerveza",
      "Caldo de pollo"
    ],
    "pasos": [
      "Sellamos los muslos de pollo en la cazuela.",
      "En lo que ha quedado en el fondo de la cazuela cocinamos la cebolla (aquí está la clave).",
      "Añadimos la zanahoria y la cocinamos. Ya tenemos el fondo.",
      "Volvemos a poner los muslos de pollo y añadimos las patatas.",
      "Echamos la cerveza, subimos el fuego y dejamos unos minutos.",
      "Añadimos el caldo de pollo y dejamos que se cocine."
    ],
    "consejo": ""
  },
  {
    "id": "taki-burger",
    "nombre": "Taki burger",
    "categoria": "principales",
    "fecha": "2025-01-19",
    "foto": "taki-burger.jpg",
    "fotograma": "taki-burger-video.jpg",
    "instagram": "https://www.instagram.com/p/DFA3z68oNXj/",
    "ingredientes": [
      "Hamburguesa",
      "Pan brioche",
      "Bacon",
      "Queso cheddar",
      "Mahonesa",
      "Sriracha",
      "Takis (snack picante)",
      "Sal",
      "Pimienta negra",
      "Aceite de oliva"
    ],
    "pasos": [
      "Cocinamos el bacon a fuego medio hasta que quede crujiente.",
      "Mientras, preparamos la salsa mezclando la mayonesa con la sriracha.",
      "Tostamos el pan.",
      "Cocinamos la carne y le ponemos el cheddar para que se funda.",
      "Montamos la hamburguesa con la salsa, la carne con el queso, el bacon y, por último, los Takis."
    ],
    "pasosDelVideo": true,
    "consejo": ""
  },
  {
    "id": "carrilleras-al-oporto",
    "nombre": "Carrilleras al oporto",
    "categoria": "principales",
    "fecha": "2025-01-13",
    "foto": "carrilleras-al-oporto.jpg",
    "fotograma": "carrilleras-al-oporto-video.jpg",
    "instagram": "https://www.instagram.com/p/DExwkO7o3uw/",
    "ingredientes": [
      "Carrilleras de cerdo",
      "Cebolla",
      "Puerro",
      "Pimiento rojo",
      "Zanahoria",
      "Hoja de laurel",
      "Vino de oporto",
      "Soja",
      "Concentrado de tomate",
      "Caldo de carne/pollo",
      "Mantequilla",
      "Chocolate negro",
      "Aceite de oliva",
      "Sal",
      "Pimienta negra molida"
    ],
    "pasos": [
      "En una olla cocinamos las carrilleras a fuego fuerte, queremos que se queden bien selladas.",
      "Troceamos todas las verduras, no pasa nada si tienen tamaños diferentes.",
      "Aprovechamos lo que se ha quedado pegado en el fondo de la olla para cocinar la cebolla hasta que esté bien caramelizada.",
      "Echamos y cocinamos el resto de las verduras",
      "Con medio vaso de vino debería de ser suficiente pero eso a vuestro gusto. Incorporamos el vino y subimos el fuego.",
      "Añadimos el laurel, el tomate concentrado y la soja. Queremos que se haga un fondo bien intenso.",
      "Volvemos a introducir las carrilleras, echamos el caldo y cocinamos en la olla a presión durante 27 minutos.",
      "Sacamos las carrilleras, colamos y reducimos la salsa. Las verduras las congeláis para aprovecharlas en otras recetas (ya os las subiré)",
      "Añadimos una onza de chocolate y un poco de mantequilla para que la salsa tenga ese color tan característico.",
      "Acompañamos de: compota de manzana, puré de patata o parmentier de coliflor (si queréis que haga alguna de estas recetas me decís)"
    ],
    "consejo": ""
  },
  {
    "id": "canutillos-de-guacamole-salmon-y-queso-crema",
    "nombre": "Canutillos de guacamole, salmón y queso crema",
    "categoria": "entrantes",
    "fecha": "2024-12-27",
    "foto": "canutillos-de-guacamole-salmon-y-queso-crema.jpg",
    "fotograma": "canutillos-de-guacamole-salmon-y-queso-crema-video.jpg",
    "instagram": "https://www.instagram.com/p/DEFMtXIIN8I/",
    "ingredientes": [
      "Masa Filo",
      "Salmón ahumado",
      "Guacamole",
      "Queso crema",
      "Perejil",
      "Pimienta negra",
      "Huevo",
      "Sésamo",
      "Miel (opcional)"
    ],
    "pasos": [
      "Troceamos la masa filo en tiras (4-5 dedos de ancho)",
      "Mezclamos en un bol el queso crema, el perejil y la pimienta negra",
      "Montamos los canutillos, rellenándolos con el salmón, el queso crema y el guacamole.",
      "Recomendable poner doble capa de masa filo para que quede más crujiente.",
      "Si queremos le podemos añadir un poco de miel al relleno, el toque dulce le queda muy bien",
      "Pintamos con el huevo batido, decoramos con sésamo y los horneamos hasta que estén doraditos."
    ],
    "consejo": ""
  },
  {
    "id": "tartaletas-de-bonito-y-pimiento-asado",
    "nombre": "Tartaletas de bonito y pimiento asado",
    "categoria": "entrantes",
    "fecha": "2024-12-22",
    "foto": "tartaletas-de-bonito-y-pimiento-asado.jpg",
    "fotograma": "tartaletas-de-bonito-y-pimiento-asado-video.jpg",
    "instagram": "https://www.instagram.com/p/DD5XDDjIRtC/",
    "ingredientes": [
      "Tartaletas",
      "Bonito",
      "Pimiento rojo asado",
      "Pepinillos",
      "Mayonesa",
      "Kétchup"
    ],
    "pasos": [],
    "consejo": "Intentad no comeros todas las tartaletas antes de llevarlas a la mesa ;)"
  },
  {
    "id": "berenjenas-rellenas-de-carne",
    "nombre": "Berenjenas rellenas de carne",
    "categoria": "principales",
    "fecha": "2024-11-14",
    "foto": "berenjenas-rellenas-de-carne.jpg",
    "fotograma": "berenjenas-rellenas-de-carne-video.jpg",
    "instagram": "https://www.instagram.com/p/DCXP19UIb1N/",
    "ingredientes": [
      "Berenjenas",
      "Cebolla",
      "Pimiento verde",
      "Tomate frito",
      "Carne picada",
      "Leche",
      "Harina",
      "Mantequilla",
      "Queso rallado",
      "Queso azul",
      "Nuez moscada",
      "Aceite de oliva",
      "Sal",
      "Pimienta negra molida"
    ],
    "pasos": [
      "Empezamos troceando las berenjenas y dandoles unos cortes para que se cocinen bien",
      "Horneamos 30-40 minutos a 180 grados (comprobamos con la ayuda de un cuchillo que el interior está blandito)",
      "Para el relleno primero tenemos que cocinar la cebolla y el pimiento verde",
      "Cuando la berenjena esté asada la vaciamos y la añadimos al relleno",
      "Para la bechamel, empezamos cocinando 100gr de harina en 100gr de mantequilla. Pasados unos minutos añadimos la leche. Lo mejor es añadir la leche caliente y hacerlo poco a poco. Importante no dejar de remover. Añadimos nuez moscada al gusto",
      "Cocinamos la carne junto al relleno y añadimos el tomate y la bechamel al gusto",
      "Ahora solo queda poner el relleno en las berenjenas, un cachito de queso azul y cubrimos con bechamel y queso rallado",
      "Horneamos hasta que se gratine el queso, emplatamos y ya lo tenemos. Un plato de 10"
    ],
    "consejo": "Si se hacen grumos se puede pasar la batidora para que quede perfecta"
  },
  {
    "id": "hamburguesa-con-yema-curada",
    "nombre": "Hamburguesa con yema curada",
    "categoria": "principales",
    "fecha": "2024-09-23",
    "foto": "hamburguesa-con-yema-curada.jpg",
    "fotograma": "hamburguesa-con-yema-curada-video.jpg",
    "instagram": "https://www.instagram.com/p/DARVRUwI65K/",
    "ingredientes": [
      "Hamburguesa",
      "Pan de burguer",
      "Bacon",
      "Huevo",
      "Soja",
      "Pimienta negra",
      "Aceite de oliva",
      "Sal"
    ],
    "pasos": [
      "Separamos la yema de la clara. Ponemos la yema a curar en soja. La idea es que cubra toda la yema.",
      "Salpimentamos la clara y la echamos poco a poco sobre aceite caliente, lo mejor es hacerlo con la mano. Aquí entra la imaginación y la habilidad de cada persona, a ver qué tal os sale.",
      "Cocinamos la carne en una sartén y cuando le demos la vuelta le ponemos el queso para que se vaya derritiendo.",
      "En la misma sartén cocinamos el bacon y aprovechamos la grasa que queda en la sartén para tostar el pan.",
      "Es el momento de montar la hamburguesa: colocamos la yema curada en el pan, la carne con el queso, el bacon y la clara frita (como podéis ver falta la clara en mi hamburguesa, se me quemó)",
      "Cuando la tengáis, a por la mejor parte, a comer!"
    ],
    "consejo": ""
  },
  {
    "id": "rosti-de-patata-relleno",
    "nombre": "Rösti de patata relleno",
    "categoria": "principales",
    "fecha": "2024-09-09",
    "foto": "rosti-de-patata-relleno.jpg",
    "fotograma": "rosti-de-patata-relleno-video.jpg",
    "instagram": "https://www.instagram.com/p/C_tOd17oOHC/",
    "ingredientes": [
      "Patata",
      "Jamón",
      "Queso",
      "Mantequilla",
      "Pimienta negra",
      "Aceite de oliva",
      "Sal"
    ],
    "pasos": [
      "Pelamos y rallamos las patatas.",
      "Con la ayuda de un trapo escurrimos las patatas y le quitamos el agua (importante dedicarle algo de tiempo a este paso, cuánto mas escurrido quede mejor).",
      "Añadimos la sal, la pimienta negra y el aceite y removemos.",
      "Colocamos la mitad en una sartén previamente calentada con mantequilla y tapamos para que se cocine.",
      "Ponemos el queso y el jamón y cubrimos con el resto de la patata. Volvemos a tapar y dejamos unos minutos.",
      "Le damos la vuelta (como la tortilla) hasta conseguir que quede crujiente por ambos lados."
    ],
    "consejo": ""
  },
  {
    "id": "pasta-con-salmon-y-queso-feta-al-horno",
    "nombre": "Pasta con salmón y queso feta al horno",
    "categoria": "pasta",
    "fecha": "2024-09-02",
    "foto": "pasta-con-salmon-y-queso-feta-al-horno.jpg",
    "fotograma": "pasta-con-salmon-y-queso-feta-al-horno-video.jpg",
    "instagram": "https://www.instagram.com/p/C_bRBeMoFfq/",
    "ingredientes": [
      "Queso feta",
      "Tomates cherry",
      "Salmón",
      "Cebolla picada",
      "Cabeza de ajo",
      "Vuestra pasta favorita",
      "Cucharada de queso crema",
      "Pimienta negra",
      "Aceite de oliva",
      "Sal"
    ],
    "pasos": [
      "En una bandeja para horno colocamos el queso feta, los tomates cherry, la cabeza de ajo y la cebolla picada.",
      "Añadimos sal, pimienta negra y aceite y horneamos todo a 190-200º durante 10-15 minutos (tiene que quedar tostado como en el vídeo).",
      "Sacamos, colocamos parte del salmón y lo volvemos a meter en el horno por 5-10 minutos más.",
      "Con la ayuda de dos cucharas, mezclamos todo bien y añadimos el queso crema. La idea es conseguir una textura bien cremosa.",
      "Echamos la pasta sobre la mezcla y removemos. (importante guardar un poco del agua de cocción para poder añadirla en caso de que quede seco)",
      "Para decorar, te recomiendo colocar un cachito de salmón y rallar un poco de queso (por ejemplo Grana Padano)"
    ],
    "consejo": ""
  },
  {
    "id": "banana-bread",
    "nombre": "Banana bread",
    "categoria": "postres",
    "fecha": "2024-08-06",
    "foto": "banana-bread.jpg",
    "fotograma": "banana-bread-video.jpg",
    "instagram": "https://www.instagram.com/p/C-Vy4NmI1XI/",
    "ingredientes": [
      "3 plátanos",
      "2 huevos",
      "120gr de harina de avena",
      "1 sobre de levadura",
      "Esencia de vainilla",
      "Cuchara de miel",
      "1/2 tableta de chocolate negro",
      "Cuchara de aceite"
    ],
    "pasos": [
      "Pelamos y machacamos los plátanos.",
      "Añadimos los huevos, la harina de avena, la levadura, la esencia de vainilla y la miel (recomendable añadir los ingredientes uno a uno).",
      "Cuando tengamos la mezcla homogénea echamos el aceite.",
      "Por último, añadimos el chocolate troceado.",
      "Precalentamos el horno a 180ºC.",
      "Forramos el molde con papel de horno y añadimos la mezcla. Colocamos parte del chocolate por encima de la mezcla.",
      "Metemos en el horno a 180ºC durante 30 minutos."
    ],
    "consejo": ""
  },
  {
    "id": "pollo-al-curry",
    "nombre": "Pollo al curry",
    "categoria": "principales",
    "fecha": "2024-07-23",
    "foto": "pollo-al-curry.jpg",
    "fotograma": "pollo-al-curry-video.jpg",
    "instagram": "https://www.instagram.com/p/C9xIy4qoUbO/?img_index=1",
    "ingredientes": [
      "Pechugas de pollo",
      "Cebolla",
      "Zanahoria",
      "Anacardos",
      "Yogurt griego",
      "Leche de coco",
      "Tomate triturado",
      "Curry, garam masala, comino",
      "Pimentón dulce/picante",
      "Pimienta negra molida",
      "Sal",
      "Aceite de oliva",
      "Mantequilla (opcional)"
    ],
    "pasos": [
      "Lo primero que haremos será trocear el pollo y mezclarlo en un bol con las especias y yogurt. Lo mejor sería dejarlo unas horas en la nevera para que empape bien.",
      "En una sartén con aceite cocinamos el pollo a fuego fuerte (solo queremos sellarlo, no lo dejéis mucho rato que se seca). Lo reservamos en un bol.",
      "En la misma sartén (aprovechamos lo que queda en el fondo) cocinamos la cebolla y las zanahorias. Queremos que se cocinen muy bien asique paciencia. Cuando veamos que está todo bien cocinado añadimos las especias (curry, garam masala, comino, pimentón…) y removemos. Se hará una pasta, eso es lo que queremos conseguir. Veréis que bien huele toda la cocina :)",
      "Sobre esta pasta echaremos el tomate triturado y la leche de coco. Añadimos un puñado de anacardos y dejamos cocinar unos 10 minutos.",
      "Trituramos la salsa con una batidora y aquí va el truco de la receta. Lo pasaremos por un colador fino para que la salsa quede bien cremosa.",
      "Probamos la salsa y corregimos de sal en caso de que sea necesario.",
      "Mezclamos la salsa y el pollo y le damos un último hervor para que se mezclen bien todos los sabores. En este punto le podéis echar unos daditos de mantequilla, le da un toque a la salsa pero no es obligatorio."
    ],
    "consejo": "Si os sobra lo podéis congelar y queda perfecto. Eso si, al descongelarlo importante que lo calentéis en un cazo en el fuego, nada de micro."
  },
  {
    "id": "ensalada-de-tomate-queso-feta-y-fresas",
    "nombre": "Ensalada de tomate, queso feta y fresas",
    "categoria": "entrantes",
    "fecha": "2024-06-11",
    "foto": "ensalada-de-tomate-queso-feta-y-fresas.jpg",
    "fotograma": "ensalada-de-tomate-queso-feta-y-fresas-video.jpg",
    "instagram": "https://www.instagram.com/p/C8FUpztIzwI/",
    "ingredientes": [
      "Espinacas",
      "Tomate",
      "Fresas",
      "Queso feta",
      "Anacardos",
      "Crema de vinagre balsámico",
      "Aceite de oliva",
      "Sal"
    ],
    "pasos": [
      "Empezamos limpiando y troceando el tomate y las fresas.",
      "Colocamos las espinacas y después añadimos el resto de los ingredientes.",
      "Aliñamos al gusto. Importante mezclar bien.",
      "A gozarlooo ;)"
    ],
    "consejo": ""
  },
  {
    "id": "ensalada-de-gorgonzola-nectarina-y-jamon",
    "nombre": "Ensalada de gorgonzola, nectarina y jamón",
    "categoria": "entrantes",
    "fecha": "2024-06-04",
    "foto": "ensalada-de-gorgonzola-nectarina-y-jamon.jpg",
    "fotograma": "ensalada-de-gorgonzola-nectarina-y-jamon-video.jpg",
    "instagram": "https://www.instagram.com/p/C7zM8A9oiYb/",
    "ingredientes": [
      "Lechuga",
      "Nectarina",
      "Gorgonzola",
      "Jamón serrano",
      "Nueces",
      "Crema de vinagre balsámico",
      "Aceite de oliva",
      "Sal"
    ],
    "pasos": [
      "Empezamos troceando el queso gorgonzola y la nectarina.",
      "Colocamos la lechuga y después añadimos el resto de ingredientes",
      "Aliñamos al gusto. Importante mezclar bien. El queso le dará un toque bien cremoso a la ensalada.",
      "A gozarlooo ;)"
    ],
    "consejo": ""
  },
  {
    "id": "hummus-de-tomate-confitado-con-nachos-caseros",
    "nombre": "Hummus de tomate confitado con nachos caseros",
    "categoria": "entrantes",
    "fecha": "2024-05-21",
    "foto": "hummus-de-tomate-confitado-con-nachos-caseros.jpg",
    "fotograma": "hummus-de-tomate-confitado-con-nachos-caseros-video.jpg",
    "instagram": "https://www.instagram.com/p/C7PKc9wIXOz/",
    "ingredientes": [
      "Garbanzos cocidos",
      "Tomates cherry",
      "Dientes de ajo",
      "Tortillas de trigo",
      "1 cucharada mostaza a la antigua",
      "Zumo medio limón",
      "Ajo en polvo",
      "Pimentón dulce",
      "Pimienta negra",
      "Aceite de oliva",
      "Sal"
    ],
    "pasos": [
      "Con la ayuda de un colador empezamos escurriendo y limpiando los garbanzos, recomendable pasarlos por agua y dejarlos escurrir bien.",
      "Colocamos los garbanzos en un bol, añadimos el pimentón, la pimienta, el ajo en polvo y el aceite y lo removemos bien.",
      "Los esparcimos en una bandeja del horno y los cocinamos a 180º durante 10-15 minutos (tienen que quedar tostaditos). Guardamos algunos garbanzos para decorar.",
      "Empezamos con los tomates cherry. Los podemos preparar en el horno o en AirFrayer. Añadimos la sal, la pimienta, los dientes de ajo y el aceite y los cocinamos hasta que queden como en el vídeo.",
      "Nachos caseros: troceamos las tortillas de trigo y las sazonamos con pimienta, pimentón y aceite. Las colocamos en la bandeja y las horneamos hasta que queden tostados. También se pueden freír pero en el horno es más fit.",
      "Ahora preparamos el hummus. Trituramos: garbanzos, tomates cherry, dientes de ajo, mostaza a la antigua, jugo de limón y parte del aceite de los tomates cherry.",
      "Emplatamos: hummus, pimentón, aceite, garbanzos y los nachos caseros."
    ],
    "consejo": ""
  },
  {
    "id": "panuozzo-de-mortadela-y-burrata",
    "nombre": "Panuozzo de mortadela y burrata",
    "categoria": "principales",
    "fecha": "2024-05-16",
    "foto": "panuozzo-de-mortadela-y-burrata.jpg",
    "fotograma": "panuozzo-de-mortadela-y-burrata-video.jpg",
    "instagram": "https://www.instagram.com/p/C7CUg8ro9R3/",
    "ingredientes": [
      "Masa de pizza",
      "Burrata fresca",
      "Mortadela italiana",
      "Rúcula",
      "Tomates cherry",
      "Albahaca fresca",
      "Grana Padano",
      "Un puñado de anacardos",
      "Aceite de oliva",
      "Sal"
    ],
    "pasos": [
      "Empezamos preparando el pesto, lo podéis comprar hecho pero os recomiendo que lo hagáis. En un recipiente incluimos la albahaca, los anacardos, el grana padano, la sal y el aceite. Trituramos.",
      "Estiramos la masa como si fuéramos a hacer una pizza. Echamos un chorrito de aceite y lo movemos por una mitad. Colocamos papel de horno en el medio y doblamos.",
      "Introducimos la masa a máxima potencia en el horno durante unos pocos minutos. Importante que no se os queme :)",
      "Lo abrimos con mucho cuidado (estará muy caliente). Empezamos a montar el Panuozzo: pesto en la base, rúcula y la Burrata (aquí está toda la jugosidad del Panuozzo.",
      "Seguimos con los tomate cherry y la mortadela. Si queréis le podéis echar un poquito del aceite de los tomates confitados, le aportará mucho sabor.",
      "Troceamos y padentro."
    ],
    "consejo": ""
  },
  {
    "id": "espaguetis-con-curry-leche-de-coco-y-gambas",
    "nombre": "Espaguetis con curry, leche de coco y gambas",
    "categoria": "pasta",
    "fecha": "2024-05-14",
    "foto": "espaguetis-con-curry-leche-de-coco-y-gambas.jpg",
    "fotograma": "espaguetis-con-curry-leche-de-coco-y-gambas-video.jpg",
    "instagram": "https://www.instagram.com/p/C69OOcJK-UV/",
    "ingredientes": [
      "Spaghetti o Tagliatelle",
      "1 paquete de gambas congeladas (si podéis conseguir langostinos mejor)",
      "2 cebollas",
      "1 pimiento rojo",
      "3 dientes de ajo",
      "1 cachito de jengibre fresco",
      "Ralladura de 1 limón",
      "Zumo de medio limón",
      "Curry",
      "1 cucharadita de pimentón dulce",
      "1 cucharadita de pimentón picante",
      "Pimienta negra",
      "Concentrado de tomate",
      "2 cucharadas de tomate triturado",
      "2 cucharadas de yogur natural de coco",
      "1 bote de leche de coco",
      "Aceite de oliva",
      "Sal",
      "Cilantro fresco para decorar",
      "Sésamo para decorar"
    ],
    "pasos": [
      "Colocamos las gambas en un bol (mejor si las descongeláis con tiempo, yo andaba con prisas y no pude…) y añadimos el pimentón, la pimienta negra, el curry y un poco de aceite. Dejamos reposar un ratito.",
      "Cocinamos las gambas a fuego fuerte. Empezará a soltar un poco de agua pero no pasa nada, dejarlas hasta que se evapore y listo. Retiraremos la mitad de las gambas que luego utilizaremos para mezclar con la salsa y la pasta.",
      "En la misma sartén añadimos la cebolla y el pimiento, todo bien picadito.",
      "Pasados 15-20 minutos añadiremos el jengibre, el ajo, la ralladura de limón y el jugo de medio limón.",
      "Ahora toca añadir el concentrado de tomate. Este punto es clave. Es muy importante que cocinemos todo muy bien, la pasta que consigamos ahora será la base para una buena salsa.",
      "Echamos el tomate triturado, el yogur de coco y la leche de coco (si queréis hacerlo más sano se puede sustituir la leche de coco por más yogur pero la verdad es que le da un toque).",
      "Un último hervor y lo pasamos por la batidora. Aquí está la otra clave de la receta, a mí personalmente me gusta pasarlo por un colador fino, de esta forma conseguiremos más cremosidad en la salsa.",
      "Mezclamos con las gambas que hemos reservado y la pasta. Importante mover todo enérgicamente.",
      "Para decorar: cilantro y sésamo."
    ],
    "consejo": ""
  },
  {
    "id": "solomillo-al-roquefort",
    "nombre": "Solomillo al roquefort",
    "categoria": "principales",
    "fecha": "2024-03-24",
    "foto": "solomillo-al-roquefort.jpg",
    "fotograma": "solomillo-al-roquefort-video.jpg",
    "instagram": "https://www.instagram.com/p/C46Yd9coztC/",
    "ingredientes": [
      "Solomillo",
      "Cebolla",
      "Mantequilla",
      "Nata para cocinar",
      "Quesitos en porciones",
      "Queso roquefort",
      "Pimienta negra molida",
      "Sal",
      "Patatas"
    ],
    "pasos": [
      "Empezamos troceando el solomillo y sellándolo en la sartén con un poco de mantequilla. Retiramos y reservamos el solomillo.",
      "En la misma sartén cocinamos la cebolla para aprovechar todos los jugos de la carne.",
      "Cuando veamos que la cebolla esté bien pochadita añadimos la nata y los quesos. Dejamos cocinar a fuego bajo hasta que espese la salsa.",
      "Añadimos la carne y le damos un hervor rápido.",
      "Dejamos enfriar y lo metemos tapado a la nevera.",
      "A la hora de emplatar lo podemos acompañar con unas “pocas” patatas (fritas, al horno, cocidas…)."
    ],
    "consejo": ""
  },
  {
    "id": "pizza-calabria-con-crema-de-calabaza",
    "nombre": "Pizza calabria con crema de calabaza",
    "categoria": "principales",
    "fecha": "2024-01-26",
    "foto": "pizza-calabria-con-crema-de-calabaza.jpg",
    "fotograma": "pizza-calabria-con-crema-de-calabaza-video.jpg",
    "instagram": "https://www.instagram.com/p/C2k9Z00Igsl/",
    "ingredientes": [
      "1 masa de pizza",
      "200gr de calabaza",
      "2 dientes de ajo",
      "2 hojas de laurel",
      "Aceite de oliva",
      "Chorrito de vino blanco (opcional)",
      "Pimienta negra molida",
      "Sal",
      "Chorrito de nata",
      "Queso rallado (el que más os guste)",
      "Tiras de bacon",
      "Tomate seco en aceite",
      "Grana padano"
    ],
    "pasos": [
      "Empezamos estirando y dándole forma a la masa (si la compráis hecha con estirarla es suficiente)",
      "Preparamos la crema de calabaza. Para ello colocamos en una fuente la calabaza, el ajo, el laurel, el Aceite de oliva y el vino blanco.",
      "Añadimos la sal y la pimienta y lo horneamos a 180ºC hasta que veamos que la calabaza está blandita. También se puede hacer en el AirFrayer.",
      "Retiramos las hojas de laurel, añadimos el chorrito de nata y lo batimos hasta conseguir una crema homogénea.",
      "Montamos la pizza: colocamos la crema como base, el queso, el bacon y los tomates secos. Horneamos a máxima temperatura.",
      "Cuando saquemos la pizza del horno podemos añadir un poco del aceite de los tomates, le da un buen toque (opcional)"
    ],
    "consejo": ""
  },
  {
    "id": "fettuccine-a-la-carbonara",
    "nombre": "Fettuccine a la carbonara",
    "categoria": "pasta",
    "fecha": "2023-12-15",
    "foto": "fettuccine-a-la-carbonara.jpg",
    "fotograma": "fettuccine-a-la-carbonara-video.jpg",
    "instagram": "https://www.instagram.com/p/C04VIGZohfA/",
    "ingredientes": [
      "250gr de pasta fresca",
      "100gr de guanciale",
      "4 yemas de huevo",
      "Grana padano",
      "Pimienta negra molida",
      "Sal"
    ],
    "pasos": [
      "Troceamos el guanciale en tacos y lo cocinamos a fuego suave para que empiece a soltar la grasa (importante guardar el exceso de grasa ya que la utilizaremos a lo largo de la receta)",
      "Cocemos la pasta fresca y reservamos un poco del agua de cocción.",
      "En un bol colocamos las yemas, el queso rallado, la pimienta negra, una cucharada de la grasa del guanciale y una cucharada de agua de cocción. Mezclamos bien hasta conseguir una crema perfecta.",
      "Añadimos la pasta y removemos cuidadosamente. En caso de que sea necesario, se puede añadir un poco más de agua de cocción.",
      "Emplatamos y colocamos unas tiras de guanciale crujiente."
    ],
    "consejo": ""
  },
  {
    "id": "empanadillas-de-chocolate-y-platano",
    "nombre": "Empanadillas de chocolate y plátano",
    "categoria": "postres",
    "fecha": "2023-12-12",
    "foto": "empanadillas-de-chocolate-y-platano.jpg",
    "fotograma": "empanadillas-de-chocolate-y-platano-video.jpg",
    "instagram": "https://www.instagram.com/p/C0xKhKmoxRz/",
    "ingredientes": [
      "Masa para empanadillas",
      "Chocolate negro 70%",
      "Plátano",
      "Azúcar glas"
    ],
    "pasos": [
      "Recomendable sacar de la nevera la masa de las empanadillas 10 minutos antes de empezar con la receta (de esta forma es más cómodo trabajar la masa)",
      "Pelamos y troceamos el plátano.",
      "Troceamos las onzas de chocolate. Mejor si se hacen trozos pequeños para que sea más fácil rellenar las empanadillas.",
      "Introducimos el chocolate y el plátano en el centro de la masa y cerramos con la ayuda de un tenedor.",
      "Metemos en el horno a 200ºC durante 15 minutos.",
      "Decoramos con azúcar glas y chocolate en polvo."
    ],
    "consejo": ""
  },
  {
    "id": "ensalada-de-otono-con-calabaza-y-queso-de-cabra",
    "nombre": "Ensalada de otoño con calabaza y queso de cabra",
    "categoria": "entrantes",
    "fecha": "2023-12-10",
    "foto": "ensalada-de-otono-con-calabaza-y-queso-de-cabra.jpg",
    "fotograma": "ensalada-de-otono-con-calabaza-y-queso-de-cabra-video.jpg",
    "instagram": "https://www.instagram.com/p/C0r-JXxof4M/",
    "ingredientes": [
      "Calabaza",
      "Rulo de queso de cabra",
      "1/2 granada",
      "Puñado de frutos secos",
      "Miel",
      "Vinagre balsámico",
      "Ajo en polvo",
      "Pimienta negra molida",
      "Sal",
      "Aceite de oliva"
    ],
    "pasos": [
      "Troceamos la calabaza en dados y la colocamos en una bandeja de horno. Añadimos la sal, la pimienta, el ajo molido y el Aceite de oliva. Metemos en el horno a 200ºC durante 30 minutos.",
      "Preparamos la vinagreta en un bol. Añadimos el Aceite de oliva, el vinagre balsámico y la cucharada de miel. Importante mezclar enérgicamente.",
      "Colocamos la calabaza calentita junto al queso de cabra para que se empiece a derretir.",
      "Añadimos la granada y los frutos secos, esto le aporta el toque fresco y crujiente a la ensalada.",
      "Aliñamos con la vinagreta y removemos para que se mezclen todos los sabores."
    ],
    "consejo": ""
  },
  {
    "id": "sandwich-omelette",
    "nombre": "Sándwich omelette",
    "categoria": "entrantes",
    "fecha": "2023-12-07",
    "foto": "sandwich-omelette.jpg",
    "fotograma": "sandwich-omelette-video.jpg",
    "instagram": "https://www.instagram.com/p/C0kNngIImTk/",
    "ingredientes": [
      "2 huevos",
      "Pan brioche",
      "Jamón serrano",
      "Queso en lonchas",
      "Cebolla caramelizada",
      "Semillas de sésamo (opcional)",
      "Pimienta negra molida",
      "Sal",
      "Aceite de oliva"
    ],
    "pasos": [
      "Batimos dos huevos con una pizca de sal y los cocinamos a fuego medio.",
      "Colocamos las rebanadas de pan y le damos la vuelta.",
      "Ponemos los quesos, el jamón y la cebolla y añadimos pimienta molida.",
      "Plegamos los bordes y tostamos el sándwich por ambas partes."
    ],
    "consejo": ""
  },
  {
    "id": "hojaldre-de-queso-y-esparragos-trigueros",
    "nombre": "Hojaldre de queso y espárragos trigueros",
    "categoria": "entrantes",
    "fecha": "2023-05-28",
    "foto": "hojaldre-de-queso-y-esparragos.jpg",
    "fotograma": "hojaldre-de-queso-y-esparragos-video.jpg",
    "instagram": "https://www.instagram.com/p/CszLQKDoshg/",
    "ingredientes": [
      "1 masa de hojaldre",
      "Una docena de espárragos trigueros",
      "1 cebolla",
      "60gr de queso de cabra",
      "50ml de nata de cocinar",
      "100gr de queso crema",
      "6 lonchas de jamón serrano",
      "1 huevo",
      "Lascas queso parmesano",
      "Ralladura de limón",
      "Perejil",
      "Cebollino",
      "Pimienta negra molida",
      "Sal",
      "Aceite de oliva"
    ],
    "pasos": [
      "Estiramos la masa, la pinchamos con un tenedor y pincelamos los bordes con huevo. Metemos en el horno a 180ºC durante 5 minutos.",
      "Mezclamos el queso de cabra, el queso crema, la nata, el perejil, el cebollino y la ralladura de limón.",
      "Extendemos la mezcla sobre el hojaldre horneado.",
      "Limpiamos los espárragos trigueros y los cocemos durante 5 minutos.",
      "Repartimos la cebolla pochada y los espárragos trigueros sobre la mezcla.",
      "Echamos las lascas de queso parmesano, ralladura de limón y la pimienta y horneamos a 180ºC hasta que se derrita.",
      "Lo sacamos del horno y colocamos el jamón serrano."
    ],
    "consejo": ""
  },
  {
    "id": "pasta-fresca-con-pesto-y-tomates-cherry",
    "nombre": "Pasta fresca con pesto y tomates cherry",
    "categoria": "pasta",
    "fecha": "2023-05-22",
    "foto": "pasta-fresca-con-pesto.jpg",
    "fotograma": "pasta-fresca-con-pesto-video.jpg",
    "instagram": "https://www.instagram.com/p/Csju4m8o-v1/",
    "ingredientes": [
      "300gr de pasta fresca al huevo",
      "Albahaca",
      "Grana Padano rallado",
      "Un puñado de anacardos",
      "250gr de tomates cherry",
      "Orégano",
      "Pimienta negra molida",
      "Sal",
      "Aceite de oliva"
    ],
    "pasos": [
      "En un recipiente incluimos la albahaca, los anacardos, el queso rallado, la sal y el Aceite de oliva. Trituramos.",
      "Calentamos una sartén con aceite, añadimos los tomates cherry, el orégano, la pimienta y la sal y lo dejamos cocinar a fuego medio hasta que se ablanden.",
      "Cocemos la pasta en abundante agua con sal. Reservamos parte del agua.",
      "Escurrimos la pasta y la añadimos a los tomates cherry.",
      "Echamos un poco de agua de la cocción y removemos.",
      "Echamos el pesto y el queso rallado en la sartén y revolvemos hasta que esté todo integrado.",
      "Emplatamos y decoramos con más queso rallado y unas gotitas de pesto."
    ],
    "consejo": ""
  },
  {
    "id": "risotto-de-setas-y-portobello",
    "nombre": "Risotto de setas y portobello",
    "categoria": "pasta",
    "fecha": "2023-05-15",
    "foto": "risotto-de-setas-y-portobello.jpg",
    "fotograma": "risotto-de-setas-y-portobello-video.jpg",
    "instagram": "https://www.instagram.com/p/CsRtnTlI7ns/",
    "ingredientes": [
      "1 vaso de arroz redondo",
      "2 chalotas",
      "1 litro de caldo de verduras",
      "8 champiñones portobello",
      "Un puñado de setas",
      "Grana Padano rallado",
      "1 vaso de vino blanco",
      "Mantequilla",
      "Perejil",
      "Pimienta negra molida",
      "Sal",
      "Aceite de oliva"
    ],
    "pasos": [
      "Troceamos el perejil, las chalotas, los champiñones y las setas.",
      "En una sartén cocinamos las chalotas con un poco de sal para que se ablanden.",
      "En una sartén ponemos las setas y los champiñones hasta que se reduzcan y tengan un color tostado.",
      "Mezclamos las chalotas y las setas y rehogamos el arroz.",
      "Echamos el vino blanco y lo cocinamos a fuego fuerte para que se evapore el alcohol.",
      "En una cazuela calentamos el caldo de verduras y lo vamos añadiendo poco a poco al arroz. Es importante no dejar de remover.",
      "Cuando el arroz esté a nuestro gusto añadimos los tacos de mantequilla, el queso rallado y el perejil.",
      "Emplatamos y rallamos un poco más de queso por encima."
    ],
    "consejo": ""
  },
  {
    "id": "tostadas-de-ajo-y-tomate-cherry-confitado-mozzarel",
    "nombre": "Tostadas de ajo y tomate cherry confitado, mozzarella y jamón",
    "categoria": "entrantes",
    "fecha": "2023-03-24",
    "foto": "tostadas-de-ajo-y-tomate-cherry.jpg",
    "fotograma": "tostadas-de-ajo-y-tomate-cherry-video.jpg",
    "instagram": "https://www.instagram.com/p/CqL0Zs6I9ZO/",
    "ingredientes": [
      "Hogaza de pan",
      "250gr de tomates cherry",
      "1 cabeza de ajo",
      "1 mozzarella di bufala",
      "100gr de jamón serrano",
      "Orégano",
      "Aceite de oliva",
      "Sal y pimienta al gusto"
    ],
    "pasos": [
      "Separamos y pelamos los dientes de ajo.",
      "Ponemos en una fuente apta para el horno: los ajos, los tomates cherry, el Aceite de oliva, el orégano, la sal y la pimienta.",
      "Precalentamos el horno a 180°C e introducimos la fuente durante 30 minutos. Removemos pasados 15 minutos.",
      "Troceamos la hogaza de pan en rebanadas y las tostamos en la sartén con un chorrito de aceite.",
      "Aplastamos los dientes de ajo creando una fina capa sobre la tostada y colocamos los tomates cherry.",
      "Troceamos la mozzarella con las manos y la repartimos por la tostada.",
      "Ponemos el jamón y decoramos con un chorrito del aceite de los ajos confitados."
    ],
    "consejo": ""
  }
];

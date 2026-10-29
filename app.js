(function () {
  'use strict';

  var RECETAS = window.RECETAS || [];
  var NOMBRES_CATEGORIA = {
    todas: 'Todas',
    entrantes: 'Entrantes',
    principales: 'Principales',
    sopas: 'Sopas y cremas',
    postres: 'Postres'
  };
  var ORDEN_CATEGORIAS = ['entrantes', 'principales', 'sopas', 'postres'];

  var estado = { texto: '', categoria: 'todas', scrollInicio: 0 };

  var $ = function (id) { return document.getElementById(id); };
  var vistaInicio = $('vista-inicio');
  var vistaReceta = $('vista-receta');
  var buscador = $('buscar');
  var categorias = $('categorias');
  var rejilla = $('rejilla');
  var contador = $('contador');
  var vacio = $('vacio');
  var receta = $('receta');

  function escapar(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function normalizar(s) {
    return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  }

  /* ---------- Inicio ---------- */

  function pintarCategorias() {
    var presentes = ORDEN_CATEGORIAS.filter(function (c) {
      return RECETAS.some(function (r) { return r.categoria === c; });
    });
    // Solo mostramos los botones de categorías que tienen recetas
    if (presentes.length < 2) { categorias.hidden = true; return; }
    categorias.hidden = false;
    categorias.innerHTML = ['todas'].concat(presentes).map(function (c) {
      return '<button type="button" class="chip" data-cat="' + c + '" aria-pressed="' +
        (c === estado.categoria) + '">' + NOMBRES_CATEGORIA[c] + '</button>';
    }).join('');
  }

  function filtrar() {
    var q = normalizar(estado.texto.trim());
    return RECETAS.filter(function (r) {
      if (estado.categoria !== 'todas' && r.categoria !== estado.categoria) return false;
      if (!q) return true;
      var texto = r.nombre + ' ' + r.ingredientes.join(' ') + ' ' + (NOMBRES_CATEGORIA[r.categoria] || '');
      return normalizar(texto).indexOf(q) !== -1;
    });
  }

  function pintarRejilla() {
    var lista = filtrar();
    contador.textContent = lista.length === 1 ? '1 receta' : lista.length + ' recetas';
    vacio.hidden = lista.length > 0;
    rejilla.hidden = lista.length === 0;
    rejilla.innerHTML = lista.map(function (r) {
      return '<a class="card" href="#/receta/' + encodeURIComponent(r.id) + '">' +
        '<img class="card-photo" src="' + escapar(r.foto) + '" alt="" loading="lazy" width="720" height="480">' +
        '<span class="card-name">' + escapar(r.nombre) + '</span></a>';
    }).join('');
  }

  buscador.addEventListener('input', function () {
    estado.texto = buscador.value;
    pintarRejilla();
  });

  categorias.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-cat]');
    if (!b) return;
    estado.categoria = b.getAttribute('data-cat');
    pintarCategorias();
    pintarRejilla();
  });

  $('ver-todas').addEventListener('click', function () {
    estado.texto = '';
    estado.categoria = 'todas';
    buscador.value = '';
    pintarCategorias();
    pintarRejilla();
  });

  /* ---------- Receta abierta ---------- */

  function pintarReceta(r) {
    var foto = r.foto
      ? '<img class="media" src="' + escapar(r.foto) + '" alt="' + escapar(r.nombre) + '">'
      : '';
    var video = r.fotograma
      ? '<a class="video" href="' + escapar(r.instagram) + '" target="_blank" rel="noopener" aria-label="Ver el vídeo de esta receta en Instagram">' +
          '<img src="' + escapar(r.fotograma) + '" alt="">' +
          '<span class="play"><svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg></span></a>'
      : '';
    var consejo = r.consejo
      ? '<div class="tip"><strong>Consejo de Iuki:</strong> ' + escapar(r.consejo) + '</div>'
      : '';

    receta.innerHTML =
      '<span class="badge">' + escapar(NOMBRES_CATEGORIA[r.categoria] || '') + '</span>' +
      '<div class="detail">' +
        '<div>' + foto +
          '<div class="pad">' +
            '<h2 tabindex="-1" id="titulo-receta">' + escapar(r.nombre) + '</h2>' +
            '<p class="label">Ingredientes</p>' +
            '<ul class="ingredients">' + r.ingredientes.map(function (i) { return '<li>' + escapar(i) + '</li>'; }).join('') + '</ul>' +
          '</div>' +
        '</div>' +
        '<div>' + video +
          '<div class="pad">' +
            '<p class="label">Paso a paso</p>' +
            '<ol class="steps">' + r.pasos.map(function (p, i) {
              return '<li><span class="num" aria-hidden="true">' + (i + 1) + '</span><span>' + escapar(p) + '</span></li>';
            }).join('') + '</ol>' +
            consejo +
            '<a class="btn-ig" href="' + escapar(r.instagram) + '" target="_blank" rel="noopener">Ver el vídeo en Instagram</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<a class="back back-bottom" href="#/">' +
        '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="M11 6l-6 6 6 6"/></svg>' +
        'Volver a todas las recetas</a>';
  }

  /* ---------- Navegación (funciona con el botón "atrás" del móvil) ---------- */

  function navegar() {
    var m = location.hash.match(/^#\/receta\/(.+)$/);
    var r = m && RECETAS.filter(function (x) { return x.id === decodeURIComponent(m[1]); })[0];

    if (r) {
      if (!vistaInicio.hidden) estado.scrollInicio = window.scrollY;
      pintarReceta(r);
      vistaInicio.hidden = true;
      vistaReceta.hidden = false;
      document.title = r.nombre + ' · Las recetas de Iuki';
      window.scrollTo(0, 0);
      var t = $('titulo-receta');
      if (t) t.focus({ preventScroll: true });
    } else {
      vistaReceta.hidden = true;
      vistaInicio.hidden = false;
      document.title = 'Las recetas de Iuki';
      window.scrollTo(0, estado.scrollInicio);
    }
  }

  window.addEventListener('hashchange', navegar);

  pintarCategorias();
  pintarRejilla();
  navegar();
})();

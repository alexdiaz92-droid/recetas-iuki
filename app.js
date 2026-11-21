(function () {
  'use strict';

  var RECETAS = window.RECETAS || [];
  var NOMBRES_CATEGORIA = {
    todas: 'Todas',
    entrantes: 'Entrantes',
    pasta: 'Pasta y arroz',
    principales: 'Principales',
    cuchara: 'De cuchara',
    postres: 'Postres'
  };
  var ORDEN_CATEGORIAS = ['entrantes', 'pasta', 'principales', 'cuchara', 'postres'];
  var PERFIL = 'https://www.instagram.com/cocina.iuki/';
  var MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

  function fechaLarga(f) {
    var p = String(f || '').split('-');
    if (p.length !== 3) return '';
    return parseInt(p[2], 10) + ' de ' + MESES[parseInt(p[1], 10) - 1] + ' de ' + p[0];
  }

  // Si una imagen no está en la carpeta img/, se busca en la raíz del sitio
  var PLAN_B = ' onerror="this.onerror=null;this.src=this.src.replace(\'/img/\',\'/\')"';

  var ICONO_PLATO = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="13" r="7"/><circle cx="12" cy="13" r="3.5"/><path d="M3 4v5M5 4v5M4 9v11M20 4c-1.5 1-2 3-2 5h2v11"/></svg>';

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
        (r.foto
          ? '<img class="card-photo" src="' + escapar(r.foto) + '" alt="" loading="lazy" width="720" height="480"' + PLAN_B + '>'
          : '<span class="card-photo card-nophoto">' + ICONO_PLATO + '</span>') +
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
      ? '<img class="media" src="' + escapar(r.foto) + '" alt="' + escapar(r.nombre) + '"' + PLAN_B + '>'
      : '';
    var enlace = r.instagram || PERFIL;
    var video = r.fotograma
      ? '<div class="video-wrap"><a class="video" href="' + escapar(enlace) + '" target="_blank" rel="noopener" aria-label="Ver el vídeo de esta receta en Instagram">' +
          '<img src="' + escapar(r.fotograma) + '" alt="" loading="lazy"' + PLAN_B + '>' +
          '<span class="play"><svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg></span></a></div>'
      : '';
    var mensaje = 'Mira esta receta de Iuki: ' + r.nombre + '\n' + location.href;
    var whatsapp = 'https://wa.me/?text=' + encodeURIComponent(mensaje);
    var consejo = r.consejo
      ? '<div class="tip"><strong>Consejo de Iuki:</strong> ' + escapar(r.consejo) + '</div>'
      : '';

    receta.innerHTML =
      '<div class="recipe-top">' +
        '<span class="badge">' + escapar(NOMBRES_CATEGORIA[r.categoria] || '') + '</span>' +
        '<a class="btn-wa" href="' + escapar(whatsapp) + '" target="_blank" rel="noopener">' +
          '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.6-4.3A8.5 8.5 0 1 1 20.5 11.5z"/></svg>' +
          'Compartir por WhatsApp</a>' +
      '</div>' +
      '<div class="detail">' +
        '<div>' + foto +
          '<div class="pad">' +
            '<h2 tabindex="-1" id="titulo-receta">' + escapar(r.nombre) + '</h2>' +
            '<p class="label">Ingredientes</p>' +
            '<ul class="ingredients">' + r.ingredientes.map(function (i) {
              return /:$/.test(i) ? '<li class="sub">' + escapar(i.slice(0, -1)) + '</li>' : '<li>' + escapar(i) + '</li>';
            }).join('') + '</ul>' +
          '</div>' +
        '</div>' +
        '<div>' + video +
          '<div class="pad">' +
            '<p class="label">Paso a paso</p>' +
            (r.pasos.length
              ? '<ol class="steps">' + r.pasos.map(function (p, i) {
                  return '<li><span class="num" aria-hidden="true">' + (i + 1) + '</span><span>' + escapar(p) + '</span></li>';
                }).join('') + '</ol>'
              : '<p class="no-steps">Para esta receta, Iuki explica los pasos en el vídeo.</p>') +
            (r.pasosDelVideo ? '<p class="fecha">Pasos resumidos de lo que cuenta Iuki en el vídeo.</p>' : '') +
            consejo +
            '<a class="btn-ig" href="' + escapar(enlace) + '" target="_blank" rel="noopener">' +
              (r.instagram ? 'Ver el vídeo en Instagram' : 'Ver los vídeos de Iuki en Instagram') + '</a>' +
            (!r.instagram && r.fecha ? '<p class="fecha">Vídeo publicado el ' + fechaLarga(r.fecha) + '.</p>' : '') +
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

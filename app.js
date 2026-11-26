(function () {
  'use strict';

  /*
    Portada: buscador y categorías.
    Cada receta tiene su propia página en /recetas/<id>/, que genera build.mjs
    al publicar. Este archivo solo se encarga de la portada.
  */

  // Los enlaces antiguos (/#/receta/<id>) llevan a la página nueva de la receta
  var antigua = location.hash.match(/^#\/receta\/(.+)$/);
  if (antigua) {
    location.replace('/recetas/' + antigua[1] + '/');
    return;
  }

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

  // Si una foto no está donde dice recetas.js, se busca en la otra carpeta (raíz o img/)
  window.iukiFoto = function (img) {
    img.onerror = null;
    img.src = img.src.indexOf('/img/') !== -1
      ? img.src.replace('/img/', '/')
      : img.src.replace(/\/([^\/]+)$/, '/img/$1');
  };
  var PLAN_B = ' onerror="iukiFoto(this)"';

  var ICONO_PLATO = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="13" r="7"/><circle cx="12" cy="13" r="3.5"/><path d="M3 4v5M5 4v5M4 9v11M20 4c-1.5 1-2 3-2 5h2v11"/></svg>';

  var estado = { texto: '', categoria: 'todas' };

  var $ = function (id) { return document.getElementById(id); };
  var buscador = $('buscar');
  var categorias = $('categorias');
  var rejilla = $('rejilla');
  var contador = $('contador');
  var vacio = $('vacio');

  function escapar(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function normalizar(s) {
    return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  }

  function rutaFoto(f) {
    return '/' + String(f).replace(/^\//, '');
  }

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
      return '<a class="card" href="/recetas/' + encodeURIComponent(r.id) + '/">' +
        (r.foto
          ? '<img class="card-photo" src="' + escapar(rutaFoto(r.foto)) + '" alt="" loading="lazy" width="720" height="480"' + PLAN_B + '>'
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

  pintarCategorias();
  pintarRejilla();
})();

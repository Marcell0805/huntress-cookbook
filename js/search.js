(function () {
  'use strict';

  var fuse = null;
  var modal = null;

  function esc(t) {
    var d = document.createElement('div');
    d.textContent = t == null ? '' : String(t);
    return d.innerHTML;
  }

  function getNavScope() {
    return document.body.getAttribute('data-nav-scope') || 'landing';
  }

  function statusLabel(s) {
    if (s === 'approved') return 'Huntress Approved';
    if (s === 'tweaking') return 'Needs Tweaking';
    if (s === 'testing') return 'In Testing';
    return 'Untested';
  }

  function resolveSearchHref(url) {
    var scope = getNavScope();
    if (url.indexOf('recipes/') === 0) {
      var slugFile = url.slice(8);
      if (scope === 'recipe') return slugFile;
      if (scope === 'chapter') return '../' + url;
      return url;
    }
    if (url.indexOf('chapters/') === 0) {
      var chapterFile = url.slice(9);
      if (scope === 'chapter') return chapterFile;
      if (scope === 'recipe') return '../chapters/' + chapterFile;
      return url;
    }
    return url;
  }

  function initFuse() {
    var index = window.HUNTRESS_SEARCH_INDEX || [];
    if (typeof Fuse === 'undefined') return;
    fuse = new Fuse(index, {
      keys: ['title', 'text', 'section', 'tags'],
      threshold: 0.4,
      includeScore: true,
      ignoreLocation: true
    });
  }

  function renderResults(query, container) {
    if (!fuse || !query.trim()) {
      container.innerHTML = '<p class="search-hint">Type to search recipes, chapters, ingredients…</p>';
      return;
    }
    var results = fuse.search(query, { limit: 14 });
    if (!results.length) {
      container.innerHTML = '<p class="search-empty">No results. Try: chicken, soup, braai, gluten free.</p>';
      return;
    }
    var html = '<ul class="search-results">';
    results.forEach(function (r) {
      var item = r.item;
      var href = resolveSearchHref(item.url);
      var meta = esc(item.section);
      if (item.status) meta += ' · ' + statusLabel(item.status);
      html += '<li><a href="' + esc(href) + '">' +
        '<span class="search-result-title">' + esc(item.title) + '</span>' +
        '<span class="search-result-meta">' + meta + '</span>' +
        '</a></li>';
    });
    html += '</ul>';
    container.innerHTML = html;
  }

  function ensureModal() {
    if (modal) return modal;
    modal = document.createElement('div');
    modal.id = 'search-modal';
    modal.className = 'search-modal';
    modal.hidden = true;
    modal.innerHTML =
      '<div class="search-modal-backdrop" data-close></div>' +
      '<div class="search-modal-card" role="dialog" aria-label="Search cookbook">' +
        '<input type="search" id="search-modal-input" class="search-modal-input" placeholder="Search cookbook… (Ctrl+K)" autocomplete="off">' +
        '<div id="search-modal-results" class="search-modal-results"></div>' +
        '<p class="search-modal-footer no-print">Local search · no server required</p>' +
      '</div>';
    document.body.appendChild(modal);
    modal.querySelector('[data-close]').addEventListener('click', close);
    var input = document.getElementById('search-modal-input');
    input.addEventListener('input', function () {
      renderResults(input.value, document.getElementById('search-modal-results'));
    });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
    return modal;
  }

  function open() {
    ensureModal();
    modal.hidden = false;
    var input = document.getElementById('search-modal-input');
    input.value = '';
    renderResults('', document.getElementById('search-modal-results'));
    setTimeout(function () { input.focus(); }, 50);
  }

  function close() {
    if (modal) modal.hidden = true;
  }

  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      open();
    }
  });

  window.HuntressCookbookSearch = { open: open, close: close };

  function initLandingSearch() {
    var landing = document.getElementById('landing-search');
    if (!landing) return;
    landing.addEventListener('focus', function () { open(); landing.blur(); });
    landing.addEventListener('click', function () { open(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initFuse();
      initLandingSearch();
    });
  } else {
    initFuse();
    initLandingSearch();
  }
})();

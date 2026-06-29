(function () {
  var ICONS = {
    egg: '\uD83E\uDD5A',
    bowl: '\uD83E\uDD63',
    sauce: '\uD83C\uDF6F',
    warm: '\uD83C\uDF72',
    clock: '\u23F1',
    salad: '\uD83E\uDD57',
    soup: '\uD83C\uDF72',
    skewer: '\uD83C\uDF62',
    chicken: '\uD83C\uDF57',
    beef: '\uD83E\uDD69',
    fish: '\uD83D\uDC1F',
    sa: '\uD83C\uDDFF\uD83C\uDDE6',
    fire: '\uD83D\uDD25',
    potato: '\uD83E\uDD54',
    peach: '\uD83C\uDF51',
    home: '\uD83C\uDFE0',
    chocolate: '\uD83C\uDF6B',
    ice: '\uD83C\uDF68',
    box: '\uD83E\uDDF3',
    picnic: '\uD83C\uDFD5',
    drink: '\u2615'
  };

  function esc(text) {
    var d = document.createElement('div');
    d.textContent = text == null ? '' : String(text);
    return d.innerHTML;
  }

  function asArray(val) {
    if (Array.isArray(val)) return val;
    if (val == null || val === '') return [];
    return [String(val)];
  }

  var GLUTEN_WATCH_FOODS = ['Biltong', 'Droëwors'];

  function renderFoodList(items, glutenNote) {
    var html = '<ul class="recipe-list">';
    items.forEach(function (item) { html += '<li>' + esc(item) + '</li>'; });
    html += '</ul>';
    if (glutenNote && items.some(function (item) { return GLUTEN_WATCH_FOODS.indexOf(item) !== -1; })) {
      html += '<p class="dietary-food-note">' + esc(glutenNote) + '</p>';
    }
    return html;
  }

  function getRecipe(slug) {
    return window.HUNTRESS_COOKBOOK && HUNTRESS_COOKBOOK.recipes[slug];
  }

  function normalizeRecipeName(name) {
    return String(name).toLowerCase().replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function findRecipeByName(name) {
    var recipes = HUNTRESS_COOKBOOK.recipes;
    var key = normalizeRecipeName(name);
    for (var slug in recipes) {
      if (normalizeRecipeName(recipes[slug].name) === key) return recipes[slug];
    }
    for (var slug2 in recipes) {
      var rname = recipes[slug2].name;
      if (rname.indexOf(name) === 0 || name.indexOf(rname) === 0) {
        return recipes[slug2];
      }
      var rkey = normalizeRecipeName(rname);
      if (rkey.indexOf(key) === 0 || key.indexOf(rkey) === 0) {
        return recipes[slug2];
      }
    }
    return null;
  }

  function statusLabel(status) {
    if (status === 'approved') return { cls: 'status-approved', text: 'Huntress Approved' };
    if (status === 'tweaking') return { cls: 'status-tweaking', text: 'Needs Tweaking' };
    if (status === 'testing') return { cls: 'status-testing', text: 'In Testing' };
    return { cls: 'status-untested', text: 'Untested' };
  }

  function recipeHref(slug) {
    return '../recipes/' + slug + '.html';
  }

  var CHAPTER_BACK = {
    breakfast: { href: '../chapters/breakfast.html', label: 'Breakfast' },
    lunch: { href: '../chapters/lunch.html', label: 'Lunch' },
    dinner: { href: '../chapters/dinner.html', label: 'Dinner' },
    braai: { href: '../chapters/braai.html', label: 'Braai' },
    soups: { href: '../chapters/soups.html', label: 'Soups & Comfort Foods' },
    desserts: { href: '../chapters/desserts.html', label: 'Desserts' },
    snacks: { href: '../chapters/snacks.html', label: 'Snacks & Picnic Foods' },
    drinks: { href: '../chapters/drinks.html', label: 'Drinks' },
    'approved-meals': { href: '../chapters/approved-meals.html', label: 'Approved Huntress Meals' }
  };

  var COOKBOOK_NAV = [
    { id: 'introduction', num: 1, file: 'introduction.html', label: 'Introduction', available: true },
    { id: 'dietary-guide', num: 2, file: 'dietary-guide.html', label: 'Huntress Dietary Guide', available: true },
    { id: 'pantry-essentials', num: 3, file: 'pantry-essentials.html', label: 'Pantry Essentials', available: true },
    { id: 'breakfast', num: 4, file: 'breakfast.html', label: 'Breakfast Recipes', available: true },
    { id: 'lunch', num: 5, file: 'lunch.html', label: 'Lunch Recipes', available: true },
    { id: 'dinner', num: 6, file: 'dinner.html', label: 'Dinner Recipes', available: true },
    { id: 'braai', num: 7, file: 'braai.html', label: 'Braai Recipes', available: true },
    { id: 'soups', num: 8, file: 'soups.html', label: 'Soups & Comfort Foods', available: true },
    { id: 'desserts', num: 9, file: 'desserts.html', label: 'Desserts', available: true },
    { id: 'snacks', num: 10, file: 'snacks.html', label: 'Snacks & Picnic Foods', available: true },
    { id: 'drinks', num: 11, file: 'drinks.html', label: 'Drinks', available: true },
    { id: 'special-occasions', num: 12, file: null, label: 'Special Occasion Meals', available: false },
    { id: 'approved-meals', num: 13, file: 'approved-meals.html', label: 'Approved Huntress Meals', available: true },
    { id: 'improvement-notes', num: 14, file: null, label: 'Recipe Improvement Notes', available: false },
    { id: 'future-recipes', num: 15, file: 'future-recipes.html', label: 'Future Recipes To Try', available: true }
  ];

  var CHAPTER_PAGES = COOKBOOK_NAV.filter(function (item) {
    return item.available && item.file;
  });

  var CHAPTER_SIDEBAR_NOTES = {
    breakfast: { title: '\u2615 BREAKFAST NOTES', text: 'Breakfast sets the tone for the day. These meals are nourishing, gentle on the body, and designed to be gluten-friendly, onion-free, and IBS-conscious.' },
    lunch: { title: '\uD83E\uDD57 LUNCH NOTES', text: 'Fresh bowls, gentle soups, and picnic-friendly plates for a calm midday pause.' },
    dinner: { title: '\uD83C\uDF7D DINNER NOTES', text: 'Satisfying dinners for the end of the day \u2014 gluten-free, onion-free, and South African friendly where it counts.' },
    braai: { title: '\uD83D\uDD25 BRAAI NOTES', text: 'Fire, friends, and flavour \u2014 braai classics that stay gluten-free, onion-free, and Huntress-safe.' },
    soups: { title: '\uD83C\uDF72 COMFORT NOTES', text: 'Gentle soups and familiar comfort classics for rainy afternoons and slow evenings.' },
    desserts: { title: '\uD83C\uDF70 DESSERT NOTES', text: 'Gluten-free treats and no-bake favourites \u2014 because every Huntress deserves something sweet.' },
    snacks: { title: '\uD83E\uDDF3 SNACK NOTES', text: 'Light bites for trails, picnics, and those in-between moments \u2014 all Huntress-safe.' },
    drinks: { title: '\u2615 DRINK NOTES', text: 'Comfort drinks, smoothies, coolers and everyday beverages for the Huntress.' },
    'approved-meals': { title: '\u2665 APPROVED MEALS', text: 'Tested favourites and recipes currently being refined to Huntress perfection.' },
    'future-recipes': { title: '\u2728 FUTURE IDEAS', text: 'Recipes to explore when you are ready for the next kitchen adventure.' }
  };
  var SVG_BACK = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>';
  var SVG_HOME = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>';
  var SVG_PRINT = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>';
  var SVG_SEARCH = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>';
  var SVG_ANDROID = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>';
  var SVG_MENU = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>';

  var MOBILE_LAYOUT_QUERY = '(max-width: 900px)';

  function getMobileAppConfig() {
    var settings = window.HUNTRESS_COOKBOOK && HUNTRESS_COOKBOOK.settings;
    var mobile = settings && settings.mobileApp;
    if (!mobile || mobile.enabled === false) return null;
    return mobile;
  }

  function apkDownloadHref() {
    var mobile = getMobileAppConfig();
    if (mobile && mobile.fallbackDownloadUrl) {
      return mobile.fallbackDownloadUrl;
    }
    var scope = getNavScope();
    var prefix = scope === 'recipe' || scope === 'chapter' ? '../' : '';
    return prefix + 'downloads/huntress-cookbook.apk';
  }

  function renderApkDownloadHtml(wrapperClass, linkClass) {
    var mobile = getMobileAppConfig();
    if (!mobile) return '';
    var label = mobile.label || 'Download the app';
    return '<div class="' + wrapperClass + ' no-print">' +
      '<a href="' + esc(apkDownloadHref()) + '" class="' + linkClass + '" download>' +
        SVG_ANDROID +
        '<span>' + esc(label) + '</span>' +
      '</a>' +
    '</div>';
  }

  function closeMobileSidebar() {
    document.body.classList.remove('sidebar-open');
    document.querySelectorAll('.toolbar-menu').forEach(function (btn) {
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  function openMobileSidebar() {
    document.body.classList.add('sidebar-open');
    document.querySelectorAll('.toolbar-menu').forEach(function (btn) {
      btn.setAttribute('aria-expanded', 'true');
    });
  }

  function toggleMobileSidebar() {
    if (document.body.classList.contains('sidebar-open')) {
      closeMobileSidebar();
    } else {
      openMobileSidebar();
    }
  }

  function setupMobileSidebar() {
    var aside = document.querySelector('[data-cookbook-sidebar]');
    if (!aside) return;

    aside.id = 'cookbook-sidebar';

    var page = document.querySelector('.page');
    if (page && !page.querySelector('.sidebar-backdrop')) {
      var backdrop = document.createElement('div');
      backdrop.className = 'sidebar-backdrop no-print';
      backdrop.setAttribute('aria-hidden', 'true');
      backdrop.addEventListener('click', closeMobileSidebar);
      page.insertBefore(backdrop, page.firstChild);
    }

    document.querySelectorAll('.toolbar-menu').forEach(function (btn) {
      if (btn.getAttribute('data-mobile-nav-bound') === '1') return;
      btn.setAttribute('data-mobile-nav-bound', '1');
      btn.addEventListener('click', toggleMobileSidebar);
    });

    aside.querySelectorAll('a').forEach(function (link) {
      if (link.getAttribute('data-mobile-nav-bound') === '1') return;
      link.setAttribute('data-mobile-nav-bound', '1');
      link.addEventListener('click', function () {
        if (window.matchMedia(MOBILE_LAYOUT_QUERY).matches) closeMobileSidebar();
      });
    });
  }

  function getNavScope() {
    var scope = document.body.getAttribute('data-nav-scope');
    if (scope) return scope;
    if (document.body.classList.contains('recipe-page')) return 'recipe';
    if (document.querySelector('[data-cookbook-sidebar]')) return 'chapter';
    return '';
  }

  function getNavActive() {
    return document.body.getAttribute('data-nav-active') || '';
  }

  function navHref(file, scope) {
    if (!file) return '#';
    return scope === 'recipe' ? '../chapters/' + file : file;
  }

  function resolveToolbarTarget() {
    var scope = getNavScope();
    if (scope === 'chapter') {
      return { href: '../index.html', title: 'Back to cookbook', showHome: false };
    }
    if (scope === 'recipe') {
      var slug = document.body.getAttribute('data-recipe-slug');
      var recipe = slug ? getRecipe(slug) : null;
      if (recipe && CHAPTER_BACK[recipe.categoryId]) {
        var ch = CHAPTER_BACK[recipe.categoryId];
        return { href: ch.href, title: 'Back to ' + ch.label, showHome: true };
      }
      return { href: '../index.html', title: 'Back to cookbook', showHome: true };
    }
    return null;
  }

  function renderToolbar(target) {
    var mount = document.getElementById('cookbook-toolbar');
    if (!mount || !target) return;

    var hasSidebar = !!document.querySelector('[data-cookbook-sidebar]');
    var menuBtn = hasSidebar
      ? '<button type="button" class="toolbar-btn toolbar-menu" title="Open menu" aria-expanded="false" aria-controls="cookbook-sidebar">' +
          SVG_MENU + '<span class="sr-only">Open menu</span></button>'
      : '';

    var homeBtn = target.showHome
      ? '<a href="../index.html" class="toolbar-btn" title="Cookbook home">' + SVG_HOME + '<span class="sr-only">Cookbook home</span></a>'
      : '';

    mount.outerHTML =
      '<header class="cookbook-toolbar no-print" aria-label="Page tools">' +
        '<div class="toolbar-inner">' +
          '<div class="toolbar-start">' +
            menuBtn +
            '<a href="' + esc(target.href) + '" class="toolbar-btn toolbar-back" title="' + esc(target.title) + '">' +
              SVG_BACK + '<span class="sr-only">' + esc(target.title) + '</span>' +
            '</a>' +
          '</div>' +
          '<div class="toolbar-end">' +
            homeBtn +
            '<button type="button" class="toolbar-btn toolbar-search" title="Search (Ctrl+K)">' +
              SVG_SEARCH + '<span class="sr-only">Search</span>' +
            '</button>' +
            '<button type="button" class="toolbar-btn toolbar-print" title="Print or save as PDF (Ctrl+P)">' +
              SVG_PRINT + '<span class="sr-only">Print</span>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</header>';

    document.querySelectorAll('.toolbar-print').forEach(function (btn) {
      btn.addEventListener('click', function () { window.print(); });
    });
    document.querySelectorAll('.toolbar-search').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (window.HuntressCookbookSearch) window.HuntressCookbookSearch.open();
      });
    });
  }

  function renderSidebar() {
    var aside = document.querySelector('[data-cookbook-sidebar]');
    if (!aside) return;

    var preserved = [];
    aside.querySelectorAll('[data-sidebar-preserve]').forEach(function (el) {
      preserved.push(el.cloneNode(true));
    });

    var scope = getNavScope();
    var active = getNavActive();
    var navHtml = '<ol class="sidebar-nav">';
    COOKBOOK_NAV.forEach(function (item) {
      var label = item.num + '. ' + item.label;
      if (item.id === active) {
        navHtml += '<li class="active">' + esc(label) + '</li>';
      } else if (item.available && item.file) {
        navHtml += '<li><a href="' + navHref(item.file, scope) + '">' + esc(label) + '</a></li>';
      } else {
        navHtml += '<li><a href="#">' + esc(label) + '</a></li>';
      }
    });
    navHtml += '</ol>';

    aside.innerHTML =
      '<div class="sidebar-logo">' +
        '<img src="../assets/fox-huntress-logo.png" alt="Fox &amp; Huntress">' +
        '<div class="sidebar-brand">THE HUNTRESS<br>COOKBOOK</div>' +
      '</div>' +
      navHtml +
      renderApkDownloadHtml('sidebar-apk', 'sidebar-apk-link') +
      '<p class="sidebar-tagline">Made with care,<br>for the Huntress <span class="heart">\u2665</span></p>';

    preserved.forEach(function (el) { aside.appendChild(el); });

    var chapterNotes = CHAPTER_SIDEBAR_NOTES[active];
    if (chapterNotes && !preserved.length) {
      var notesEl = document.createElement('div');
      notesEl.className = 'sidebar-notes';
      notesEl.innerHTML =
        '<div class="sidebar-notes-title">' + esc(chapterNotes.title) + '</div>' +
        '<p>' + esc(chapterNotes.text) + '</p>';
      aside.appendChild(notesEl);
    }
  }

  function renderCookbookShell() {
    renderSidebar();
    renderToolbar(resolveToolbarTarget());
    setupMobileSidebar();
  }

  function renderLandingNav() {
    var el = document.querySelector('[data-cookbook-landing-nav]');
    if (!el) return;

    var html = '';
    COOKBOOK_NAV.forEach(function (item) {
      var label = item.num + '. ' + item.label;
      if (item.available && item.file) {
        html += '<li><a href="chapters/' + item.file + '"><span>' + esc(label) + '</span> <span class="available">Open \u2192</span></a></li>';
      } else {
        html += '<li><a href="#"><span>' + esc(label) + '</span> <span class="coming-soon">Coming soon</span></a></li>';
      }
    });
    el.innerHTML = html;

    var landing = el.closest('.landing');
    if (!landing) return;
    landing.querySelectorAll('.landing-apk').forEach(function (node) { node.remove(); });
    var apkHtml = renderApkDownloadHtml('landing-apk', 'landing-apk-link');
    if (!apkHtml) return;
    var wrap = document.createElement('div');
    wrap.innerHTML = apkHtml;
    landing.insertBefore(wrap.firstChild, el.nextSibling);
  }

  function sectionAnchorId(title) {
    return String(title).toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  function findRecipeSectionContext(recipe) {
    var chapters = HUNTRESS_COOKBOOK.chapters;
    if (!chapters) return null;

    var matches = [];
    for (var chapterId in chapters) {
      if (!chapters.hasOwnProperty(chapterId)) continue;
      var sections = chapters[chapterId];
      for (var si = 0; si < sections.length; si++) {
        var sec = sections[si];
        for (var ri = 0; ri < sec.names.length; ri++) {
          var match = findRecipeByName(sec.names[ri]);
          if (match && match.slug === recipe.slug) {
            matches.push({
              sectionTitle: sec.title,
              sectionIndex: si,
              chapterId: chapterId,
              recipeIndex: ri,
              names: sec.names
            });
          }
        }
      }
    }

    if (!matches.length) return null;
    if (matches.length === 1) return matches[0];

    var ref = (document.referrer || '').toLowerCase();
    for (var i = 0; i < matches.length; i++) {
      var back = CHAPTER_BACK[matches[i].chapterId];
      if (!back) continue;
      var chapterFile = back.href.split('/').pop().toLowerCase();
      if (ref.indexOf(chapterFile) !== -1) {
        return matches[i];
      }
    }

    matches.sort(function (a, b) { return b.names.length - a.names.length; });
    return matches[0];
  }

  function chapterSectionHref(chapterId, sectionTitle) {
    var ch = CHAPTER_BACK[chapterId];
    if (!ch) return null;
    return ch.href + '#section-' + sectionAnchorId(sectionTitle);
  }

  function renderRecipeSectionNav(recipe) {
    var body = document.querySelector('.recipe-body');
    if (!body) return;

    var existing = document.getElementById('recipe-section-nav');
    if (existing) existing.remove();

    var ctx = findRecipeSectionContext(recipe);
    if (!ctx) return;

    var prevRecipe = ctx.recipeIndex > 0
      ? findRecipeByName(ctx.names[ctx.recipeIndex - 1])
      : null;
    var nextRecipe = ctx.recipeIndex < ctx.names.length - 1
      ? findRecipeByName(ctx.names[ctx.recipeIndex + 1])
      : null;

    var sectionHref = chapterSectionHref(ctx.chapterId, ctx.sectionTitle);
    var ch = CHAPTER_BACK[ctx.chapterId];

    if (!prevRecipe && !nextRecipe && !sectionHref) return;

    var nav = document.createElement('nav');
    nav.id = 'recipe-section-nav';
    nav.className = 'recipe-nav';
    nav.setAttribute('aria-label', 'More in ' + ctx.sectionTitle);

    var prevPart = prevRecipe
      ? '<a href="' + recipeHref(prevRecipe.slug) + '" class="recipe-nav-link recipe-nav-prev">\u25C2 ' + esc(prevRecipe.name) + '</a>'
      : '<span class="recipe-nav-link recipe-nav-spacer"></span>';

    var nextPart = nextRecipe
      ? '<a href="' + recipeHref(nextRecipe.slug) + '" class="recipe-nav-link recipe-nav-next">' + esc(nextRecipe.name) + ' \u25B8</a>'
      : '<span class="recipe-nav-link recipe-nav-spacer"></span>';

    var sectionPart = sectionHref
      ? '<a href="' + sectionHref + '" class="recipe-nav-section" title="Back to ' + esc(ch.label) + '">' + esc(ctx.sectionTitle) + '</a>'
      : '<span class="recipe-nav-section">' + esc(ctx.sectionTitle) + '</span>';

    nav.innerHTML = prevPart + sectionPart + nextPart;

    body.appendChild(nav);
  }

  function renderChapterPageNav() {
    var el = document.querySelector('.page-number');
    if (!el || el.getAttribute('data-nav-ready')) return;

    var path = window.location.pathname || '';
    var current = path.split('/').pop() || '';
    if (!current) return;

    var idx = -1;
    for (var i = 0; i < CHAPTER_PAGES.length; i++) {
      if (CHAPTER_PAGES[i].file === current) { idx = i; break; }
    }
    if (idx < 0) return;

    var page = CHAPTER_PAGES[idx];
    var prev = idx > 0 ? CHAPTER_PAGES[idx - 1] : null;
    var next = idx < CHAPTER_PAGES.length - 1 ? CHAPTER_PAGES[idx + 1] : null;

    var html = '';
    if (prev) {
      html += '<a href="' + prev.file + '" class="page-nav-link page-nav-prev" title="' + esc(prev.label) + '">\u25C2</a>';
    } else {
      html += '<span class="page-nav-link page-nav-disabled">\u25C2</span>';
    }
    html += '<span class="page-nav-num">' + page.num + '</span>';
    if (next) {
      html += '<a href="' + next.file + '" class="page-nav-link page-nav-next" title="' + esc(next.label) + '">\u25B8</a>';
    } else {
      html += '<span class="page-nav-link page-nav-disabled">\u25B8</span>';
    }

    el.innerHTML = html;
    el.setAttribute('data-nav-ready', '1');
  }

  function initCookbookToolbar() {
    document.querySelectorAll('.toolbar-print').forEach(function (btn) {
      if (btn.getAttribute('data-print-bound')) return;
      btn.setAttribute('data-print-bound', '1');
      btn.addEventListener('click', function () {
        window.print();
      });
    });
  }

  function uniquePhotoRecipes(recipes, max) {
    var seen = {};
    var out = [];
    for (var i = 0; i < recipes.length && out.length < max; i++) {
      var r = recipes[i];
      if (!r) continue;
      var key = r.image || r.slug;
      if (seen[key]) continue;
      seen[key] = true;
      out.push(r);
    }
    return out;
  }

  function renderRecipeListItem(recipe) {
    if (!recipe) return '';
    return '<li><a href="' + recipeHref(recipe.slug) + '">' + esc(recipe.name) + '</a></li>';
  }

  function renderPhotoItem(recipe) {
    if (!recipe) return '';
    var src = '../assets/images/' + recipe.image;
    var href = recipeHref(recipe.slug);
    var placeholder = esc(recipe.name);
    return (
      '<div class="photo-item">' +
        '<a href="' + href + '" class="photo-link" title="View ' + placeholder + ' recipe">' +
          '<img src="' + src + '" alt="' + placeholder + '" onerror="this.outerHTML=\'<div class=photo-placeholder>' + placeholder + '</div>\'">' +
        '</a>' +
        '<div class="photo-caption"><a href="' + href + '">' + placeholder + '</a></div>' +
      '</div>'
    );
  }

  function renderChapter() {
    var el = document.getElementById('chapter-recipes');
    if (!el || !window.HUNTRESS_COOKBOOK) return;

    var chapterId = el.getAttribute('data-chapter');
    var sections = HUNTRESS_COOKBOOK.chapters[chapterId];
    if (!sections) return;

    var introEl = document.querySelector('.chapter-intro');
    if (introEl && HUNTRESS_COOKBOOK.chapterIntros && HUNTRESS_COOKBOOK.chapterIntros[chapterId]) {
      introEl.textContent = HUNTRESS_COOKBOOK.chapterIntros[chapterId];
    }

    var html = '';
    sections.forEach(function (sec, index) {
      var recipes = sec.names.map(findRecipeByName).filter(Boolean);
      var photos = uniquePhotoRecipes(recipes, 3);

      html += '<section class="category" id="section-' + sectionAnchorId(sec.title) + '">';
      html += '<div class="category-header">';
      html += '<div class="category-icon">' + (ICONS[sec.icon] || '\u2728') + '</div>';
      html += '<h2 class="category-title">' + (index + 1) + '. ' + esc(sec.title) + '</h2>';
      html += '</div>';
      html += '<p class="category-desc">' + esc(sec.desc) + '</p>';
      html += '<div class="category-content">';
      html += '<ul class="recipe-list">';
      sec.names.forEach(function (name) {
        html += renderRecipeListItem(findRecipeByName(name));
      });
      html += '</ul>';
      if (photos.length) {
        html += '<div class="photo-row">';
        photos.forEach(function (r) { html += renderPhotoItem(r); });
        html += '</div>';
      }
      html += '</div></section>';
    });

    el.innerHTML = html;
  }

  function hydrateRecipePage() {
    var slug = document.body.getAttribute('data-recipe-slug');
    if (!slug) {
      var id = document.body.getAttribute('data-recipe-id');
      if (id && window.HUNTRESS_COOKBOOK) {
        var recipes = HUNTRESS_COOKBOOK.recipes;
        for (var key in recipes) {
          if (recipes[key].id === id) { slug = recipes[key].slug; break; }
        }
      }
    }
    if (!slug) return;

    var recipe = getRecipe(slug);
    if (!recipe) return;

    var ingredients = asArray(recipe.ingredients);
    var instructions = asArray(recipe.instructions);

    document.body.setAttribute('data-recipe-slug', slug);
    document.title = recipe.name + ' \u2014 The Huntress Cookbook';

    var h1 = document.querySelector('.recipe-header h1');
    if (h1) h1.textContent = recipe.name;

    var intro = document.querySelector('.recipe-intro');
    if (!intro) {
      intro = document.createElement('p');
      intro.className = 'recipe-intro';
      var header = document.querySelector('.recipe-header');
      if (header) header.insertAdjacentElement('afterend', intro);
    }
    if (intro) intro.textContent = recipe.description || '';

    var meta = document.querySelector('.recipe-meta');
    if (meta) {
      var st = statusLabel(recipe.status);
      var prep = recipe.prepTime ? recipe.prepTime + ' min' : 'TBD';
      var cook = recipe.cookTime ? recipe.cookTime + ' min' : 'TBD';
      var servings = recipe.servings ? recipe.servings : 'TBD';
      meta.innerHTML =
        '<span><strong>Category:</strong> ' + esc(recipe.category) + '</span>' +
        '<span><strong>Prep:</strong> ' + esc(prep) + '</span>' +
        '<span><strong>Cook:</strong> ' + esc(cook) + '</span>' +
        '<span><strong>Difficulty:</strong> ' + esc(recipe.difficulty) + '</span>' +
        '<span><strong>Servings:</strong> ' + esc(servings) + '</span>' +
        '<span class="recipe-status ' + st.cls + '">' + esc(st.text) + '</span>';
    }

    var ing = document.querySelector('.recipe-ingredients ul');
    if (ing) {
      ing.innerHTML = ingredients.map(function (i) {
        return '<li>' + esc(i) + '</li>';
      }).join('');
    }

    var method = document.querySelector('.recipe-method ol');
    if (method) {
      method.innerHTML = instructions.map(function (step) {
        return '<li>' + esc(step) + '</li>';
      }).join('');
    }

    var huntress = document.querySelector('.note-box.huntress p');
    if (huntress) huntress.textContent = recipe.huntressNotes || '';

    var fox = document.querySelector('.recipe-notes .note-box:not(.huntress) p');
    if (fox) fox.textContent = recipe.foxNotes || '';

    var photo = document.querySelector('.recipe-photo img');
    if (photo) {
      photo.src = '../assets/images/' + recipe.image;
      photo.alt = recipe.name;
      photo.onerror = function () {
        var wrap = photo.parentElement;
        if (wrap) {
          wrap.innerHTML = '<div class="photo-placeholder">' + esc(recipe.name) + '<br><small>Add photo to assets/images/' + esc(recipe.image) + '</small></div>';
        }
      };
    }

    renderRecipeRating();
    renderCookbookShell();
    renderRecipeSectionNav(recipe);
  }

  function renderRecipeRating(initialRating) {
    var el = document.querySelector('.recipe-rating');
    if (!el || !document.body.classList.contains('recipe-page')) return;

    var max = 5;
    var current = Math.max(0, Math.min(max, parseInt(initialRating, 10) || 0));

    el.innerHTML = '';
    el.setAttribute('role', 'group');
    el.classList.add('recipe-rating-interactive');

    for (var i = 1; i <= max; i++) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'star-btn';
      btn.setAttribute('data-value', String(i));
      btn.setAttribute('aria-label', 'Rate ' + i + ' out of ' + max);
      el.appendChild(btn);
    }

    function updateAriaLabel(value) {
      el.setAttribute(
        'aria-label',
        value ? ('Rated ' + value + ' out of ' + max) : 'Rating not yet set — click a star'
      );
    }

    function paint(value) {
      var stars = el.querySelectorAll('.star-btn');
      for (var s = 0; s < stars.length; s++) {
        var v = s + 1;
        var filled = v <= value;
        stars[s].textContent = filled ? '\u2605' : '\u2606';
        stars[s].classList.toggle('is-filled', filled);
        stars[s].setAttribute('aria-pressed', filled ? 'true' : 'false');
      }
    }

    paint(current);
    updateAriaLabel(current);

    el.addEventListener('click', function (e) {
      var btn = e.target.closest('.star-btn');
      if (!btn) return;
      var val = parseInt(btn.getAttribute('data-value'), 10);
      current = current === val ? 0 : val;
      paint(current);
      updateAriaLabel(current);
    });

    el.addEventListener('mouseover', function (e) {
      var btn = e.target.closest('.star-btn');
      if (!btn) return;
      paint(parseInt(btn.getAttribute('data-value'), 10));
    });

    el.addEventListener('mouseleave', function () {
      paint(current);
    });
  }

  function applyCookbookSettings() {
    if (!window.HUNTRESS_COOKBOOK || !HUNTRESS_COOKBOOK.settings) return;
    var s = HUNTRESS_COOKBOOK.settings;

    if (s.theme) {
      if (s.theme.primaryColor) document.documentElement.style.setProperty('--forest-green', s.theme.primaryColor);
      if (s.theme.secondaryColor) document.documentElement.style.setProperty('--gold-light', s.theme.secondaryColor);
      if (s.theme.accentColor) document.documentElement.style.setProperty('--cream', s.theme.accentColor);
      if (s.theme.warmGold) document.documentElement.style.setProperty('--warm-gold', s.theme.warmGold);
    }

    var title = s.cookbookName || 'The Huntress Cookbook';
    var tagline = s.tagline || 'Made with care, for the Huntress';
    var quote = s.homeQuote || 'Good food, good mood, best day.';

    document.querySelectorAll('.landing h1').forEach(function (el) {
      el.textContent = title.toUpperCase();
    });
    document.querySelectorAll('.subtitle').forEach(function (el) {
      el.textContent = tagline + ' \u2665';
    });
    document.querySelectorAll('.landing-tagline').forEach(function (el) {
      el.textContent = quote + ' \u2665';
    });
    document.querySelectorAll('.chapter-quote').forEach(function (el) {
      el.innerHTML = '"' + quote + '" <span class="heart">\u2665</span>';
    });
    document.querySelectorAll('.sidebar-brand').forEach(function (el) {
      if (title.toLowerCase().indexOf('cookbook') !== -1) {
        var base = title.replace(/\s*cookbook\s*/i, '').trim().toUpperCase();
        el.innerHTML = base + '<br>COOKBOOK';
      } else {
        el.textContent = title.toUpperCase();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderCookbookShell();
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMobileSidebar();
    });
    applyCookbookSettings();
    renderLandingNav();
    initCookbookToolbar();
    renderChapter();
    hydrateRecipePage();
    renderIntroduction();
    renderDietaryGuide();
    renderPantryEssentials();
    renderFutureRecipes();
    renderChapterPageNav();
  });

  function renderIntroduction() {
    var el = document.getElementById('introduction-content');
    if (!el || !window.HUNTRESS_COOKBOOK || !HUNTRESS_COOKBOOK.introduction) return;

    var data = HUNTRESS_COOKBOOK.introduction;
    var intro = data.introduction || {};
    var html = '<header class="chapter-header"><h1>INTRODUCTION</h1><div class="chapter-divider">\u2727 \u2727 \u2727</div></header>';

    if (data.subtitle) {
      html += '<p class="chapter-intro"><em>' + esc(data.subtitle) + '</em></p>';
    }
    if (intro.welcome) {
      html += '<p class="chapter-intro">' + esc(intro.welcome) + '</p>';
    }
    if (intro.purpose) {
      html += '<p class="chapter-intro">' + esc(intro.purpose) + '</p>';
    }

    html += '<div class="categories">';

    if (intro.philosophy && intro.philosophy.length) {
      html += '<section class="category" id="section-philosophy">';
      html += '<div class="category-header"><h2 class="category-title">Our Philosophy</h2></div>';
      html += '<ul class="recipe-list">';
      intro.philosophy.forEach(function (item) { html += '<li>' + esc(item) + '</li>'; });
      html += '</ul></section>';
    }

    var profile = data.huntressProfile;
    if (profile) {
      if (profile.glutenSensitivity) {
        html += '<section class="category" id="section-gluten-sensitivity">';
        html += '<div class="category-header"><h2 class="category-title">Gluten Sensitivity</h2></div>';
        if (profile.glutenSensitivity.level) {
          html += '<p class="category-desc">' + esc(profile.glutenSensitivity.level) + '</p>';
        }
        html += '<ul class="recipe-list dietary-notes">';
        asArray(profile.glutenSensitivity.notes).forEach(function (note) { html += '<li>' + esc(note) + '</li>'; });
        html += '</ul></section>';
      }

      if (profile.ibsConsiderations) {
        html += '<section class="category" id="section-ibs-considerations">';
        html += '<div class="category-header"><h2 class="category-title">IBS Considerations</h2></div>';
        if (profile.ibsConsiderations.notes && profile.ibsConsiderations.notes.length) {
          html += '<ul class="recipe-list dietary-notes">';
          profile.ibsConsiderations.notes.forEach(function (note) { html += '<li>' + esc(note) + '</li>'; });
          html += '</ul>';
        }
        if (profile.ibsConsiderations.avoidFoods && profile.ibsConsiderations.avoidFoods.length) {
          html += '<p class="category-desc">Foods to approach with caution:</p>';
          html += '<ul class="recipe-list">';
          profile.ibsConsiderations.avoidFoods.forEach(function (item) { html += '<li>' + esc(item) + '</li>'; });
          html += '</ul>';
        }
        html += '</section>';
      }

      if (profile.caffeineSensitivity) {
        html += '<section class="category" id="section-caffeine-sensitivity">';
        html += '<div class="category-header"><h2 class="category-title">Caffeine Sensitivity</h2></div>';
        html += '<ul class="recipe-list dietary-notes">';
        asArray(profile.caffeineSensitivity.notes).forEach(function (note) { html += '<li>' + esc(note) + '</li>'; });
        html += '</ul></section>';
      }
    }

    var legend = data.cookbookLegend;
    if (legend) {
      if (legend.statuses) {
        html += '<section class="category" id="section-recipe-statuses">';
        html += '<div class="category-header"><h2 class="category-title">Recipe Statuses</h2></div><ul class="recipe-list dietary-notes">';
        for (var status in legend.statuses) {
          html += '<li><strong>' + esc(status) + ':</strong> ' + esc(legend.statuses[status]) + '</li>';
        }
        html += '</ul></section>';
      }
      if (legend.difficultyLevels) {
        html += '<section class="category" id="section-difficulty-levels">';
        html += '<div class="category-header"><h2 class="category-title">Difficulty Levels</h2></div><ul class="recipe-list dietary-notes">';
        for (var level in legend.difficultyLevels) {
          html += '<li><strong>' + esc(level) + ':</strong> ' + esc(legend.difficultyLevels[level]) + '</li>';
        }
        html += '</ul></section>';
      }
    }

    if (data.foxAndHuntressNotes && data.foxAndHuntressNotes.message) {
      html += '<section class="category" id="section-fox-and-huntress">';
      html += '<div class="category-header"><h2 class="category-title">Fox &amp; Huntress Notes</h2></div>';
      html += '<p class="category-desc">' + esc(data.foxAndHuntressNotes.message) + '</p>';
      html += '</section>';
    }

    if (data.favouriteSafeFoods && data.favouriteSafeFoods.length) {
      html += '<section class="category" id="section-favourite-safe-foods">';
      html += '<div class="category-header"><h2 class="category-title">Favourite Safe Foods</h2></div>';
      html += renderFoodList(data.favouriteSafeFoods, data.biltongDroeworsGlutenNote);
      html += '</section>';
    }

    if (data.emergencyFoods && data.emergencyFoods.length) {
      html += '<section class="category" id="section-emergency-foods">';
      html += '<div class="category-header"><h2 class="category-title">Emergency Foods</h2></div>';
      html += renderFoodList(data.emergencyFoods, data.biltongDroeworsGlutenNote);
      html += '</section>';
    }

    html += '</div>';
    html += '<footer class="chapter-footer"><div class="page-number">\u25C2 1 \u25B8</div></footer>';
    el.innerHTML = html;
  }

  function renderDietaryGuide() {
    var el = document.getElementById('dietary-guide-content');
    if (!el || !window.HUNTRESS_COOKBOOK || !HUNTRESS_COOKBOOK.dietaryGuide) return;
    var g = HUNTRESS_COOKBOOK.dietaryGuide;
    var pageTitle = g.title || 'DIETARY GUIDE';
    var html = '<header class="chapter-header"><h1>' + esc(pageTitle.toUpperCase()) + '</h1><div class="chapter-divider">\u2727 \u2727 \u2727</div></header>';
    html += '<p class="chapter-intro">' + esc(g.description || 'Every recipe in this cookbook is designed around the Huntress dietary profile.') + '</p>';
    html += '<div class="categories">';

    if (g.sections && g.sections.length) {
      g.sections.forEach(function (sec) {
        html += '<section class="category" id="section-' + sectionAnchorId(sec.title) + '">';
        html += '<div class="category-header"><h2 class="category-title">' + esc(sec.title) + '</h2></div>';
        if (sec.description) {
          html += '<p class="category-desc">' + esc(sec.description) + '</p>';
        }
        if (sec.items && sec.items.length) {
          html += '<ul class="recipe-list">';
          sec.items.forEach(function (item) { html += '<li>' + esc(item) + '</li>'; });
          html += '</ul>';
        }
        if (sec.conditionalItems && sec.conditionalItems.length) {
          sec.conditionalItems.forEach(function (item) {
            html += '<div class="conditional-ingredient">';
            html += '<h3 class="conditional-ingredient-title">' + esc(item.ingredient) + ' <span class="conditional-status">(' + esc(item.status) + ')</span></h3>';
            if (item.notes && item.notes.length) {
              html += '<ul class="recipe-list dietary-notes">';
              item.notes.forEach(function (note) { html += '<li>' + esc(note) + '</li>'; });
              html += '</ul>';
            }
            html += '</div>';
          });
        }
        if (sec.notes && sec.notes.length) {
          html += '<ul class="recipe-list dietary-notes">';
          sec.notes.forEach(function (note) { html += '<li>' + esc(note) + '</li>'; });
          html += '</ul>';
        }
        html += '</section>';
      });
    } else {
      if (g.avoid) {
        html += '<section class="category"><div class="category-header"><h2 class="category-title">Foods to Avoid</h2></div><ul class="recipe-list">';
        g.avoid.forEach(function (item) { html += '<li>' + esc(item) + '</li>'; });
        html += '</ul></section>';
      }
      if (g.limit) {
        html += '<section class="category"><div class="category-header"><h2 class="category-title">Foods to Limit</h2></div><ul class="recipe-list">';
        g.limit.forEach(function (item) { html += '<li>' + esc(item) + '</li>'; });
        html += '</ul></section>';
      }
      if (g.preferredSweeteners) {
        html += '<section class="category"><div class="category-header"><h2 class="category-title">Preferred Sweeteners</h2></div><ul class="recipe-list">';
        g.preferredSweeteners.forEach(function (item) { html += '<li>' + esc(item) + '</li>'; });
        html += '</ul></section>';
      }
    }

    html += '</div>';
    html += '<footer class="chapter-footer"><div class="page-number">\u25C2 2 \u25B8</div></footer>';
    el.innerHTML = html;
  }

  function pantryPriorityClass(priority) {
    return String(priority || '').toLowerCase().replace(/\s+/g, '-');
  }

  function renderPantryEssentials() {
    var el = document.getElementById('pantry-essentials-content');
    if (!el || !window.HUNTRESS_COOKBOOK || !HUNTRESS_COOKBOOK.pantryEssentials) return;
    var p = HUNTRESS_COOKBOOK.pantryEssentials;
    var html = '<header class="chapter-header"><h1>PANTRY ESSENTIALS</h1><div class="chapter-divider">✿ ✿ ✿</div></header>';
    html += '<p class="chapter-intro">' + esc(p.description || 'Core ingredients for Huntress-safe cooking.') + '</p>';
    html += '<div class="categories">';
    (p.groups || []).forEach(function (group) {
      var title = group.name || group.group || 'Items';
      html += '<section class="category" id="section-' + sectionAnchorId(title) + '">';
      html += '<div class="category-header"><h2 class="category-title">' + esc(title) + '</h2></div>';
      if (group.description) {
        html += '<p class="category-desc">' + esc(group.description) + '</p>';
      }
      html += '<ul class="pantry-list">';
      (group.items || []).forEach(function (item) {
        var detail = item.reason || '';
        if (!detail && item.notes) {
          detail = asArray(item.notes).join(' · ');
        }
        html += '<li class="pantry-item">';
        html += '<div class="pantry-item-main">';
        html += '<span class="pantry-item-name">' + esc(item.name) + '</span>';
        if (item.priority) {
          html += '<span class="pantry-priority pantry-priority-' + esc(pantryPriorityClass(item.priority)) + '">' + esc(item.priority) + '</span>';
        }
        html += '</div>';
        if (detail) {
          html += '<div class="pantry-item-detail">' + esc(detail) + '</div>';
        }
        html += '</li>';
      });
      html += '</ul></section>';
    });
    html += '</div>';
    html += '<footer class="chapter-footer"><div class="page-number">◂ 3 ▸</div></footer>';
    el.innerHTML = html;
  }

  function renderFutureRecipes() {
    var el = document.getElementById('future-recipes-content');
    if (!el || !window.HUNTRESS_COOKBOOK || !HUNTRESS_COOKBOOK.futureRecipes) return;
    var fr = HUNTRESS_COOKBOOK.futureRecipes;
    var html = '<header class="chapter-header"><h1>FUTURE RECIPES</h1><div class="chapter-divider">\u2727 \u2727 \u2727</div></header>';
    html += '<p class="chapter-intro">' + esc(fr.description || 'Ideas to test when the Huntress is ready for something new.') + '</p>';

    if (fr.groups && fr.groups.length) {
      html += '<div class="categories">';
      fr.groups.forEach(function (group) {
        html += '<section class="category" id="section-' + sectionAnchorId(group.name) + '">';
        html += '<div class="category-header"><h2 class="category-title">' + esc(group.name) + '</h2></div>';
        html += '<ul class="recipe-list future-recipe-list">';
        (group.recipes || []).forEach(function (recipe) {
          var priorityClass = pantryPriorityClass(recipe.priority);
          html += '<li class="future-recipe-item">';
          html += '<span class="future-recipe-name">' + esc(recipe.name) + '</span>';
          if (recipe.status) {
            html += '<span class="future-recipe-status">' + esc(recipe.status) + '</span>';
          }
          if (recipe.priority) {
            html += '<span class="pantry-priority pantry-priority-' + esc(priorityClass) + '">' + esc(recipe.priority) + '</span>';
          }
          html += '</li>';
        });
        html += '</ul></section>';
      });
      html += '</div>';
    } else if (Array.isArray(fr)) {
      html += '<ul class="recipe-list">';
      fr.forEach(function (name) {
        html += '<li class="coming-soon">' + esc(name) + '</li>';
      });
      html += '</ul>';
    } else if (fr.names && fr.names.length) {
      html += '<ul class="recipe-list">';
      fr.names.forEach(function (name) {
        html += '<li class="coming-soon">' + esc(name) + '</li>';
      });
      html += '</ul>';
    }

    el.innerHTML = html;
  }
})();

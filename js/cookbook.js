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
    drinks: { href: '../chapters/drinks.html', label: 'Drinks' }
  };

  var CHAPTER_PAGES = [
    { num: 2, file: 'dietary-guide.html', label: 'Dietary Guide' },
    { num: 3, file: 'pantry-essentials.html', label: 'Pantry Essentials' },
    { num: 4, file: 'breakfast.html', label: 'Breakfast' },
    { num: 5, file: 'lunch.html', label: 'Lunch' },
    { num: 6, file: 'dinner.html', label: 'Dinner' },
    { num: 7, file: 'braai.html', label: 'Braai' },
    { num: 8, file: 'soups.html', label: 'Soups & Comfort Foods' },
    { num: 9, file: 'desserts.html', label: 'Desserts' },
    { num: 10, file: 'snacks.html', label: 'Snacks & Picnic Foods' },
    { num: 11, file: 'drinks.html', label: 'Drinks' },
    { num: 15, file: 'future-recipes.html', label: 'Future Recipes' }
  ];

  function sectionAnchorId(title) {
    return String(title).toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  function findRecipeSectionContext(recipe) {
    var sections = HUNTRESS_COOKBOOK.chapters[recipe.categoryId];
    if (!sections) return null;

    for (var si = 0; si < sections.length; si++) {
      var sec = sections[si];
      for (var ri = 0; ri < sec.names.length; ri++) {
        var match = findRecipeByName(sec.names[ri]);
        if (match && match.slug === recipe.slug) {
          return {
            sectionTitle: sec.title,
            sectionIndex: si,
            chapterId: recipe.categoryId,
            recipeIndex: ri,
            names: sec.names
          };
        }
      }
    }
    return null;
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

  function updateRecipeBackLink(recipe) {
    var ch = CHAPTER_BACK[recipe.categoryId];
    if (!ch) return;
    var link = document.querySelector('.toolbar-back');
    if (!link) return;
    link.href = ch.href;
    link.title = 'Back to ' + ch.label;
    var sr = link.querySelector('.sr-only');
    if (sr) sr.textContent = 'Back to ' + ch.label;
  }

  function initCookbookToolbar() {
    document.querySelectorAll('.toolbar-print').forEach(function (btn) {
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

    updateRecipeBackLink(recipe);
    renderRecipeSectionNav(recipe);
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
    initCookbookToolbar();
    applyCookbookSettings();
    renderChapter();
    hydrateRecipePage();
    renderDietaryGuide();
    renderPantryEssentials();
    renderFutureRecipes();
    renderChapterPageNav();
  });

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

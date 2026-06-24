(function () {
  var ICONS = {
    egg: '\uD83E\uDD5A',
    bowl: '\uD83E\uDE63',
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
    picnic: '\uD83C\uDFD5'
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

  function findRecipeByName(name) {
    var recipes = HUNTRESS_COOKBOOK.recipes;
    for (var slug in recipes) {
      if (recipes[slug].name === name) return recipes[slug];
    }
    for (var slug2 in recipes) {
      if (recipes[slug2].name.indexOf(name) === 0 || name.indexOf(recipes[slug2].name) === 0) {
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
    if (!recipe) return '<li class="coming-soon">Recipe</li>';
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

    var html = '';
    sections.forEach(function (sec, index) {
      var recipes = sec.names.map(findRecipeByName).filter(Boolean);
      var photos = uniquePhotoRecipes(recipes, 3);

      html += '<section class="category">';
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
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderChapter();
    hydrateRecipePage();
    renderDietaryGuide();
    renderFutureRecipes();
  });

  function renderDietaryGuide() {
    var el = document.getElementById('dietary-guide-content');
    if (!el || !window.HUNTRESS_COOKBOOK || !HUNTRESS_COOKBOOK.dietaryGuide) return;
    var g = HUNTRESS_COOKBOOK.dietaryGuide;
    var html = '<header class="chapter-header"><h1>DIETARY GUIDE</h1><div class="chapter-divider">✿ ✿ ✿</div></header>';
    html += '<p class="chapter-intro">Every recipe in this cookbook is designed around the Huntress dietary profile.</p>';
    html += '<div class="categories">';
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
    html += '</div>';
    el.innerHTML = html;
  }

  function renderFutureRecipes() {
    var el = document.getElementById('future-recipes-content');
    if (!el || !window.HUNTRESS_COOKBOOK || !HUNTRESS_COOKBOOK.futureRecipes) return;
    var html = '<header class="chapter-header"><h1>FUTURE RECIPES</h1><div class="chapter-divider">✿ ✿ ✿</div></header>';
    html += '<p class="chapter-intro">Ideas to test when the Huntress is ready for something new.</p><ul class="recipe-list">';
    HUNTRESS_COOKBOOK.futureRecipes.forEach(function (name) {
      html += '<li class="coming-soon">' + esc(name) + '</li>';
    });
    html += '</ul>';
    el.innerHTML = html;
  }
})();

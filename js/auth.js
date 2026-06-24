(function () {
  function getSettings() {
    return (window.HUNTRESS_COOKBOOK && window.HUNTRESS_COOKBOOK.settings) || {};
  }

  function getStorageKey() {
    var auth = getSettings().auth;
    return (auth && auth.storageKey) || 'huntress_cookbook_auth';
  }

  function getPassword() {
    var auth = getSettings().auth;
    return (auth && auth.password) || '0657';
  }

  function unlock() {
    sessionStorage.setItem(getStorageKey(), '1');
    document.documentElement.classList.add('auth-ok');
    var gate = document.getElementById('auth-gate');
    if (gate) gate.remove();
  }

  function showGate() {
    var script = document.querySelector('script[src*="auth.js"]');
    var logoUrl = new URL('../assets/fox-huntress-logo.png', script.src).href;
    var s = getSettings();
    var title = s.cookbookName || 'The Huntress Cookbook';
    var subtitle = s.tagline || 'Made with care, for the Huntress';

    var gate = document.createElement('div');
    gate.id = 'auth-gate';
    gate.className = 'auth-gate';
    gate.innerHTML =
      '<div class="auth-gate-card">' +
        '<img src="' + logoUrl + '" alt="Fox &amp; Huntress" class="auth-gate-logo">' +
        '<h2 class="auth-gate-title">' + title + '</h2>' +
        '<p class="auth-gate-subtitle">' + subtitle + '</p>' +
        '<form class="auth-gate-form" id="auth-form">' +
          '<input type="password" id="auth-password" class="auth-gate-input" placeholder="Enter password" autocomplete="off" autofocus>' +
          '<p class="auth-gate-error" id="auth-error" hidden>Incorrect password. Try again.</p>' +
          '<button type="submit" class="auth-gate-button">Enter</button>' +
        '</form>' +
      '</div>';

    document.body.prepend(gate);

    document.getElementById('auth-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var input = document.getElementById('auth-password');
      var error = document.getElementById('auth-error');
      if (input.value === getPassword()) {
        unlock();
      } else {
        error.hidden = false;
        input.value = '';
        input.focus();
      }
    });
  }

  function init() {
    if (sessionStorage.getItem(getStorageKey()) === '1') {
      document.documentElement.classList.add('auth-ok');
      return;
    }
    showGate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

(function () {
  var STORAGE_KEY = 'huntress_cookbook_auth';
  var PASSWORD = '0657';

  function unlock() {
    sessionStorage.setItem(STORAGE_KEY, '1');
    document.documentElement.classList.add('auth-ok');
    var gate = document.getElementById('auth-gate');
    if (gate) gate.remove();
  }

  if (sessionStorage.getItem(STORAGE_KEY) === '1') {
    document.documentElement.classList.add('auth-ok');
    return;
  }

  function showGate() {
    var script = document.querySelector('script[src*="auth.js"]');
    var logoUrl = new URL('../assets/fox-logo.svg', script.src).href;

    var gate = document.createElement('div');
    gate.id = 'auth-gate';
    gate.className = 'auth-gate';
    gate.innerHTML =
      '<div class="auth-gate-card">' +
        '<img src="' + logoUrl + '" alt="" class="auth-gate-logo">' +
        '<h2 class="auth-gate-title">The Huntress Cookbook</h2>' +
        '<p class="auth-gate-subtitle">Made with care, for the Huntress</p>' +
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
      if (input.value === PASSWORD) {
        unlock();
      } else {
        error.hidden = false;
        input.value = '';
        input.focus();
      }
    });
  }

  if (document.body) {
    showGate();
  } else {
    document.addEventListener('DOMContentLoaded', showGate);
  }
})();

(function () {
  'use strict';

  var nameInput = document.getElementById('cert-name');
  var generateBtn = document.getElementById('cert-generate');
  var printBtn = document.getElementById('cert-print');
  var certDisplay = document.getElementById('cert-display');
  var certNameDisplay = document.getElementById('cert-name-display');
  var certDateDisplay = document.getElementById('cert-date-display');

  function init() {
    if (!generateBtn) return;

    generateBtn.addEventListener('click', generateCertificate);

    if (printBtn) {
      printBtn.addEventListener('click', function () {
        window.print();
      });
    }

    var params = new URLSearchParams(window.location.search);
    var name = params.get('name');
    if (name && certDisplay && certNameDisplay) {
      certDisplay.classList.remove('hidden');
      certNameDisplay.textContent = decodeURIComponent(name);
      if (certDateDisplay) {
        certDateDisplay.textContent = new Date().toLocaleDateString('en-US', {
          year: 'numeric', month: 'long', day: 'numeric'
        });
      }
    }
  }

  function generateCertificate() {
    if (!nameInput || !certDisplay || !certNameDisplay || !certDateDisplay) return;

    var name = nameInput.value.trim();
    if (!name) {
      nameInput.focus();
      nameInput.style.borderColor = '#EF4444';
      setTimeout(function () {
        nameInput.style.borderColor = '';
      }, 2000);
      return;
    }

    certNameDisplay.textContent = name;
    certDateDisplay.textContent = new Date().toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });

    certDisplay.classList.remove('hidden');
    certDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });

    try {
      var url = new URL(window.location);
      url.searchParams.set('name', name);
      window.history.replaceState({}, '', url);
    } catch (e) {}

    try {
      var saved = JSON.parse(localStorage.getItem('typeskill_progress') || '{}');
      saved.certificateName = name;
      saved.certificateDate = new Date().toISOString();
      localStorage.setItem('typeskill_progress', JSON.stringify(saved));
    } catch (e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

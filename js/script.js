// Cambia sezione del menu quando si clicca su una scheda
const schede = document.querySelectorAll('.tm-tab');
const sezioni = document.querySelectorAll('.tm-tab-content');

schede.forEach(function (scheda) {
  scheda.addEventListener('click', function () {
    schede.forEach(function (s) { s.classList.remove('is-active'); });
    sezioni.forEach(function (s) { s.classList.remove('is-active'); });

    scheda.classList.add('is-active');
    document.getElementById(scheda.dataset.target).classList.add('is-active');
  });
});

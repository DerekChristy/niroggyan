AOS.init();
// jQuery(document).ready(function($) {
//   'use strict';
//   $.Scrollax();
// });

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0';
  } else {
    document.getElementById('navbar').style.top = '-300px';
  }
  prevScrollpos = currentScrollPos;
};

var lang = 0;
function switchLang() {
  let en = document.querySelectorAll('.lang-en');
  let hi = document.querySelectorAll('.lang-hi');

  if (lang === 0) {
    console.log('converting to hindi');
    lang = 1;
    hi.forEach(e => {
      e.classList.remove('d-none');
    });
    en.forEach(e => {
      e.classList.add('d-none');
    });
  } else {
    console.log('converting to english');

    lang = 0;
    hi.forEach(e => {
      e.classList.add('d-none');
    });
    en.forEach(e => {
      e.classList.remove('d-none');
    });
  }
}

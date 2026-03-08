document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger-menu');
  const menu = document.querySelector('.menu');
  const header = document.querySelector('header');
  const logo = document.querySelector('#logo');

  hamburger.addEventListener('click', function () {
    this.classList.toggle('cross');
    menu.classList.toggle('is-active');
    header.classList.toggle('header-fixed');
    logo.classList.toggle('black-logo');
  });
});

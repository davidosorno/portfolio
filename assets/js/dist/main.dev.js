"use strict";

// Select DOM items
function gettingDomItems() {
  var menuBtn = document.querySelector('.menu-btn');
  var menu = document.querySelector('.menu');
  var menuBranding = document.querySelector('.menu-branding');
  var menuNav = document.querySelector('.menu-nav');
  var navItems = document.querySelectorAll('.nav-item'); // Initial state of the menu

  var showMenu = false;
  menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    if (!showMenu) {
      menuBtn.classList.add('close');
      menu.classList.add('show');
      menuBranding.classList.add('show');
      menuNav.classList.add('show');
      navItems.forEach(function (item) {
        return item.classList.add('show');
      });
      showMenu = true;
    } else {
      menuBtn.classList.remove('close');
      menu.classList.remove('show');
      menuBranding.classList.remove('show');
      menuNav.classList.remove('show');
      navItems.forEach(function (item) {
        return item.classList.remove('show');
      });
      showMenu = false;
    }
  }
}
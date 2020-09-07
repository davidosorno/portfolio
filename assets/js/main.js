// Select DOM items

function gettingDomItems() {

    const menuBtn = document.querySelector('.menu-btn');

    const menu = document.querySelector('.menu');
    const menuBranding = document.querySelector('.menu-branding');
    const menuNav = document.querySelector('.menu-nav');

    const navItems = document.querySelectorAll('.nav-item');

    // Initial state of the menu
    let showMenu = false;

    menuBtn.addEventListener('click', toggleMenu);

    // Add Evenlistener to the each item menu for closing the menu
    navItems.forEach(item => item.addEventListener('click', toggleMenu));

    function toggleMenu() {
        if (!showMenu) {
            menuBtn.classList.add('close');
            menu.classList.add('show');
            menuBranding.classList.add('show');
            menuNav.classList.add('show');

            navItems.forEach(item => item.classList.add('show'));
            showMenu = true;
        } else {
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuBranding.classList.remove('show');
            menuNav.classList.remove('show');

            navItems.forEach(item => item.classList.remove('show'));
            showMenu = false;
        }
    }
}
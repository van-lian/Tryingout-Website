const mobileMenu = document.getElementById('mobile-menu');
const menuContainer = document.getElementById('menu-container');

mobileMenu.addEventListener('click', function() {
    // Updated to match your CSS class toggle
    menuContainer.classList.toggle('active');
    const isExpanded = mobileMenu.getAttribute('aria-expanded') === 'true';
    mobileMenu.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle between hamburger and X icon
    const icon = mobileMenu.querySelector('img');
    if (icon.src.includes('bars.svg')) {
        icon.src = '../../Picture/Icon/xmark.svg';
        icon.alt = 'Close';
    } else {
        icon.src = '../../Picture/Icon/bars.svg';
        icon.alt = 'Menu';
    }
});
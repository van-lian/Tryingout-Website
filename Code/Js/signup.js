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

document.getElementById('subscribeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let valid = true;

    // Clear errors
    ['name', 'email', 'password', 'age', 'plan'].forEach(id => {
        document.getElementById('error-' + id).textContent = '';
    });

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = parseInt(document.getElementById('age').value);
    const plan = document.getElementById('plan').value;

    if (name === '') {
        document.getElementById('error-name').textContent = 'Name is required.';
        valid = false;
    }

    if (!(email.includes('@') && email.includes('.'))) {
        document.getElementById('error-email').textContent = 'Email must be valid.';
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById('error-password').textContent = 'Password must be at least 6 characters.';
        valid = false;
    }

    if (isNaN(age) || age < 13) {
        document.getElementById('error-age').textContent = 'You must be at least 13 years old.';
        valid = false;
    }

    if (plan === '') {
        document.getElementById('error-plan').textContent = 'Please select a subscription plan.';
        valid = false;
    }

    if (valid) {
        alert('Thank you for subscribing!');
        this.reset();
    }
});
// Toggle mobile menu
document.getElementById('mobile-menu').addEventListener('click', function () {
const menu = document.getElementById('menu-container');
menu.classList.toggle('active');
});
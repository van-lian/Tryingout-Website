const menu = document.querySelector("#mobile-menu");
const menuContainer = document.querySelector(".menu-container");

menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuContainer.classList.toggle("active");
    
    // Toggle aria-expanded attribute for accessibility
    const isExpanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle between hamburger and X icon
    const icon = menu.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Animation for timeline items
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Add animation class when element is in viewport
    function checkItems() {
        timelineItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('animate');
            }
        });
    }
    
    // Initial check on page load
    checkItems();
    
    // Check on scroll
    window.addEventListener('scroll', checkItems);
});
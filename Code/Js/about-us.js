// Function to handle timeline animation
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Check if there are any timeline items on the page
    if (timelineItems.length === 0) return;
    
    // Function to check if an element is in viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    };
    
    // Function to add animation class when element is in viewport
    const handleScroll = () => {
        timelineItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('animate');
            }
        });
    };
    
    // Initial check on page load
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
}

// Execute when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const menuContainer = document.getElementById('menu-container');
    
    if (mobileMenu && menuContainer) {
        mobileMenu.addEventListener('click', function() {
            menuContainer.classList.toggle('active');
            const isExpanded = mobileMenu.getAttribute('aria-expanded') === 'true';
            mobileMenu.setAttribute('aria-expanded', !isExpanded);
        });
    }
    
    // Initialize timeline animation
    animateTimeline();
});
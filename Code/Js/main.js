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
        icon.src = '/LAB-Web/Picture/Icon/xmark.svg';
        icon.alt = 'Close';
    } else {
        icon.src = '/LAB-Web/Picture/Icon/bars.svg';
        icon.alt = 'Menu';
    }
});

// Vessels Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Fix navigation menu script first
    const mobileMenu = document.getElementById('mobile-menu');
    const menuContainer = document.getElementById('menu-container');
    
    if (mobileMenu && menuContainer) {
        mobileMenu.addEventListener('click', function() {
            menuContainer.classList.toggle('active');
            const isExpanded = mobileMenu.getAttribute('aria-expanded') === 'true';
            mobileMenu.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle between hamburger and X icon
            const icon = mobileMenu.querySelector('img');
            if (icon.src.includes('bars.svg')) {
                icon.src = '/LAB-Web/Picture/Icon/xmark.svg';
                icon.alt = 'Close';
            } else {
                icon.src = '/LAB-Web/Picture/Icon/bars.svg';
                icon.alt = 'Menu';
            }
        });
    }
    
    // Category filtering functionality
    const categoryButtons = document.querySelectorAll('.category-btn');
    const vesselCards = document.querySelectorAll('.vessel__card');
    
    // Add availability status data to vessel cards
    const vesselStatuses = {
        'sea-ray': 'available',
        'monte-carlo': 'available',
        'carnival': 'available',
        'hamburg': 'available',
        'sunseeker': 'unavailable',
        'azimut': 'sold',
    };
    
    // Add status banners to vessel cards
    vesselCards.forEach(card => {
        const link = card.querySelector('.vessel__link');
        const id = link.getAttribute('href').split('id=')[1];
        const status = vesselStatuses[id];
        
        if (status === 'sold' || status === 'unavailable') {
            // Create status banner
            const statusBanner = document.createElement('div');
            statusBanner.className = `vessel__status-banner ${status}`;
            statusBanner.textContent = status === 'sold' ? 'SOLD OUT' : 'UNAVAILABLE';
            
            // Add to card
            const imgContainer = card.querySelector('.vessel__img-container');
            imgContainer.style.position = 'relative';
            imgContainer.style.overflow = 'hidden';
            imgContainer.appendChild(statusBanner);
            
            // Update price display
            const priceElement = card.querySelector('.vessel__price');
            if (priceElement) {
                if (status === 'sold') {
                    priceElement.textContent = 'SOLD OUT';
                    priceElement.style.color = '#d9534f';
                    priceElement.style.fontWeight = 'bold';
                } else if (status === 'unavailable') {
                    priceElement.textContent = 'CURRENTLY UNAVAILABLE';
                    priceElement.style.color = '#f0ad4e';
                    priceElement.style.fontWeight = 'bold';
                }
            }
        }
    });
    
    if (categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get the filter category
                const filterValue = this.getAttribute('data-filter');
                
                // Filter vessels
                vesselCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        
                        // Add animation
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        
                        // Hide after fade out animation
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
        
        // Initialize with fade-in animation
        vesselCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 + (index * 100)); // Staggered animation
        });
    }
});
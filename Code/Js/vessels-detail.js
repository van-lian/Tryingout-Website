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
        
// Get vessel ID from URL parameter
function getVesselId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Load vessel data based on ID
function loadVesselData() {
    const vesselId = getVesselId();
    
    // This would typically come from a database or API
    // For now, we'll use a simple lookup object
    const vessels = {
        'sea-ray': {
            name: '60\' Sea Ray',
            price: '$1.5 Million',
            description: '<p>This pristine 60\' Sea Ray Sundancer offers the perfect blend of luxury and performance. Built with meticulous attention to detail, this vessel features plush accommodations, state-of-the-art electronics, and powerful engines for a smooth cruising experience.</p><p>The elegant interior design showcases premium materials throughout, with spacious cabins, a fully equipped galley, and a sophisticated entertainment system. The expansive deck area provides ample space for relaxation and entertaining guests.</p>',
            image: '../../Picture/boatpic/60\' Sea Ray 1.png',
            specs: {
                'Length': '60 ft',
                'Beam': '15.2 ft',
                'Year': '2023',
                'Fuel Capacity': '800 gallons',
                'Water Capacity': '150 gallons',
                'Max Speed': '35 knots',
                'Staterooms': '3',
                'Bathrooms': '2'
            },
            gallery: [
                '../../Picture/60\' Sea Ray 1.png',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320'
            ],
            status: 'available' // Added status property - can be 'available', 'sold' or 'unavailable'
        },
        'monte-carlo': {
            name: '78\' Monte Carlo (MDR)',
            price: '$2 Million',
            description: '<p>The magnificent 78\' Monte Carlo is the epitome of elegance and sophistication on water. This exceptional vessel combines Italian craftsmanship with cutting-edge technology to deliver an unparalleled yachting experience.</p><p>Featuring multiple spacious staterooms, a luxurious salon, and a fly bridge with panoramic views, this yacht is designed for those who demand the very best. Advanced propulsion systems ensure remarkably quiet and fuel-efficient cruising.</p>',
            image: '../../Picture/boatpic/78\' Monte Carlo (MDR) 1.png',
            specs: {
                'Length': '78 ft',
                'Beam': '18.5 ft',
                'Year': '2024',
                'Fuel Capacity': '1200 gallons',
                'Water Capacity': '250 gallons',
                'Max Speed': '32 knots',
                'Staterooms': '4',
                'Bathrooms': '3'
            },
            gallery: [
                '../../Picture/78\' Monte Carlo (MDR) 1.png',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320'
            ],
            status: 'available' // This vessel is unavailable
        },
        'carnival': {
            name: 'Carnival Cruise Line',
            price: '$8.9K/Pax',
            description: '<p>Experience the ultimate cruise vacation aboard our Carnival cruise ships. These floating resorts offer world-class amenities, entertainment, and dining options for travelers of all ages.</p><p>From stunning oceanview cabins to luxurious suites, onboard water parks to Broadway-style shows, our Carnival cruise ships are designed to provide an unforgettable journey across the world\'s most beautiful destinations.</p>',
            image: '../../Picture/boatpic/Carnival 2.png',
            specs: {
                'Length': '952 ft',
                'Beam': '116 ft',
                'Year': '2022',
                'Passenger Capacity': '3,900',
                'Crew Members': '1,450',
                'Decks': '15',
                'Staterooms': '1,980',
                'Restaurants': '12'
            },
            gallery: [
                '../../Picture/Carnival 2.png',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320'
            ],
            status: 'available'
        },
        'hamburg': {
            name: 'Hamburg',
            price: '$669/Cargo',
            description: '<p>The Hamburg represents the pinnacle of modern cargo vessel design, offering unmatched efficiency and reliability for commercial shipping operations. This vessel features state-of-the-art cargo handling systems and advanced navigation technology.</p><p>With impressive cargo capacity and fuel-efficient engines, the Hamburg provides cost-effective transport solutions for businesses of all sizes. Our experienced crew ensures safe and timely delivery of your valuable goods to destinations worldwide.</p>',
            image: '../../Picture/boatpic/hamburg 2.png',
            specs: {
                'Length': '400 ft',
                'Beam': '58 ft',
                'Year': '2021',
                'Cargo Capacity': '85,000 tons',
                'Fuel Capacity': '3,500 tons',
                'Max Speed': '25 knots',
                'Crew Size': '28',
                'Range': '8,500 nautical miles'
            },
            gallery: [
                '../../Picture/hamburg 2.png',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320'
            ],
            status: 'available'
        },
        'sunseeker': {
            name: 'Sunseeker 86\'',
            price: '$2.8 Million',
            description: '<p>The Sunseeker 86\' represents the pinnacle of British yacht construction. This exquisite luxury yacht combines stunning aesthetics with impressive performance capabilities.</p><p>Featuring a meticulously designed interior with premium materials throughout, the Sunseeker 86\' offers exceptional comfort for extended cruising. Advanced stabilization systems ensure a smooth ride even in challenging conditions.</p>',
            image: '/api/placeholder/400/320',
            specs: {
                'Length': '86 ft',
                'Beam': '20.5 ft',
                'Year': '2024',
                'Fuel Capacity': '1,500 gallons',
                'Water Capacity': '300 gallons',
                'Max Speed': '30 knots',
                'Staterooms': '5',
                'Bathrooms': '5'
            },
            gallery: [
                '/api/placeholder/400/320',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320'
            ],
            status: 'unavailable'
        },
        'azimut': {
            name: 'Azimut 72\'',
            price: '$2.2 Million',
            description: '<p>The Azimut 72\' exemplifies Italian excellence in yacht design and engineering. With its sleek exterior and sophisticated interior, this vessel makes a powerful statement in any marina.</p><p>The spacious flybridge offers panoramic views and serves as an ideal entertainment space, while below deck, luxurious accommodations ensure comfort during extended voyages. Powered by twin MAN engines, the Azimut 72\' delivers exhilarating performance without compromising on refinement.</p>',
            image: '/api/placeholder/400/320',
            specs: {
                'Length': '72 ft',
                'Beam': '17.8 ft',
                'Year': '2023',
                'Fuel Capacity': '1,100 gallons',
                'Water Capacity': '250 gallons',
                'Max Speed': '32 knots',
                'Staterooms': '4',
                'Bathrooms': '3'
            },
            gallery: [
                '/api/placeholder/400/320',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320',
                '/api/placeholder/400/320'
            ],
            status: 'sold'
        }
    };

    // Get the vessel data or default to sea-ray if not found
    const vessel = vessels[vesselId] || vessels['sea-ray'];
    
    // Update page content with vessel data
    document.getElementById('vessel-title').textContent = vessel.name;
    
    // Update price based on availability status
    const priceElement = document.getElementById('vessel-price');
    if (vessel.status === 'sold') {
        priceElement.textContent = 'SOLD OUT';
        priceElement.classList.add('vessel-sold');
    } else if (vessel.status === 'unavailable') {
        priceElement.textContent = 'CURRENTLY UNAVAILABLE';
        priceElement.classList.add('vessel-unavailable');
    } else {
        priceElement.textContent = vessel.price;
    }
    
    document.getElementById('vessel-description').innerHTML = vessel.description;
    document.getElementById('vessel-main-image').src = vessel.image;
    document.getElementById('vessel-main-image').alt = vessel.name;
    
    // Update specifications
    const specsGrid = document.querySelector('.vessel-detail__specs-grid');
    specsGrid.innerHTML = ''; // Clear existing specs
    
    for (const [label, value] of Object.entries(vessel.specs)) {
        const specItem = document.createElement('div');
        specItem.className = 'vessel-detail__spec-item';
        
        specItem.innerHTML = `
            <p class="vessel-detail__spec-label">${label}</p>
            <p class="vessel-detail__spec-value">${value}</p>
        `;
        
        specsGrid.appendChild(specItem);
    }
    
    // Check if gallery exists before trying to update it
    const galleryGrid = document.querySelector('.vessel-detail__gallery-grid');
    if (galleryGrid) {
        galleryGrid.innerHTML = ''; // Clear existing gallery
        
        vessel.gallery.forEach((imgSrc, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'vessel-detail__gallery-item';
            
            galleryItem.innerHTML = `
                <img src="${imgSrc}" alt="${vessel.name} - Image ${index + 1}" class="vessel-detail__gallery-img">
            `;
            
            galleryGrid.appendChild(galleryItem);
        });
        
        // Setup gallery click events
        setupGalleryClickEvents();
    }
    
    // Update CTA button based on availability
    const ctaButton = document.querySelector('.vessel-detail__button');
    if (ctaButton) {
        if (vessel.status === 'sold') {
            ctaButton.textContent = 'Notify Me About Similar Vessels';
            ctaButton.classList.add('vessel-sold-cta');
        } else if (vessel.status === 'unavailable') {
            ctaButton.textContent = 'Join Waitlist';
            ctaButton.classList.add('vessel-unavailable-cta');
        } else {
            ctaButton.textContent = 'Inquire Now';
        }
    }
    
    // Update related vessels
    updateRelatedVessels(vesselId, vessels);
    
    // Apply overlay to main image if sold or unavailable
    const mainImage = document.getElementById('vessel-main-image');
    const imageContainer = document.querySelector('.vessel-detail__image-container');
    
    if (vessel.status === 'sold' || vessel.status === 'unavailable') {
        // Create status overlay if it doesn't exist
        if (!document.querySelector('.vessel-status-overlay')) {
            const statusOverlay = document.createElement('div');
            statusOverlay.className = `vessel-status-overlay ${vessel.status}`;
            statusOverlay.innerHTML = vessel.status === 'sold' ? 'SOLD OUT' : 'CURRENTLY UNAVAILABLE';
            imageContainer.appendChild(statusOverlay);
        }
    }
}

// Function to update related vessels
function updateRelatedVessels(currentVesselId, allVessels) {
    const relatedGrid = document.querySelector('.related-vessels__grid');
    if (!relatedGrid) return;
    
    relatedGrid.innerHTML = ''; // Clear existing related vessels
    
    // Get all vessel IDs except the current one
    const relatedVesselIds = Object.keys(allVessels).filter(id => id !== currentVesselId);
    
    // Select 3 random vessels to display as related
    const selectedIds = relatedVesselIds.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    selectedIds.forEach(id => {
        const vessel = allVessels[id];
        const relatedCard = document.createElement('div');
        relatedCard.className = 'related-vessel__card';
        
        // Add a class if the vessel is sold or unavailable
        if (vessel.status === 'sold' || vessel.status === 'unavailable') {
            relatedCard.classList.add(`vessel-${vessel.status}`);
        }
        
        // Display price or status based on availability
        let priceDisplay = vessel.price;
        if (vessel.status === 'sold') {
            priceDisplay = 'SOLD OUT';
        } else if (vessel.status === 'unavailable') {
            priceDisplay = 'CURRENTLY UNAVAILABLE';
        }
        
        relatedCard.innerHTML = `
            <div class="related-vessel__img-container">
                <img src="${vessel.image}" alt="${vessel.name}" class="related-vessel__img">
                ${vessel.status === 'sold' || vessel.status === 'unavailable' ? 
                  `<div class="related-vessel__status-overlay ${vessel.status}">
                      ${vessel.status === 'sold' ? 'SOLD OUT' : 'UNAVAILABLE'}
                   </div>` : ''}
            </div>
            <div class="related-vessel__info">
                <h3 class="related-vessel__title">${vessel.name}</h3>
                <p class="related-vessel__price ${vessel.status !== 'available' ? `vessel-${vessel.status}` : ''}">${priceDisplay}</p>
                <a href="vessel-detail.html?id=${id}" class="related-vessel__link">View Details <img src="../../Picture/Icon/chevron-right.svg" alt="Right arrow" class="icon"></a>
            </div>
        `;
        
        relatedGrid.appendChild(relatedCard);
    });
}

// Gallery functionality: enlarge image when clicked
function setupGalleryClickEvents() {
    document.querySelectorAll('.vessel-detail__gallery-img').forEach(img => {
        img.addEventListener('click', function() {
            document.getElementById('vessel-main-image').src = this.src;
            document.getElementById('vessel-main-image').alt = this.alt;
            
            // Scroll to top of image
            document.querySelector('.vessel-detail__image-container').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Initialize the page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    loadVesselData();
});
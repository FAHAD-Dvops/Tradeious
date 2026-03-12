/**
 * Tradeious.com - Main JavaScript
 * Handles interactivity, cart, modals, and UI enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ===== Mobile Navigation Toggle =====
    const mobileToggle = document.getElementById('mobileToggle');
    const mainNav = document.getElementById('mainNav');
    
    mobileToggle?.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
    
    // Close mobile nav when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            const icon = mobileToggle?.querySelector('i');
            icon?.classList.add('fa-bars');
            icon?.classList.remove('fa-times');
        });
    });
    
    // ===== Search Modal =====
    const searchBtn = document.querySelector('.search-btn');
    const searchModal = document.getElementById('searchModal');
    const searchClose = document.getElementById('searchClose');
    
    searchBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        searchModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    searchClose?.addEventListener('click', () => {
        searchModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    searchModal?.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // ===== Cart Sidebar =====
    const cartBtn = document.querySelector('.cart-btn');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartClose = document.getElementById('cartClose');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartItems = document.getElementById('cartItems');
    const cartCountEl = document.querySelectorAll('.cart-count');
    const totalAmountEl = document.querySelector('.total-amount');
    
    // Cart state
    let cart = JSON.parse(localStorage.getItem('tradeious_cart')) || [];
    
    function updateCartDisplay() {
        // Update cart count badges
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountEl.forEach(el => {
            el.textContent = totalCount;
        });
        
        // Update cart sidebar
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
            totalAmountEl.textContent = '$0.00';
            return;
        }
        
        let cartHTML = '';
        let total = 0;
        
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            cartHTML += `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p class="cart-item-price">$${item.price.toFixed(2)} × ${item.quantity}</p>
                        <p class="cart-item-subtotal">Subtotal: $${itemTotal.toFixed(2)}</p>
                        <button class="cart-item-remove" data-index="${index}">Remove</button>
                    </div>
                </div>
            `;
        });
        
        cartItems.innerHTML = cartHTML;
        totalAmountEl.textContent = `$${total.toFixed(2)}`;
        
        // Add remove event listeners
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.dataset.index;
                removeFromCart(index);
            });
        });
    }
    
    function addToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        saveCart();
        updateCartDisplay();
        showNotification(`${product.name} added to cart!`, 'success');
    }
    
    function removeFromCart(index) {
        cart.splice(index, 1);
        saveCart();
        updateCartDisplay();
    }
    
    function saveCart() {
        localStorage.setItem('tradeious_cart', JSON.stringify(cart));
    }
    
    function showNotification(message, type = 'info') {
        // Simple notification - can be enhanced with a library
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            ${message}
        `;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            background: ${type === 'success' ? '#16a34a' : '#2563eb'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            animation: slideIn 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Add keyframes for notification animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Cart button handlers
    cartBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateCartDisplay();
    });
    
    cartClose?.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    cartOverlay?.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Add to Cart buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = e.target.closest('.product-card');
            const product = {
                id: Date.now(),
                name: card.querySelector('.product-title').textContent,
                price: parseFloat(card.querySelector('.price-current').textContent.replace('$', '')),
                image: card.querySelector('.product-image img').src
            };
            addToCart(product);
        });
    });
    
    // Checkout button
    document.getElementById('checkoutBtn')?.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Your cart is empty!', 'info');
            return;
        }
        showNotification('Proceeding to checkout...', 'success');
        // Redirect to checkout page in production
        // window.location.href = '/checkout';
    });
    
    // Initialize cart display
    updateCartDisplay();
    
    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== Form Submission =====
    const contactForm = document.getElementById('contactForm');
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.company) {
            showNotification('Please fill in all required fields', 'info');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('Thank you! We\'ll contact you soon.', 'success');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
    
    // ===== Category Card Hover Effect Enhancement =====
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // ===== Intersection Observer for Animations =====
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.category-card, .product-card, .service-card, .testimonial-card').forEach(el => {
            observer.observe(el);
        });
    }
    
    // ===== Search Suggestions =====
    document.querySelectorAll('.suggestion-tags span').forEach(tag => {
        tag.addEventListener('click', function() {
            const searchTerm = this.textContent;
            const searchInput = document.querySelector('.search-form input');
            if (searchInput) {
                searchInput.value = searchTerm;
                searchInput.focus();
            }
        });
    });
    
    // ===== Keyboard Navigation for Accessibility =====
    document.addEventListener('keydown', (e) => {
        // Close modals with Escape key
        if (e.key === 'Escape') {
            searchModal?.classList.remove('active');
            cartSidebar?.classList.remove('active');
            cartOverlay?.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // ===== Initialize with welcome message (optional) =====
    console.log('%c🚀 Tradeious.com Loaded Successfully!', 'color: #2563eb; font-size: 14px; font-weight: bold;');
    console.log('%c💼 B2B Marketplace for FMCG, Tyres & Electronics', 'color: #64748b; font-size: 12px;');
});
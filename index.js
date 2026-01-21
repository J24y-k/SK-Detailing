// ===== GSAP REGISTRATION =====
gsap.registerPlugin(ScrollTrigger);

// ===== NAVIGATION =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===== GSAP ANIMATIONS =====

// Hero Section Animation
gsap.from('.hero-title .title-line', {
    duration: 1.2,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power4.out',
    delay: 0.3
});

gsap.from('.hero-subtitle', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.8
});

gsap.from('.hero-description', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 1
});

gsap.from('.hero-buttons .btn', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out',
    delay: 1.2
});

gsap.from('.feature-item', {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.15,
    ease: 'power3.out',
    delay: 1.5
});

gsap.from('.scroll-indicator', {
    duration: 1,
    opacity: 0,
    ease: 'power3.out',
    delay: 2
});

// Navbar Animation
gsap.from('.logo', {
    duration: 1,
    x: -50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
});

gsap.from('.nav-menu li', {
    duration: 0.8,
    y: -30,
    opacity: 0,
    stagger: 0.1,
    ease: 'power3.out',
    delay: 0.4
});

// ===== SCROLL TRIGGER ANIMATIONS =====

// Section Headers
gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header, {
        scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
});

// Benefit Cards
gsap.utils.toArray('.benefit-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 80,
        opacity: 0,
        ease: 'power3.out',
        delay: i * 0.1
    });
});

// Service Cards
gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 100,
        opacity: 0,
        ease: 'power3.out',
        delay: i * 0.2
    });
});

// Service Features List Items
gsap.utils.toArray('.service-features li').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        x: -30,
        opacity: 0,
        ease: 'power2.out',
        delay: i * 0.05
    });
});

// Add-ons Items
gsap.utils.toArray('.add-on-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.7,
        x: -50,
        opacity: 0,
        ease: 'back.out(1.7)',
        delay: i * 0.1
    });
});

// Step Cards
gsap.utils.toArray('.step-card').forEach((card, i) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });

    tl.from(card.querySelector('.step-number'), {
        duration: 0.5,
        scale: 0,
        opacity: 0,
        ease: 'back.out(1.7)'
    })
    .from(card.querySelector('.step-icon'), {
        duration: 0.7,
        scale: 0,
        rotation: -180,
        opacity: 0,
        ease: 'back.out(1.7)'
    }, '-=0.2')
    .from(card.querySelector('h3'), {
        duration: 0.5,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.3')
    .from(card.querySelector('p'), {
        duration: 0.5,
        y: 20,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.2');
});

// CTA Section
gsap.from('.cta-content h2', {
    scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.cta-content p', {
    scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
});

gsap.from('.cta-buttons .btn', {
    scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: 'back.out(1.7)',
    delay: 0.4
});

// Footer Animation
gsap.from('.footer-col', {
    scrollTrigger: {
        trigger: '.footer',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.15,
    ease: 'power3.out'
});

// ===== PARALLAX EFFECTS =====
gsap.to('.hero::before', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    y: 200,
    opacity: 0.05
});

// ===== HOVER ANIMATIONS FOR BENEFIT ICONS =====
document.querySelectorAll('.benefit-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
            duration: 0.3,
            scale: 1.15,
            rotation: 10,
            ease: 'back.out(1.7)'
        });
    });

    icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
            duration: 0.3,
            scale: 1,
            rotation: 0,
            ease: 'power2.out'
        });
    });
});

// ===== SCROLL PROGRESS INDICATOR =====
const scrollProgress = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // You can add a progress bar element if desired
    // For now, this function is ready for future implementation
};

window.addEventListener('scroll', scrollProgress);

// ===== SMOOTH REVEAL ON SCROLL =====
const revealElements = document.querySelectorAll('.benefit-card, .service-card, .step-card');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (elementTop < windowHeight - revealPoint) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// ===== CURSOR ANIMATION FOR BUTTONS =====
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        gsap.to(this, {
            duration: 0.3,
            scale: 1.05,
            ease: 'power2.out'
        });
    });

    button.addEventListener('mouseleave', function(e) {
        gsap.to(this, {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out'
        });
    });
});

// ===== LAZY LOADING FOR IMAGES =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ===== FLOATING ANIMATION FOR SERVICE BADGES =====
gsap.to('.service-badge', {
    y: -10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
    stagger: {
        each: 0.3,
        from: 'start'
    }
});

// ===== COUNTER ANIMATION FOR PRICES (Optional Enhancement) =====
const animateCounter = (element, target) => {
    gsap.to(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        innerHTML: target,
        duration: 2,
        snap: { innerHTML: 50 },
        ease: 'power1.out'
    });
};

// ===== BACKGROUND ANIMATION =====
gsap.to('.hero-overlay', {
    rotation: 360,
    duration: 60,
    repeat: -1,
    ease: 'none'
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
const debounce = (func, wait = 10, immediate = true) => {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(revealOnScroll));

// ===== PRELOADER (Optional - remove comment if needed) =====

window.addEventListener('load', () => {
    gsap.to('.preloader', {
        duration: 1,
        opacity: 0,
        display: 'none',
        ease: 'power3.out'
    });
});


// ===== CONSOLE GREETING =====
console.log('%c SK Detailing ', 'background: #D4AF37; color: #0A0A0A; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Premium Mobile Car Detailing ', 'background: #0A0A0A; color: #D4AF37; font-size: 14px; padding: 5px;');
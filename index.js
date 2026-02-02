// ===== GSAP REGISTRATION =====
gsap.registerPlugin(ScrollTrigger);

// Global ScrollTrigger config for mobile smoothness (throttle callbacks, handle fast flings)
ScrollTrigger.config({ 
    limitCallbacks: 1,  // Max 1 callback per frame → less jank
    fastScrollEnd: 200  // Ignores scrolls <200ms (flings) for stability
});


// ===== NAVIGATION =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Debounce function for scroll events
const debounce = (func, wait = 16, immediate = true) => {  // 16ms ≈ 60fps by default {
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

// Navbar scroll effect (debounced)
const handleNavbarScroll = debounce(() => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
window.addEventListener('scroll', handleNavbarScroll);

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

// ===== SCROLL TRIGGER ANIMATIONS (MOBILE-RESPONSIVE) =====
let mm = gsap.matchMedia();  // GSAP's responsive powerhouse

mm.add("(min-width: 769px)", () => {  // Desktop: Full animations with reverse
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
            ease: 'power3.out',
            delay: i * 0.1
        });
    });

    // Step Cards (with reverse for desktop)
    gsap.utils.toArray('.step-card').forEach((card, i) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'  // Reverse OK on desktop
            }
        });

        tl.from(card.querySelector('.step-number'), {
            duration: 0.5,
            scale: 0,
            opacity: 0,
            ease: 'back.out(1.7)',
            immediateRender: false
        })
        .from(card.querySelector('.step-icon'), {
            duration: 0.7,
            scale: 0,
            rotation: -180,
            opacity: 0,
            ease: 'back.out(1.7)',
            force3D: true,
            immediateRender: false
        }, '-=0.2')
        .from(card.querySelector('h3'), {
            duration: 0.5,
            y: 30,
            opacity: 0,
            ease: 'power3.out',
            immediateRender: false
        }, '-=0.3')
        .from(card.querySelector('p'), {
            duration: 0.5,
            y: 20,
            opacity: 0,
            ease: 'power3.out',
            immediateRender: false
        }, '-=0.2');
    });
});

mm.add("(max-width: 768px)", () => {  // Mobile: Simplified, no reverse for touch smoothness
    // Section Headers (no reverse)
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none none'  // No reverse = no shaky rewind
            },
            duration: 0.8,  // Slightly faster for mobile
            y: 30,
            opacity: 0,
            ease: 'power2.out'  // Lighter ease
        });
    });

    // Benefit Cards (no reverse)
    gsap.utils.toArray('.benefit-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            duration: 0.6,
            y: 50,
            opacity: 0,
            ease: 'power2.out',
            delay: i * 0.05  // Tighter stagger
        });
    });

    // Service Cards (no reverse)
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            duration: 0.8,
            y: 60,
            opacity: 0,
            ease: 'power2.out',
            delay: i * 0.1
        });
    });

    // Service Features List Items (no reverse)
    gsap.utils.toArray('.service-features li').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            duration: 0.4,
            x: -20,
            opacity: 0,
            ease: 'power2.out',
            delay: i * 0.03
        });
    });

    // Add-ons Items (no reverse)
    gsap.utils.toArray('.add-on-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            duration: 0.5,
            x: -30,
            opacity: 0,
            ease: 'power2.out',
            delay: i * 0.05
        });
    });

    // Step Cards (no reverse, simplified icon pop—no rotation for perf)
    gsap.utils.toArray('.step-card').forEach((card, i) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });

        tl.from(card.querySelector('.step-number'), {
            duration: 0.4,
            scale: 0,
            opacity: 0,
            ease: 'power2.out',
            immediateRender: false
        })
        .from(card.querySelector('.step-icon'), {
            duration: 0.5,
            scale: 0,
            opacity: 0,  // No rotation on mobile (saves calc)
            ease: 'power2.out',
            force3D: true,
            immediateRender: false
        }, '-=0.1')
        .from(card.querySelector('h3'), {
            duration: 0.4,
            y: 20,
            opacity: 0,
            ease: 'power2.out',
            immediateRender: false
        }, '-=0.2')
        .from(card.querySelector('p'), {
            duration: 0.4,
            y: 15,
            opacity: 0,
            ease: 'power2.out',
            immediateRender: false
        }, '-=0.1');
    });

    // ===== CTA SECTION (RESPONSIVE) =====
// TODO: change phone numbers in HTML for CTA buttons back to friend's number (e.g., tel:0711532418 and wa.me/27711532418) once testing is done
let mmService = gsap.matchMedia();

mmService.add("(min-width: 769px)", () => {
    // Ensure buttons are visible by default
    gsap.set('.cta-buttons .btn', { opacity: 1, y: 0 });
    
    gsap.from('.cta-content h2', {
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%',
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
            start: 'top 80%',
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
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            onEnter: () => console.log('Desktop CTA Buttons Fired!')
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        delay: 0.4
    });
});

mmService.add("(max-width: 768px)", () => {
    // Ensure buttons are visible by default
    gsap.set('.cta-buttons .btn', { opacity: 1, y: 0 });
    
    gsap.from('.cta-content h2', {
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
    });

    gsap.from('.cta-content p', {
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true
        },
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: 'power2.out',
        delay: 0.1
    });

    gsap.from('.cta-buttons .btn', {
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
            onEnter: () => console.log('Mobile CTA Buttons Fired!')
        },
        duration: 0.6,
        y: 20,
        opacity: 0,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 0.2
    });
});

    // Footer Animation (no reverse)
    gsap.from('.footer-col', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 0.6,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out'
    });
});

// Re-apply on resize/orientation change
mm.add("(orientation: portrait)", () => { /* Mobile portrait tweaks if needed */ });
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

// ===== SCROLL PROGRESS INDICATOR ===== (unused - removed listener for performance)
const scrollProgress = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // You can add a progress bar element if desired
    // For now, this function is ready for future implementation
};

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

// ===== FLOATING ANIMATION FOR SERVICE BADGES ===== (smoothed with sine ease and adjusted stagger/random start for mobile)
gsap.fromTo('.service-badge', 
    { y: 0 }, 
    {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
            each: 0.5,
            from: 'random'
        }
    }
);

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

// ===== ACTIVE NAV LINK ON SCROLL ===== (debounced)
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const handleActiveNav = debounce(() => {
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

window.addEventListener('scroll', handleActiveNav);

// ===== PERFORMANCE OPTIMIZATION =====
// (Reveal section removed to eliminate conflicts/redundancy with GSAP ScrollTrigger)

// ===== PRELOADER & REFRESH (uncommented and added ScrollTrigger refresh for layout/timing issues) =====
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
    // gsap.to('.preloader', {
    //     duration: 1,
    //     opacity: 0,
    //     display: 'none',
    //     ease: 'power3.out'
    // });
});

// ===== CONSOLE GREETING =====
console.log('%c SK Detailing ', 'background: #D4AF37; color: #0A0A0A; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Premium Mobile Car Detailing ', 'background: #0A0A0A; color: #D4AF37; font-size: 14px; padding: 5px;');

// ===== PERFORMANCE OPTIMIZATIONS =====
// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(10); // Instant animations
    ScrollTrigger.config({ limitCallbacks: true });
}

// Kill all ScrollTriggers on page hide (back/forward cache)
window.addEventListener('pagehide', () => {
    ScrollTrigger.getAll().forEach(st => st.kill());
});

// Refresh on visibility change
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        ScrollTrigger.refresh();
    }
});

// Throttle scroll for smoothness
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        ScrollTrigger.refresh(true);
    }, 100);
}, { passive: true });

// Add after ScrollTrigger config
const isLowPowerDevice = /Android.*Chrome\/[.0-9]*/.test(navigator.userAgent) || 
                         navigator.hardwareConcurrency <= 4;

if (isLowPowerDevice) {
    // Use simpler Intersection Observer instead
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.benefit-card, .service-card, .value-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        fadeInObserver.observe(el);
    });
}
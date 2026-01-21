// ===== GSAP REGISTRATION =====
gsap.registerPlugin(ScrollTrigger);

// ===== NAVIGATION =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

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

// ===== PAGE HERO ANIMATIONS =====
gsap.from('.page-title', {
    duration: 1.2,
    y: 80,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.3
});

gsap.from('.page-subtitle', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.6
});

gsap.from('.breadcrumb', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.9
});

// ===== SERVICES INTRO ANIMATIONS =====
gsap.from('.intro-content .section-subtitle', {
    scrollTrigger: {
        trigger: '.services-intro',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.intro-content .section-title', {
    scrollTrigger: {
        trigger: '.services-intro',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 40,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
});

gsap.from('.intro-text', {
    scrollTrigger: {
        trigger: '.services-intro',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.4
});

gsap.from('.intro-feature', {
    scrollTrigger: {
        trigger: '.intro-features',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.7,
    scale: 0,
    opacity: 0,
    stagger: 0.15,
    ease: 'back.out(1.7)',
    delay: 0.6
});

// ===== PACKAGE DETAILED ANIMATIONS =====
gsap.utils.toArray('.package-detailed').forEach((pkg, i) => {
    const isReverse = pkg.querySelector('.package-content.reverse');
    const direction = isReverse ? 50 : -50;
    
    // Package Info Animation
    gsap.from(pkg.querySelector('.package-info'), {
        scrollTrigger: {
            trigger: pkg,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: direction,
        opacity: 0,
        ease: 'power3.out'
    });

    // Package Visual Animation
    gsap.from(pkg.querySelector('.package-visual'), {
        scrollTrigger: {
            trigger: pkg,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: -direction,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.2
    });

    // Package Badge
    gsap.from(pkg.querySelector('.package-badge'), {
        scrollTrigger: {
            trigger: pkg,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        scale: 0,
        rotation: -180,
        opacity: 0,
        ease: 'back.out(1.7)',
        delay: 0.3
    });

    // Package Name
    gsap.from(pkg.querySelector('.package-name'), {
        scrollTrigger: {
            trigger: pkg,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.5
    });

    // Duration
    gsap.from(pkg.querySelector('.package-duration'), {
        scrollTrigger: {
            trigger: pkg,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.7,
        x: -30,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.6
    });

    // Pricing
    gsap.from(pkg.querySelector('.package-pricing'), {
        scrollTrigger: {
            trigger: pkg,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        scale: 0.9,
        opacity: 0,
        ease: 'back.out(1.7)',
        delay: 0.7
    });

    // Description
    gsap.from(pkg.querySelector('.package-description'), {
        scrollTrigger: {
            trigger: pkg,
            start: 'top 65%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.8
    });

    // Benefits Groups
    const benefitGroups = pkg.querySelectorAll('.benefit-group');
    benefitGroups.forEach((group, groupIndex) => {
        gsap.from(group, {
            scrollTrigger: {
                trigger: group,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 40,
            opacity: 0,
            ease: 'power3.out',
            delay: groupIndex * 0.2
        });

        // Individual list items
        gsap.from(group.querySelectorAll('li'), {
            scrollTrigger: {
                trigger: group,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.5,
            x: -20,
            opacity: 0,
            stagger: 0.05,
            ease: 'power2.out',
            delay: (groupIndex * 0.2) + 0.3
        });
    });

    // Ideal Tags
    gsap.from(pkg.querySelectorAll('.ideal-tags span'), {
        scrollTrigger: {
            trigger: pkg.querySelector('.package-ideal'),
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.5,
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    });
});

// Popular Banner Animation
if (document.querySelector('.popular-banner')) {
    gsap.from('.popular-banner', {
        scrollTrigger: {
            trigger: '.popular-banner',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: -50,
        opacity: 0,
        ease: 'back.out(1.7)'
    });
}

// ===== ADD-ONS ANIMATIONS =====
gsap.from('.addon-card', {
    scrollTrigger: {
        trigger: '.add-ons-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 80,
    opacity: 0,
    stagger: 0.15,
    ease: 'power3.out'
});

// Addon Icons Hover Effect
document.querySelectorAll('.addon-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
            duration: 0.4,
            scale: 1.15,
            rotation: 360,
            ease: 'back.out(1.7)'
        });
    });

    icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
            duration: 0.4,
            scale: 1,
            rotation: 0,
            ease: 'power2.out'
        });
    });
});

// ===== COMPARISON TABLE ANIMATIONS =====
gsap.from('.comparison-table thead', {
    scrollTrigger: {
        trigger: '.service-comparison',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: -30,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.comparison-table tbody tr', {
    scrollTrigger: {
        trigger: '.comparison-table',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.5,
    x: -50,
    opacity: 0,
    stagger: 0.05,
    ease: 'power2.out',
    delay: 0.3
});

// ===== PROCESS SECTION ANIMATIONS =====
gsap.utils.toArray('.process-step').forEach((step, i) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });

    tl.from(step.querySelector('.step-number'), {
        duration: 0.5,
        scale: 0,
        opacity: 0,
        ease: 'back.out(1.7)'
    })
    .from(step.querySelector('.step-icon'), {
        duration: 0.7,
        scale: 0,
        rotation: -180,
        opacity: 0,
        ease: 'back.out(1.7)'
    }, '-=0.2')
    .from(step.querySelector('h3'), {
        duration: 0.5,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.3')
    .from(step.querySelector('p'), {
        duration: 0.5,
        y: 20,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.2');
});

// ===== CTA SECTION =====
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

// ===== FOOTER ANIMATION =====
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
gsap.to('.page-hero::before', {
    scrollTrigger: {
        trigger: '.page-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    y: 150,
    opacity: 0.05
});

// ===== BUTTON ANIMATIONS =====
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        gsap.to(this, {
            duration: 0.3,
            scale: 1.05,
            ease: 'power2.out'
        });
    });

    button.addEventListener('mouseleave', function() {
        gsap.to(this, {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out'
        });
    });
});

// ===== PACKAGE CARD HOVER EFFECTS =====
document.querySelectorAll('.package-detailed').forEach(pkg => {
    pkg.addEventListener('mouseenter', () => {
        gsap.to(pkg, {
            duration: 0.3,
            y: -5,
            ease: 'power2.out'
        });
    });

    pkg.addEventListener('mouseleave', () => {
        gsap.to(pkg, {
            duration: 0.3,
            y: 0,
            ease: 'power2.out'
        });
    });
});

// ===== ADDON CARD HOVER PULSE =====
document.querySelectorAll('.addon-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('.addon-price'), {
            duration: 0.5,
            scale: 1.1,
            ease: 'elastic.out(1, 0.5)'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.addon-price'), {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out'
        });
    });
});

// ===== FLOATING ANIMATION FOR BADGES =====
gsap.to('.premium-badge', {
    y: -5,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});

gsap.to('.popular-banner i', {
    rotation: 15,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});

// ===== PRICE HIGHLIGHT ANIMATION =====
document.querySelectorAll('.price').forEach(price => {
    price.addEventListener('mouseenter', () => {
        gsap.to(price, {
            duration: 0.3,
            scale: 1.1,
            color: '#F4E5B8',
            ease: 'back.out(1.7)'
        });
    });

    price.addEventListener('mouseleave', () => {
        gsap.to(price, {
            duration: 0.3,
            scale: 1,
            color: '#D4AF37',
            ease: 'power2.out'
        });
    });
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for empty anchors
        if (href === '#' || href === '') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 100;
            
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: offsetTop,
                    autoKill: true
                },
                ease: 'power3.inOut'
            });
            
            // Close mobile menu if open
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// ===== INTRO FEATURES PULSE ANIMATION =====
document.querySelectorAll('.intro-feature i').forEach((icon, i) => {
    gsap.to(icon, {
        scale: 1.2,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: i * 0.2
    });
});

// ===== BENEFIT GROUP ICON ANIMATIONS =====
document.querySelectorAll('.benefit-group li i').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
            duration: 0.3,
            scale: 1.3,
            rotation: 360,
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

// ===== TABLE CELL HIGHLIGHT ON HOVER =====
document.querySelectorAll('.comparison-table tbody tr').forEach(row => {
    row.addEventListener('mouseenter', () => {
        gsap.to(row, {
            duration: 0.3,
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
            ease: 'power2.out'
        });
    });

    row.addEventListener('mouseleave', () => {
        gsap.to(row, {
            duration: 0.3,
            backgroundColor: 'transparent',
            ease: 'power2.out'
        });
    });
});

// ===== SECTION REVEAL ON SCROLL =====
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 95%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        opacity: 0,
        ease: 'power2.out'
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

// ===== CONSOLE GREETING =====
console.log('%c SK Detailing - Services ', 'background: #D4AF37; color: #0A0A0A; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Explore Our Premium Packages ', 'background: #0A0A0A; color: #D4AF37; font-size: 14px; padding: 5px;');
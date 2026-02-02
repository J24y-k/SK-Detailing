// ===== GSAP REGISTRATION =====
gsap.registerPlugin(ScrollTrigger);

// Global ScrollTrigger config for smoothness
ScrollTrigger.config({ 
    limitCallbacks: 1,
    fastScrollEnd: 200
});

// ===== NAVIGATION =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Debounce function for scroll events
const debounce = (func, wait = 16, immediate = true) => {
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

// ===== OUR STORY SECTION ANIMATIONS =====
gsap.from('.story-text .section-subtitle', {
    scrollTrigger: {
        trigger: '.our-story',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    x: -50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.story-text .section-title', {
    scrollTrigger: {
        trigger: '.our-story',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    x: -50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
});

gsap.from('.story-text p', {
    scrollTrigger: {
        trigger: '.our-story',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out',
    delay: 0.4
});

gsap.from('.highlight-item', {
    scrollTrigger: {
        trigger: '.story-highlights',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    x: -80,
    opacity: 0,
    stagger: 0.2,
    ease: 'back.out(1.7)',
    immediateRender: false
});

// Story Image Animation
gsap.from('.story-image .image-wrapper', {
    scrollTrigger: {
        trigger: '.story-image',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    duration: 1.2,
    scale: 0.8,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.image-badge', {
    scrollTrigger: {
        trigger: '.story-image',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    scale: 0,
    rotation: -180,
    opacity: 0,
    ease: 'back.out(1.7)',
    delay: 0.5
});

// ===== MISSION & VISION ANIMATIONS (RESPONSIVE) =====
let mmMission = gsap.matchMedia();

mmMission.add("(min-width: 769px)", () => {  // Desktop: With reverse
    gsap.from('.mv-card', {
        scrollTrigger: {
            trigger: '.mission-vision',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.3,
        ease: 'power3.out',
        immediateRender: false
    });
});

mmMission.add("(max-width: 768px)", () => {  // Mobile: Once-only, no reverse
    gsap.from('.mv-card', {
        scrollTrigger: {
            trigger: '.mission-vision',
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true
        },
        duration: 0.8,
        y: 60,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out',
        immediateRender: false
    });
});

// ===== CORE VALUES ANIMATIONS (RESPONSIVE) =====
let mmValues = gsap.matchMedia();

mmValues.add("(min-width: 769px)", () => {  // Desktop: Full timeline with reverse
    gsap.utils.toArray('.value-card').forEach((card, i) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            immediateRender: false
        });

        tl.from(card, {
            duration: 0.8,
            y: 80,
            opacity: 0,
            ease: 'power3.out',
            immediateRender: false
        })
        .from(card.querySelector('.value-number'), {
            duration: 0.5,
            scale: 0,
            opacity: 0,
            ease: 'back.out(1.7)',
            immediateRender: false
        }, '-=0.5')
        .from(card.querySelector('.value-icon'), {
            duration: 0.6,
            scale: 0,
            rotation: -180,
            ease: 'back.out(1.7)',
            immediateRender: false
        }, '-=0.4')
        .from(card.querySelector('h3'), {
            duration: 0.5,
            y: 20,
            opacity: 0,
            ease: 'power3.out',
            immediateRender: false
        }, '-=0.3')
        .from(card.querySelector('p'), {
            duration: 0.5,
            y: 15,
            opacity: 0,
            ease: 'power3.out',
            immediateRender: false
        }, '-=0.2');
    });
});

mmValues.add("(max-width: 768px)", () => {
    // Simplified: Just fade up, no complex timeline
    gsap.from('.value-card', {
        scrollTrigger: {
            trigger: '.core-values',
            start: 'top 75%',
            once: true
        },
        duration: 0.5,
        y: 40,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out',
        immediateRender: false,
        clearProps: 'all'
    });
});

// ===== WHY CHOOSE US ANIMATIONS =====
gsap.from('.why-image img', {
    scrollTrigger: {
        trigger: '.why-choose',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    duration: 1.2,
    scale: 0.9,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.experience-badge', {
    scrollTrigger: {
        trigger: '.why-choose',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    scale: 0,
    rotation: 360,
    opacity: 0,
    ease: 'back.out(1.7)',
    delay: 0.5
});

gsap.from('.why-text .section-subtitle', {
    scrollTrigger: {
        trigger: '.why-text',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    x: 50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.why-text .section-title', {
    scrollTrigger: {
        trigger: '.why-text',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    x: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
});

gsap.from('.intro-text', {
    scrollTrigger: {
        trigger: '.why-text',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.4
});

gsap.from('.feature-item', {
    scrollTrigger: {
        trigger: '.features-list',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.7,
    x: 50,
    opacity: 0,
    stagger: 0.15,
    ease: 'power3.out'
});

// ===== STATS COUNTER ANIMATION =====
const statNumbers = document.querySelectorAll('.stat-number');

statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    
    ScrollTrigger.create({
        trigger: stat,
        start: 'top 80%',
        onEnter: () => {
            gsap.to(stat, {
                innerHTML: target,
                duration: 2,
                snap: { innerHTML: 1 },
                ease: 'power1.out',
                onUpdate: function() {
                    stat.innerHTML = Math.ceil(this.targets()[0].innerHTML) + '';
                }
            });
        }
    });
});

// Stats Items Animation
gsap.from('.stat-item', {
    scrollTrigger: {
        trigger: '.stats-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'back.out(1.7)'
});

// ===== TEAM SECTION ANIMATIONS =====
// (Commented out in HTML, so no changes needed - but ready if uncommented)
// gsap.from('.team-member-card', {
//     scrollTrigger: {
//         trigger: '.meet-team',
//         start: 'top 70%',
//         toggleActions: 'play none none reverse'
//     },
//     duration: 1.2,
//     y: 100,
//     opacity: 0,
//     ease: 'power3.out'
// });

// ... (rest of team anims if needed)

// ===== TESTIMONIALS ANIMATIONS (RESPONSIVE) =====
let mmTestimonials = gsap.matchMedia();

mmTestimonials.add("(min-width: 769px)", () => {  // Desktop: With reverse
    gsap.from('.testimonial-card', {
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 80,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
        immediateRender: false
    });
});

mmTestimonials.add("(max-width: 768px)", () => {  // Mobile: Once-only, no reverse
    gsap.from('.testimonial-card', {
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true
        },
        duration: 0.6,
        y: 50,
        opacity: 0,
        stagger: 0.15,
        ease: 'power2.out',
        immediateRender: false
    });
});

// ===== CTA SECTION (RESPONSIVE) =====
// TODO: Jeremiah - Remember to change phone numbers in HTML for CTA buttons back to friend's number (e.g., tel:0711532418 and wa.me/27711532418) once testing is done
let mmAboutCTA = gsap.matchMedia();

mmAboutCTA.add("(min-width: 769px)", () => {
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

mmAboutCTA.add("(max-width: 768px)", () => {
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

// ===== FOOTER ANIMATION =====
// TODO: Jeremiah - Check footer HTML for any phone numbers (e.g., 0711532418 in contact links) and change back to friend's number once testing done
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

// ===== HOVER ANIMATIONS =====
// Value Card Icons
document.querySelectorAll('.value-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
            duration: 0.3,
            scale: 1.1,
            rotation: 15,
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

// Highlight Items Hover
document.querySelectorAll('.highlight-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item.querySelector('i'), {
            duration: 0.3,
            scale: 1.2,
            rotation: 10,
            ease: 'back.out(1.7)'
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelector('i'), {
            duration: 0.3,
            scale: 1,
            rotation: 0,
            ease: 'power2.out'
        });
    });
});

// Feature Icons Hover
document.querySelectorAll('.feature-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon.querySelector('i'), {
            duration: 0.3,
            scale: 1.2,
            ease: 'back.out(1.7)'
        });
    });

    icon.addEventListener('mouseleave', () => {
        gsap.to(icon.querySelector('i'), {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out'
        });
    });
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

// ===== TESTIMONIAL CARD ANIMATIONS =====
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelectorAll('.stars i'), {
            duration: 0.3,
            scale: 1.2,
            stagger: 0.05,
            ease: 'back.out(1.7)'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelectorAll('.stars i'), {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out'
        });
    });
});

// ===== FLOATING ANIMATION FOR BADGES =====
gsap.to('.image-badge', {
    y: -10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});

gsap.to('.experience-badge', {
    rotation: 5,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});

// ===== SMOOTH SCROLL TO SECTIONS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 80
                },
                ease: 'power3.inOut'
            });
        }
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
}  // ← Just a closing brace, no parenthesis, bit confusing here!


// ===== PRELOADER & REFRESH =====
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});

// ===== CONSOLE GREETING =====
console.log('%c SK Detailing - About Us ', 'background: #D4AF37; color: #0A0A0A; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Learn More About Our Story ', 'background: #0A0A0A; color: #D4AF37; font-size: 14px; padding: 5px;');

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
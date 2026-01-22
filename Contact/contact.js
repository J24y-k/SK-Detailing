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

// ===== QUICK CONTACT CARDS ANIMATIONS =====
gsap.from('.quick-contact-card', {
    scrollTrigger: {
        trigger: '.quick-contact',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 80,
    opacity: 0,
    stagger: 0.15,
    ease: 'power3.out'
});

// Quick Contact Card Hover Effect
document.querySelectorAll('.quick-contact-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('.quick-icon'), {
            duration: 0.4,
            scale: 1.15,
            rotation: 360,
            ease: 'back.out(1.7)'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.quick-icon'), {
            duration: 0.4,
            scale: 1,
            rotation: 0,
            ease: 'power2.out'
        });
    });
});

// ===== CONTACT FORM ANIMATIONS =====
gsap.from('.form-header', {
    scrollTrigger: {
        trigger: '.main-contact',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    x: -50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.main-contact',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    x: -50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
});

// Form Groups Animation
gsap.from('.form-group', {
    scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.6,
    y: 30,
    opacity: 0,
    stagger: 0.08,
    ease: 'power2.out',
    delay: 0.4
});

// ===== CONTACT INFO SECTION ANIMATIONS =====
gsap.from('.info-card', {
    scrollTrigger: {
        trigger: '.contact-info-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    x: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
});

// Info Items Animation
document.querySelectorAll('.info-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.7,
        x: -30,
        opacity: 0,
        ease: 'power2.out',
        delay: i * 0.1
    });
});

// ===== FAQ SECTION ANIMATIONS =====
gsap.from('.faq-item', {
    scrollTrigger: {
        trigger: '.faq-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.7,
    y: 50,
    opacity: 0,
    stagger: 0.1,
    ease: 'power3.out'
});

// FAQ Accordion Functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faq => {
            faq.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
            
            // Animate the opening
            gsap.to(item.querySelector('.faq-answer'), {
                duration: 0.4,
                maxHeight: '500px',
                ease: 'power2.out'
            });
        }
    });
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

// ===== FORM VALIDATION & SUBMISSION =====
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = {};
    
    formData.forEach((value, key) => {
        if (key === 'addons') {
            if (!data[key]) data[key] = [];
            data[key].push(value);
        } else {
            data[key] = value;
        }
    });
    
    // Validate form
    if (validateForm(data)) {
        // Simulate form submission
        submitForm(data);
    }
});

function validateForm(data) {
    let isValid = true;
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address');
        isValid = false;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(data.phone)) {
        alert('Please enter a valid phone number');
        isValid = false;
    }
    
    return isValid;
}

function submitForm(data) {
    // Show loading state
    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing WhatsApp...';
    submitBtn.disabled = true;
    
    // Format the WhatsApp message
    let message = `*🚗 New Booking Request - SK Detailing*%0A%0A`;
    message += `*📋 Customer Details:*%0A`;
    message += `Name: ${data.firstName} ${data.lastName}%0A`;
    message += `Email: ${data.email}%0A`;
    message += `Phone: ${data.phone}%0A%0A`;
    
    message += `*🔧 Service Details:*%0A`;
    message += `Service: ${data.service}%0A`;
    
    if (data.addons && data.addons.length > 0) {
        message += `Add-ons: ${data.addons.join(', ')}%0A`;
    }
    
    message += `%0A*📅 Booking Information:*%0A`;
    message += `Preferred Date: ${data.date}%0A`;
    message += `Preferred Time: ${data.time}%0A`;
    message += `Service Location: ${data.location}%0A`;
    
    if (data.vehicle) {
        message += `%0A*🚙 Vehicle Details:*%0A`;
        message += `${data.vehicle}%0A`;
    }
    
    if (data.message) {
        message += `%0A*💬 Additional Information:*%0A`;
        message += `${data.message}%0A`;
    }
    
    message += `%0A----%0A_Sent via SK Detailing Website_`;
    
    // Detect if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Use different URL format for mobile vs desktop
    let whatsappURL;
    if (isMobile) {
        // Mobile: Use whatsapp:// protocol to open app directly
        whatsappURL = `whatsapp://send?phone=27832688029&text=${message}`;
    } else {
        // Desktop: Use web.whatsapp.com
        whatsappURL = `https://web.whatsapp.com/send?phone=27832688029&text=${message}`;
    }
    
    // Log the WhatsApp URL for debugging
    console.log('Device Type:', isMobile ? 'Mobile' : 'Desktop');
    console.log('Opening WhatsApp with URL:', whatsappURL);
    console.log('Form Data:', data);
    
    // Small delay for UX, then open WhatsApp
    setTimeout(() => {
        // On mobile, use window.location for better app opening
        if (isMobile) {
            window.location.href = whatsappURL;
            
            // Fallback to wa.me if app doesn't open
            setTimeout(() => {
                const fallbackURL = `https://wa.me/27832688029?text=${message}`;
                console.log('Trying fallback URL:', fallbackURL);
                window.open(fallbackURL, '_blank');
            }, 1500);
        } else {
            // Desktop: Open in new tab
            const whatsappWindow = window.open(whatsappURL, '_blank');
            
            // Check if popup was blocked
            if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed == 'undefined') {
                alert('Pop-up blocked! Please allow pop-ups for this site and try again, or click the WhatsApp link in the success message.');
                // Try alternative URL
                window.open(`https://wa.me/27832688029?text=${message}`, '_blank');
            }
        }
        
        // Hide form and show success message
        gsap.to(contactForm, {
            duration: 0.5,
            opacity: 0,
            y: -30,
            onComplete: () => {
                contactForm.style.display = 'none';
                successMessage.classList.add('active');
                
                // Update manual WhatsApp link with the message
                const manualLink = document.getElementById('manualWhatsAppLink');
                if (manualLink) {
                    const manualURL = isMobile 
                        ? `whatsapp://send?phone=27832688029&text=${message}`
                        : `https://wa.me/27832688029?text=${message}`;
                    manualLink.href = manualURL;
                }
                
                gsap.from(successMessage, {
                    duration: 0.8,
                    scale: 0.8,
                    opacity: 0,
                    ease: 'back.out(1.7)'
                });
            }
        });
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 1000);
}

// Reset form function
window.resetForm = function() {
    successMessage.classList.remove('active');
    contactForm.style.display = 'block';
    contactForm.reset();
    
    gsap.from(contactForm, {
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: 'power3.out'
    });
};

// ===== INPUT FOCUS ANIMATIONS =====
const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        gsap.to(this, {
            duration: 0.3,
            scale: 1.02,
            ease: 'power2.out'
        });
        
        // Animate label
        const label = this.previousElementSibling;
        if (label && label.tagName === 'LABEL') {
            gsap.to(label, {
                duration: 0.3,
                color: '#D4AF37',
                ease: 'power2.out'
            });
        }
    });
    
    input.addEventListener('blur', function() {
        gsap.to(this, {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out'
        });
        
        // Reset label
        const label = this.previousElementSibling;
        if (label && label.tagName === 'LABEL') {
            gsap.to(label, {
                duration: 0.3,
                color: '#FFFFFF',
                ease: 'power2.out'
            });
        }
    });
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

// ===== INFO ICON ANIMATIONS =====
document.querySelectorAll('.info-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
            duration: 0.4,
            scale: 1.15,
            rotation: 15,
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

// ===== SOCIAL LINKS ANIMATIONS =====
document.querySelectorAll('.social-link').forEach((link, i) => {
    link.addEventListener('mouseenter', function() {
        gsap.to(this.querySelector('i'), {
            duration: 0.3,
            scale: 1.3,
            rotation: 360,
            ease: 'back.out(1.7)'
        });
    });

    link.addEventListener('mouseleave', function() {
        gsap.to(this.querySelector('i'), {
            duration: 0.3,
            scale: 1,
            rotation: 0,
            ease: 'power2.out'
        });
    });
});

// ===== FLOATING ANIMATION FOR GUARANTEE ICON =====
gsap.to('.guarantee-icon', {
    y: -10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});

// ===== CHECKBOX ANIMATION =====
document.querySelectorAll('.checkbox-label input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            gsap.from(this.parentElement, {
                duration: 0.3,
                scale: 1.05,
                ease: 'back.out(1.7)'
            });
        }
    });
});

// ===== DATE INPUT MIN DATE =====
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];
    dateInput.min = minDate;
}

// ===== FORM LABEL ICON PULSE =====
document.querySelectorAll('.form-group label i').forEach((icon, i) => {
    gsap.to(icon, {
        scale: 1.15,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: i * 0.2
    });
});

// ===== SUCCESS ICON ANIMATION =====
const successIcon = document.querySelector('.success-icon');
if (successIcon) {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.target.parentElement.classList.contains('active')) {
                gsap.from(successIcon, {
                    duration: 0.6,
                    scale: 0,
                    rotation: -180,
                    ease: 'back.out(1.7)',
                    delay: 0.3
                });
                
                gsap.from(successIcon.querySelector('i'), {
                    duration: 0.5,
                    scale: 0,
                    ease: 'back.out(2)',
                    delay: 0.6
                });
            }
        });
    });
    
    observer.observe(successMessage, { attributes: true, attributeFilter: ['class'] });
}

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

// ===== FORM NOTE PULSE =====
gsap.to('.form-note i', {
    scale: 1.2,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});

// ===== CONSOLE GREETING =====
console.log('%c SK Detailing - Contact Us ', 'background: #D4AF37; color: #0A0A0A; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Book Your Service Today ', 'background: #0A0A0A; color: #D4AF37; font-size: 14px; padding: 5px;');
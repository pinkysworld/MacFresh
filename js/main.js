// AppSweep Marketing Website - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isOpen = item.classList.contains('open');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('open');
            });
            
            // Toggle current item
            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
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

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Create mailto link
            const subject = encodeURIComponent(`AppSweep Support: ${data.subject || 'General Inquiry'}`);
            const body = encodeURIComponent(
                `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
            );
            
            window.location.href = `mailto:mip@gmx.biz?subject=${subject}&body=${body}`;
            
            // Show confirmation
            alert('Your email client will open to send the message. Thank you for reaching out!');
        });
    }

    // Fade in animations on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .source-card, .step-card, .testimonial-card, .tutorial-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Tutorial navigation
    const tutorialLinks = document.querySelectorAll('[data-tutorial]');
    
    tutorialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tutorialId = this.getAttribute('data-tutorial');
            showTutorial(tutorialId);
        });
    });

    // Back to tutorials button
    const backButtons = document.querySelectorAll('.back-to-tutorials');
    
    backButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            hideTutorial();
        });
    });
});

function showTutorial(id) {
    // Hide overview
    const overview = document.querySelector('.tutorial-overview');
    if (overview) overview.style.display = 'none';
    
    // Hide all tutorials
    document.querySelectorAll('.tutorial-detail').forEach(t => {
        t.style.display = 'none';
    });
    
    // Show selected tutorial
    const tutorial = document.querySelector(`#${id}`);
    if (tutorial) {
        tutorial.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function hideTutorial() {
    // Show overview
    const overview = document.querySelector('.tutorial-overview');
    if (overview) overview.style.display = 'block';
    
    // Hide all tutorials
    document.querySelectorAll('.tutorial-detail').forEach(t => {
        t.style.display = 'none';
    });
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

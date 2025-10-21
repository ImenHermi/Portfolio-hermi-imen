// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling pour les liens de navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll animations avec Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observer tous les éléments fade-in
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Rendre visibles immédiatement les éléments fade-in au chargement
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);

    // Active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Animation des images au survol
    const images = document.querySelectorAll('.hero-image img, .mission-vision-images img, .experience-logo img');
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Effet parallax léger sur les sections hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero::before, .hero::after');
        
        parallaxElements.forEach(el => {
            const speed = 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Animation du bouton CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        ctaButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }

    // Animation des cards au scroll
    const cards = document.querySelectorAll('.mission-vision-card, .skill-category, .personal-skill, .project-card, .experience-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        cardObserver.observe(card);
    });

    // Effet de changement de couleur sur les skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.borderLeftColor = '#ec4899';
        });
        category.addEventListener('mouseleave', function() {
            this.style.borderLeftColor = '#6366f1';
        });
    });

    // Animation du titre principal au chargement
    const mainTitle = document.querySelector('.hero h1');
    if (mainTitle) {
        mainTitle.style.opacity = '0';
        mainTitle.style.transform = 'translateY(-30px)';
        
        setTimeout(() => {
            mainTitle.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            mainTitle.style.opacity = '1';
            mainTitle.style.transform = 'translateY(0)';
        }, 200);
    }

    // Animation des éléments du hero au chargement
    const heroElements = document.querySelectorAll('.hero .subtitle, .hero p, .cta-button, .hero-image');
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 400 + (index * 200));
    });

    // Animation des contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        item.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    });

    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }, index * 150);
            }
        });
    }, {
        threshold: 0.5
    });

    contactItems.forEach(item => {
        contactObserver.observe(item);
    });

    // Effet de typing sur le titre (optionnel)
    const subtitle = document.querySelector('.hero .subtitle');
    if (subtitle) {
        const text = subtitle.textContent;
        subtitle.textContent = '';
        let i = 0;
        
        setTimeout(() => {
            const typing = setInterval(() => {
                if (i < text.length) {
                    subtitle.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 50);
        }, 1000);
    }

    // Ajout d'un effet de particules au survol des projets
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#ec4899';
        });
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'rgba(236, 72, 153, 0.2)';
        });
    });

    // Compteur de scroll pour afficher/masquer la navigation
    let lastScroll = 0;
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else if (currentScroll > lastScroll && currentScroll > 100) {
            // Scroll vers le bas
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scroll vers le haut
            nav.style.transform = 'translateY(0)';
            nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        }
        
        lastScroll = currentScroll;
    });
    
    nav.style.transition = 'transform 0.3s ease-out, box-shadow 0.3s ease-out';

    // Message de bienvenue dans la console
    console.log('%c👋 Bienvenue sur mon portfolio !', 'color: #6366f1; font-size: 20px; font-weight: bold;');
    console.log('%c💼 Hermi Imen - Développeuse Web & Mobile', 'color: #ec4899; font-size: 14px;');
    console.log('%c📧 Contact: Imenhermi80@gmail.com', 'color: #94a3b8; font-size: 12px;');
});

// Fonction pour détecter si l'utilisateur est sur mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// Gestion du redimensionnement de la fenêtre
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculer les positions si nécessaire
        if (isMobile()) {
            document.querySelectorAll('.mission-vision-card').forEach(card => {
                card.style.flexDirection = 'column';
            });
        }
    }, 250);
});

// Préchargement des images pour une meilleure performance
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        }
    });
});

// Animation de chargement de la page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-out';
        document.body.style.opacity = '1';
    }, 100);
});
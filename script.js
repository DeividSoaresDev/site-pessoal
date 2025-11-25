// customização do cursor 
// cursor customization
const spotlight = document.querySelector('.spotlight');

document.addEventListener('mousemove', (e) => {
    spotlight.style.left = e.clientX + 'px';
    spotlight.style.top = e.clientY + 'px';
});

// Rolagem suave para a navegação
// Smooth Scrolling for Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        
        // Remove a classe "active" de todos os links
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

        // Adiciona a classe "active" no link clicado
        // Add active class to clicked link
        link.classList.add('active');
        
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Efeito parallax para itens da galeria
// Parallax Effect for Gallery Items
window.addEventListener('scroll', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        const speed = item.dataset.parallax || 0.5;
        const rect = item.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const parallax = (rect.top + scrolled) * speed;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            item.style.transform = `translateY(${parallax * 0.1}px)`;
        }
    });
});

// Observer de interseção para animações de fade-in
// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplica fade-in às seções
// Apply fade-in to sections
document.querySelectorAll('.section-title, .about-text, .about-image, .gallery-item, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s, transform 0.8s';
    observer.observe(el);
});

// Navegação ativa conforme a rolagem
// Active Navigation on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Efeito spotlight aprimorado ao passar o mouse
// Enhanced Spotlight Effect on Hover
document.querySelectorAll('a, .gallery-item, .skill-tag').forEach(el => {
    el.addEventListener('mouseenter', () => {
        spotlight.style.width = '400px';
        spotlight.style.height = '400px';
    });
    
    el.addEventListener('mouseleave', () => {
        spotlight.style.width = '300px';
        spotlight.style.height = '300px';
    });
});

// Parallax suave no fundo da seção hero
// Smooth Hero Background Parallax
window.addEventListener('scroll', () => {
    const heroBg = document.querySelector('.hero-bg');
    const scrolled = window.pageYOffset;
    
    if (heroBg && scrolled < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px) scale(1.1)`;
    }
});
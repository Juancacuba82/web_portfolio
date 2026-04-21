// --- i18n Translations ---
const translations = {
    es: {
        nav_home: "Inicio",
        nav_about: "Sobre Mí",

        nav_contact: "Contacto",
        hero_hello: "Hola, soy",
        hero_desc: "Construyendo interfaces elegantes, rápidas y dinámicas. Fusiono código y diseño para darle vida a la web.",
        hero_cta: "Hablemos",
        about_title: "Sobre <span>Mí</span>",
        about_desc: "Transformo ideas en herramientas de venta. Como diseñador y programador, entiendo la tecnología y la estética necesarias para destacar en el mercado actual. Me especializo en gestión de campañas publicitarias en Meta, donde ayudo a negocios a escalar sus ingresos conectándolos con su audiencia ideal. Mi objetivo es que tu inversión digital se convierta en facturación real.",
        skill_1: "Diseño Web Comercial",
        skill_2: "Marketing en Redes",
        skill_3: "Automatización de Ventas",
        stat_1: "Años de Experiencia",
        stat_2: "Proyectos Finalizados",

        contact_title: "Hagamos <span>Contacto</span>",
        contact_desc: "¿Tienes una idea increíble en mente? Envíame un mensaje haciendo click en los enlaces debajo y empecemos juntos a trabajar.",
        footer_copy: "&copy; 2026 JuanCaPixel. Todos los derechos reservados."
    },
    en: {
        nav_home: "Home",
        nav_about: "About Me",

        nav_contact: "Contact",
        hero_hello: "Hi, I am",
        hero_desc: "Building elegant, fast, and dynamic interfaces. I merge code and design to bring the web to life.",
        hero_cta: "Let's Talk",
        about_title: "About <span>Me</span>",
        about_desc: "I transform ideas into sales tools. As a designer and programmer, I understand the technology and aesthetics needed to stand out in today's market. I specialize in managing advertising campaigns on Meta, where I help businesses scale their revenue by connecting them with their ideal audience. My goal is for your digital investment to turn into real billing.",
        skill_1: "Commercial Web Design",
        skill_2: "Social Media Marketing",
        skill_3: "Sales Automation",
        stat_1: "Years of Experience",
        stat_2: "Completed Projects",

        contact_title: "Let's <span>Connect</span>",
        contact_desc: "Have an amazing idea in mind? Send me a message by clicking the links below and let's start working together.",
        footer_copy: "&copy; 2026 JuanCaPixel. All rights reserved."
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // --- Language Toggle Logic ---
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('lang') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        
        if (langToggleBtn) {
            // Check button text: if currently ES, button must show "EN" to allow switching to EN.
            langToggleBtn.innerText = lang === 'es' ? 'EN' : 'ES'; 
        }
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key]; 
            }
        });
    }

    // Initialize Language
    setLanguage(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            setLanguage(currentLang === 'es' ? 'en' : 'es');
        });
    }

    // 0. Menu Mobile Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if(mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 1. Efecto en la barra de navegación al hacer scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer para revelar elementos al hacer scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Quitar el comentario si deseas que la animación solo ocurra la primera vez
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Seleccionar todos los elementos ocultos que deben animarse
    const hiddenElements = document.querySelectorAll('.hidden-fade, .hidden-slide, .hidden-slide-left, .hidden-slide-right, .hidden-slide-up');
    hiddenElements.forEach(el => observer.observe(el));

    // 3. Cursor interactivo brillante (Glow effect)
    const cursorGlow = document.querySelector('.cursor-glow');
    if (cursorGlow) {
        document.addEventListener('mousemove', (e) => {
            // Solo activar en dispositivos con mouse (no pantallas táctiles)
            if (window.matchMedia("(pointer: fine)").matches) {
                cursorGlow.style.left = e.clientX + 'px';
                cursorGlow.style.top = e.clientY + 'px';
            } else {
                cursorGlow.style.display = 'none';
            }
        });
    }

    // 4. Mostrar elementos de la sección de inicio (hero) al cargar
    setTimeout(() => {
        const initialElements = document.querySelectorAll('#home .hidden-fade, #home .hidden-slide');
        initialElements.forEach(el => el.classList.add('visible'));
    }, 100);
});

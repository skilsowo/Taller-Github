/*
==========================================
JAVASCRIPT SIMPLE PARA EL PORTAFOLIO
==========================================
Este archivo es muy fácil de entender y modificar.
Solo tiene funciones básicas para hacer el sitio más interactivo.
*/

// Función para el menú móvil (si lo necesitas más adelante)
function toggleMobileMenu() {
    // Esta función se puede usar si agregas un menú hamburguesa
    console.log('Menú móvil activado');
}

// Función para el formulario de contacto
function handleContactForm(event) {
    event.preventDefault(); // Evita que la página se recargue
    
    // Obtiene los datos del formulario
    const form = event.target;
    const formData = new FormData(form);
    
    // Muestra un mensaje de confirmación
    alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    
    // Limpia el formulario
    form.reset();
}

// Función para animar elementos cuando aparecen en pantalla
function animateOnScroll() {
    const elements = document.querySelectorAll('.project, .skill, .info-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Función para el scroll suave
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Función para cambiar el color del navbar al hacer scroll
function navbarScrollEffect() {
    const navbar = document.querySelector('.nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'var(--color-fondo)';
            navbar.style.backdropFilter = 'none';
        }
    });
}

// Función para agregar efectos hover a los proyectos
function addProjectEffects() {
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
        });
        
        project.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        });
    });
}

// Función para agregar efectos hover a las habilidades
function addSkillEffects() {
    const skills = document.querySelectorAll('.skill');
    
    skills.forEach(skill => {
        skill.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        skill.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Función para mostrar la fecha actual en el footer
function updateFooterDate() {
    const footer = document.querySelector('.footer p');
    const currentYear = new Date().getFullYear();
    
    if (footer) {
        footer.innerHTML = `&copy; ${currentYear} Tu Nombre. Hecho con ❤️`;
    }
}

// Función para validar el formulario de contacto
function validateContactForm() {
    const form = document.querySelector('.contact-form form');
    
    if (form) {
        form.addEventListener('submit', handleContactForm);
        
        // Validación en tiempo real
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    this.style.borderColor = '#ef4444';
                } else {
                    this.style.borderColor = 'var(--color-borde)';
                }
            });
        });
    }
}

// Función para agregar un efecto de escritura al título principal
function typeWriterEffect() {
    const title = document.querySelector('.hero-content h1');
    
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 100);
    }
}

// Función para agregar un contador animado (opcional)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Función para agregar un botón "Volver arriba"
function addBackToTopButton() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: var(--color-principal);
        color: white;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(backToTopBtn);
    
    // Mostrar/ocultar botón según el scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
        } else {
            backToTopBtn.style.opacity = '0';
        }
    });
    
    // Funcionalidad del botón
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Función para agregar efectos de partículas (muy simple)
function addParticleEffect() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: var(--color-principal);
                border-radius: 50%;
                opacity: 0.3;
                animation: float ${3 + Math.random() * 4}s infinite ease-in-out;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
            `;
            
            hero.appendChild(particle);
        }
        
        // Agregar la animación CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Función principal que inicializa todo
function init() {
    console.log('🚀 Portafolio iniciado correctamente');
    
    // Inicializar todas las funciones
    smoothScroll();
    navbarScrollEffect();
    addProjectEffects();
    addSkillEffects();
    updateFooterDate();
    validateContactForm();
    addBackToTopButton();
    
    // Efectos opcionales (descomenta si los quieres)
    // typeWriterEffect();
    // addParticleEffect();
    
    // Configurar animaciones iniciales
    const animatedElements = document.querySelectorAll('.project, .skill, .info-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    // Ejecutar animaciones al cargar
    setTimeout(() => {
        animateOnScroll();
    }, 100);
    
    // Ejecutar animaciones al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
}

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', init);

/*
==========================================
INSTRUCCIONES PARA PERSONALIZAR:
==========================================

1. AGREGAR NUEVAS FUNCIONES:
   - Crea una nueva función con un nombre descriptivo
   - Llámala desde la función init()

2. MODIFICAR EFECTOS:
   - Cambia los valores de transform, opacity, etc.
   - Ajusta los tiempos de animación

3. AGREGAR VALIDACIONES:
   - Modifica la función validateContactForm()
   - Agrega más validaciones según necesites

4. ACTIVAR EFECTOS OPCIONALES:
   - Descomenta las líneas en la función init()
   - typeWriterEffect() - Efecto de escritura
   - addParticleEffect() - Partículas flotantes

5. AGREGAR NUEVAS INTERACCIONES:
   - Usa addEventListener() para escuchar eventos
   - Modifica el DOM con querySelector()

¡Es muy fácil de entender y modificar!
*/
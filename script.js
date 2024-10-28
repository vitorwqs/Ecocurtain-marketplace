document.addEventListener('DOMContentLoaded', () => {
    // Menu Responsivo
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Scroll Suave
    const scrollLinks = document.querySelectorAll('.nav-links a');
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Carrossel de Depoimentos
    const carousel = document.querySelector('.testimonial-carousel');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    let currentIndex = 0;

    function showNextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonialItems.length;
        carousel.scrollTo({
            left: testimonialItems[currentIndex].offsetLeft,
            behavior: 'smooth'
        });
    }

    setInterval(showNextTestimonial, 3000);

    // Formulário de Contato: Validação e Feedback
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simples validação
        const name = contactForm.elements.name.value.trim();
        const email = contactForm.elements.email.value.trim();
        const message = contactForm.elements.message.value.trim();

        if (name && email && message) {
            alert('Mensagem enviada com sucesso!');
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Animação de Entrada
    const fadeInElements = document.querySelectorAll('.fade-in');
    const slideInElements = document.querySelectorAll('.slide-in');

    function animateOnScroll() {
        const windowHeight = window.innerHeight;
        fadeInElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
                element.classList.add('visible');
            }
        });

        slideInElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executar a função ao carregar a página

});

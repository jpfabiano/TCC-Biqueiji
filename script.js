

document.addEventListener('DOMContentLoaded', function() {
    // Adiciona animação de fade-in para elementos com a classe 'fade-in'
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transition = 'opacity 0.5s';
    });

    function fadeIn() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = 1;
            } else {
                element.style.opacity = 0;
            }
        });
    }

    window.addEventListener('scroll', fadeIn);

    // Adiciona rolagem suave para links internos
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


// Obtener el botón de toggle y los enlaces del menú
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Añadir un event listener al botón de toggle
menuToggle.addEventListener('click', () => {
    // Alternar la clase 'active' en los enlaces del menú y el botón toggle
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Manejar el desplazamiento suave al hacer clic en un enlace del menú
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        // Evitar el comportamiento predeterminado del enlace
        e.preventDefault();
        
        // Obtener el destino del enlace (el id de la sección)
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Realizar el desplazamiento suave hacia la sección
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Desplazar ligeramente hacia arriba para que no quede cubierto por el navbar fijo
                behavior: 'smooth'
            });
        }
        
        // Cerrar el menú en dispositivos móviles si se hace clic en un enlace
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

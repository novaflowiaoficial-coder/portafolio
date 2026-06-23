document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    // Verificación de seguridad
    if (!menuToggle || !nav) return;

    // Función para alternar el menú
    menuToggle.addEventListener("click", (e) => {
        // Evita que el clic se propague al documento
        e.stopPropagation(); 
        
        const isOpen = nav.classList.toggle("active");
        
        // Mejora de accesibilidad para el botón
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    // MEJORA: Cerrar el menú automáticamente si se hace clic afuera de él
    document.addEventListener("click", (e) => {
        if (nav.classList.contains("active") && !nav.contains(e.target) && e.target !== menuToggle) {
            nav.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
});

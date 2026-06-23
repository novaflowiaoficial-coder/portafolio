  // =====================================
// MENU HAMBURGUESA
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("#nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            nav.classList.toggle("active");

            menuToggle.textContent =
                nav.classList.contains("active")
                    ? "✕"
                    : "☰";
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll("#nav a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");
                menuToggle.textContent = "☰";

            });

        });

    }

});

// =====================================
// ANIMACIONES AL HACER SCROLL
// =====================================

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// =====================================
// BOTÓN VOLVER ARRIBA
// =====================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// =====================================
// RESALTADO AUTOMÁTICO DEL MENÚ
// =====================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});

// =====================================
// HEADER DINÁMICO
// =====================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background = "rgba(11,15,25,0.95)";

    } else {

        header.style.background = "rgba(11,15,25,0.80)";

    }

});

// =====================================
// EFECTO SUAVE EN TARJETAS
// =====================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-6px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// =====================================
// MENSAJE DE INICIO
// =====================================

console.log("🚀 Portfólio Kelvin Mendoza carregado com sucesso.");
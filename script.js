// ========================================
// GUÍA GASTRONÓMICA DE CAÑAS
// JavaScript principal
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // MENÚ PARA DISPOSITIVOS MÓVILES
    // ========================================

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("mostrar");

            const abierto = nav.classList.contains("mostrar");

            menuToggle.setAttribute("aria-expanded", abierto);
        });

        // Cerrar el menú al seleccionar una opción
        const enlaces = nav.querySelectorAll(".nav-link");

        enlaces.forEach((enlace) => {
            enlace.addEventListener("click", () => {
                nav.classList.remove("mostrar");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }


    // ========================================
    // FECHA Y HORA
    // ========================================

    const fechaHora = document.getElementById("fecha-hora");

    function actualizarFechaHora() {
        if (!fechaHora) return;

        const ahora = new Date();

        const fecha = ahora.toLocaleDateString("es-CR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });

        const hora = ahora.toLocaleTimeString("es-CR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        fechaHora.textContent = `${fecha} | ${hora}`;
    }

    if (fechaHora) {
        actualizarFechaHora();

        setInterval(actualizarFechaHora, 1000);
    }


    // ========================================
    // DESPLAZAMIENTO SUAVE
    // ========================================

    const enlacesInternos = document.querySelectorAll('a[href^="#"]');

    enlacesInternos.forEach((enlace) => {
        enlace.addEventListener("click", (evento) => {

            const destino = enlace.getAttribute("href");

            if (destino === "#") return;

            const elemento = document.querySelector(destino);

            if (elemento) {
                evento.preventDefault();

                elemento.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // ========================================
    // BOTÓN "VOLVER ARRIBA"
    // ========================================

    const botonArriba = document.querySelector(".volver-arriba");

    if (botonArriba) {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                botonArriba.classList.add("mostrar");
            } else {
                botonArriba.classList.remove("mostrar");
            }
        });

        botonArriba.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    // ========================================
    // ANIMACIÓN DE TARJETAS
    // ========================================

    const tarjetas = document.querySelectorAll(
        ".restaurante-card, .lugar-card, .categoria-card"
    );

    if ("IntersectionObserver" in window) {

        const observador = new IntersectionObserver(
            (entradas) => {

                entradas.forEach((entrada) => {

                    if (entrada.isIntersecting) {
                        entrada.target.classList.add("visible");
                        observador.unobserve(entrada.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        tarjetas.forEach((tarjeta) => {
            observador.observe(tarjeta);
        });
    }


    // ========================================
    // AÑO AUTOMÁTICO DEL FOOTER
    // ========================================

    const anio = document.querySelectorAll(".anio-actual");

    anio.forEach((elemento) => {
        elemento.textContent = new Date().getFullYear();
    });

});

// ========================================
// GUÍA GASTRONÓMICA DE CAÑAS
// JavaScript principal
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // MENÚ PARA DISPOSITIVOS MÓVILES
    // ========================================

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            nav.classList.toggle("nav-abierto");

            const menuAbierto = nav.classList.contains("nav-abierto");

            menuToggle.setAttribute(
                "aria-expanded",
                menuAbierto
            );

            menuToggle.textContent = menuAbierto
                ? "✕"
                : "☰";

        });


        // Cerrar el menú al seleccionar una opción

        const enlaces = nav.querySelectorAll("a");

        enlaces.forEach((enlace) => {

            enlace.addEventListener("click", () => {

                nav.classList.remove("nav-abierto");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.textContent = "☰";

            });

        });

    }


    // ========================================
    // AÑO AUTOMÁTICO
    // ========================================

    const anio = document.querySelector("#anio");

    if (anio) {
        anio.textContent = new Date().getFullYear();
    }


    // ========================================
    // ANIMACIÓN DE TARJETAS
    // ========================================

    const tarjetas = document.querySelectorAll(".menu-card");

    if ("IntersectionObserver" in window) {

        const observador = new IntersectionObserver(
            (elementos, observer) => {

                elementos.forEach((elemento) => {

                    if (elemento.isIntersecting) {

                        elemento.target.classList.add(
                            "tarjeta-visible"
                        );

                        observer.unobserve(elemento.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


        tarjetas.forEach((tarjeta) => {
            observador.observe(tarjeta);
        });

    }

});

// ========================================
// GUÍA GASTRONÓMICA DE CAÑAS
// JavaScript principal
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // MENÚ PARA DISPOSITIVOS MÓVILES
    // ========================================

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("activo");
        });

    }


    // ========================================
    // FORMULARIO DE CONTACTO
    // ========================================

    const formulario = document.querySelector("#formulario-contacto");

    if (formulario) {

        formulario.addEventListener("submit", (evento) => {

            evento.preventDefault();

            const nombre = document.querySelector("#nombre").value.trim();
            const correo = document.querySelector("#correo").value.trim();
            const asunto = document.querySelector("#asunto").value.trim();
            const mensaje = document.querySelector("#mensaje").value.trim();

            if (
                nombre === "" ||
                correo === "" ||
                asunto === "" ||
                mensaje === ""
            ) {

                alert("Por favor, completa todos los campos.");

                return;
            }


            // Mensaje de confirmación

            alert(
                "¡Gracias, " +
                nombre +
                "! Tu mensaje ha sido enviado correctamente."
            );


            // Limpiar formulario

            formulario.reset();

        });

    }

});


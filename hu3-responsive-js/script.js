/**
 * SCRIPT JAVASCRIPT - HISTORIA DE USUARIO 3
 * Este script aplica interacciones dinámicas en el frontend
 */

// Esperamos a que todo el documento web esté completamente cargado para ejecutar nuestro código
document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // REQUISITO 1: Mostrar mensaje de bienvenida
    // ==========================================
    const mensajeBienvenida = document.getElementById("mensaje-bienvenida");
    
    if (mensajeBienvenida) {
        // Removemos la clase 'o-oculto' para que el CSS nos permita verlo
        // Lo configuramos con un retraso leve para generar efecto (opcional)
        setTimeout(() => {
            mensajeBienvenida.classList.remove("o-oculto");
        }, 500); // Aparece medio segundo despues de cargar
        
        // Auto ocultamos el cartel luego de 5 segundos
        setTimeout(() => {
            mensajeBienvenida.classList.add("o-oculto");
        }, 5500);
    }
    
    // ==========================================
    // REQUISITO 2: Cambiar texto al presionar un botón
    // ==========================================
    const btnCambiarTexto = document.getElementById("btn-cambiar-texto");
    const parrafoInteractivo = document.getElementById("texto-interactivo");
    
    // Variables para alternar el texto
    const textoOriginal = "Desarrollando soluciones web eficientes, accesibles y estéticamente agradables empleando buenas prácticas.";
    const textoCurioso = "🚀 Dato Curioso: La primera página web del mundo se lanzó en 1991 y fue creada por Tim Berners-Lee. Ni siquiera tenía colores, solo enlaces y texto puro.";
    
    // Indicador de estado para el toggle del texto
    let estadoTexto = 0; 

    if (btnCambiarTexto && parrafoInteractivo) {
        // Agregamos un Escuchador de Evento 'click' al botón
        btnCambiarTexto.addEventListener("click", function() {
            
            // Lógica para alternar (toggle) los textos
            if (estadoTexto === 0) {
                parrafoInteractivo.innerHTML = `<strong>${textoCurioso}</strong>`;
                btnCambiarTexto.textContent = "Ver mi descripción real";
                estadoTexto = 1;
            } else {
                parrafoInteractivo.textContent = textoOriginal;
                btnCambiarTexto.textContent = "Un dato curioso...";
                estadoTexto = 0;
            }
        });
    }

    // ==========================================
    // REQUISITO 3: Botón que muestra u oculta una sección (Toggle)
    // ==========================================
    const btnToggle = document.getElementById("btn-toggle");
    const seccionHabilidades = document.getElementById("seccion-habilidades");
    
    if (btnToggle && seccionHabilidades) {
        
        // Inicialmente ocultamos la seccion con JS para que funcione el toggle correctamente
        // y sin afectar la accesibilidad a quienes no usan JS
        seccionHabilidades.classList.add("o-oculto");
        
        btnToggle.addEventListener("click", function() {
            // Utilizamos el método native toggle de classList
            // Si tiene la clase 'o-oculto', se la quita. Si no la tiene, se la pone.
            seccionHabilidades.classList.toggle("o-oculto");
            
            // Podemos de paso cambiar visualmente el estilo del boton
            if (seccionHabilidades.classList.contains("o-oculto")) {
                btnToggle.classList.replace("btn-secondary", "btn-primary");
            } else {
                // Al estar abierto, usar color secundario
                btnToggle.classList.replace("btn-primary", "btn-secondary");
            }
        });
    }
});

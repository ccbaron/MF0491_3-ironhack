/**
 * ¡Buena suerte! ¡Pasa el mensaje!
 */

// Obtenemos los elementos que necesitamos del DOM

const btnSend = document.getElementById('btn-send');
const inputMessage = document.getElementById('message');
const lastMessage = document.getElementById('last-message');

// Asociamos el evento click al botón enviar

btnSend.addEventListener('click', function() {

    // 1. Tomamos el valor del input
    const message = inputMessage.value;
    
    // 2. Colocamos el valor en el contenedor #last-message, modificando el DOM
    lastMessage.textContent = message;
    
    // 3. Limpiamos el input
    inputMessage.value = '';
});
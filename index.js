const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const feedbackInput = document.getElementById('feedback');
const errorLabel = document.getElementById('errorLabel');

 form.addEventListener('submit', function(event) {

   event.preventDefault();

   if (!validaCamposRequeridos()) {
    muestraMensajeError('Por favor complete todos los campos');
  } else if (!validaEmail(emailInput.value)) { 
    muestraMensajeError('El email no es válido');
  } else {
    enviaFormulario();  
  }

});


function validaCamposRequeridos() {
 }

function validaEmail(email) {
 }

function muestraMensajeError(mensaje) {
  errorLabel.textContent = mensaje;
}

function enviaFormulario() {
 }

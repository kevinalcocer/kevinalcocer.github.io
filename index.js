document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var feedbackInput = document.getElementById('feedback');
    var errorLabel = document.getElementById('errorLabel');
    
    // Validar campos requeridos
    if (nameInput.checkValidity() && emailInput.checkValidity() && feedbackInput.checkValidity()) {
      // Enviar formulario si los campos están completos
      errorLabel.textContent = '';
      // Aquí puedes agregar el código para enviar los datos del formulario a un servidor o realizar alguna otra acción.
      alert('Formulario enviado correctamente');
      // Restablecer los campos del formulario
      nameInput.value = '';
      emailInput.value = '';
      feedbackInput.value = '';
    } else {
      errorLabel.textContent = 'Por favor, complete todos los campos.';
    }
  });

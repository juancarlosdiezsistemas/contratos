$(document).ready(function(){
  (function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
         
          alert('no validado')

        }
        form.classList.add('was-validated');
        
        contrato_ComisionPro();
        
      }, false)
    })
})()

});
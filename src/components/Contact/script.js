(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })

  })()

function saveValue(){
    const fullname_val = document.getElementById("fullname_input").value
    const email_val = document.getElementById("email_input").value
    const phone_val = document.getElementById("phone_input").value
    const nationality_val = document.getElementById("nationality_input").value
    
    localStorage.setItem("fullname", fullname_val)
    localStorage.setItem("email", email_val)
    localStorage.setItem("phone", phone_val)
    localStorage.setItem("nationality", nationality_val)

}
    
document.getElementById("fullname_value").innerHTML = localStorage.getItem("fullname")
document.getElementById("email_value").innerHTML = localStorage.getItem("email")
document.getElementById("phone_value").innerHTML = localStorage.getItem("phone")
document.getElementById("nationality_value").innerHTML = localStorage.getItem("nationality")

document.getElementById("hi_name").innerHTML = localStorage.getItem("fullname")

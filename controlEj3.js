const btnLogin = document.querySelector("#login");
const usuario = document.querySelector("#usuario");
const password = document.querySelector("#password");
const form = document.querySelector("#form");



form.addEventListener("focusout", validarInput);

function validarInput(ev) {
  const input = ev.target;
  let mesagge ='';
  input.classList.remove("is-valid", "is-invalid");
  switch (input.type){
    case "email":
      
      if (!input.value.includes("@")) {
        mesagge = "el usuario no contiene @";
      } else {
        input.nextElementSibling.classList.add("d-none");
      }
      if (mesagge.length != 0) {
        input.classList.add("is-invalid");
        input.nextElementSibling.innerText = mesagge;
        input.nextElementSibling.classList.remove("d-none");
        return;
      } else {
        input.classList.add("is-valid");
        input.nextElementSibling.classList.add("d-none");
      }
      break;
    case "password":

    /*
       console.log(input.type);
       console.log(input.value);
       console.log(input.value.lenght);
       console.log(password.value);
       console.log(password.value.length);
    */
       //por alguna razon si uso input (que es ev y este es basicamente document.querySelector("#password") ) no lee el valor
      if (password.value.length < 6) {
        mesagge = "la contraseña es menor a 6";

      } else {
        input.nextElementSibling.classList.add("d-none");
      }
      if (mesagge.length != 0) {
        input.classList.add("is-invalid");

        input.nextElementSibling.innerText = mesagge;
        input.nextElementSibling.classList.remove("d-none");
        return;
      } else {
        input.classList.add("is-valid");
        input.nextElementSibling.classList.add("d-none");
      }
      
  }

}
form.addEventListener("focusout", ()=> {
  /*const inputsRequired = document.querySelectorAll("#form input[required]");
  console.log(inputsRequired);
  */
 const inputsRequired = Array.from(document.querySelectorAll("#form input[required]"));
  if (inputsRequired.every( e => e.classList.contains("is-valid")))
  {
    btnLogin.removeAttribute("disabled");
  }
})
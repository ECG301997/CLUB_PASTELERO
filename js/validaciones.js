
function validar_nombreUsuario(String){
   let input = document.getElementById("in_usuario");
   let regxp = /^([a-zA-Z0-9_-]){3,9}$/;
      if(input != regxp){
         return(regxp.test(input.value));
      }
   }

function validar_contrasena(String){
   let input = document.getElementById("in_contrasena");
   let regxp = /^([a-zA-Z0-9_-]){6,20}$/;
      if(input != regxp){
         return(regxp.test(input.value));
      }
   }

   function validarCampos() {
      let nombre = validar_nombreUsuario();
      let pasword = validar_contrasena();
      if (nombre) {
         if (pasword) {
            
            agregarRegistro()
         } else {
            alert("Debes revisar que tu CONTRASEÑA cumpla los siguientes requisitos:" +
               "\n\n➤Debe tener 6 o más caracteres." +
               "\n➤Solo puede contener caracteres alfanuméricos. " +
               "Es decir, letras de la A a la Z y los números del 0 al 9.")
         }
      } else {
         alert("Debes revisar que tu NOMBRE de usuario cumpla los siguientes requisitos:" +
            "\n\n➤ Debe tener más de 3 caracteres." +
            "\n➤  Debe tener 9 o menos caracteres." +
            "\n➤  Solo puede contener caracteres alfanuméricos. \n   Es decir, letras de la A a la Z y los números del 0 al 9.")
      }
   }
   
   //module.exports.validar_nombreUsuario = validar_nombreUsuario;
   //module.exports.validar_contrasena = validar_contrasena;
   
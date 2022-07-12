let registros = [];
function agregarRegistro(){
    let usuario = document.getElementById("in_usuario").value;
    let contrasena = document.getElementById("in_contrasena").value;
    registros.push({usuario,contrasena});
}
function validar_captcha(rcaptcha){
    if(rcaptcha == "5"){
      return true;
    }else{
      return false;
    }
  }
function iniciar_sesion(usuario,contrasena,rcaptcha){
    for(i=0;i<registros.length;i++){
      if (registros[i].usuario === usuario && registros[i].contrasena === contrasena && validar_captcha(rcaptcha) === true){
          console.log("verdadero");
          return true;
      }else{
        console.log("falso")
          return false;
      } 
    }
  }
  iniciar_sesion("rafa1","rafa11","5")
module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;
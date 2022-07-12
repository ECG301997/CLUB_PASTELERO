let registros = [];

function agregarRegistro(){
     // let usuario = document.getElementById("in_usuario").value;
    // let contrasena = document.getElementById("in_contrasena").value;
    // registros.push({usuario,contrasena});
    let inputUsuario = document.getElementById("in_usuario");
    let inputContrasena = document.getElementById("in_contrasena");
    registros.push({ "usuario": inputUsuario.value, "contrasena": inputContrasena.value })
    inputUsuario.value = ""
    inputContrasena.value = ""
    alert("Se ha guardado correctamente el usuario ")
}

function filtrarPorContrasena(arreglo,filtro){
    // let registrosFiltrados = []
    // for (let i = 0; i < arreglo.length; i++) {
    //     let nombre = arreglo[i].usuario;
    //     let pasword = arreglo[i].contrasena;
    //     if (pasword.length <= filtro) {
    //         registrosFiltrados.push({ "usuario": nombre, "contrasena": pasword })
    //     }
    // }
    // return registrosFiltrados
    let formularios = arreglo.filter(formulario => (formulario.contrasena).length <= filtro);
    console.log(formularios);
    return formularios;
}

// module.exports.registros = registros;
// module.exports.filtrarPorContrasena = filtrarPorContrasena;
// module.exports.agregarRegistro = agregarRegistro;
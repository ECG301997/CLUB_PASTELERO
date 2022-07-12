let minutos = 0;
let segundos = 5;
//definimos y ejecutamos los segundos de la
let  sound = function(){
    document.getElementById('sound').innerHTML= '<audio autoplay><source src="../horse.mp3" type="audio/mpeg"></audio>';
}

function cargarSegundo() {
    let txtSegundos;

    if (segundos < 0) {
        segundos = 59;
    }

    //Mostrar segundos en pantalla
    if (segundos < 10) {
        txtSegundos = `0${segundos}`;
    } else {
        txtSegundos = segundos;
    }

    if (minutos == 0 && segundos == 0) {
        setTimeout(() => {
            segundos = 0;
        }, 0)
        sound();         
    }
    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos--;
    cargarMinutos(segundos)
}

// Definimos  y ejecutamos los minutos

function cargarMinutos(segundos) {
    let txtMinutos;

    if (segundos == -1 && minutos !== 0) {
        setTimeout(() => {
            minutos--;
        }, 500)
    } else if (segundos == -1 && minutos == 0) {
        setTimeout(() => {
            minutos = 0;
        }, 500)
    }

    // Mostrar minutos en pantalla
    if (minutos < 10) {
        txtMinutos = `0${minutos}`;
    } else {
        txtMinutos = minutos;
    }
    document.getElementById('minutos').innerHTML = txtMinutos;
}

// tempo = setInterval(cargarSegundo, 1000);
//Ejecutamos la funcion cada segundo
// let init = document.getElementById('inicio');
// init.addEventListener('click', (ev) => {
//     ev.setInterval(cargarSegundo, 1000);
// });

function temporizador() {
    setInterval(cargarSegundo, 1000);
    let boton = document.getElementById("boton-iniciar");
    boton.addEventListener("mouseover", function () { boton.textContent = "Parar" });
    boton.addEventListener("mouseout", function () { boton.textContent = "Contando" });
}

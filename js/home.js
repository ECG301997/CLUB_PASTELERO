// menu
const barraLateral = document.getElementById('nav_drawer')
const contenedor = document.getElementById('contenedor')
const logo = document.getElementById('logo_0')
const menu = document.getElementById('menu')
let bandera = true


// cocina interactiva
let sliderCI = document.querySelector(".slider-container")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let interval = 3000;

let slider1 = document.getElementsByClassName("slider1")
let slider2 = document.getElementsByClassName("slider2")
let slider3 = document.getElementsByClassName("slider3")


let logoSup = document.getElementById("logo-sup")
let menuContainer = document.getElementById("menu-container")
let sectionHome = document.getElementById("section_Home")



window.addEventListener('scroll', function () {

    let scrollMin = sectionHome.clientHeight
    let mitadAlturaSeccion = (scrollMin*(1 / 2.4))

    if (window.pageYOffset > mitadAlturaSeccion) {
        let valueScroll = window.pageYOffset - mitadAlturaSeccion

        menuContainer.className = "enfocar"


        if (valueScroll < mitadAlturaSeccion) {
            let value = valueScroll / mitadAlturaSeccion
            menuContainer.style.background = "rgb(142, 231, 210, " + value + ")"
            menuContainer.style.boxShadow = "0px 0px 20px 2px rgb(119, 119, 119, " + value + ")"
            if (bandera) {
                logoSup.style.opacity = value
            }
            
        } else if (valueScroll >= mitadAlturaSeccion) {
            menuContainer.style.background = "rgb(142, 231, 210, 1)"
            menuContainer.style.boxShadow = "0px 0px 20px 2px rgb(119, 119, 119, 1)"
            if (bandera) {
                logoSup.style.opacity = 1
            }
        }
    } else {
        menuContainer.style.background = "rgb(142, 231, 210, 0)"
        menuContainer.style.boxShadow = "0px 0px 20px 2px rgb(119, 119, 119, 0)"
        logoSup.style.opacity = 0
        menuContainer.classList.remove("enfocar")
    }

});
// document.getElementById('descripcion').innerHTML = window.pageYOffset + 'px';

function viewMenu() {
    // menu.style.transition = "all 1.0s";
    menuContainer.style.transition = "all 1.0s";
    let heightSectionHome = sectionHome.clientHeight
    let valueScroll = window.pageYOffset 

    if (bandera) {
        //saca el menu
        if(valueScroll>=heightSectionHome){
            logoSup.style.opacity = "0"
        }

        menuContainer.style.left = "200px";
        menu.style.width = "calc(100% - 5% - 221px)";
        menu.style.margin = "0 5% 0 20px";
        barraLateral.style.left = "0px";
        contenedor.style.margin = "0px 0px 0px 200px";
        contenedor.style.width = "calc(100% - 200px)";
        bandera = false
    } else {
        //esconde el menu
        if(valueScroll>=heightSectionHome){
            logoSup.style.opacity = "1"
        }
        menuContainer.style.left = "0px";
        menu.style.margin = "0 5%";
        menu.style.width = "90%";
        barraLateral.style.left = "-200px";
        contenedor.style.margin = "0px 0px 0px 0px";
        contenedor.style.width = "calc(100% - 0px)";
        bandera = true
    }
}

// slider.oninput = function () {
//     console.log(this.value)

//     if (this.value == 0) {
//         contentCarrousel.style.animation = "rotarAtrasFull 50s infinite linear";
//     } else if (this.value == 1) {
//         contentCarrousel.style.animation = "rotarAtras 50s infinite linear";
//     } else if (this.value == 2) {
//         contentCarrousel.style.animation = "rotar 50s infinite linear";
//     } else if (this.value == 3) {
//         contentCarrousel.style.animation = "rotarAdelante 50s infinite linear";
//     } else if (this.value == 4) {
//         contentCarrousel.style.animation = "rotarAdelanteFull 50s infinite linear";

//     }
// }


setInterval(() => {
    slides()
}, interval);

function slides() {
    let width = document.getElementById('section_interactiva').clientWidth
    let valor = (-(width - (00)) * contador);
    sliderCI.style.transform = "translate(" + valor + "px)";
    sliderCI.style.transition = "transform .7s"
    contador++;

    if (contador == sliderIndividual.length) {
        setTimeout(function () {
            sliderCI.style.transform = "translate(0px)";
            sliderCI.style.transition = "transform 0s"
            contador = 1;
        }, 1500)
    }
}





document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -50,
        shift: 5,
        padding: 5,
        numVisible: 6,
        indicators: true,
        noWrap: false
    });
});


function rec_1() {
    document.addEventListener.onclick(window.open('pags/recetas.html?receta=receta_1'));
}
function rec_2() {
    document.addEventListener.onclick(window.open('pags/recetas.html?receta=receta_2'));
}
function rec_3() {
    document.addEventListener.onclick(window.open('pags/recetas.html?receta=receta_3'));
}
function rec_4() {
    document.addEventListener.onclick(window.open('pags/recetas.html?receta=receta_4'));
}


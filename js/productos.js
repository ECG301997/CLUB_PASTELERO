
let slider = document.querySelector(".slider-container")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let interval = 5000;

let slider1 = document.getElementsByClassName("slider1")
let slider2 = document.getElementsByClassName("slider2")
let slider3 = document.getElementsByClassName("slider3")

window.addEventListener("resize", function () {
    width = sliderIndividual[0].clientWidth;
})

setInterval(() => {
    slides()
}, interval);

function slides() {

    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition  = "transform .7s",
    contador++;
    

    if (contador == sliderIndividual.length) {
        setTimeout(function () {
            slider.style.transform = "translate(0px)";
        slider.style.transition  = "transform 0s"
        contador = 1;
        
        }, 1500)
    }
    
}

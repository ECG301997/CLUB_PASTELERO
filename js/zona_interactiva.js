// const check,
// checkOn;

// let a = checkOn.addEventListener("click", () => {
// 	check.checked = true;
// });

// switch ( a ) {
//     case document.querySelector("#imgsel2"):
//         check= document.querySelector("#selected2")

// }

// const check1 = document.querySelector("#selected1"),
// checkOn1 = document.querySelector("#imgsel1");

// checkOn1.addEventListener("click", () => {
// 	check1.checked = true;
// });
// const check2 = document.querySelector("#selected2"),
// checkOn2 = document.querySelector("#imgsel2");

// checkOn2.addEventListener("click", () => {
// 	check2.checked = true;
// });
// const check3 = document.querySelector("#selected3"),
// checkOn3 = document.querySelector("#imgsel3");

// checkOn3.addEventListener("click", () => {
// 	check3.checked = true;
// });
// const check4 = document.querySelector("#selected4"),
// checkOn4 = document.querySelector("#imgsel4");

// checkOn4.addEventListener("click", () => {
// 	check4.checked = true;
// });



// function seleccioncheck (a , b , view1, view2){
//     let c = document.querySelector(a);
//     let d = document.querySelector(b);
//     let e = document.getElementById(view1);
//     let f = document.getElementById(view2);
//     d.addEventListener("click" , () => {
//         c.checked = true;
//         e.document.style.display = 'flex';
//         f.document.style.display = 'none';
//     })
// }

// seleccioncheck( "#selected1", "#imgsel1", "view-receta1");
// seleccioncheck( "#selected2", "#imgsel2", "view-receta2", "view-receta1");
// seleccioncheck( "#selected3", "#imgsel3", "view-receta3");
// seleccioncheck( "#selected4", "#imgsel4", "view-receta4");

// function checkimg (a , b) {
//     let c = document.querySelector(a);
//     let d = document.getElementById(b)
//     c.addEventListener("click", () => {
//         d.document.style.display = "flex";
//     })
// }

// checkimg( "#selected1", "#view-receta1")
// checkimg( "#selected2", "#view-receta2")
// checkimg( "#selected3", "#view-receta3")
// checkimg( "#selected4", "#view-receta4")

function seleccioncheck (item){

    let elementoSeleccionado = document.querySelector("#selected"+item);
    let showSelect = document.getElementById("view-receta"+item);
    let numero = document.querySelectorAll("input[type= 'radio']:checked")
    if (numero.length > 0) {
        
        let beforeSelected = document.getElementById("view-receta"+numero[0].id.replace("selected",""));        
        beforeSelected.style.display = "none"
    }
    elementoSeleccionado.checked = true;
    showSelect.style.display = "flex";
}

seleccioncheck(1);


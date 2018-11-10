var galletas = 0;

//arreglo,cursos,abuelitas,galelta tenemos
var inventario = [0, 0, 0];

//llevar la cuenta de cuantos producen
var galletasProduce = [1, 2, 4];

//cuantas galletas nos va a costar
var precioProducto = [10, 200, 400];

//funcion click incrementar galletas
function clic() {
    galletas++;
}

//funcion para comprar cosas
function comprar(objeto) {

    //comrpar con dinero suficiente
    if (galletas >= precioProducto[objeto]) {
        inventario[objeto]++;
        galletas -= precioProducto[objeto];
        var circulos = document.getElementById("circulo");
        circulos.classList.add("show");

    } else {
        console.log("No tienes suficiente dinero");
        myFunction();
    }

}

//producir automatico
function producir() {
    for (contador = 0; contador < inventario.length; contador++) {
        galletas += inventario[contador] * galletasProduce[contador];
    }
}
//actualizar el numero de galletas que hay
function render() {
    document.getElementById("contador").innerHTML = galletas;
    document.getElementById("inventario").innerHTML =
        `<div>Cursores: ${inventario[0]}</div>
        <div>Cursores: ${inventario[1]}</div>
      <div>Cursores: ${inventario[2]}</div>
        `;
}
//frames para mostrar el aumento del contador
var FPS = 1;

setInterval(function() {
    //se clickea automaticamente
    producir();
    //actualice la cantidad de galletas que hay en el momento
    render();
}, 1000 / FPS);

// Mostrar SnackBar
function myFunction() {
    var x = document.getElementById("NoDinero1");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function crearCirculo(objeto) {
    var circulos = document.getElementById("circulo");
    // circulos.className = "show";
    circulos.classList.add("show");
}

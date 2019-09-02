var dinero = 0;

//arreglo,cursos,abuelitas,galelta tenemos
var inventario = [0, 0, 0];

//llevar la cuenta de cuantos producen
var dineroProduce = [1, 2, 4];

//cuantas dinero nos va a costar
var precioProducto = [10, 200, 400];

//funcion click incrementar dinero
function clic() {
    dinero++;
}

//funcion para comprar cosas
function comprar(objeto) {

    //comrpar con dinero suficiente
    if (dinero >= precioProducto[objeto]) {
        inventario[objeto]++;
        dinero -= precioProducto[objeto];
        precioProducto[objeto] = precioProducto[objeto] * 2;
        document.getElementById("mcdinero").innerHTML = precioProducto[objeto] + ' $';

        var circulos = document.getElementById("circulo");
        circulos.classList.add("show");

        var elem = document.getElementById("myBar");
        var width = dinero;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= precioProducto[objeto]) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    } else {
        mostrarNoDinero();
    }

}

// function move() {
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//         if (contador >= 100) {
//             clearInterval(id);
//         } else {
//             width++;
//             elem.style.width = width + '%';
//         }
//     }
// }


//producir automatico
function producir() {
    for (contador = 0; contador < inventario.length; contador++) {
        dinero += inventario[contador] * dineroProduce[contador];
    }
}
//actualizar el numero de dinero que hay
function render() {
    document.getElementById("contador").innerHTML = dinero;
    document.getElementById("contadorDos").innerHTML = dinero;
    document.getElementById("contador-gemas").innerHTML = gemas;

    // document.getElementById("plays").innerHTML = 'Reproducciones: ' + reproducciones;
    // document.getElementById("inventario").innerHTML =
    //     `<div>Cursores: ${inventario[0]}</div>
    //     <div>Cursores: ${inventario[1]}</div>
    //   <div>Cursores: ${inventario[2]}</div>
    //     `;
}
//frames para mostrar el aumento del contador
var FPS = 1;

setInterval(function() {
    //se clickea automaticamente
    producir();
    //actualice la cantidad de dinero que hay en el momento
    render();
}, 1000 / FPS);

// Mostrar SnackBar
function mostrarNoDinero() {
    // var x = document.getElementById("NoDinero1");
    // x.className = "show";
    // setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
    ggcrack();
}

function crearCirculo(objeto) {
    var circulos = document.getElementById("circulo");
    circulos.classList.add("show");
}
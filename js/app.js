

document.getElementById("contador").innerHTML = localStorage.getItem('midinero');
document.getElementById("contadorDos").innerHTML = localStorage.getItem('midinero');
var midinero = localStorage.getItem('midinero');
localStorage.setItem('midinero', midinero);
// for(var i=0, t=localStorage.length; i < t; i++) {
//     key = localStorage.key(i);
//     console.log('Para la clave ' + key + ' el valor es: ' + localStorage[key]);
//     // localStorage.removeItem('Midinero');
// }

//arreglo,cursos,abuelitas,galelta tenemos
var inventario = [0, 0, 0];

//llevar la cuenta de cuantos producen
var dineroProduce = [1, 2, 4];

//cuantas dinero nos va a costar
var precioProducto = [10, 200, 400];

//funcion click incrementar dinero
function clic() {
    // dinero++;
    
    midinero++;
    localStorage.setItem('midinero', midinero);
    render();
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

    document.getElementById("contador").innerHTML = localStorage.getItem('midinero');
    document.getElementById("contadorDos").innerHTML = localStorage.getItem('midinero');

    // if(localStorage.getItem('dineroGuardado') != null){

    //     dineroGuardado = localStorage.getItem('dineroGuardado');
    //     document.getElementById("contador").innerHTML = dineroGuardado;
    // }else{
    // console.log('no');
    // }
    //guardar en localstorage
    //   localStorage.setItem("dineroGuardado", dinero);
    //   dineroGuardado = localStorage.getItem("dineroGuardado");
    //   dinero = dineroGuardado;

    // document.getElementById("contador").innerHTML = dinero;
    // document.getElementById("contadorDos").innerHTML = dinero;
    // document.getElementById("contador-gemas").innerHTML = gemas;

    // document.getElementById("plays").innerHTML = 'Reproducciones: ' + reproducciones;
    // document.getElementById("inventario").innerHTML =
    //     `<div>Cursores: ${inventario[0]}</div>
    //     <div>Cursores: ${inventario[1]}</div>
    //   <div>Cursores: ${inventario[2]}</div>
    //     `;
}
//frames para mostrar el aumento del contador
var FPS = 1;
// for(var i=0, t=localStorage.length; i < t; i++) {
//     key = localStorage.key(i);
//     console.log('Para la clave ' + key + ' el valor es: ' + localStorage[key]);
//     // localStorage.removeItem('midinero');
// }

/*funciona, render dinero*/

// setInterval(function() {
//     //se clickea automaticamente
//     producir();
//     //actualice la cantidad de dinero que hay en el momento
//     render();
// }, 1000 / FPS);


function mostrarNoDinero() {


    // var x = document.getElementById("NoDinero1");
    // x.className = "show";
    // setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
    // ggcrack();
    Toastify({
        text: "Dinero insuficiente",
        gravity: "bottom",
        position: 'left',
        close: true,
        backgroundColor: '#EA2027',
    }).showToast();

}

function crearCirculo(objeto) {
    var circulos = document.getElementById("circulo");
    circulos.classList.add("show");
}

//cerrar sesion
function endSesion()
{
    firebase.auth().signOut().then(function()
    {
       location.assign('../login.html');
   }, function(error)
   {
      alert("Error al intentar desconectarse.");
  });
}
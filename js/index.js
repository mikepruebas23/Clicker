// Inicializar la base de datos
var config = {
    apiKey: "AIzaSyDy60mMMiFgtrIizIqmDzd8R4dJ7Sgzxg8",
    authDomain: "clicker-mikerm24.firebaseapp.com",
    databaseURL: "https://clicker-mikerm24.firebaseio.com",
    projectId: "clicker-mikerm24",
    storageBucket: "clicker-mikerm24.appspot.com",
    messagingSenderId: "483328941100"
};
firebase.initializeApp(config);
var database = firebase.database();

var FPS = 1;
var points;
var articulo;
var descripcion;
var precio;
var imagen;
var rango = 'Novato';
var midinerof;

//tabla
var refPuntos = database.ref('puntuaciones');
refPuntos.on('value', goData);

// Chequeamos la autenticación antes de acceder al resto de contenido de este fichero.
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

        nombreUsuario = user.displayName;
        emailUsuario = user.email;
        usuarioID = user.uid;
        ID_USER = user.uid;

        document.getElementById('correoUsuario').innerHTML = emailUsuario;
        document.getElementById('nombreUsuario').innerHTML = nombreUsuario;

    } else {
        console.log('Usuario no logueado');
        location.assign('login.html');
    }
});

//traer datos
function goData(data) {

    var datosUsuario = data.val();

    //funciona↓
    var keys = Object.keys(datosUsuario);

    // points = datosUsuario[ID_USER].puntos;
    // console.log('PUNTOS',points);
    // renderPoinst(points);

    // var mmidinero = [];
    var mmisdatos = [];

    //   mmisdatos.push({
    //     name: 'MIKE',
    //     age: 13
    //   });


    for (var i = 0; i < keys.length; i++) {

        var k = keys[i];

        NombreCompletoUsuario = datosUsuario[k].nombreUsuarioLogeado;
        CorreoCompetoUsuario = datosUsuario[k].correoUsuario;
        PuntosCompletosUsuario = datosUsuario[k].puntos;
        RangoCompletoUsuario = datosUsuario[k].rangoUsuario;

        mmisdatos.push({
            Nombre: NombreCompletoUsuario,
            Puntos: PuntosCompletosUsuario
        });


        // console.log(keys);
        // console.log(keys[i]);

        // mmidinero.push(PuntosCompletosUsuario);

        //pintar los elementos
        // var DivNombre = document.createElement("div");
        // DivNombre.innerHTML = NombreCompletoUsuario;

        // var TNombres = document.getElementById('tablaNombres');
        // TNombres.appendChild(DivNombre);
    }
    // console.log(mmisdatos);

    // mmidinero = mmidinero.sort((a, b) => b - a);
    // for (var j = 0; j < mmidinero.length; j++) {

    //     var DivPuntos = document.createElement("div");
    //     DivPuntos.innerHTML = mmidinero[j];
    //     var TPuntos = document.getElementById('tablaPuntos');
    //     TPuntos.appendChild(DivPuntos);
    // }

    function comparar(a, b) {
        const pointA = a.Puntos;
        const pointB = b.Puntos;

        let comparacion = 0;
        if (pointA < pointB) {
            comparacion = 1;
        } else if (pointA > pointB) {
            comparacion = -1;
        }
        return comparacion;
    }

    mmisdatos = mmisdatos.sort(comparar)
    // console.log(mmisdatos);

    for (var i = 0; i < mmisdatos.length; i++) {

        var k = mmisdatos[i];
        var DivNombre = document.createElement("div");
        var DivPuntos = document.createElement("div");
        var TNombres = document.getElementById('tablaNombres');
        var TPuntos = document.getElementById('tablaPuntos');

        DivNombre.innerHTML = k.Nombre;
        DivPuntos.innerHTML = k.Puntos;
        TNombres.appendChild(DivNombre);
        TPuntos.appendChild(DivPuntos);
        
    }

    points = datosUsuario[ID_USER].puntos;
    renderPoinst(points);
}

function renderPoinst(points) {

    document.getElementById("contadorDos").innerHTML = points;
    document.getElementById("contador").innerHTML = points;
}

var inventario = [0, 0, 0];
var dineroProduce = [1, 2, 4];
var precioProducto = [10, 200, 400];

function clic() {

    points++;

    render();
    renderPoinst(points);

    if (points) {
        // console.log('true');
    } else {
        // console.log('else');
        points = 1;
        render();
        renderPoinst(points);
    }
}

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

function producir() {
    for (contador = 0; contador < inventario.length; contador++) {
        dinero += inventario[contador] * dineroProduce[contador];
    }
}

function render() {
    document.getElementById("contador").innerHTML = points;
}

function mostrarNoDinero() {

    Toastify({
        text: "Dinero insuficiente",
        gravity: "bottom",
        // gravity: "toastify-bottom",
        // gravity: "toastify-top",
        position: 'left',
        // close: true,
        backgroundColor: '#EA2027',
    }).showToast();
}

//cerrar sesion clicker
function endSesion() {
    firebase.auth().signOut().then(function () {
        location.assign('../login.html');
    }, function (error) {
        alert("Error al intentar desconectarse.");
    });
}

function desconectar() {
    firebase.auth().signOut().then(function () {
        location.assign('index.html');
    }, function (error) {
        alert("Error al intentar desconectarse.");
    });
}

$("#formularioAlta").change(function () {
    articulo = $("#articulo").val();
    descripcion = $("#descripcion").val();
    precio = $("#precio").val();

    if (articulo && descripcion && precio) {
        $("#botonGuardar").prop("disabled", false);
    } else {
        $("#botonGuardar").prop("disabled", true);
    }
});

//Guardar los puntos puntos
$('#btn-incremento').click(function () {

    var refPuntuaciones = database.ref("puntuaciones");

    refPuntuaciones.child(usuarioID).set({
        nombreUsuarioLogeado: nombreUsuario,
        correoUsuario: emailUsuario,
        puntos: points,
        rangoUsuario: rango

    }, function () {
        Toastify({
            text: "Datos dados de alta",
            gravity: "bottom",
            position: 'left',
            close: true,
            backgroundColor: '#2ed573',
        }).showToast();
        setTimeout(() => {
            location.reload();
        }, 2000);
    });
});
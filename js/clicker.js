$(document).ready(function() {
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

    //id usuario
    // var ID_USER;
    var points;

    var articulo;
    var descripcion;
    var precio;
    var imagen;

    //datos para el usuario
    var rango = 'Novato';

    //variable dinero global
    var midinerof;

    //scoreBoard
    var refPuntos = database.ref('puntuaciones');
    refPuntos.on('value', goData);

   
    //traer los datos
//     function goData(data) {

//         // console.log('ID_USER',ID_USER);

//         var scoreBoard = document.getElementById('scoreBoard');
//         for (var i = 0; i < scoreBoard.length; i++) {
//             scoreBoard[i].remove();
//         }

//         var datosUsuario = data.val();

//         //funciona↓
//         var keys = Object.keys(datosUsuario);
//         // console.log(datosUsuario[ID_USER].puntos);
//         points = datosUsuario[ID_USER].puntos;
      
//         var mmidinero = []
//         for (var i = 0; i < keys.length; i++) {
            
//             var k = keys[i];
            
//             NombreCompletoUsuario = datosUsuario[k].nombreUsuarioLogeado;
//             CorreoCompetoUsuario = datosUsuario[k].correoUsuario;
//             PuntosCompletosUsuario = datosUsuario[k].puntos;
      
//             RangoCompletoUsuario = datosUsuario[k].rangoUsuario;
 
//             mmidinero.push(PuntosCompletosUsuario);

//             //pintar los elementos
//             var DivNombre = document.createElement("div");
//             DivNombre.innerHTML=NombreCompletoUsuario;

//             // var DivPuntos = document.createElement("div");
//             // DivPuntos.innerHTML=PuntosCompletosUsuario;

//             var TNombres = document.getElementById('tablaNombres');
//             var TPuntos = document.getElementById('tablaPuntos');
//             TNombres.appendChild(DivNombre);
//             // TPuntos.appendChild(DivPuntos);
//         }
//        mmidinero =  mmidinero.sort((a,b)=>b-a);
//         for(var j = 0; j < mmidinero.length; j++){
//             // console.log(mmidinero[j]);
            
//             var DivPuntos = document.createElement("div");
//             DivPuntos.innerHTML=mmidinero[j];
//             var TPuntos = document.getElementById('tablaPuntos');
//             TPuntos.appendChild(DivPuntos);
//         } 
// //         var points = [PuntosCompletosUsuario];
// // console.log('arregloe points',points)
//     }

    // Chequeamos la autenticación antes de acceder al resto de contenido de este fichero.
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log(user);
            // console.log('Usuario: ' + user.uid + ' está logueado con ' + user.providerData[0].providerId);
            var logueado = '<li><p class="navbar-text navbar-center">' + user.email + '</p></li>';
            logueado += '<li><button type="button" class="btn btn-warning navbar-btn" id="botonLogout">Salir</button></li>';

            $(logueado).appendTo('.nav');
            $("#botonLogout").click(desconectar);


            nombreUsuario = user.displayName;
            emailUsuario = user.email;
            usuarioID = user.uid;
            ID_USER = user.uid;
            console.log('ID_USER',ID_USER);

            document.getElementById('correoUsuario').innerHTML = emailUsuario;
            document.getElementById('nombreUsuario').innerHTML = nombreUsuario;


        } else {
            console.log('Usuario no logueado');
            location.assign('login.html');
        }
    });


    function desconectar() {
        firebase.auth().signOut().then(function() {
            location.assign('index.html');
        }, function(error) {
            alert("Error al intentar desconectarse.");
        });
    }


    $("#imagen").change(function() {
        var descriptor = new FileReader();
        descriptor.readAsDataURL(this.files[0]);

        descriptor.onloadend = function() {
            imagen = descriptor.result;
            $("#previsualizacion").attr("src", imagen);
        };
    });


    $("#formularioAlta").change(function() {
        articulo = $("#articulo").val();
        descripcion = $("#descripcion").val();
        precio = $("#precio").val();

        if (articulo && descripcion && precio) {
            $("#botonGuardar").prop("disabled", false);
        } else {
            $("#botonGuardar").prop("disabled", true);
        }

    });

    //botonRegistrar puntos
    $('#btn-incremento').click(function() {
        // console.log(nombreUsuario);
        // console.log(emailUsuario);
        console.log(usuarioID);
        var refPuntuaciones = database.ref("puntuaciones");
        // console.log(refPuntuaciones);
        refPuntuaciones.child(usuarioID).set({
            nombreUsuarioLogeado: nombreUsuario,
            correoUsuario: emailUsuario,
            puntos: midinero,
            rangoUsuario: rango

        }, function() {
            
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


    $("#botonGuardar").click(function() {
        articulo = $("#articulo").val();
        descripcion = $("#descripcion").val();
        precio = $("#precio").val();

        if (!imagen) {
            imagen = "NONE";
        }

        // Indicamos que la referencia base de nuestra base de datos es productos (algo así como el padre)
        // del que colgarán el resto de nodos hijos.
        /*
        var usersRef = new Firebase('https://samplechat.firebaseio-demo.com/users');
        var fredRef = usersRef.child('fred');
        var fredFirstNameRef = fredRef.child('name/first');
        */
        var referencia = database.ref("productos");




        // De la siguiente forma el método sobreescribe los datos
        /*
            referencia.set(
            {
                articulo: articulo,
                descripcion: descripcion,
                precio: precio,
                imagen: imagen
            });
            */

        // Ahora estamos poniendo el articulo como clave en la colección
        // De esta manera podremos añadir nuevos articulos o actualizar uno ya existente.

        /*
            referencia.child(articulo).set(
            {
                descripcion: descripcion,
                precio: precio,
                imagen: imagen
            });
            */

        // Si queremos permitir que hayas artículos con nombres duplicados entonces tendremos
        // que decirle a Firebase que utilice otra clave en lugar del nombre del articulo.
        // Usaremos el método push en lugar de set
        referencia.push({
            articulo: articulo,
            descripcion: descripcion,
            precio: precio,
            imagen: imagen
        }, function() {
            alert('El alta se ha realizado correctamente');
        });
    });

});
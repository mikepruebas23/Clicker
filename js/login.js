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

var emailREG, passwordREG, passwordConfirmREG;

function exito() {
    $("#spinner").html("");
    location.assign('perfil.html');
}

function alFinalizar(error) {
    // console.log(error);

    if (error !== 'undefined') {
        // Códigos de error:
        // auth/invalid-email
        // auth/weak-password
        // auth/email-already-in-use
        switch (error.code) {
            case 'auth/email-already-in-use':
                alert('ERROR: No se puede crear la nueva cuenta de usuario, por que el e-mail ya está en uso !');
                break;
            case 'auth/invalid-email':
                alert('ERROR: El e-mail facilitado no es un e-mail correcto.');
                break;
            default:
                alert('Se ha producido un error al crear el usuario.\n\n' + error + '\n');
                break;
        }
    }
}

$(function() {
    $("#botonLogin").click(function() {
        $("#spinner").html("<img src='img/spinner.gif' style='width:25px; height:25px;'/>");
        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().signInWithEmailAndPassword(email, password).then(exito).catch(function(error) {
            $("#spinner").html("");
            //console.log(error);
            alert("Error detectado:\n\n" + error.message);
        });
    });

    $("#botonRegistro2").click(function() {
        emailREG = $("#emailR").val();
        passwordREG = $("#passwordR").val();
        passwordConfirmREG = $("#passwordR2").val();

        if (passwordREG != passwordConfirmREG) {
            alert("Error: Las contraseñas son distintas!");
            console.log("ERROR");
        } else
            firebase.auth().createUserWithEmailAndPassword(emailREG, passwordREG).then(exito).catch(alFinalizar);
    });
    // $("#botonRegistro").click(function() {
    //     location.assign('registro.html');
    // });


    // $("#botonCancelar").click(function() {
    //     location.assign('login.html');
    // });

    $('.message a').click(function() {
        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
    });
});
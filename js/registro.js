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

var email,password,passwordConfirm;

function exito()
{
  alert('Se ha creado la cuenta de usuario correctamente. ');
  location.assign('index.html');
}

function alFinalizar(error)
{
    // console.log(error);

    if (error!=='undefined')
    {
        // Códigos de error:
        // auth/invalid-email
        // auth/weak-password
        // auth/email-already-in-use
        switch(error.code)
        {
            case 'auth/email-already-in-use':
            alert('ERROR: No se puede crear la nueva cuenta de usuario, por que el e-mail ya está en uso !');
            break;
            case 'auth/invalid-email':
            alert('ERROR: El e-mail facilitado no es un e-mail correcto.');
            break;
            default:
            alert('Se ha producido un error al crear el usuario.\n\n'+error+'\n');
            break;
        }
    }
}


$(function()
{
    // Programamos el click de los botones del formulario:
    $("#botonRegistro").click(function()
    {
        email=$("#email").val();
        password=$("#password").val();
        passwordConfirm=$("#password2").val();

        if (password != passwordConfirm)
        {
            alert("Error: Las contraseñas son distintas!");
        }
        else
            firebase.auth().createUserWithEmailAndPassword(email,password).then(exito).catch(alFinalizar);
    });


    $("#botonCancelar").click(function()
    {
        location.assign('index.html');
    });

});
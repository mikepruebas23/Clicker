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

function exito()
{
    $("#spinner").html("");
    location.assign('perfil.html');
}

$(function()
{
    $("#botonLogin").click(function()
    {
        $("#spinner").html("<img src='img/spinner.gif' style='width:25px; height:25px;'/>");
        var email=$("#email").val();
        var password=$("#password").val();

        firebase.auth().signInWithEmailAndPassword(email, password).then(exito).catch(function(error)
        {
            $("#spinner").html("");
            //console.log(error);
            alert ("Error detectado:\n\n"+error.message);
        });
    });

    $("#botonRegistro").click(function()
    {
        location.assign('registro.html');
    });


    $("#botonCancelar").click(function()
    {
        location.assign('compras.html');
    });

});

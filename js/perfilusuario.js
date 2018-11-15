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

  //obtener Perfil Usuario
  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;
      document.getElementById('correoUsuario').innerHTML = email;
      document.getElementById('nombreUsuario').innerHTML = name;
      console.log(email);
      console.log(name);

    } else {
      console.log("NO if 1");
    }
  });

});
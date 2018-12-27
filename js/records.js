var score;
var button;
var nombreUsuario;
var submitButton;
var database;
//Variable para verificar el en if y no duplicar registros
var NombreCompetoMike;
var NombreCompetoMike2;
var record;
var usuarioLogeado = 'mike';
var head = document.getElementById('scorelist');

function setup() {
    score = 0;
    //button = createButton('click');
    //button.mousePressed(increaseScore);
    //nombreUsuario = createInput('');
    submitButton = createButton('Enviar');
    submitButton.mousePressed(submitScore);

    var config = {
        apiKey: "AIzaSyDy60mMMiFgtrIizIqmDzd8R4dJ7Sgzxg8",
        authDomain: "clicker-mikerm24.firebaseapp.com",
        databaseURL: "https://clicker-mikerm24.firebaseio.com",
        projectId: "clicker-mikerm24",
        storageBucket: "clicker-mikerm24.appspot.com",
        messagingSenderId: "483328941100"
    };
    firebase.initializeApp(config);
    database = firebase.database();

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            //console.log(user);

            console.log('Usuario: ' + user.uid + ' está logueado con ' + user.providerData[0].providerId);

            name = user.displayName;
            email = user.email;

            document.getElementById('correoUsuario').innerHTML = email;
            document.getElementById('nombreUsuario').innerHTML = name;
            console.log(email);
            console.log(name);


        } else {
            console.log('Usuario no logueado');
            location.assign('login.html');
        }
    });

    var ref = database.ref('scores');
    ref.on('value', goData, errData);

}

function goData(data) {

    var scorelistings = selectAll('.scorelisting');
    for (var i = 0; i < scorelistings.length; i++) {
        scorelistings[i].remove();
    }

    var scores = data.val();
    record = scores.score;
    console.log("Tu record es: " + record);
    //console.log("DATOSSSS" + scores.initials, scores.score);
    var li = createElement('li', scores.initials + ': ' + scores.score);
    li.class('scorelisting');
    li.parent('scorelist');
}

function errData(err) {
    console.log('Error!');
    console.log(err);
}

function submitScore() {
    var data = {
        initials: usuarioLogeado,
        score: score
    }
    var ref = database.ref('scores');
    ref.set(data);
}

function increaseScore() {
    score++;
}
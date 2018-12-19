var tiempo = 3000;

function move() {
  var ancho = 1;
  var barraDeEstamina2 = document.getElementById("myBar");
  var cuadrosXSegundo = setInterval(frame, 10);

  function frame() {
    if (ancho === 100) {
      clearInterval(cuadrosXSegundo);
      dinero++;
      programarAviso();
    } else {
ancho++
  barraDeEstamina2.style.width = ancho + '%';
    }
  }
}
function programarAviso(){
  setTimeout(function(){move()},tiempo);
}


if (dinero >= 5) {
   document.getElementById("farm").disabled = true;
     clearInterval(move());
}

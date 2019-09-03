var valorReproduccion = 0.000005;
var reproducciones = 0;
var valorFrames = 10;
var cantidadFramesUno = valorFrames;
var cantidadFramesDos = valorFrames;
var cantidadFramesTres = valorFrames;
//variables para Habilidades
var inventario2 = [0, 0, 0];
var dineroProduce2 = [1, 2, 4];
var precioHabilidadUno = 5;
var precioHabilidadDos = 10;
var sumaDinero = 1;
var barraDeEstaminaUno = document.getElementById("myBar");
var contaTime = document.getElementById("timer");

var mins = 0;
var secs = 0;
var segundos = 5; //tiempo del contador
var timerX;

var llaves = 1;
var candados = 20;
var desHabilidadID = document.getElementById("desHabilidad");
desHabilidadID.innerHTML = llaves;
var candadosID = document.getElementById("candado");
candadosID.innerHTML = candados;

function powerA() {
  document.getElementById('farm').disabled = true; 
  document.getElementById('farm').classList.add("btn-disabled");
  
  const PERCENT = 100 / segundos; // Percent for progress bar
  var accum = 0; // Accum
  const TIME = 1000; // Time for interval
  const TOTAL_PERCENT = 100; // 100%
  var currentTime;


  let bl = setInterval(() => {
    if (secs < 59) {
      secs++;
    } else {
      secs = 0;
      mins++;
    }

    if (mins >= 59) {
      mins = 0;
      hours++;
    }

     currentTime = checkZero(mins) + ":" + checkZero(secs);

    function checkZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    // accum += Math.round(PERCENT);
    accum += PERCENT;
  
    contaTime.textContent = currentTime;
    barraDeEstaminaUno.style.width = accum + '%';
    // document.getElementById('farm').disabled = true; 
    // document.getElementById('farm').classList.add("btn-disabled");
    document.getElementById('b-tiempo').classList.add("action-time");
    
    
    document.getElementById('mejora1').disabled = true;
    document.getElementById('mejora1').classList.add("btn-disabled");
    if (accum >= TOTAL_PERCENT){
      clearInterval(bl);
      barraDeEstaminaUno.style.width = 0 + '%';
      dinero = sumaDinero + dinero;
      document.getElementById('farm').disabled = false;
      document.getElementById('farm').classList.remove("btn-disabled");
      document.getElementById('b-tiempo').classList.remove("action-time");
      // document.getElementById('mejora1').disabled = false;
      // document.getElementById('mejora1').classList.remove("btn-disabled");
      secs = 0;
      contaTime.textContent = '00:00';
      llaves++;
      desHabilidadID.innerHTML = llaves;
      mejorarHabilidad1();
  
    }
  }, TIME);
}
function habilidadDos() {
  var anchoDos = 1;
  var barraDeEstaminaDos = document.getElementById("myBar2");
  var cuadrosXSegundoDos = setInterval(frameDos, cantidadFramesDos);

  function frameDos() {
    if (anchoDos === 100) {
      clearInterval(cuadrosXSegundoDos);
      dinero = sumaDinero + dinero;
      habilidadDos();

    } else {
      anchoDos++
      barraDeEstaminaDos.style.width = anchoDos + '%';
      document.getElementById('farm2').disabled = true;
    }
  }
}

function activarCancion() {
  var anchoDos = 1;
  var barraDeEstaminaDos = document.getElementById("myBar3");
  var cuadrosXSegundoDos = setInterval(frameDos, cantidadFramesDos);

  function frameDos() {
    if (anchoDos === 100) {
      clearInterval(cuadrosXSegundoDos);
      //dinero = sumaDinero + dinero;
      //activarCancion();
      reproducciones += 8000000;

    } else {
      anchoDos++
      barraDeEstaminaDos.style.width = anchoDos + '%';
      //document.getElementById('farm3').disabled = true;
    }
  }
}
// function ggbuton(){

//   const option = {
//     animation: true,
//     delay: 5000
//   }
//   $('.toast').toast(option)
//   $('#alerta').toast('show')
// }

function levelupUno() {



  if (dinero >= precioHabilidadUno) {
    cantidadFramesUno += 10;
    sumaDinero += 2;
    dinero -= precioHabilidadUno;
    precioHabilidadUno = precioHabilidadUno * 2;
    document.getElementById("mejora1").innerHTML = precioHabilidadUno + ' para mejorar la habilidad';
    console.log('cantidad de suma dinero lv1 =' + sumaDinero);
    console.log('Frames UNO: ' + cantidadFramesUno);
    console.log('Precio Habilidad Uno: ' + precioHabilidadUno);
  } else {
    console.log("Dinero actual de lvl1  es :" + dinero);
  }
}

function levelupDos() {
  if (dinero >= precioHabilidadDos) {
    cantidadFramesDos += 10;
    sumaDinero += 2;
    dinero -= precioHabilidadDos;
    precioHabilidadDos = precioHabilidadDos * 2;
    document.getElementById("mejora2").innerHTML = precioHabilidadDos + ' para mejorar la habilidad';
    document.getElementById("plays").innerHTML = 'reproducciones: ' + reproducciones;
    reproducciones: 0
    console.log('cantidad de suma dinero lv2 =' + sumaDinero);
    console.log('Frames Dos: ' + cantidadFramesDos);
    console.log('Precio Habilidad Dos: ' + precioHabilidadDos);


  } else {
    console.log("Dinero actual de lvl2 es :" + dinero);
  }
}

function grabarCancion() {
  if (dinero >= precioHabilidadDos) {
    cantidadFramesDos += 10;
    sumaDinero += 2;
    dinero -= precioHabilidadDos;
    precioHabilidadDos = precioHabilidadDos * 2;
    document.getElementById("mejora2").innerHTML = precioHabilidadDos + ' para mejorar la habilidad';
    console.log('cantidad de suma dinero lv2 =' + sumaDinero);
    console.log('Frames Dos: ' + cantidadFramesDos);
    console.log('Precio Habilidad Dos: ' + precioHabilidadDos);


  } else {
    console.log("Dinero actual de lvl2 es :" + dinero);
  }
}

function convertirReproducciones() {

  var dineroDeReproducciones = reproducciones * valorReproduccion;
  dinero = dinero + dineroDeReproducciones;
  console.log('valor de repdocuccones = ' + reproducciones);
  console.log('valor de valorReproduccion = ' + valorReproduccion);
  console.log('valor de dinero = ' + dinero);
  reproducciones = 0;

}

// if(dinero)
mejorarHabilidad1();
function mejorarHabilidad1(){

  if(llaves >= 20){
    document.getElementById('mejora1').disabled = false; 
    document.getElementById('mejora1').classList.remove("btn-disabled");
  }
  else {
    document.getElementById('mejora1').disabled = true; 
    document.getElementById('mejora1').classList.add("btn-disabled");
  }

}

// function unlockGems(){
//   if(gemas >= 3){
//     var barra_uno = document.getElementById("b-1");
//     barra_uno.classList.add("d-block");
//     var lock_uno = document.getElementById("lock-1");
//     lock_uno.classList.add("d-non");
//   }
//   else {
    
   
//   }
// }

// function programarAviso(){
//   setTimeout(function(){move()},tiempo);
// }
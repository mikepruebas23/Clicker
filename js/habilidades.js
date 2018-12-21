var tiempo = 3000;
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

function habilidadUno() {
var anchoUno = 1;
var barraDeEstaminaUno = document.getElementById("myBar");
var cuadrosXSegundoUno = setInterval(frameUno, cantidadFramesUno);

 function frameUno() {
   if (anchoUno === 100) {
       clearInterval(cuadrosXSegundoUno);
       dinero = sumaDinero + dinero;
       habilidadUno();

   } else {
     anchoUno++;
     barraDeEstaminaUno.style.width = anchoUno + '%';
     document.getElementById('farm').disabled = true;
   }
 }
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
       reproducciones+=8000000;

   } else {
     anchoDos++
     barraDeEstaminaDos.style.width = anchoDos + '%';
     //document.getElementById('farm3').disabled = true;
   }
 }
}


function levelupUno() {
if (dinero >= precioHabilidadUno ) {
  cantidadFramesUno+=10;
  sumaDinero += 2;
  dinero -= precioHabilidadUno;
  precioHabilidadUno = precioHabilidadUno * 2;
  document.getElementById("mejora1").innerHTML = precioHabilidadUno+' para mejorar la habilidad';
  console.log('cantidad de suma dinero lv1 ='+ sumaDinero);
  console.log('Frames UNO: '+cantidadFramesUno);
  console.log('Precio Habilidad Uno: '+precioHabilidadUno);
}
else{
  console.log("Dinero actual de lvl1  es :"+ dinero);
}
}

function levelupDos(){
  if(dinero >= precioHabilidadDos){
  cantidadFramesDos+=10;
  sumaDinero += 2;
  dinero -= precioHabilidadDos;
  precioHabilidadDos = precioHabilidadDos * 2;
  document.getElementById("mejora2").innerHTML = precioHabilidadDos+' para mejorar la habilidad';
  document.getElementById("plays").innerHTML ='reproducciones: '+ reproducciones;
  reproducciones: 0
  console.log('cantidad de suma dinero lv2 ='+ sumaDinero);
  console.log('Frames Dos: '+cantidadFramesDos);
  console.log('Precio Habilidad Dos: '+precioHabilidadDos);


}
else{console.log("Dinero actual de lvl2 es :"+ dinero);
}
}
function grabarCancion(){
  if(dinero >= precioHabilidadDos){
  cantidadFramesDos+=10;
  sumaDinero += 2;
  dinero -= precioHabilidadDos;
  precioHabilidadDos = precioHabilidadDos * 2;
  document.getElementById("mejora2").innerHTML = precioHabilidadDos+' para mejorar la habilidad';
  console.log('cantidad de suma dinero lv2 ='+ sumaDinero);
  console.log('Frames Dos: '+cantidadFramesDos);
  console.log('Precio Habilidad Dos: '+precioHabilidadDos);


}
else{console.log("Dinero actual de lvl2 es :"+ dinero);
}
}

function convertirReproducciones(){

  var dineroDeReproducciones = reproducciones * valorReproduccion;
  dinero = dinero + dineroDeReproducciones;
  console.log('valor de repdocuccones = '+reproducciones);
  console.log('valor de valorReproduccion = '+valorReproduccion);
  console.log('valor de dinero = '+dinero);
  reproducciones = 0;

}

// function programarAviso(){
//   setTimeout(function(){move()},tiempo);
// }

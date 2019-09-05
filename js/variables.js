var gemas = 2;
var dinero = 0;
var ID_USER;

// localStorage.setItem("nombredeusuario", "John");

function unlockGems(){
        Toastify({
          text: "Gemas insuficientes",
          gravity: "bottom",
          position: 'left',
        //   close: true,
          backgroundColor: '#EA2027',
        }).showToast();
      
}
function savedata(){
  Toastify({
    text: "Datos dados de alta",
    gravity: "bottom",
    position: 'left',
  //   close: true,
    backgroundColor: '#EA2027',
  }).showToast();

}
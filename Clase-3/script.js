let guessNumber = 8;
let number = 0;
let attempts = 0;

do {
  number = parseInt(prompt("Del 1 al 100, cuál es mi numero favorito?"));
  attempts = attempts + 1;
} while ((number < 100) && !(guessNumber==number)){
  if (number > 100) {
    alert("Ingresaste un valor mayor a 100. Refresca la página para empezar de vuelta");
  } else {
    if (attempts==1){
      alert("MUY BIEN!!! Te tomó " + attempts + " solo intento.");
    } else{
      alert("Muy bien!!! Te tomó " + attempts + " intentos, pero lo adivinaste.");
    }    
  }
}

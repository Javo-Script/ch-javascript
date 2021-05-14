let guessNumber = 8;
let number = 0;
let attempts = 0;

do {
  number = parseInt(prompt("Del 1 al 100, cuál es mi numero favorito?"));
  attempts = attempts + 1;
} while ((number < 100) && !(guessNumber==number)){
  if (number > 100) {
    alert("Ingresaste un valor mayor a 1000. Refresca la página para empezar de vuelta");
  } else {
    alert("Muy bien!!! Te tomó " + attempts + " intentos, pero lo adivinaste.");
  }
}

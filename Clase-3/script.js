let guessNumber = 738;
let number = 0;
let attempts = 0;

do {
  number = parseInt(prompt("Crees poder adivinar mi numero MENOR A 1000 favorito?"));
  attempts = attempts + 1;
} while ((number < 1000) && !(guessNumber==number)){
  if (number > 1000) {
    alert("Ingresaste un valor mayor a 1000. Refresca la página para empezar de vuelta");
  } else {
    alert("Muy bien!!! Te tomó " + attempts + " intentos, pero lo adivinaste.");
  }
}

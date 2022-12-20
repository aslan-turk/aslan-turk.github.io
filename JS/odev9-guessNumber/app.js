let trial = 5;
const sayi = Math.round(Math.random() * 100);
console.log(sayi);
let guess = +prompt(
  `Guess a number between 0 and 100(You have ${trial} Health)`
);
trial--;

while (trial > 0) {
  if (guess == sayi) {
    console.log("Congrats, you win 🥳");
    break;
  } else if (guess < sayi) {
    guess = +prompt(`Increase your number. (${trial} Health Left)`);
  } else {
    guess = +prompt(`Decrease your number. (${trial} Health Left)`);
  }
  trial--;
}
if (trial == 0 && guess == sayi) {
  console.log("Congrats, you win 🥳");
} else if (trial == 0) {
  console.log(`Sorry you lost 😑 Your number was ${sayi}`);
}

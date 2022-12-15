const nr1 = +prompt("Number 1:");
const operator = prompt("+ - * /");
const nr2 = +prompt("Number 2:");
let result = 0;

if (operator == "+") {
  result = nr1 + nr2;
} else if (operator == "-") {
  result = nr1 - nr2;
} else if (operator == "*") {
  result = nr1 * nr2;
} else if (operator == "/") {
  result = nr1 / nr2;
} else {
  alert("Yanlış bir işlem denediniz!!");
}
console.log(`İşleminizin sonucu: ${nr1} ${operator} ${nr2} = ${result}`);

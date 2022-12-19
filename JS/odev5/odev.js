//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

let not = +prompt("0 ile 100 arasında bir not giriniz:");

while (not < 0 || not > 100) {
  console.log(`Lütfen 0 ile 100 arasında bir not giriniz.`);
  not = +prompt("0 ile 100 arasında bir not giriniz:");
}

console.log(`Girdiğiniz not: ${not}`);

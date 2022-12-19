//? Console'dan girilen bir sayinin basamak sayisini hesaplayarak console'a bastiran kodu donguler yardimi ile yaziniz.
//? ORNEK:
//? 43567 => Basamak sayisi: 5
//? 123 => Basamak sayisi: 3

let sayi = Math.abs(+prompt("Bir sayı giriniz:"));
let basamakSayisi = 0;

while (sayi > 0) {
  basamakSayisi++;
  sayi = Math.floor(sayi / 10);
}

console.log(`Girdiğiniz sayı ${basamakSayisi} basamaklıdır.`);

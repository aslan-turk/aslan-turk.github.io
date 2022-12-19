//? Console'dan girilen taban ve pozitif us degerlerine gore uslu sayi sonucunu hesaplayan kodu for veya while dongusu ile yaziniz.

const taban = +prompt("Taban sayı:");
const us = +prompt("Sayının üssü:");
let sonuc = 1;

if (us > 0) {
  for (let i = 1; i <= us; i++) {
    sonuc *= taban;
  }
  console.log(sonuc);
} else {
  console.log("Sayının üssü pozitif olmalı.!!");
}

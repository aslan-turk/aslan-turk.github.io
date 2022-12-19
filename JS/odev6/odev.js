//? Console'dan girilen sayilarin ortalamasini bulan programi yaziniz. Program ilk olarak kullanicidan kac tane sayi gireceginin almali bu bilgi isiginda girilen sayilarin ortalamasini hesaplayarak yazdirmalidir.

let n = +prompt("Sayı adedi:");
let toplam = 0;
let ort = 0;

while (n <= 0) {
  n = +prompt("lütfen pozitif sayı adedi giriniz:");
}

for (let i = 1; i <= n; i++) {
  const sayi = +prompt("Sayı giriniz:");
  toplam += sayi;
  ort = toplam / n;
}
console.log(`Girilen ${n} adet sayının ortalaması:${ort}`);

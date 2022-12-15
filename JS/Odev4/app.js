const asgari = 6471;
const gelir = +prompt("Lütfen aylık gelirinizi girin:");
const gider = +prompt("Lütfen aylık giderinizi girin:");
const fark = gelir - gider;

fark >= asgari ? alert("Kredi Verilebilir 🤑") : alert("Kredi Verilemez 🥺");

//! 2. yöntem
// prompt("Gelir:") - prompt("Gider:") >= "6471" ? alert("Kredi Verilebilir 🤑") : alert("Kredi Verilemez 🥺");

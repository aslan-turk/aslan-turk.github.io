const asgari = 6471;
const maas = +prompt(`Maaşınızı girin(Asgari ücret ${asgari}TL'dir):`);
const newMaas1 = Math.floor(maas * 1.5);
const newMaas2 = Math.floor(maas * 1.1);

if (maas < asgari) {
  console.log(`Yeni maaşınız ${newMaas1}TL olmuştur.`);
} else {
  console.log(`Yeni maaşınız ${newMaas2}TL olmuştur.`);
}

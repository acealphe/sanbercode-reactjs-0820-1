// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
console.log(kataPertama + ' ' + kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1) + ' ' + kataKetiga + ' ' + kataKeempat.toUpperCase());



//soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
console.log(parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat));



//soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4,14); 
var kataKetiga = kalimat.substring(15,18);
var kataKeempat = kalimat.substring(19,24);
var kataKelima = kalimat.substring(25,31);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);



//soal 4
var nilai = 69.5;
if (nilai>=80 && nilai<=100){console.log('Indeksnya A');}
else if (nilai>=70 && nilai<80){console.log ('Indeksnya B');}
else if (nilai>=60 && nilai<70){console.log ('Indeksnya C');}
else if (nilai>=50 && nilai<60){console.log ('Indeksnya D');}
else if (nilai<50 && nilai>=0){console.log ('Indeksnya E');}
else {console.log('Masukkan nilai antara 0-100');}



//soal 5
var tanggal = 26;
var bulan = 01;
var tahun = 1994;

switch (bulan){
    case 1: bulan = ' Januari '; break;
    case 2: bulan = ' Februari '; break;
    case 3: bulan = ' Maret '; break;
    case 4: bulan = ' April '; break;
    case 5: bulan = ' Mei '; break;
    case 6: bulan = ' Juni '; break;
    case 7: bulan = ' Juli '; break;
    case 8: bulan = ' Agustus '; break;
    case 9: bulan = ' September '; break;
    case 10: bulan = ' Oktober '; break;
    case 11: bulan = ' November '; break;
    case 12: bulan = ' Desember '; break;
    default: tanggal=''; bulan='Masukkan bulan 1-12'; tahun='';
}

console.log(tanggal + bulan + tahun);
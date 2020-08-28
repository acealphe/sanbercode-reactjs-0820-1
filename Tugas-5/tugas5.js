//soal 1
function halo (){
    return "Halo Sanbers!";
} 
console.log(halo()) // "Halo Sanbers!" 



//soal 2
function kalikan(num1, num2){
    return num1*num2;
}
 
var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48



//soal 3
function introduce (name, age, address, hobby){
    return 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!';
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!" 



//soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objDaftarPeserta = {
    nama: "Asep",
    jenisKelamin: "laki-laki",
    hobi: "baca buku",
    tahunLahir: 1992
}
console.log (objDaftarPeserta);



//soal 5
var fruitArr = [{nama: "strawberry", warna: "merah", adaBijinya: "tidak", harga: 9000}, 
                {nama: "jeruk", warna: "oranye", adaBijinya: "ada", harga: 8000},
                {nama: "semangka", warna: "hijau & merah", adaBijinya: "ada", harga: 10000},
                {nama: "pisang", warna: "kuning", adaBijinya: "tidak", harga: 5000}]
console.log (fruitArr[0]);



//soal 6
var dataFilm = [{nama: "Frozen", durasi: "1h 49min", genre: "Animation", tahun: 2013},
                {nama: "Charlie's Angels", durasi: "1h 58min", genre: "Action", tahun: 2019}]

function addDataFilm (a, b, c, d){
    return dataFilm.push({nama: a, durasi: b, genre: c, tahun: d});
}
addDataFilm ("Les Miserables", "2h 40min", "Musical", 2012)

console.log (dataFilm);
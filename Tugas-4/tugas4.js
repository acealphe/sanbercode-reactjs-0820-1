//soal 1
var i = 0;
console.log ('LOOPING PERTAMA');
while (i<20)
{
    i=i+2;
    console.log(i + ' - I love coding');
}
console.log ('LOOPING KEDUA');
while (i>0)
{
    console.log (i + ' - I will become a frontend developer');
    i=i-2;
}



//soal 2
for (i=1; i<=20; i++){
    if (i%3===0 && i%2!==0){
        console.log (i + ' - I Love Coding');
    }
    else if (i%2===0){
        console.log (i + ' - Berkualitas');
    }
    else if (i%2===1){
        console.log (i + ' - Santai')
    }
}



//soal 3
for (i=1; i<=7; i++){
    var hash = [];
    for (j=1; j<=i; j++){
        hash.push('#');
    }
    console.log (hash.join(''));
}



//soal 4
var kalimat='saya sangat senang belajar javascript';
console.log(kalimat.split(' '));



//soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();

for (i=0; i<daftarBuah.length; i++){
    console.log (daftarBuah[i]);
}
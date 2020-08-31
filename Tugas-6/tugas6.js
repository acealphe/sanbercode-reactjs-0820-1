//soal 1
const pi = 22/7;
let r;
let hasil;

const luasLingkaranForm = r => pi*r*r;
const kelilingLingkaranForm = r => 2*pi*r;

hasil = luasLingkaranForm(7);
console.log('Luas lingkaran = ' + hasil);
hasil = kelilingLingkaranForm(14);
console.log('Keliling lingkaran = ' + hasil);



//soal 2
let kalimat = "";
const addKalimat = x => x; 

kalimat = `${addKalimat('saya')} ${addKalimat('adalah')} ${addKalimat('seorang')} ${addKalimat('frontend')} ${addKalimat('developer')}`;
console.log (kalimat);



//soal 3
const newFunction = (firstName, lastName) => {
    return {
      firstName: firstName,
      lastName: lastName,
      fullName: () => console.log(`${firstName} ${lastName}`)
    }
};
//Driver Code 
newFunction("William", "Imoh").fullName();



//soal 4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  };
const {firstName, lastName, destination, occupation, spell} = newObject;

console.log(firstName, lastName, destination, occupation);



//soal 5
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west,...east];
//Driver Code
console.log(combined);
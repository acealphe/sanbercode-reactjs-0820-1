//soal 1
class Animal{
    constructor (name){
        this.name = name,
        this._legs = 4;
        this.cold_blooded = false;
    }
    get legs(){
        return this._legs;
    }
    set legs(x){
        this._legs = x;
    }
    get ectothermic(){
        return this.cold_blooded;
    }
    set ectothermic(x){
        return this.cold_blooded = x;
    }
}

var sheep = new Animal("shaun"); 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false


// Code class Ape dan class Frog di sini
class Ape extends Animal{
    constructor(name){
        super(name);
        this.yell = () => console.log("Auooo");
    }
}
class Frog extends Animal{
    constructor(name){
        super(name);
    }
    jump(){
        return console.log("hop hop");
    }
}

var sungokong = new Ape("kera sakti");
sungokong.legs = 2;
console.log(sungokong.name);
console.log(sungokong.legs);
console.log(sungokong.cold_blooded);
sungokong.yell(); // "Auooo"
 
var kodok = new Frog("buduk");
kodok.ectothermic=true;
console.log(kodok.name);
console.log(kodok.legs);
console.log(kodok.ectothermic);
kodok.jump() // "hop hop" 



//soal 2
class Clock {
    constructor({ template }) {
        var timer;
        function render() {
            var date = new Date();

            var hours = date.getHours();
            if (hours < 10)
                hours = '0' + hours;

            var mins = date.getMinutes();
            if (mins < 10)
                mins = '0' + mins;

            var secs = date.getSeconds();
            if (secs < 10)
                secs = '0' + secs;

            var output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        }

        this.stop = function () {
            clearInterval(timer);
        };

        this.start = function () {
            render();
            timer = setInterval(render, 1000);
        };
    }
}
  
var clock = new Clock({template: 'h:m:s'});
clock.start(); 
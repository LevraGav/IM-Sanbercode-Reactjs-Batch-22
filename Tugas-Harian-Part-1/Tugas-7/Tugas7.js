// Soal no 1
console.log('----SOAL 1----')
// Release 0
console.log('----Release 0----')
class Animal {
    constructor(name){
        this._legs = 4;
        this._cold_blooded = false;
        this._name = name;
    }

    get AnimalName(){
        return this._name;
    }

    set AnimalName(x){
        this._name = x;
    }

    get AnimalLegs(){
        return this._legs;
    }

    set AnimalLegs(x){
        this._legs = x;
    }

    get Cold_Blooded(){
        return this._cold_blooded;
    }

    set Cold_Blooded(x){
        this._cold_blooded = x;
    }
}

var sheep = new Animal("shaun");

console.log(sheep.AnimalName) // "shaun"
console.log(sheep.AnimalLegs) // 4
console.log(sheep.Cold_Blooded) // false
sheep.AnimalLegs = 3
console.log(sheep.AnimalLegs) // 3

// Release 1
console.log('----Release 1----')
class Frog extends Animal {
    constructor(name){
        super(name);
    }
    jump(){
        console.log('hop hop')
    }
}

class Ape extends Animal {
    constructor(name){
        super(name);
        this._legs = 2;
    }
    yell(){
        console.log('Auooo')
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
console.log(sungokong.AnimalName) // kera sakti
console.log(sungokong.AnimalLegs) // 2
console.log(sungokong.Cold_Blooded) // false

var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 
console.log(kodok.AnimalName) // buduk
console.log(kodok.AnimalLegs) // 4
console.log(kodok.Cold_Blooded) // false

console.log('')

// Soal no 2
console.log('----SOAL 2----')
class Clock {
    constructor({template}) {
        this.template = template;
    }

    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop(){
        clearInterval(this.timer);
    }

    start(){
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  

// 20:56:17
// 20:56:18
// 20:56:19
// 20:56:20
// 20:56:21
// 20:56:22
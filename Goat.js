const Animal = require('./Animal');
class Goat extends Animal {
    constructor (name, color, weight, type) {
      super(name, color, weight, type);
    }

    bleet () {
        console.log("Bleeeeet");
    }

    graze () {
        this.walk();
        this._eat();
    }
}

const daisy = new Goat("Daisy", "black", 100, "mammal");
module.exports = daisy;
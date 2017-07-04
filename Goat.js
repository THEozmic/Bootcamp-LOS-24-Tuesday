import Animal from "./Animal";
class Goat extends Animal {
    constructor (name, color, weight, type) {
      super(name, color, weight, type);
    }

    bleet () {
        console.log("Bleeeeet");
    }

    graze () {
        this.walk();
        this.eat();
    }
}
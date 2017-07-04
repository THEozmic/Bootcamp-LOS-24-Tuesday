import Animal from "./Animal";
class Lion extends Animal {
    constructor (name, color, weight, type) {
      super(name, color, weight, type);
    }

    roar () {
        console.log("Roaaaarrr");
    }

    hunt () {
        this.run();
        this._eat();
    }
}
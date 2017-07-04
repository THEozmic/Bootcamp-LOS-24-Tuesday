export default class Animal {

    constructor (name, color, weight, type) {
        this._name = name;
        this._color = color;
        this._weight = weight;
        this._type = type;
    }

    run () {
        console.log("Running");
        // when you run, you lose weight
        this._decreaseWeight();
    }

    walk () {
        console.log("Walking");
    }

    setName (newName) {
        this._name = newName;
    }

    getName () {
        return this._name;
    }
    
    getColor () {
        return this._color;
    }

    getWeight () {
        return `${this._weight}lbs`;
    }

    getType () {
        return this._type;
    }

    _increaseWeight () {
        // it's easier to gain weight!
        this._weight += 2;
    }

    _decreaseWeight () {
        this._weight --;
    }

    _eat () {
        console.log("Eating");
        // when you eat, you gain weight
        this._increaseWeight();
    }

}
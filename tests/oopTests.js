const leo = new Lion("Leo", "brown", 300, "mammal");
const daisy = new Goat("Daisy", "black", 100, "mammal");
let assert = chai.assert;

describe ('Lion', function () {
  
  it ('should be instance of Animal class', function () {
    
    assert.instanceOf(leo, Animal);
  });

  it ('should be type of object', function () {
      assert.typeOf(leo, 'object');
  });

  it ('should increase weight after "hunt"', () => {
      let oldWeight = leo.getWeight();
      leo.hunt();
      let newWeight = leo.getWeight();
      assert(oldWeight < newWeight);
  });

  it ('should be able to get new name', () => {
      let oldName = leo.getName();
      leo.setName("Pantha");
      let newName = leo.getName();
      assert(oldName !== newName);
  });

});

describe ('Goat', function () {
  
  it ('should be instance of Animal class', function () {
    
    assert.instanceOf(daisy, Animal);
  });

  it ('should be type of object', function () {
      assert.typeOf(daisy, 'object');
  });

  it ('should increase weight after "graze"', () => {
      let oldWeight = daisy.getWeight();
      daisy.graze();
      let newWeight = daisy.getWeight();
      assert(oldWeight < newWeight);
  });

  it ('should be able to get new name', () => {
      let oldName = daisy.getName();
      daisy.setName("Charlie");
      let newName = daisy.getName();
      assert(oldName !== newName);
  });

});
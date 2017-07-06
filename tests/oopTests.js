const chai = require('chai');
const Animal = require('../Animal');
const leo = require('../Lion');
const daisy = require('../Goat');

const assert = chai.assert;

describe ('Leo', function () {

  it ('should be instance of Animal class', () => {
    assert.instanceOf(leo, Animal);
  });

  it ('should be type of object', () => {
      assert.typeOf(leo, 'object');
  });

  it ('should increase weight after "hunt"', () => {
      const oldWeight = leo.getWeight();
      leo.hunt();
      const newWeight = leo.getWeight();
      assert(oldWeight < newWeight);
  });

  it ('should be able to get new name', () => {
      const oldName = leo.getName();
      leo.setName("Pantha");
      const newName = leo.getName();
      assert(oldName !== newName);
  });

});
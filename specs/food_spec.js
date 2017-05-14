var Food = require('../food.js');
var Rat = require('../rat.js');
var assert = require('assert');

describe('food', function(){

  beforeEach(function(){
    this.banana = new Food("banana", 8);
    this.rat = new Rat("brown");
  });

  it("should have name", function(){
    assert.equal("banana", this.banana.name);
  });

  it("should have replenishment value", function(){
    assert.equal(8, this.banana.replenishmentValue);
  });

  it("should not be poisonous at start", function(){
    assert.equal(false, this.banana.poisonous);
  });

  it("should be poisonous when rat touches it", function(){
    this.rat.touchFood(this.banana);
    assert.equal(true, this.banana.poisonous);
  });


})
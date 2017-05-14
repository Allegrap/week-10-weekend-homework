var Food = require('../food.js');
var assert = require('assert');

describe('food', function(){

  beforeEach(function(){
    this.food1 = new Food("banana", 8);
  });

  it("should have name", function(){
    assert.equal("banana", this.food1.name);
  });

  it("should have replenishment value", function(){
    assert.equal(8, this.food1.replenishmentValue);
  });


})
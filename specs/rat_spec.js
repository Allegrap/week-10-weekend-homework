var Hero = require('../hero.js');
var Rat = require('../rat.js');
var Food = require('../food.js');
var assert = require('assert');

describe('rat', function(){

  beforeEach(function(){
    this.hero1 = new Hero("Allegra", 100, 1000, "cheese");
    this.banana = new Food("banana", 8);
    this.cheese = new Food("cheese", 10);
    this.rat1 = new Rat("brown");
  });

  it("should have type", function(){
    assert.equal("brown", this.rat1.type);
  });

})
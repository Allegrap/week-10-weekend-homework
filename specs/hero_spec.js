var Hero = require('../hero.js');
var assert = require('assert');

describe('hero', function(){

  beforeEach(function(){
    this.hero1 = new Hero("Allegra", 100, "cheese");
  });

  it("should have a name", function(){
    assert.equal("Allegra", this.hero1.name);
  });




})
var Hero = require('../hero.js');
var assert = require('assert');

describe('hero', function(){
  Hero hero1;

  beforeEach(function(){
    hero1 = new Hero("Allegra", 100, "cheese");
  });

  it("should have a name", function(){
    assert.equal("Allegra", hero1.name);
  });




})
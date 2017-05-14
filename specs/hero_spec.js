var Hero = require('../hero.js');
var Task = require('../task.js');
var assert = require('assert');

describe('hero', function(){

  beforeEach(function(){
    this.hero1 = new Hero("Allegra", 100, "cheese");
  });

  it("should have name", function(){
    assert.equal("Allegra", this.hero1.name);
  });

  it("should have health", function(){
    assert.equal(100, this.hero1.health);
  });

  it("should have favFood", function(){
    assert.equal("cheese", this.hero1.favFood);
  });

  it("should talk", function(){
    assert.equal("My name is Allegra", this.hero1.talk());
  });

  it("should start with 0 tasks", function(){
    assert.equal(0, this.hero1.tasks.length);
  })


})
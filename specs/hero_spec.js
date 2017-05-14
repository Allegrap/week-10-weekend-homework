var Hero = require('../hero.js');
var Task = require('../task.js');
var Food = require('../food.js');
var assert = require('assert');

describe('hero', function(){

  beforeEach(function(){
    this.hero1 = new Hero("Allegra", 100, "cheese");
    this.banana = new Food("banana", 8);
    this.cheese = new Food("cheese", 10);
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

  it("should increase health after eating", function(){
    this.hero1.eat(this.banana);
    assert.equal(108, this.hero1.health);
  })

  it("should increase more health after eating favFood", function(){
    this.hero1.eat(this.cheese);
    assert.equal(115, this.hero1.health);
  })


})
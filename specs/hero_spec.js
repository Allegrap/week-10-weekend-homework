var Hero = require('../hero.js');
var Task = require('../task.js');
var Food = require('../food.js');
var assert = require('assert');

describe('hero', function(){

  beforeEach(function(){
    this.hero1 = new Hero("Allegra", 100, "cheese");
    this.banana = new Food("banana", 8);
    this.cheese = new Food("cheese", 10);
    this.task1 = new Task(20, 5, "lordship");
    this.task2 = new Task(10, 7, "cow");
    this.task3 = new Task(30, 10, "hay");
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

  it("should add task", function(){
    this.hero1.addTask(this.task1);
    assert.equal(1, this.hero1.tasks.length);
  })

  it("should add multiple tasks", function(){
    this.hero1.addTask(this.task1);
    this.hero1.addTask(this.task2);
    assert.equal(2, this.hero1.tasks.length);
  })

  it("should sort tasks by difficulty", function(){
    this.hero1.addTask(this.task1);
    this.hero1.addTask(this.task2);
    this.hero1.addTask(this.task3);
    this.hero1.sortByDifficulty();
    assert.equal(10, this.hero1.tasks[0].difficulty);
    assert.equal(20, this.hero1.tasks[1].difficulty);
    assert.equal(30, this.hero1.tasks[2].difficulty);
  })


})
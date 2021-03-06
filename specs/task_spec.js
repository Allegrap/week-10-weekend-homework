var Task = require('../task.js');
var Hero = require('../hero.js');
var assert = require('assert');

describe('task', function(){

  beforeEach(function(){
    this.task1 = new Task(10, 5, 100);
    this.hero = new Hero("Allegra", 100, 1000, "cheese");
  });

  it("should have difficulty", function(){
    assert.equal(10, this.task1.difficulty);
  });

  it("should have urgency", function(){
    assert.equal(5, this.task1.urgency);
  });

  it("should have reward", function(){
    assert.equal(100, this.task1.reward);
  });

  it("should start completed is false", function(){
    assert.equal(false, this.task1.completed);
  });

  it("should mark task as completed", function(){
    this.task1.completeTask();
    assert.equal(true, this.task1.completed);
  });

  it("should be completed when marked completed by hero", function(){
    this.hero.completeTask(this.task1);
    assert.equal(true, this.task1.completed);
  });

})
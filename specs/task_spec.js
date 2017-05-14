var Task = require('../task.js');
var Hero = require('../hero.js');
var assert = require('assert');

describe('task', function(){

  beforeEach(function(){
    this.task1 = new Task(10, "high", "lordship");
  });

  it("should have difficulty", function(){
    assert.equal(10, this.task1.difficulty);
  });

  it("should have urgency", function(){
    assert.equal("high", this.task1.urgency);
  });

  it("should have reward", function(){
    assert.equal("lordship", this.task1.reward);
  });

  it("should start completed is false", function(){
    assert.equal(false, this.task1.completed);
  });

  it("should mark task as completed", function(){
    this.task1.completeTask();
    assert.equal(true, this.task1.completed);
  });

})
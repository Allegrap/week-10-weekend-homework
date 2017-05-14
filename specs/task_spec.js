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




})
var Hero = require('../hero.js');
var Task = require('../task.js');
var Food = require('../food.js');
var assert = require('assert');

describe('hero', function(){

  beforeEach(function(){
    this.hero1 = new Hero("Allegra", 100, 1000, "cheese");
    this.banana = new Food("banana", 8);
    this.cheese = new Food("cheese", 10);
    this.task1 = new Task(20, 15, 100);
    this.task2 = new Task(10, 7, 70);
    this.task3 = new Task(30, 20, 400);
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

  it("should not be in difficulty order", function(){
    this.hero1.addTask(this.task1);
    this.hero1.addTask(this.task2);
    assert.equal(20, this.hero1.tasks[0].difficulty);
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

  it("should not be in urgency order", function(){
    this.hero1.addTask(this.task1);
    this.hero1.addTask(this.task2);
    assert.equal(15, this.hero1.tasks[0].urgency);
  })

  it("should sort tasks by urgency", function(){
    this.hero1.addTask(this.task1);
    this.hero1.addTask(this.task2);
    this.hero1.addTask(this.task3);
    this.hero1.sortByUrgency();
    assert.equal(7, this.hero1.tasks[0].urgency);
    assert.equal(15, this.hero1.tasks[1].urgency);
    assert.equal(20, this.hero1.tasks[2].urgency);
  })

  it("should not be in reward order", function(){
    this.hero1.addTask(this.task1);
    this.hero1.addTask(this.task2);
    assert.equal(100, this.hero1.tasks[0].reward);
  })

  it("should sort tasks by reward", function(){
    this.hero1.addTask(this.task1);
    this.hero1.addTask(this.task2);
    this.hero1.addTask(this.task3);
    this.hero1.sortByReward();
    assert.equal(70, this.hero1.tasks[0].reward);
    assert.equal(100, this.hero1.tasks[1].reward);
    assert.equal(400, this.hero1.tasks[2].reward);
  })

  it("should mark task as completed", function(){
    this.hero1.addTask(this.task1);
    this.hero1.completeTask(this.task1);
    assert.equal(true, this.task1.completed);
    assert.equal(1100, this.hero1.money);
  })

  it("should view completed task", function(){
    this.hero1.addTask(this.task1);
    this.hero1.addTask(this.task2);
    this.hero1.addTask(this.task3);
    this.hero1.completeTask(this.task2);
    var completedTask1 = this.hero1.viewCompletedTasks()[0].difficulty;
    assert.equal(10, completedTask1);
  })

  it("should view multiple completed tasks", function(){
    this.hero1.addTask(this.task1);
    this.hero1.addTask(this.task2);
    this.hero1.addTask(this.task3);
    this.hero1.completeTask(this.task2);
    this.hero1.completeTask(this.task1);
    var completedTask1 = this.hero1.viewCompletedTasks()[0].difficulty;
    var completedTask2 = this.hero1.viewCompletedTasks()[1].difficulty;
    assert.equal(20, completedTask1);
    assert.equal(10, completedTask2);
  })


})
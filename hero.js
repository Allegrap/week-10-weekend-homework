var Hero = function(name, health, money, favFood){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.money = money;
  this.tasks = [];
};

Hero.prototype = {
  talk: function(){
    return "My name is " + this.name;
  },
  eat: function(food){
    if(food.name === this.favFood){
      var newValue = food.replenishmentValue * 1.5;
      return this.health += newValue;
    }else{
      return this.health += food.replenishmentValue;
    }
  },
  addTask: function(task){
    return this.tasks.push(task);
  },
  sortByDifficulty: function(){
    this.tasks.sort(function(a, b){
      return a.difficulty - b.difficulty;
    });
  },
  sortByUrgency: function(){
    this.tasks.sort(function(a, b){
      return a.urgency - b.urgency;
    });
  },
  sortByReward: function(){
    this.tasks.sort(function(a, b){
      return a.reward - b.reward;
    });
  },
  completeTask: function(task){
    task.completeTask();
    return this.money += task.reward;
  },
  viewCompletedTasks: function(){
    completed = [];
    for(task of this.tasks){
      if(task.completed === true){
        completed.push(task);
      }
    }
    return completed;
  }
};


module.exports = Hero;
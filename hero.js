var Hero = function(name, health, favFood){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
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
  }
};


module.exports = Hero;
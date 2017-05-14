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
    return this.health += food.replenishmentValue;
  }
};


module.exports = Hero;
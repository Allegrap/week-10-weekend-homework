var Hero = function(name, health, favFood){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
};

Hero.prototype = {
  talk: function(){
    return "My name is " + this.name;
  }
};


module.exports = Hero;
var Rat = function(type){
  this.type = type;
};

Rat.prototype = {
  touchFood: function(food){
    return food.poisonous = true;
  }
}

module.exports = Rat;
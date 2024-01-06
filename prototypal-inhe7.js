//prototypal inheritance :- copy over functionalities methods and properties from another constructor function

function Enemy(life, name, level) {
  this.life = life;
  this.name = name;
  this.level = level;
}

Enemy.prototype.getInfo = function () {
  console.log(this.life, this.name, this.level);
};

Enemy.prototype.attack = function () {
  console.log(`${this.name} has attacked!`);
};

Enemy.prototype.block = function () {
  console.log(`${this.name} has blocked!`);
};

const enemy1 = new Enemy(100, "roto", 5);
const enemy2 = new Enemy(85, "karlo", 10);
console.log(enemy1);
console.log(enemy2);

//define another function
function Dragon(life, name, level, color, spell) {
  //we can use call
  Enemy.call(this, life, name, level);
  //keyword this is going reference the dragon project to Enemy and use its property to here
  this.color = color;
  this.spell = spell;
}

//how can we inherit?
//Object.create create the completely new object for us with its prototype set to here
Dragon.prototype = Object.create(Enemy.prototype); //her ewe chained theh rototype with dragon's prototype

Dragon.prototype.fireBreath = function () {
  console.log("FIRE BREATHHH!");
};

const newDragon = new Dragon(79, "Drago", 10, "black", "fire");
console.log(newDragon);
newDragon.attack();

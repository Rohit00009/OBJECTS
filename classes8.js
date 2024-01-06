// function Enemy(life, name, level) {
//   this.life = life;
//   this.name = name;
//   this.level = level;
// }

//instead of function we can write class as follows
class Enemy {
  //using classes we dont have add prototype its gone a do it automatic for us!
  constructor(life, name, level) {
    this.life = life;
    this.name = name;
    this.level = level;
  }
  //we make method
  getInfo() {
    console.log(this.life, this.name, this.level);
  }
}

const turtle = new Enemy(25, "squatle", 10);
const bug = new Enemy(1, "bugya", 10);
console.log(turtle);
console.log(bug);

turtle.getInfo();
bug.getInfo();

//lets declare another class
//and inherit the prototype
class Robot extends Enemy {
  constructor(life, name, level, wantedlevel, money) {
    //their is new keyword specific to classes for call prototype of another class
    super(life, name, level);
    this.wantedlevel = wantedlevel;
    this.money = money;
  }
}

const rora = new Robot(100, "rora", 100, "FIVE-STAR", 300000);
console.log(rora);
rora.getInfo();

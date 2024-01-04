//a pointer --> it refers to an object
//this keyword is more useful when we create objects
//fucntions on objects are called as methods
//whenever we use keyword "this" in the method inside an object, its gone point to that object itself.
//this keyword is dynamic , and we can refer to that specific user
//this keyword isnt useful in case of ---> function inside method

const user = {
  name: "rohit",
  hello() {
    console.log(this);
  },
};

user.hello();

// we can also separately attach them

const info = {
  age: 20,
};
const admin = {
  mood: "happy",
};

function sayHello() {
  console.log(this);
}
info.hi = sayHello; //we made info.hi method
admin.hi = sayHello; //we made admin.hi method

info.hi(); //here we invoke method means executing a method
admin.hi(); //here we invoke method means executing a method

//if we write code as follows
function check() {
  console.log(this);
}
check();
//then we get window of object

//new ex:-
const thought = {
  snetence: "restart!",
};
const quote = {
  snetence: "never give up!",
};

function modify() {
  console.log(this.snetence.toUpperCase());
}

thought.new = modify;
quote.new = modify;

thought.new();
quote.new();

//we can also use "this" keyword with DOM
//below code explains that on which number we click we got that specific element to which it attach too.
const lists = document.querySelectorAll("li");

lists.forEach((li) => {
  li.addEventListener("click", function () {
    console.log(this);
  });
});

//WEIRD thing of keyword this
//when we ceate function inside method then this keyword can might loose its value and cant be referrnece to object anymore!

const film = {
  hit: "ANIMAL",
  theatres: ["pvr", "inox", "miraj", "cineplex"],
  //method
  greet() {
    //this keyword isnt useful in case of ---> function inside method
    //so to solve above problem
    //declare a variable which is equal to this
    //as follows
    let auto = this;
    console.log(`hello there ${auto.hit}`);
    //adding a function
    const getImdb = function () {
      console.log(`movie publish in ${auto.theatres.length} theatres.`);
    };
    getImdb();
  },
};

film.greet();

//but we dont need to do it
//we have better way
const car = {
  best: "BMW",
  countries: ["india", " america", "france", "etc."],
  //method
  greetNew() {
    console.log(`best car empire in world is ${this.best} !`);
    //adding a function
    const getCountries = function () {
      console.log(
        `Tis brand allocate in different countries like ${auto.theatres.length}`
      );
    };
    getCountries(); //when we invoke simple function like above then a new keyword "this" is created in that execution context.
  },
};
car.greetNew();

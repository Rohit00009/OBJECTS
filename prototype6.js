// function Todo(name, completed) {
//   this.name = name;
//   this.completed = completed;
//   this.getTodoName = function () {
//     console.log(this.name);
//   };
//   this.checkCompleted = function () {
//     console.log("check");
//   };
//   this.deleteTodo = function () {
//     console.log("deletes");
//   };
// }

// const todo = new Todo("go gym!", true);
// const todo2 = new Todo("text girls!", false);

// console.log(todo, todo2); //we are duplicating methods and attaching on every object. ---> this gives us bug
//to avoid this we use prototype

//every object has internal property prototype.
//PROTOTYPE --> is simple referrence to another object and contain common properties , attributes across all the instances.

function Todo(name, completed) {
  this.name = name;
  this.completed = completed;
}

Todo.prototype.getTodoName = function () {
  console.log(this.name);
};

const todo = new Todo("go gym!", true);
const todo2 = new Todo("text girls!", false);
todo.getTodoName(); //first check object and then go inside the protoype

console.log(todo, todo2);

//When a constructor function is built the newly created object they inherit prototype properties of cnstructor functions.
//and then we dont want to generate new method everytime when we create object.

//IMP
//on the arrays same thing happening
const arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);

//when constructor function is built the newly created objects inherit prototype of constructor function.
//so has own specific methods

const name = "rohit";

console.log(name.toUpperCase);

//RESTART PROTOTYPE
//prototype  ---> is an object whict is attach to each an every method , array ,function....
//prototype has different properties
let array = ["rohit", "chetan"];
let object = {
  name: "rohit",
  city: "pune",
  getIntro: function () {
    console.log(this.name + " from " + this.city);
  },
};

let object2 = {
  name: "om",
};
object2.__proto__ = object; //never do this
//by above object2.city also gives us pune as city
//object2.city find city in object2 if it doesnt then it go to proto and goes to chain
//object2 is sinheriting properties of object.
//summary point --> if our object doesnt have that property then
// then it check that property in assigned object as object2.___proto__

//prototype chain -- array
//arr.__proto__ is Array.prototype
//arr.__proto__.__proto__ (means the prototype of array prototype is) object prototype.
//arr.__proto__.__proto__.__proto__ (means the prototype of object prototype is) null.

//prototype chain -- function
//fun.__proto__ is Function.prototype
//fun.__proto__.__proto__ is Object.prototype
//obj.__proto__.__proto__.__proto__ is null

//this means in javascript everything is object in the end.

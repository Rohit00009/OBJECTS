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
//so has own spcific methods

const name = "rohit";

console.log(name.toUpperCase);

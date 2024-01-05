function Todo(name, completed) {
  this.name = name;
  this.completed = completed;
  this.getTodoName = function () {
    console.log(this.name);
  };
  this.checkCompleted = function () {
    console.log("check");
  };
  this.deleteTodo = function () {
    console.log("deletes");
  };
}

const todo = new Todo("go gym!", true);
const todo2 = new Todo("text girls!", false);

console.log(todo, todo2); //we are duplicating methods and attaching on every object. ---> this gives us bug
//to avoid this we use prototype

//every object has internal property prototype.
//PROTOTYPE --> is simple referrence to another object and contain common properties , attributes across all the instances.

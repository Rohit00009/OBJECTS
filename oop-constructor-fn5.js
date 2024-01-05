//constructor function --> that will generates us object
// uppercase to define constreuctor function

function Todo(name, completed) {
  console.log(this); //this gives an empty object.
  this.name = name; //setting a property inside new object with the parameter which we gone pass .
  this.completed = completed; //setting a property inside new object with the parameter which we gone pass .
  //we can aslo attach methods
  this.getTododName = function () {
    console.log(this.name);
  };
}

//Todo(); --> this gone a be window

// we add new keyword before invoke the function and its work is create an empty object for us.
// also says  keyword this to new object that is built.
const todo = new Todo("buy respect", false); //we add 2 arguements here i.e. "buy respect" , false
const todo2 = new Todo("do my HW", false);
//console.log(todo, todo2); --> by this we attach method to object
//but we want
todo.getTododName();
todo2.getTododName();

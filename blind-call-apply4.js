//functions --> special object
//bind,call,apply
//by this methods we change context of keyword this

//1)bind -->invoke the function
//syntax --> variable = functionname.bind(object);
//how bind works when parametres also are in function
//we bind the object and then we invoke the function that we pass in parametres

const person = {
  firstName: "rohit",
  lastName: "chavan",
  getName() {
    console.log(this.firstName + this.lastName);
  },
};
person.getName();

function registerUser(country, lang) {
  //we can also parametres in function
  //additional functionality....
  //console.log(this); --> by this we get window object
  this.getName(); //by this we invoking method inside an object in this function and bind it down
  console.log(`My country is ${country} and my lnaguage is ${lang}`);
}

const register = registerUser.bind(person); //here we are not calling it or invoking it,  staright on reference and binding it.
register("India", "Marathi"); //and then we invoke it

//2)call -->invoke the function
//difference between bind & call -> when we use call we not actually saving it in variable , we invoking it
//syntax --> fucntionname.call(object); --> without declaring a variable for it.
registerUser.call(person);
//when we also want to pass parametres in call
registerUser.call(person, "Bharat", "sanskrit");

//3) Apply  --> invoke the function
//there is no difference just only as follows
registerUser.apply(person);
//for passing parametres in array
registerUser.apply(person, ["Hindustan", "hindi"]);

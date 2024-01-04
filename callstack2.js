function hello() {
  console.log(`hello ${name}`);
  changeName;
  console.log(`hello is finished`);
}

function changeName() {
  name = "rohit";
  console.log(`we changed it to ${name}`);
  console.log(`changeName is finished`);
}

let name = "rohya";
hello(); //soon as we envok a function the new global execution context gets  created
//when we run above function then its create its own execution context with keyword this
//after this creatio we dont go on belown or next code
//that function starts execute line by line from where its declared
//after this if another function was mentioned in our function then new execution context get created above it and starts again
//  changeName();
//      ^
//      |
//  hello();
//      ^
//      |
//  global();
//its looks like keep stacking book on tops
//mhnje ekavr ek thevat jato

//whens the all subfunction or functions(which mention our main funcion) related to our function are completed then they are popup and revert on our main function
//        -----> changeName(); -->popup
//      ^
//      |
//    hello(); ---> and rerun our main function with changes done subfuction or functions which mention our main fuction
//      ^
//      |      --->after run our main function it will also get popup
//    global();  ---> and global execution context also get removed

//and then next code starts to running

//then hello

console.log(`we are done with code`);

//summary note :- everytime we envok the function the execution context gets created

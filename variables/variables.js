var text = "Hello, World!";
var number = 42;
var isTrue = true;
var array = [1, 2, 3, 4, 5];
var object = { 
    name: "Alice", 
    age: 30 
};

var person = {
    firstname: "John",
    lastname: "Smith"
};

console.log(person);
console.log(person.firstname +" "+ person.lastname);
console.log(typeof person);

person = 10;
console.log(typeof person);

person = "John Smith";
console.log(typeof person);

person = [ 20, 30, 40];
console.log(person);
console.log(typeof person);

person = 20;
person++;
console.log(person);

var rVar = "21";

var result = person === rVar;
console.log(result);

// ===============================
function scopeTest() {
  if (true) {
    var varVariable = 'I am var';
    let letVariable = 'I am let';
  }

  for(let i=0; i<10; i++){
    console.log(i);
  }

  console.log(i);
  console.log(varVariable); // 'I am var' (accessible due to function scope)
  console.log(letVariable); // ReferenceError: letVariable is not defined (outside its block scope)
}
scopeTest();
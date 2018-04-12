/* Variable Section */

/* VAR */

// var can be used as one way to declare variables. Though it is being replaced with let and const it is still recognized by all browsers.

// using the var keyword allows the value of the variable to be changed (reassiged) later in the document.  This can sometimes cause issues if two variables have the same name.  Whichever declaration appears lower in the document takes precedence.

//Initialzing (init) a variable with var keyword
var name;

//Logging the variable to the console
console.log("initial var name", name); // -> undefined

//Declaring a variable (name) using the var keyword
name = "Cameron";

//Logging the name to the console.
console.log("new var name", name); // -> "name" "Cameron"

//Chaning the value of the name variable
name = "Shelby";

//Logging the new value of the name variable
console.log("new var name", name); // -> "new name" "Shelby"


/* LET */

// Using the let keyword would work exactly like var keyword in respect to global scoping.  However, there are some advantages to using the let keyword in regards to lexical scoping.

//Initializing a variable with the let keyword.
let birthdayMonth;

//Logging the value of birthdayMonth to the console.
console.log("initial let birthdayMonth", birthdayMonth); // -> undefined

//Changing the value of the birthdayMonth variable to "April"
birthdayMonth = "April";

//Logging the new value of the birthdayMonth variable to the console.
console.log("new let birthdayMonth", birthdayMonth); // -> "birthdayMonth" "April"

//Changing the value of the birthdayMonth variable to "February"
birthdayMonth = "February";

//Logging the new value of the birthdayMonth variable to the console.
console.log("new let birthdayMonth", birthdayMonth);


/* CONST */

//The const keyword is short for the word constant.  This means that the value of this variable can never be reassigned in the document.

//This does not mean that the value cannot be mutated (i.e. array or object).  It simply meants that the 'nameOfVariable = ' may never be used in the application again.

//This is used for data that you would like to remain consistent throughout the entire application.

//The const keyword cannot be initialized without a value given to it.
//const favoriteColor; // -> Uncaught SyntaxError: Missing Initializer 

//Initializing a variable with the const keyword
const favoriteColor = "blue";

//Logging the value of the favoriteColor variable to the console.
console.log("initial const color", favoriteColor);

//Attempting to reassign a value to favoriteColor
//favoriteColor = "green"; // -> Uncaught TypeError: Assignment to constant variable.

//Initializing a variable with the const keyword.
const person = {
  name: "Cam",
  age: 27,
  favoriteColor: "green"
}

//Logging the person variable to the console
console.log("initial const person", person);

//Mutating the name key/value within the person object
person.name = "Cameron";

//Logging the mutated variable object to the console.
console.log("mutated name person", person);




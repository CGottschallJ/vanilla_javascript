/* FUNCTION DECLARATION AND EXPRESSIONS */

  // - A function is a block of code that can be defined and used (called) later on or defined and used immediatley.
  // - There are multiple ways that a function can be defined.
  // - Each function will return a single value.
  // - To call a function at a later time, you must use the name of the function followed by parentheses.

  //Function Declarations
    // - Functions are declared using the function keyword followed by the name of the function.
    // - The name of the function should be followed by parentheses ().
    // - Those parentheses are followed by curly braces ({}) which will wrap around the code block that is to run when the function is called.
    
    function greeting() {
      return "Hello";
    }

    console.log(greeting()); // -> Hello

    //Single Parameter
      // - In some cases, one or more parameters can be passed into the parentheses after the function name.
      // - These parameters can be used inside the code block and are given the value of whatever is passed in.

      function greetingWithName(firstName) {
        return `Hello, ${firstName}`
      }

      // - When the function is called, a value can be placed in the parentheses to represent each parameter.
    
      console.log(greetingWithName("Cam")); // -> Hello, Cam

    //Multiple Parameters

      function greetingWithLastName(firstName, lastName) {
        return `Hello, ${firstName} ${lastName}`
      }

      console.log(greetingWithLastName("Cam", "Gottschall")); // -> Hello, Cam Gottschall


    //Setting Default Values
      // - There will be occasions when the a default value may be required for the variables in the case that they are undefined.
      // - In ES5, this was possible using an if statement to test the typeof the value passed in.
        // - If the value of the parameter is undefined, set it to a default value of...
      // - If any other values are passed in, they will overwrite the default.

        function testAndGreet(firstName, lastName) {
          if(typeof firstName === 'undefined') {
            firstName = 'John'
          }
          if(typeof lastName === 'undefined') {
            lastName = 'Doe'
          }
          return `Hello, ${firstName} ${lastName}`
        }

        console.log(testAndGreet());

        console.log(testAndGreet("Cam"));
        
        console.log(testAndGreet("Cam", "Gottschall"));

      // - In EcmaScript6 (ES6), the default values can be defined inside the parentheses when the parameter is passed in.

      function testAndGreet(firstName = "John", lastName = "Doe") {
        return `Hello, ${firstName} ${lastName}`
      }

      console.log(testAndGreet());

      console.log(testAndGreet("Cam"));
      
      console.log(testAndGreet("Cam", "Gottschall"));

  //Function Expressions
    // - Functions can also be saved as a value of a  variable. These are called function expressions. 
    // - These functions do not require a name and are called anonymous functions.
      // - Whatever value is returned from the function will be set as the value of the variable.

      const square = function(x = 1) {
        return x * x;
      };

      console.log(square(9)); // -> 81

  //Immediately Invoked Functions - IIFEs
    // - An immediately invoked function is a function that runs at the same time it is declared
    // - This can be accomplished by defining an anonymous function inside of parentheses.
    // - A set of parentheses is still required after the delcararion to call the function as well.
      (function(){
        console.log('Immediately Ran...');
      })();

    // - Immediately Invoked Functions can also take in parameters.

      (function(name){
        console.log(`Hello, ${name}!`);
      })("Cam"); // -> Cam

  //Methods
    // - A function is a data type.  Just like strings and numbers.
      // - This means that it can be assigned to a key/value pair within an object.
    // - Don't overthink this! When a function is inside of an obect, it is called a method.
    // - To reiterate, a method is just a function that is found within an object.
    // - The function can be called and the value accessed using the dot syntax.

    const basicEquations = {
      add: function(x){
        return x + 1
      }
    };

    console.log(basicEquations.add(9)); // -> 10

    //Methods can also be added to an object later on

    basicEquations.subtract = function(x){
      return x - 1
    };

    console.log(basicEquations.subtract(9)); // -> 8
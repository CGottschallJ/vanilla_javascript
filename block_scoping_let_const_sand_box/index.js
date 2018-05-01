/* BLOCK SCOPING (let, const, var) */ 

  //Global Scope
    // Global scope refers to variables and values that can be seen across the entire document.
    //They can be accessed by any function or conditional statment.

      console.log("! - Global Scope Initial - !");

        var a = 1;
        let b = 2;
        const c = 3;

        console.log("Global Scope var a - ", a); // -> 1
        console.log("Global Scope let b - ", b); // -> 2
        console.log("Global Scope const c - ", c); // -> 3

  //Function Scoping
  console.log("! - Function Scope - !");

    // - Functions use curly braces meaning that the code inside will be in a different scope than the global variables
      // - This means that the same name can be used to create a different variable.
    // - When the function is called, the variables within that block will be used as if the global variables did not exist. 
    // - When the function finishes and the code block ends, the values of the variables within the function will remain inside.
      // - This means if the variables are used again outside of the function they will retain their global value;

        function scopeTest() {
          var a = 4;
          let b = 5;
          const c = 6;
          console.log("Function Scope var a - ", a); // -> 4
          console.log("Function Scope var b - ", b); // -> 5
          console.log("Function Scope var c - ", c); // -> 6
        }

        scopeTest();

        // console.log("Global Scope After var a - ", a); // -> 1
        // console.log("Global Scope After let b - ", b); // -> 2
        // console.log("Global Scope After const c - ", c); // ->3

  //Block Scoping
  console.log("! - Block Scoping - !");

    // - Applies to if statements, loops, or anything wrapped in curly braces excluding functions.
    // - The rules for block scoping inside of conditionals works almost the same as function scoping with the exception of var.
      // - In this case, the var keyword will remember the value it was set to inside of the conditional even after that block of code closes.
      // - The new value set in the conditional will now be the value of the global variable.
      
        //Conditional
        if(true) {
          var a = 7;
          let b = 8;
          const c = 9;
          console.log("If Block Scope var a - ", a); // -> 7
          console.log("If Block Scope var b - ", b); // -> 8
          console.log("If Block Scope var c - ", c); // -> 9
        }

        console.log("Global Scope After var a - ", a); // -> 7
        console.log("Global Scope After let b - ", b); // -> 2
        console.log("Global Scope After const c - ", c); // -> 3

        //Loop

        // - Using let in a loop will ensure that the final value of 'a' after the completes will remain withing the loop.
        // - Using let will allow the global variable 'a' to remain its initial value.

        //Resetting the value of 'a' to 1.
        var a = 1;

        for(let a = 0; a < 5; a++) {
          console.log(`Loop a - ${a}`);
        }

        console.log("Global Scope After var a - ", a); // -> 1

        // - Using the 'var' keyword within a loop, however, would not capture this value within this block of code.
        // - Using 'var' would set the value of the global scope to the final value of 'a' after the loop completes.

        for(var a = 0; a < 5; a++) {
          console.log(`Loop a - ${a}`);
        }

        console.log("Global Scope After var a - ", a); // -> 5



/*  IF STATEMENTS AND CONDITIONALS */

  console.log("! - Variable Declarations Section - !");
  const nameOne = "Cameron";
  console.log("nameOne - ", nameOne);
  const nameTwo = "Shelby";
  console.log("nameTwo - ", nameTwo);
  const numOne = 9;
  console.log("numOne - ", numOne);
  const numTwo = 99;
  console.log("numTwo - ", numTwo);

  let val;
  console.log("val - ", val);


  //If Statements
  console.log("! - If Statements - !");
    // - If statements can be used to determiune which code runs based on the outcome of a conditional statement.
      // - The syntax is such... 
        // if(conditional statement is correct) {
        //   execute this code 
        // } else {
        //   execute this code
        // }
    // - A conditional statment is an expression.
    // - The 'else' part of the statement will be the code that runs in the instance the conditional is not true.
    // - Common operators seen in these statements are...
      // - === - The three equals can be used to compare whether two values are the same value and data type.

        if(nameOne === "Cameron") {
          val = "The two values match value and data type."
        } else {
          val = "The two values do not match either value or data type."
        }
        console.log("if(nameOne === \"Cameron\") return - ", val);

        // - If the values are the same but the data types are not, the if statement will return false and run the "else" code block.

        if(true === "true") {
          val = "The two values match value and data type."
        } else {
          val = "The two values do not match either value or data type."
        }
        console.log("if(true === \"true\") return - ", val);

      // - == - The two equals can be used to compare whether two values are the same value without considering data type.
        if(nameOne == "Cameron") {
          val = "The two values match value and data type."
        } else {
          val = "The two values do not match either value or data type."
        }
        console.log("if(nameOne == \"Cameron\") return - ", val);

        // - If the values are the same but the data types are not, the if statement will return true and run the "if" code block.

        if(true == "true") {
          val = "The two values match value and data type."
        } else {
          val = "The two values do not match either value or data type."
        }
        console.log("if(true == \"true\") return - ", val);

      // - < - The lesser than sign compares whether or not one value is lesser than another.

        if(numOne < numTwo) {
          val = "numOne is less than numTwo."
        } else {
          val = "numOne is NOT less than numTwo."
        }
        console.log("if(numOne < numTwo) - ", val);

      // - > - The greater than sign compares whether or not one value is greater than another.
        
        if(numOne > numTwo) {
          val = "numOne is greater than numTwo."
        } else {
          val = "numOne is NOT greater than numTwo."
        }
        console.log("if(numOne > numTwo) - ", val);


      // - <= - The lesser than or equal to sign compare whether one value is lesser than or equal to another
        
        if(numOne <= 9) {
          val = "numOne is less than or equal to 9."
        } else {
          val = "numOne is NOT less than or equal to 9."
        }
        console.log("if(numOne <= 9) - ", val);
      
      // - >= - The greater than or equal to sign compare whether one value is greater than or equal to another
        
        if(numTwo >= 99) {
          val = "numOne is less than or equal to 9."
        } else {
          val = "numOne is NOT less than or equal to 9."
        }
        console.log("if(numTwo >= 99) - ", val);
      
      // - != - The 'not equal' sign returns true if the values do not match.

        if("99" != 99) {
          val = "\"99\" is NOT equal to 99 data type."
        } else {
          val = "\"99\"is equal to 99."
        }
        console.log("if(numTwo >= 99) - ", val);

      // - !== - The double 'not equal' returns truie if values and data types do not match.

        if("99" !== 99) {
          val = "\"99\" is NOT equal to 99 data type and value."
        } else {
          val = "\"99\" is equal to 99 data type and value."
        }
        console.log("if(numTwo >= 99) - ", val);

    //Logical Operators can be used when two or more conditionals need to be met in the same expression.
      // - && - The double ampersand can be used to indicate 'and' when two conditionals MUST be met.
        if(nameOne === "Cameron" && numTwo === 100) {
          val = 'Both conditionals have been met!';
        } else {
          val = 'Both conditionals were NOT met.';
        }
        console.log("if(nameOne === \"Cameron\" && numTwo === 100) - ", val);

      // - || - The double pipe can be used to indicate 'or' when one of two or more conditionals MUST be met.
        if(nameOne === "Cameron" || numTwo === 100) {
          val = 'One of the conditionals has been met!';
        } else {
          val = 'Neither conditional was NOT met.';
        }
        console.log("if(nameOne === \"Cameron\" || numTwo === 100) - ", val);

  //Else If Statements
  console.log("! - Else If Statements - !");
    // - Else If statements can be used in the case that multpile conditions need to be tested.
    // - This syntax is the same as the If/Else statement except for the addition of the else if conditionlap placed in between.
      if(nameOne === nameTwo) {
        val = "nameOne is equal to nameTwo";
      } else if(numOne !== numTwo) {
        val = "numOne is NOT equal to numTwo";
      } else{
        val = "None of the conditionals were met";
      }
      console.log("else if(numOne !== numTwo) - ", val);

  //Ternary Operator
  console.log("! - Ternary Operator Section - !");
      // - The ternary operator allows for a shorthand way of writing if/else statements.
      // - This can be done using the question mark (?) meaning 'if' and a colon (:) meaning 'else';
        console.log("Ternary True return - ");
        console.log(nameOne === "Cameron" ? `The nameOne variable is equal to ${nameOne}` : `Did you mean ${nameTwo}?`);
        console.log("Ternary False return - ");
        console.log(nameOne === "Cam" ? `The nameOne variable is equal to ${nameOne}` : `Did you mean ${nameTwo}?`);


    


/* String Concatenation and Methods */

  //Variables Definition
  console.log("! - VARIABLE DEFINITIONS - !");

    const firstName = "Cam";
    console.log("First Name = ", firstName);
    const lastName = "Gottschall";
    console.log("Last Name = ", lastName);

    let val;
    console.log("val = ", val);

  //Concatenation Section
  console.log("! - CONCATENATION SECTION - !");
    //Addition Operator
      // - One way to add two variables together is with the math operator.
      // - This will return the two names with no space between them.

      val = firstName + lastName; // -> CamGottschall
      console.log("Addition (+) Operator Result - ", val);

    //Concatenation
      // - The addition operator can be used to add other strings between the variables as well.
      // - In this case we can add a space between the firstName and lastName variables.

      val = firstName + " " + lastName; // -> Cam Gottschall
      console.log("Concatenation (+\" \"+) Result - ", val);

    //Append
      // - The += operator can also be used to add the two names together.
      // - This too, like the math operator, will require one of the variables to have a space included.

      val = "Cam "; // -> Cam
      val += "Gottschall"; // -> Cam Gottschall
      console.log("Append (+=) Result - ", val);

    //Template Strings
      // - Template strings allow variables to easily be injected into a string.
      // - These can be created using the `tick` mark in place of the quotation marks.
      // - The variables can then be called using ${variableName} to put them into the string.

      val = `Hello, my first name is ${firstName} and my last name is ${lastName}.`;
      console.log("Template String (` `) Result - ",val)

    //Escaping a Character
      // - In the instance that you'd need to cancel out a character that reads as Javascript as well, a '\' can be placed before it.
      //val = 'that's awesome I can't wait';

      val = 'That\'s awesome, I can\'t wait!';
      console.log("Escaping Characters (\\) Result - ", val);

  //String Methods
  console.log("! - STRING METHODS SECTION - !");
    //.length
    //.concat()
    //.toUpperCase()
    //.toLowerCase()
    //.indexOf()
    //.lastIndexOf()
    //.charAt()
    //.charAt(firstName.length -1)
    //.substring()
    //.slice()
    //.split()
    //.replace()
    //.includes()












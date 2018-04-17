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
      // - The length property of the string can be used to print out the number of characters in the string.
      // - Because this is a property, not a method, the parentheses are not required after.
      // - This will return a number
      val = firstName.length; // -> 3
      console.log("First Name Length Result - ", val);

    //.concat()
      // - The concatination method can be used to concatenate (add) strings to one another.
      // - This method can receive multiple arguments that will be added to the variable selected.
        // - This allows for a space to be added between two strings.
      val = firstName.concat(' ', lastName); // -> "Cam Gottschall"
      console.log("Concat Method Result - ", val);

    //.toUpperCase()
      // - The toUpperCase method can be used to translate all characters in a sting to upper case styling.
      val = lastName.toUpperCase(); // -> "GOTTSCHALL"
      console.log("toUpperCase Method Result - ", val);

    //.toLowerCase()
      // - The toLowerCase method can be used to translate all characters in a sting to lower case styling.
      val = lastName.toLowerCase(); // -> "gottschall"
      console.log("toLowerCase Method Result - ", val);

    //.indexOf()
      // - The indexOf method can be used to scan a string and find the index of a character or characters within the string.
      // - The method takes in one argument that is a string containing one letter or more letters.
      // - This will return a number that is the first index this letter can be found at.
        // - If the argument passed in is not found then -1 will be returned.
      val = firstName.indexOf('m');  // -> 2
      console.log("indexOf Method Result - ", val);
      
    //.lastIndexOf()
      // - The indexOf method can be used to scan a string and find the last instance of the a character or characters within the string.
      // - The method takes in one argument that is a string containing one letter or more letters.
      // - This will return a number that is the last index this letter can be found at.
        // - If the argument passed in is not found then -1 will be returned.
        val = lastName.lastIndexOf('t'); // -> 3
        console.log("lastIndexOf Method Result - ", val);

    //.charAt()
      // - The 'character at' method can scan a string and return the character at the index that had been passed in.
      // - This method takes in one argument that is a number.
        // - If the index is not found in the string, the method will return undefined.
      val = lastName.charAt(0); // -> "G"
      console.log("charAt Method Result - ", val);

      //.charAt(firstName.length - 1)
        // - The charAt method can also be combined with the length property to find the last letter of the string.
        // - The length -1 is required because the index count begins at 0. This means that the length of a string will always be one number higher than the final index.

        val = lastName.charAt(lastName.length - 1); // -> "l"
        console.log("Last Letter of String - ", val);

    //.substring()
      // - The substring method can be used to select a portion of the string selected.
      // - This method takes in two arguments.  The index to begin the substring at and the index to end the substring at.
        // - It is important to remember that the first index passed in will be included and the second index passed in will not be included
      val = lastName.substring(1, 8); // -> "ottscha"
      console.log("Substring Method Result - ", val);

    //.slice()
      // - Though slice is commonly used on arrays, it can be used on strings as well and works almost exactly like the substring method.
      // - It too takes in two index numbers as arguments and returns the characters between them.
        // - Again, remember that the first index passed in will be included and the second index will not be included.
      // - The major difference between the slice and substring method is that the slice and take in a negative number as a single parameter.
        // - If a negative number is passed in, the return will begin counting indexes backwards and return from that index to the end of the string.
      val = lastName.slice(0, 7); // -> "Gottsch"
      console.log("Two Param Slice Method Result - ", val);

      val = lastName.slice(-3); // -> "all"
      console.log("Negative Slice Method Result - ", val);

    //.split()
      // - The split method can be used to split a string into an array based on the separator that gets passed in.
        // - The separator is commonly a comma, period, or space so that strings can be broken into lists, sentences, or words.
      const str = "Programming is so much fun!"
      val = str.split(' '); // -> ["Programming", "is", "so", "much", "fun!"]
      console.log("Split Method Result - ", val);

    //.replace()
      // - The replace method can be used to replace certain characters or words within a string
        // - The method takes in two parameters.  First is what you'd like to replace and second is what you'd like to replace it with.
      val = str.replace("Programming", "Dancing"); // -> "Dancing is so much fun!"
      console.log("Replace Method Result - ", val);

    //.includes()
      // - The includes method will loop over a string to see if it includes the character or characters passed in.
      // - This method will either return true or false depending on whether or not the string passed in is included.
      val = str.includes("fun"); // -> true
      console.log("Includes Method Result - ", val);













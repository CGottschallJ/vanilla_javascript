/* PRIMITIVE DATA TYPES */

  // *STRING

    // A string is a word or a phrase that is saved in the format of text.

    // Declaring a variable with the value of a string
    const name = 'Cameron'
    
    // Logging the type of value set in variable to the console using typeof
    console.log("name", typeof name);

  // *NUMBER

    // A number is a number.  This can include whole numbers, decimals, etc...

    // Declaring a variable with the value of a number
    const number = 9;

    // Logging the type of value set in variable to the console using type of
    console.log("number", typeof number);

  // *BOOLEAN

    // A boolean can be either true or false.

    // Declaring a variable with the value of a boolean
    const boolean = true;

    // Logging the type of value set in variable to the console using type of
    console.log("boolean", typeof boolean);

  // *NULL

    //Null is the absence of a value.
    //However, this value returns an object.

    // Declaring a variable with the value of null.
    const empty = null;

    // Logging the type of value set in variable to the console using type of
    console.log("empty", typeof empty);

  // *UNDEFINED
  
    // Undefined means that the variable has no value.

    // Declaring a variable with no value to return undefined.
    let undef; 

    // Logging the type of value set in variable to the console using type of
    console.log("undef", typeof undef);

  // *SYMBOL
    // The Symbol data type is new in ES6
  
    const sym = Symbol();

    console.log("sym", typeof sym);

/* REFERENCE DATA TYPES */
  // Each of these data types are considered to have a type of object in the eyes of JavaScript.

  // *ARRAYS

    // Arrays containe multiple indexes.  Each index can be a different data type.
    // The first index of the array is index 0 and the second is 1 etc....
    // Though this is an array, it will return an object with the type of method.

    // Declaring a variable with a value of an array.
    const hobbies = ["movies", "music", "sports"]

    // Logging the type of value set in variable to the console using type of
    console.log("hobbies", hobbies, "type " + typeof hobbies);


  // *OBJECT LITERAL

    // Objects contain a set of key/value pairs wihtin their brackets.
    // Each key should represent a property of that object.
    // Objects too can hold values of different data types.

    // Declaring a variable with a value of an object.
    const address = {
      street: "1111 null Street",
      city: "Austin",
      state: "TX",
      pool: false
    };

    // Logging the type of value set in variable to the console using type of
    console.log("address", address, "type " + typeof address);

  // *DATES

    // Declaring a variable with a value of a date using the Date() method.
    const today = new Date();

    // Logging the type of value set in variable to the console using type of
    console.log("today", today, "type " + typeof today);

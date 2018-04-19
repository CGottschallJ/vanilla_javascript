/* OBJECT LITERALS */
  // - Objects allow us to store multiple key/value pairs.
    // - A key/value pair consists of a property name and a value.
    // - The property name should describe something a property of the object.
    // - The value is the value of that property should be a value of that property
  // - Objects can be initialized with curly ({}) braces.
    // - The curly braces are placed as a value of a variable.
    // - Within the braces, are one or more key value pairs.

  //Defining Object Literals
  console.log("! - Creating Object Literals - !");

    // - To define an object literal, a variable must be created to store it in.
    // - Next, the value of the variable can be set to an object.
      // - An object is initialized with an opening and closing curly ({ }) brace.
    // - Inside of the curly braces will be the key/value pairs that describe the object being created.
      // - Each key/valuie pair consists of a key and a value separated by a colon.
      // - Each key is something that relates to the object (property).
      // - Each value is a value of that property.
    // - like arrays, objects can stroe multiple data types.
    // - In some instances data within the object will have to  be used in other parts of an object.
      // - Commonly used in methods to combine data.
    // - This can be done using the "this" keyword.
      // - The 'this' keyword references the object that it is within.
      // - Using the dot syntax you can then access data within the object.

    console.log("! - Variable Declaration -! ");

    const person = {
      firstName: "Cameron",
      lastName: "Gottschall",
      age: 27,
      email: 'examplemail@exampleweb.com',
      hobbies: ['Sports', 'Music', 'Programming', 'Painting'],
      address: {
        street: "1111 Example Road",
        city: "Austin",
        state: "Texas"
      },
      getBirthYear: function(){
        2018 - this.age
      }
    }
    console.log("person - ", person);

    let val;

    console.log("val - ", val);

  
  // Accessing Data Within
  console.log("! - Accessing Data in an Object - !");
    // - To access data within an object we have a couple of different options.

    // - The dot syntax
      val = person.firstName;
      console.log("person.firstName return - ", val); // -> "Cameron"

    // - The bracket syntax
      val = person['hobbies'];
      console.log("person['hobbies'] return - ", val); // -> ['Sports', 'Music', 'Programming', 'Painting']

      // - You can also use the bracket syntax combined with the dot syntax to access an individual index from an array.
      val = person.hobbies[1];
      console.log("person.hobbies[1] return - ", val); // -> "Music"

    
      
  
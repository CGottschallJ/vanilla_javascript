/* GENERAL LOOPS */
  // - A loop is an instruction that repeats until a condition is met.
  // - Loops are used to run a code block multiple times.
  // - Loops are useful when the same block of code is needed time and time again with different values each time.
  // - Loops are also commonly used when working with arrays.
  
  //For Loops
  console.log("! - For Loop Section - !");
    // - For loops can be used to run a certain amount of itterations.
    // - The syntax begins with the 'for' keyword initiator followed by parentheses.
      // - The parentheses take in 3 arguments separated by semi colons.
      // - The first is a varaible declaration using the let keyword to the initial value of 'i' to 0.
      // - The second is a conditional telling the loop when to stop.
      // - The third is an iterator which uses a double '+' symbol or a double '-' symbol. 
        // - This step will determine whether the loop operates up or down.
      
        for(let i = 0; i < 10; i++){
          console.log("For Loop i < 10 - ", i);
        }
      
      // - Values of certain itterations can be adjusted using if statements.
      // - The 'continue' keyword is used to return to the begining of the loop.
        // - This way the default return will not be returned for that value as well.
        console.log(" - Changing one value in a loop - ");
        for(let i = 0; i < 10; i++){
          if(i === 9) {
            console.log("Favorite number is - " + i);
            continue;
          }
          
          console.log("For Loop i < 10 - ", i);
        }

      // - The 'break' keyword can also be used to end the loop using a conditional statement as well.
        console.log(" - Breaking the for loop - ");
        for(let i = 0; i < 10; i++){
          if(i === 9) {
            console.log("Favorite number is - " + i);
            continue;
          }
          if(i === 6) {
            console.log(`Loop stopped at ${i}.`);
            break;
          }
          
          console.log("For Loop i < 10 - ", i);
        }

  //While Loops
  console.log("! - While Loops Section - !");
    // - While Loops run exactly like a for loops with a slightly different syntax.
      // - The variable should be defined before the while loop.
      // - The only argument passed in is the conditional
      // - Inside is the code block of instructions
      // - Finally, the iterator is placed at the bottom of the code block.
        // - The iterator is extremely important as the page or app will crash due to  an infinite loop.
    // - While loops are better when the amount of times the loop needs to run is unclear.

      let i = 0;

      while(i < 10) {
        console.log("While Loop i < 10 - ", i)
        i++;
    }

  //Do While Loops
  console.log("! - Do/While Loops Section - !")
    // - A do/while loops is very similair to a while loop with one exception.
      // - The do/while loop will always run atleast once.

        i = 0;
    
        do {
          console.log("Do While i < 10 - " + i);
          i++
        }
        while(i < 10);

    // - As stated above, even if the value exceeds the conditional, the block will still run once.
    console.log(" - Executes atleast once - ");

        i = 100;
        
        do {
          console.log("Do While i < 10 - " + i);
          i++
        }
        while(i < 10);

  //Looping Arrays
  console.log("! - Looping Arrays Section - !");

    // - These loops can be used with arrays to access the data within.

        const vehicles = ["Fusion", "Focus", "Mustang", "Taurus", "Fiesta"];
        console.log("vehicles = ", vehicles);

        for(let i = 0; i < vehicles.length; i++) {
          console.log(`We have Ford ${vehicles[i]} on the lot`);
        }
  
  //Array Methods
  console.log("! - Array Methods Section - !");

    // - Arrays also have specific methods already built that are more recommended.
      // - These loops run just like the for loop above but are recommended for the shorter syntax.
        
    //For Each Method
    console.log(" - For Each Method - ")
      // - The 'forEach' method can be used to make modifications to each index of an array.
      // - This method takes in one argument that is a callback function.
        // - The callcack function takes in one argument which should be the singular version of the values in the array.
      // - This method allows us to make to each index while keeping the same array

        vehicles.forEach(function(vehicle) {
          if(vehicle.charAt(vehicle.length - 1) === "s"){
            console.log(`We have Ford ${vehicle}' on the lot!`);
          } else {
            console.log(`We have Ford ${vehicle}s on the lot!`);
          }
        })
      
      // - This callback function can also take in other arguments.
      console.log(" - Accessing the index - ")
        // - One is the 'index' which allows us to access the indecies of the array as well.

        vehicles.forEach(function(vehicle, index) {
          if(vehicle.charAt(vehicle.length - 1) === "s"){
            console.log(`${index}: We have Ford ${vehicle}' on the lot!`);
          } else {
            console.log(`${index}: We have Ford ${vehicle}s on the lot!`);
          }
        })

    
    //Map Method
    console.log("! - Map Method - !");
      // - The 'map' method can be used to return a different array.
        // - Therefore, the map function must be saved in a variable.
      // - This method also takes in one argument which is a callback function.

        const users = [
          {id: 1, name: "Cam"},
          {id: 2, name: "Shelby"},
          {id: 3, name: "Tex"}
        ];

        console.log("users = ",users);

        const names = users.map(function(user, index){
          return user.name;
        })
        console.log("users.map return - ", names);

    //For In Loop
    console.log(" - For In Loop - ");
      
    // - The For/In loop is commonly used with objects.
    // - It allows us to access the keys and values within the object.
    // - The syntax begins like a for loop
      // - A variable is then declared which will represent the keys in the object.
      // - Next, we use the 'in' keyword to instruct which object to look in.
      // - Finally, we build the code block of instructions.
      console.log(" - Accessing the object keys - ");

        const user = {
          firstName: "Cam",
          lastName: "Gottschall",
          age: 28
        }

        for(let x in user) {
          console.log("console.log(x) return - ", x);
        }

    // - To access the values, the bracket syntax can be used.
      console.log(" - Accessing the object values - ");

        for(let x in user) {
          console.log("console.log(`${user[x]}`) return - ", `${user[x]}`);
        }



/* ARRAYS AND ARRAY METHODS */

  //Arrays
  console.log("! - Variable Definitions - !");
    // - There are a couple of different ways to create a new arrays.
      // - The array method and 'new' keyword.
      // - Creating a variable with an array value.
    // - It is important to remember that counting indexes in an array will always start with 0 as the first spot.
    

    //Storing Array In a Variable
      const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const moreNumbers = [10, 11, 12, 13, 14, 15, 16, 17];
      console.log("numbers - ", numbers); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
      console.log("moreNumbers - ", moreNumbers); // -> [10, 11, 12, 13, 14, 15, 16, 17]
  
    //Array Method & new Keyword
      const cars = new Array("Ford", "Chevy", "Dodge", "Tesla", "General Motors");
      console.log("cars - ", cars); // -> ["Ford", "Chevy", "Dodge", "Tesla", "General Motors"]

    //Multiple Data Types
      const mixedData = [true, "hello", 9, [1, 2, 3, 4], undefined, null, new Date()];
      console.log("mixedData - ", mixedData);

    let val;
    console.log("val - ", val); // -> undefined

  //Accessing Data
  console.log("! - Accessing Data - !");
    // - Each index of an array can be accessed individually using bracket syntax.
    // - To access a certain index, that index can be placed in square brackets after the variable name.
 
    val = mixedData[1];
    console.log("Accessing mixedData[1] return - ", val); // -> "hello"

    val = mixedData[2];
    console.log("Accessing mixedData[2] return - ", val); // -> 9

    // - You can also replace items in an array using this same syntax.
      // - This is achieved by reassigning that index a new value just like a variable.

    numbers[9] = 900;
    console.log("replacing numbers[9] return - ", numbers);

  

  //Array Methods
  console.log("! - Array Methods - !");
    // - Data within arrays and about arrays can be manipulated using array methods.

    //.length
      // - Like with strings, the length of an array can be returned by accesing the length property
      val = numbers.length;
      console.log("numbers.length return - ", val); // -> 10

    //.isArray()
      // - The 'isArray' method checks to see whether the variable is an array or not.
      // - It will return a boolean (either true or false).
      // - It is passed one argument that is a variable
      val = Array.isArray(cars);
      console.log("isArray(cars) return - ", val); // -> true

    //.indexOf()
      // - The indexOf method can scan an array and return the index of the value passed in.
      // - This will return the index not the value of that index
      // - If the value does not exist, it will return -1
      val = cars.indexOf('Chevy');
      console.log("indexOf(\"Chevy\") return - ", val); // -> 1

  //Array Mutation Methods
    console.log("! - Array Mutation Methods - !");

    //.push()
      // - The push method allows values to be added to the end of an array.
      cars.push("BMW");
      console.log("cars.push(\"BMW\") return - ", cars); // -> ["Ford", "Chevy", "Dodge", "Tesla", "General Motors", "BMW"]

    //.unshift()
      // - The unshift method allows values to be added to the beginning of an array.
      cars.unshift("Honda");
      console.log("cars.unshift(\"Honda\") return - ", cars); // -> ["Honda", "Ford", "Chevy", "Dodge", "Tesla", "General Motors", "BMW"]
    
    //.pop()
      // - The pop method allows a value to removed from the end of an array.
      cars.pop();
      console.log("cars.pop() return - ", cars); // -> ["Honda", "Ford", "Chevy", "Dodge", "Tesla", "General Motors"]

    //.shift()
      // - The shift method allows a value to be removed from the front of an array.
      cars.shift();
      console.log("cars.shift() return - ", cars);

    //.splice()
      // - The splice method allows for the removal of one or more values from an array.
      // - This method takes in 2 parameters.
        // - The index you'd like to begin the cut at.
        // - The number of values that you would like to remove from that array.
      // - The first parameter will be included in the cut and the second will not.
      cars.splice(3, 2);
      console.log("cars.splice(3, 2) return - ", cars); // -> ["Ford", "Chevy", "Dodge"]

    //.reverse()
      // - The reverse method reverses values in the array so it reads backwards.
      cars.reverse();
      console.log("cars.reverse() return - ", cars);
    
    //.concat()
      // - The concat method allows us to concatenate two arrays together.
      // - The concat method takes in one argument which is another array.

      val = numbers.concat(moreNumbers);
      console.log("numbers.concat(moreNumbers) return - ", val);  // -> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

    //.sort()
      // - The sort method allows for the ordering of values in an array based on alpha or numeric order. 
      // - This function can take in one argument which is known as a compare function.
          // - If no callback is passed in, each value in the array is converted to a string and sorted.
          // - This would not work for numbers as they would then be sorted by the first number.
          // - This means that 111 would come before 2.
      // - For numbers, the compare function can be used to assist with sorting
        // - This can be achieved by simply subtracting b from a (a - b);

      //sorting strings
      val = cars.sort();
      console.log("cars.sort() return - ", val);

      //sorting numbers
      val = numbers.sort(function(a, b){
        return a - b
      });
      console.log("numerical sort return - ", numbers);

      //reverse sort
      val = numbers.sort(function(a, b) {
        return b - a;
      })
      console.log("reverse numerical sort return - ", numbers);

    //.find()
      // - The find method allows us to find the first instance of a value that meets the conditional statement.
      // - The find method can take in one argument which is a simple function.

      function over15(number) {
        return number > 15;
      }

      val = moreNumbers.find(over15);
      console.log("moreNumbers.find(over15) return - ", val);

      
      






    

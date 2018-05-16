/* LOCAL/SESSION STORAGE */

  // - Local storage allows us to save items (key/value pairs) that persist through multiple sessions
    // - Doing so allows the application to be closed and reopened without loss of data
    // - The data will remain until the data is removed manually or through the application.
  // - The localStorage API object can be found within the window object.
    // - It contains a number of methods that can be used to manipulate items stored
  // - Any value that is to be saved must be a string.
    // - Any arrays or numbers must be converted into a string first.
  // - A value can be converted into a string using the json.stringify() method.
  // - A string can be converted back using the json.parse() method.
  // - The session storage API is nearly the same but will not retain data when the application is closed.
  // - The data in the storage can be accessed in the developer tools (f12) under the application tab.
    // - Local storage can be found under the local storagee tab
    // - Session storage can be found under the session storage tab.
  
  


  //Set Local Storage
    //setItem() Method
      // - The setItem() method can be used to save data in the local storage.
        // - It is a method of the local storage object and can be accessed using dot syntax.
      // - The method takes in two arguments which are both strings.
        // - A key name and a value.

        localStorage.setItem('name', 'Cam');
        localStorage.setItem('age', '28');


  //Set Session Storage
    //setItem() Method
      // - The setItem() method can be used to save data in the session storage as well.
        // - It is a method of the session storage object and can be accessed using dot syntax.
      // - The method takes in two arguments which are both strings.
        // - A key name and a value.
      // - Once the application is closed (session ended), these items will dissapear.

        sessionStorage.setItem('name', 'Shelby');
        sessionStorage.setItem('age', '27');
    

  //Remove Item From Local Storage
    //removeItem() Method
      // - The removeItem() method can be used to remove a key/value pair from the local storage.
        // - It is a method of the local storage object and can be accessed using dot syntax.
      // - This method takes in one argument which is a string.
        // - This argument is the key name of the pair you'd like removed.
      
        localStorage.removeItem('age');
  
  //Remove Item From Session Storage
    //removeItem() Method
      // - The removeItem() method can be used to remove a key/value pair from the session storage.
        // - It is a method of the session storage object and can be accessed using dot syntax.
      // - This method takes in one argument which is a string.
        // - This argument is the key name of the pair you'd like removed.
      
        sessionStorage.removeItem('age');

  //Retrieving Item From Local Storage
    //getItem() Method
      // - A value can be retrieved from the local storage using the getItem() method.
        // - It is a method of the local storage object and can be accessed using dot syntax.
      // - This method takes in one argument which is a string.
        // - This argument should be the key name of the value you'd like.
      // - If the keyt name does not exist, a value of null is returned.
        
        const localName = localStorage.getItem('name');
        console.log("localStorage Name - ", localName); // -> Cam

        const localAge = localStorage.getItem('age');
        console.log("localStorage Age - ", localAge); // -> null

  //Retrieving Item From Session Storage
    //getItem() Method
      // - A value can be retrieved from the session storage using the getItem() method.
        // - It is a method of the session storage object and can be accessed using dot syntax.
      // - This method takes in one argument which is a string.
        // - This argument should be the key name of the value you'd like.
      // - If the keyt name does not exist, a value of null is returned.
        
        const sessionName = sessionStorage.getItem('name');
        console.log("sessionStorage Name - ", sessionName); // -> Cam

        const sessionAge = sessionStorage.getItem('age');
        console.log("sessionStorage Age - ", sessionAge); // -> null

  //Clearing All Local Storage
    //clear() Method
      // - The clear() method allows us to remove all items from local storage.
        // - It is a method of the local storage object and can be accessed using dot syntax.
      // - It does not take in any arguments

        // localStorage.clear();
        console.log("localStorage.clear() Name - ", localName); // -> null

  //Clearing All Session Storage
    //clear() Method
      // - The clear() method allows us to remove all items from session storage.
        // - It is a method of the session storage object and can be accessed using dot syntax.
      // - It does not take in any arguments

        //localStorage.clear();
        //console.log("sessionStorage.clear() Name - ", sessionName); // -> null
    
  //Adding Event Handlers
    // - Event handlers can be added to the elements of the DOM whiuch can be used to save items to a local storage.\

        document.querySelector('form').addEventListener('submit', function(e){
          e.preventDefault();
          
          console.log('Event Fired!');
        })

    // - A value of an input can also be saved in a variable so that it can be accessed later to be saved to storage.
        document.querySelector('form').addEventListener('submit', function(e){
          e.preventDefault();
          
          const value = document.getElementById('task').value;
          console.log("value - ", value);

        })

    // - The value can then be saved to local or session storage using the setItem() method.
        // document.querySelector('form').addEventListener('submit', function(e){
        //   e.preventDefault();
        //   value = document.getElementById('task').value;
        //   localStorage.setItem('task', value)

        // })

    // - In the case of a task list, there is one issue with saving to storage this way.
      // - If we were to save another task, the new value would overwrite the old value.
    // - In order to save multiple values, we must store them in an array.
      // - First, we must save the value of the input an a variable to be accessed later.
      // - Second, we must initialize a variable of with the name of the array.
      // - Third, we must check to see if an array already exists.
        // - If there is not, we can set the value to an empty array.
        // - If there is, we must retreive (getItem) the array so that we can add to it.

        document.querySelector('form').addEventListener('submit', function(e){
          e.preventDefault();

          const task = document.getElementById('task').value;

          // - Initialize a variable
          let tasks;

          // - Determine if array already exists
          if(localStorage.getItem('tasks') === null) {
            // - if no, set tasks to an empty array.
            tasks = [];
          } else {
            // - if yes, set tasks equal the array found in local storage
            // - JSON.parse can be used to convert the string value back into an array or object.
            tasks = JSON.parse(localStorage.getItem('tasks'))
          }
          
          // - We must then push the new value to the array
          tasks.push(task);

          // - Finally, we must reset the local storage to hold the value of the new array.
            // - This can be accomplished with the setItem() method.
          // - The array must first be converted back into a string though.
            // - This can be accomplished with the JSON.stringify() method.
            // - This method takes in one argument that is the array.

          localStorage.setItem('tasks', JSON.stringify(tasks));

        })
      
    // - Since the values in localStorage must be saved as strings, we cannot use array methods on them such as forEach or map.
    // - In order to loop over the array, we must first convert it back into an array.
      // -  This can be accomplished with the JSON.parse() method.
    // - After, the string is converted into an array. We can loop over it with array methods.

        // - Getting the tasks item and converting it into an array with JSON.parse()
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        
        tasks.forEach(function(task){
          console.log(task);
        })

      

  
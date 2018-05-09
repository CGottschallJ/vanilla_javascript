/* EVENT LISTENERS AND EVENT OBJECT */

  // - User Interface can also be created and manipulated using JavaScript.
    // - This can be done using event listeners and the event object.
  // - Doing so is a part of making the page more dynamic.

  //addEventListener() Method
    // - The addEventListener method can be used to add user interaction events to any element on the page.
    // - This method takes in two arguments
      // - The event type as a string
      // - A callback function giving instructions on what should happen when the event occurs.
    
      // document.querySelector('.clear-tasks').addEventListener('click', function(){
      //   console.log('button clicked.');
      // });

    // - In some cases, elements have default behaviors
      // - A link will attempt to direct somewhere else and therefore the page will reset.
    // - These default objects can be avoided by accessing the preventDefault() method within the event object.
      // - This method can be accessed with dot syntax and is a property of the event object.
    //- Therefore, the event object must be passed in to the callback function so it can be accessed.
    //- When the preventDefault() method is invoked at the top of the function, it will instruct the element to ignore defaults.
      // - It will then move onto the instructions (code) you have written.
        
        // document.querySelector('.clear-tasks').addEventListener('click', function(e){
        //   e.preventDefault();
        //   console.log('button clicked.');
        // });

    // - Another way is build the function outside of the addEventListener method and pass it in as the second parameter.
      // - This helps the code be a bit cleaner and allows us to easily find the function because of it's name.
      // - It can now be used on multiple occasions as well.
      // - This is called the event object, and it is automatically passed to event handlers to provide extra features and information.
        // - The handler function, by default, when executed is passed the event object (that was created when the event/action you are interested in happened) as an argument.
      // - When the event happens, the browser creates an event object which is then passed into the handler function.

        // function onClick(e) {
        //   e.preventDefault();
        //   console.log("button clicked.");
        // }

        // document.querySelector(".clear-tasks").addEventListener('click', onClick);


  //Event Object
    // - The event object has properties representing the event that occured.
    // - Like other objects, these properties and methods can be accessed using dot syntax.

      function onClick(e) {


        e.preventDefault();
        let val;
        val = e;
        console.log("Event Object (Created on Button Click) - ", val)

      // - Within the object is a property called 'target' which represents the element clicked.
        // - Information about this element can be accessed using dot syntax.

      //e.target

        val = e.target
        console.log("e.target - ", val);

        val = e.target.classList;
        console.log("e.target.classList - ", val);

        // - We can also manipulate the element by setting the properties within that element object
        
        e.target.innerText = "Tasks Cleared!";

        e.target.classList.remove('black');

        e.target.classList.add('red');

        setTimeout(function() {
          e.target.innerText = "Clear tasks";

          e.target.classList.remove('red');

          e.target.classList.add('black');
        }, 1500);
      
      //e.type
        // - e.type will return the type of event that occuured as a string
        val = e.type;
        console.log("e.type - ", val);
      
      //e.timeStamp
        val = e.timeStamp;
        console.log("e.timeStamp - ", val);
        
      //e.client

        // - e.clientX will return a number of the pixel where the event happened in relation to the left side of the window.
        val = e.clientX;
        console.log("e.clientX - ", val);

        // - e.clientY will return a number of the pixel where the event happened in relation to the top of the window.
        val = e.clientY;
        console.log("e.clientY - ", val);

      //e.offset

        // - e.offsetX will return a number of the pixel where the event happened in relation to the element.
        val = e.offsetX;
        console.log("e.offsetX - ", val);

        // - e.offset will return a number of the pixel where the event happened in relation to the inside of the element.
        val = e.offsetY;
        console.log("e.offsetY - ", val);
        

    


      }

        document.querySelector(".clear-tasks").addEventListener('click', onClick);

      
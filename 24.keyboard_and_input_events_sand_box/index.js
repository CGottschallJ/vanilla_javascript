/* KEYBOARD AND INPUT EVENTS */

  // - Along with the mouse, events can be triggered by the keyboard and input elements within the DOM.
  
        const form = document.querySelector("form");
        const taskInput = document.querySelector("#task");

  //Forms

    //Input element
      // - If an input element has a type = submit attribute, an event listener can be added to define what should happen during that event.
      // - Remeber that e.preventDefault() can be used to instruct element to ignore it's default behaviors.
      // - The first parameter should be a string that reads 'submit'
      
        form.addEventListener('submit', consoleFunction);

        function consoleFunction(e) {
          e.preventDefault();
          console.log(`Event Type - ${e.type}`);
        }

      //.value
        // - When submitting a form it is sometimes necessary to access the value of other elements.
        // - This can be achieved by selecting the element and accessing the value property.

        form.addEventListener('submit', consoleValueFunction);
        function consoleValueFunction(e) {
          e.preventDefault();
          console.log(`Input Value - ${taskInput.value}`);

          // - Clearing input value
          taskInput.value ="";
        }

      //Key Down Event
        // - A key down event works exactly like a mouse down event.
          // - The event will fire whenever a key is pressed down.
        // - Remember that the characters recorded will always be one character behind as the event will not occur again until after another button is pressed.
        // - The first parameter should be a string that reads 'keydown'

        taskInput.addEventListener('keydown', consoleTargetValue);

        function consoleTargetValue(e) {
          console.log(`Event Type - ${e.type}`);
          console.log(e.target.value);
        }

      //Key Up Event
        // - A key up event works exactly like a mouse up event.
          // - The event will fire whenever a key is released.
        // - This event will capture the current character in the value as the character is already a part of the value when the function is invoked.
        // - The first parameter should be a string that reads 'keyup'

        taskInput.addEventListener('keyup', consoleTargetValue);

        function consoleTargetValue(e) {
          console.log(`Event Type - ${e.type}`);
          console.log(e.target.value);
        }

      //Key Press Event
        // - A key up event works exactly like a click event.
          // - The event will fire whenever a key is released.
        // - Remember that the characters recorded will always be one character behind as the event will not occur again until after another button is pressed.
        // - The first parameter should be a string that reads 'keypress'

        taskInput.addEventListener('keypress', consoleTargetValue);

        function consoleTargetValue(e) {
          console.log(`Event Type - ${e.type}`);
          console.log(e.target.value);
        }
    
      //Focus Event
        // - A focus event is invoked when an input is clicked on or tabbed into.
          // - This could be clicking a sumbit button or entering a form input.
        // - The first parameter should be a string that reads 'focus'

        taskInput.addEventListener('focus', consoleEventType);

        function consoleEventType(e){

          console.log(`Event Type - ${e.type}`)
        }

      //Blur Event
        // - A blur event is invoked when an input is clicked out of or tabbed out of
        // - The first parameter should be a string that reads 'blur'

        taskInput.addEventListener('blur', consoleEventType);

        function consoleEventType(e){

          console.log(`Event Type - ${e.type}`)
        }
      
      //Cut Event
        // - A cut event is invoked when text is cut from an input.
          // - This can be accomplished with a right click or cmd + x
        // - The first parameter should be a string that reads 'cut'

        taskInput.addEventListener('cut', consoleEventType);

        function consoleEventType(e){

          console.log(`Event Type - ${e.type}`)
        }

      //Paste Event 

        // - A paste event is invoked when text is pasted into an input.
          // - This can be accomplished with a right click or cmd + v
        // - The first parameter should be a string that reads 'paste'

        taskInput.addEventListener('paste', consoleEventType);

        function consoleEventType(e){

          console.log(`Event Type - ${e.type}`)
        }

      //Input Event
        // - An input event is invoked when any event occurs with the selected input
          // - This includes Focus, Blur, Cut, Paste, Keypress, etc.
        // - The first parameter should be a string that reads 'input'

        // taskInput.addEventListener('input', consoleEventType);

        // function consoleEventType(e){

        //   console.log(`Event Type - ${e.type}`)
        // }
        
      //Change Event
        // - A change event is invoked when a change occurs to the selected element.
          // - This could be a new character being added or the value of a radio or select list is changed.
        // - The first parameter should be a string that reads 'change'
        // - The event will not invoke until the input has been blurred
          // - This can be achieved by clicking out of the input or pressing the tab key.

        taskInput.addEventListener('change', consoleTargetValue)

        function consoleTargetValue(e) {
          console.log(`Event Type - ${e.type}`);
          console.log(e.target.value);
        }

      
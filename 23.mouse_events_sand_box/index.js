/* MOUSE EVENTS */

  // - The 'click' event is not the only event type that can be triggered using a mouse.
  // - The mouse can be utilized in multiple ways for different needs.

        const clearButton = document.querySelector(".clear-tasks");
        const entireListCard = document.querySelector(".card");
        const heading = document.querySelector("h5");

  //Click Event
    // - The event type of click is triggered when the mouse is clicked one time.
    // - The code withing the block will then be executed.

        clearButton.addEventListener('click', consoleFunction);

        function consoleFunction(e) {
          e.preventDefault();
          console.log(`Event Type - ${e.type}`);
        }


  //Double Click

    // - The event type of double click is triggered when the mouse is clicked two times.
      // - The code withing the block will then be executed.
    // - The argument should be passed in as the first parameter and spelled 'dblclick'

        clearButton.addEventListener('dblclick', consoleFunction);
            
        function consoleFunction(e) {
          e.preventDefault();
          console.log(`Event Type - ${e.type}`);
        }

  //Mouse Down Event
    // - The mouse down event is more specific then the click events
      // - This mouse event is triggered specifically when the mouse is clicked down. 
      // - The code withing the block will then be executed.
    // - The argument should be passed in as the first parameter and spelled 'mousedown'

        clearButton.addEventListener('mousedown', consoleFunction);
                
        function consoleFunction(e) {
          e.preventDefault();
          console.log(`Event Type - ${e.type}`);
        } 

  //Mouse Up Event
    // - The mouse up event is more specific then the click events
      // - This mouse event is triggered specifically when the mouse is released. 
      // - The code withing the block will then be executed.
    // - The argument should be passed in as the first parameter and spelled 'mouseup'

        clearButton.addEventListener('mouseup', consoleFunction);
                    
        function consoleFunction(e) {
          e.preventDefault();
          console.log(`Event Type - ${e.type}`);
        }

  //Mouse Enter Event 
    // - The mouse enter event is triggered when the mouse or cursor enters the selected element
      // - This event type ignores other elements within that element and will only trigger one time upon entering the selected element
    // - The argument should be passed in as the first parameter and spelled 'mouseenter'
      
        entireListCard.addEventListener('mouseenter', consoleFunction);

        function consoleFunction(e) {
          e.preventDefault();
          console.log(`Event Type - ${e.type}`);
        }

  //Mouse Leave Event 
    // - The mouse leave event is triggered when the mouse or cursor leaves the selected element
      // - This event type ignores other elements within that element and will only trigger one time upon leaving the selected element
    // - The argument should be passed in as the first parameter and spelled 'mouseleave'
      
        entireListCard.addEventListener('mouseleave', consoleFunction);

        function consoleFunction(e) {
          e.preventDefault();
          console.log(`Event Type - ${e.type}`);
        }

  //Mouse Over Event
    // - The mouse over event is triggered when the mouse or cursor enters the selected element OR other elements within the selected element.
      // - This event type DOES NOT ignore other elements within that element and will be triggered one time upon entering any element within the selected element including the selected element.
    // - The argument should be passed in as the first parameter and spelled 'mouseover'
      
        entireListCard.addEventListener('mouseover', consoleFunction);

        function consoleFunction(e) {
          e.preventDefault();
          console.log(`Event Type - ${e.type}`);
        }

  //Mouse Out Event
    // - The mouse out event is triggered when the mouse or cursor exits the selected element OR other elements within the selected element.
      // - This event type DOES NOT ignore other elements within that element and will be triggered one time upon leaving any element within the selected element including the selected element.
    // - The argument should be passed in as the first parameter and spelled 'mouseout'
      
        entireListCard.addEventListener('mouseout', consoleFunction);

        function consoleFunction(e) {
          e.preventDefault();
          console.log(`Event Type - ${e.type}`);
        }

  //Mouse Move Event
    // - The Mouse move event triggers whenenever the mouse moves.
    // - This is commonly used in games to see where a cursor is.
    // - This event type DOES NOT ignore the other elements within the selected element.
      // - The X and Y will reset relative the to the element it is within upon entering that element.
        entireListCard.addEventListener('mousemove', changeBackground);

        function changeBackground(e) {
          heading.innerText = `MouseX: ${e.offsetX} X MouseY: ${e.offsetY}`;
          document.body.style.backgroundColor = `rgb(140, ${e.offsetX}, ${e.offsetY})`;
          
        }
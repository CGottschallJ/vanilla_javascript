/* DOM SELECTORS */

  // - DOM Selectors can be used to more easily select individual elements in JavaScript.
    // - This can be achieved using a number pre-built methods depending on what you are trying to achieve.
  // - Selecting an element from the DOM will allow us to access it's attributes, properties, and other data.
  // - From there we can manipulate or use the data associated with the selected element.

  let val; 

  //Single Element Selectors
    // - Single Element Selectors can be used to selct a single element from the DOM.
    // - There are numerous possible methods that can be used to select an element.
      // - Elements can be selected by class name, id, etc.
    // - In the case that multiple elements meet the requirement of the used method, only the first will be returned.

    //getElementById() Method
      // - The method takes in a string of the id attribute you'd like selected.
        val = document.getElementById("task-title");
        console.log("document.getElementById('task-title') - ", val);

      // - Once the element is selected, it is possible to access properties of that element using the dot syntax.

        val = document.getElementById('task-title').innerText
        console.log("document.getElementById('task-title').innerText - ", val); // -> Tasks

        val = document.getElementById('task-title').id
        console.log("document.getElementById('task-title').id - ", val); // -> Tasks

      // - Once the element is selected, the CSS styling can be manipulated using dot syntax and 'style' keyword.
        // - The 'style' keyword can be followed by any CSS attribute.
        // - Anything that can be changed in CSS can be manipulated in Javascript as well.
        // - This should not be used to style the entire page. It is used for dynamic events
          // - on a click, when the element is hovered over, etc.

        document.getElementById("task-title").style.background = 'pink';
        document.getElementById("task-title").style.padding = '10px';

      // - Once the element is selected, the content within can be changed as well.
        // - This can be accomplished by accessing different properties of the element.

        // - Text within an element can be changed by setting the textContent property of the element.

        document.getElementById("task-title").textContent = 'Javascript changed this title';

        // - Text within an element can also be changed by setting the innerText property of the element.

        document.getElementById("task-title").innerText = 'Javascript changed this again';

        // - The HTML within an element can be manipulated by setting the innerHTML property
          // - This HTML must be in a sting format to be read properly.

        document.getElementById("task-title").innerHTML = '<h6>Smaller Header</h6>';

        // - As a side note, rather than typing document.getElementById('') over and over again.
          // - We can save that value in a shorter variable which can then be used with dot syntax.

        const taskTitle = document.getElementById('task-title');

        taskTitle.style.background = 'green';
        taskTitle.style.color = 'white';
        taskTitle.innerHTML = '<h5>Changing Task Title</h5>';

    // querySelector() Method
      // - The querySelector() method is much more powerful and is the standard for retreiving HTML elements.
        // - It is much more powerful because any CSS selector can be passed in rather than specifying which one we plan to use in the method name.
        // - A '#' can be used to select an ID, a '.' for class names, and the name of the tag for tag names.
      
      // - Selecting by ID.
        document.querySelector("#task").value = "Enter a new task...";

      // - Selecting by Class
        document.querySelector('.btn').style.background = "blue";

      // - Selecting by Tag Name
        document.querySelector('li').style.color = "red";
      
      // - Remember, when selecting by class or tag name, only the first instance will be selected with this method.
        // - Others can be selected instead using CSS pseudo classes.

        document.querySelector('li:last-child').style.color = "blue";

        document.querySelector('li:nth-child(3)').style.color = "orange";

        document.querySelector('li:nth-child(4)').textContent = "Fourth Item";

        // - Remember that this does not work with :nth-child(even) or (odd) as this selector is only a single element selector.
          // - This too will only select the first element in the HTML collection.


  //Multiple Element Selectors
    // - Multiple Element Selectors can be used to select numerous elements from the DOM.
    // - These methods will return an HTML collection or a node collection depending on the method used.
      // - Remember that collections must be converted into arrays to use array methods.
    // - There are a numerous methods to acheive this as well
      // - Multiple elements can be selected by class name, tag name, etc.

    //getElementsByClassName() Method
      // - The getElementsByClassName method can be used to retrieve am HTML collection of elements by their class attribute.
      // - These will be returned in an HTML collection which will store each element in an individual index.
        // - Though these are stored with index, array methods cannot be used on them.
        // - Each index contains numerous properties pertaining to just that element.
    
        const listItems = document.getElementsByClassName('collection-item');
        console.log(listItems);
      
      // - Each index of the HTML collection can be accessed using the bracket syntax.

        console.log("HTML collection second index - ", listItems[1]);

        // or...

        const firstItem = document.getElementsByClassName('collection-item')[0];
        console.log("HTML collection first index - ", firstItem);

      // - Elements can also be styled by selecting the elements with this syntax as well.

        listItems[0].style.background = 'yellow';
      
      // - Remember that styling can only be applied to one element at a time unless the HTML collection is converted into an array.

        const itemsArray = Array.from(listItems);

        itemsArray.forEach(function(item) {
          item.style.background = 'lightgray';
        });


      // - It is also possible to access an individual or group of elements within a another element without selecting all elements globally.
        // - This can be done by selecting the parent element and, then using dot syntax, selecting the class you'd like.

        const buttons = document.getElementsByClassName('btn');

        const firstButton = document.querySelector('.card-content').getElementsByClassName('btn');

        console.log("All buttons on page - ", buttons);

        console.log("First button on page - ", firstButton);

  //getElementsByTagName() Method

    // - Elements can also be retrieved by the tag name of the element (i.e. div, form, ul, etc).
    // - This too will return an HTML collection of every tag on the page with that tag name.
    // - The same rules apply as the getElementsByClass method
      // - Though these are stored with index, array methods cannot be used on them.
      // - Each index contains numerous properties pertaining to just that element.

        const pageInputs = document.getElementsByTagName('input');

        console.log("document.getElementsByTagName('input') - ", pageInputs);

    // - Remember that we must convert an HTML collection into an array using Array.from() in order to mutate or style all tags at the same time.
    
    // - It is possible to select a single element rather than all global elements by selecting the parent element and then the child element.
      
        const taskInput = document.querySelector('#task-form').getElementsByTagName('input');

        console.log("document.querySelector('#task-form').getElementsByTagName('input') - ", taskInput);
    
    // - This can be used to style a single element as well.
      // - Remember to specify which index using bracket syntax.
        taskInput[0].style.color = 'purple';
  
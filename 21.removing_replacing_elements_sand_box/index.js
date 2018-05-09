/* REMOVING AND REPLACING ELEMENTS AND PROPERTIES */

  // - Elements from the DOM can be replaced and removed with the help of JavaScript.
  // - We can replace elements, properties, attributes, and classes.

  //replaceChild() Method
    // - The replaceChild method can be accessed using dot syntax following a selected parent element.

    // - First, however, a new element must be created to replace it.
      // - Creating new <h2> element
        const newHeading = document.createElement('h2');

      // - Setting a value to the id property of the new element
        newHeading.id = 'task-title';

      // - Creating a textNode and appending it to the new <h2> element
        newHeading.appendChild(document.createTextNode("Task List Title"));

      // - Saving the old heading element in a variable to be accessed later.
        // - It will be used in the replacehild() method.
        const oldHeading = document.querySelector('#task-title');
      
      // - Saving the Parent Element where the changes will be made to be accessed later
        const parentElement = document.querySelector('.card-action');

    // - The replaceChild method can then be invoked.
      // - This method takes in two arguments.
      // - First is the variable of the new element and the second is what that element will be replacing.

        parentElement.replaceChild(newHeading, oldHeading);
    
  //remove() and removeChild() Methods
    // - Just as elements can be created and replaced, they can also be removed with the remove() method.

        const allListItems = document.querySelectorAll('li');
        const wholeList = document.querySelector('ul');

    // - The remove() method can be accessed using dot syntax as it is a property of the element.
      // - Remember that individual list items can be accessed using bracket syntax
        
        allListItems[0].remove();

    // - An element can also be removed from the parent element using the removeChild() method
      // - This method can be accessed using dot syntax as it, too, is a property of elements in the DOM.
      // - This method takes in one parameter which is the element that you would like to remove.

        wholeList.removeChild(allListItems[1]);

  //Classes and Attributes
        const firstListItem = document.querySelector("li:first-child");
        const deleteLink = firstListItem.children[0];
      
        let val;

    // - Classes and Attributes can also be set, added, and removed.
      // - Classes can be edited or mutated by accessing and setting the className property of an element.
      
      //className Property
        // - The className property will return all classes of the element in one string as it appears in HTML.

        val = deleteLink.className;
        console.log("deleteLink.className - ", val);

      //classList Property
        // - The classList property will return all classes of an element in a DOMTokenList.
        // - A DOMTokenList will return each className in an index, much like an array.
        
        val = deleteLink.classList;
        console.log("deleteLink.classList - ", val);

        // - They can be accessed individually using the bracket syntax like an array.
        
        val = deleteLink.classList[0];
        console.log("deleteLink.classList[0] - ", val);

      //add() Method
        // - The add() method is a property of the DOMTokenList and can be accessed using dot syntax
        // - The method takes in one argument-- a string of what class you'd like added to the element.
        
        val = deleteLink.classList;
        deleteLink.classList.add("test-class");
        console.log("deleteLink.classList.add(\"test-class\") - ", val);

      //remove() Method
        // - The remove() method is a property of the DOMTokenList and can be accessed using dot syntax
        // - The method takes in one argument-- a string of what class you'd like removed from the element.

        deleteLink.classList.remove("test-class");
        console.log("deleteLink.classList.remove(\"test-class\") - ", val);


      console.log(deleteLink);

    
    // - Attributes 
      // - Attributes can be edited, added, set, removed, and verified using methods of the selected DOM element.

      //getAttribute() Method
        // - The getAttribute method will return a string contianing the value of the attribute name passed in.
        // - It takes in one parameter which is a string of the attribute you'd like the value of.

        val = deleteLink.getAttribute('href');
        console.log("deleteLink.getAttribute('href') - ", val);

      //setAttribute() Method
        // - The setAttribute method allows us to add or change attributes of an element.
        // - It takes in two arguments
          // - The name of the attribute as a string
          // - And the value of the attribute as a string.

        deleteLink.setAttribute('href', 'http://www.test-link.com');
        console.log("deleteLink.setAttribute('href', 'http://www.test-link.com') - ", deleteLink);

      //hasAttribute() Method
        // - We can verify whether or not an element has a certain attribute using the hasAttribute Method.
        // - It takes in one argument which is a string of the attribute name.
        // - It will return either true if it does exist or false if it does not.

        val = deleteLink.hasAttribute("href");
        console.log("deleteLink.hasAttribute(\"href\") - ", val);

      //removeAttribute() Method
        // - We can remove an attribute using the removeAttribute method.
        // - Is a method of each element in the DOM and can be accessed using dot syntax.
        // - It takes in one argument which is a string containing the attribute name you'd like removed.

        deleteLink.removeAttribute("href");
        console.log("deleteLink.removeAttribute(\"href\") - ", deleteLink);
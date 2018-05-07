/* Creating Elements */

  //createElement() Method
    // - Elements can be added to a page using Javascript using the createElement() method.
    // - The createElement() method is a property of the document object.
      // - It can be accessed with the dot syntax following the document keyword.
    // - The method takes in one argument which is a string of the tag type.
    // - The element should be saved in a variable so it can be referenced later.

        const newListItem = document.createElement('li');

        console.log('newListItem - ', newListItem);

  //Adding Classes
    // - Classes can be added to these elements by setting a value to the className property of the selected element.

        newListItem.className = "collection-item";

        console.log('newListItem.className - ', newListItem);

  //Adding Id
    // - An id can be added to an element by setting a value to the id property of the selected element.

        newListItem.id = "test-id";

        console.log('newListItem.id - ', newListItem);

  //setAttribute() Method
    // - Attributes can be added to the elements using the setAttribute() method
      // - This method takes in two arguments
        // - The name of the attribute as a string
        // - The value of that attribute as a string

        newListItem.setAttribute("title", "test-title");

        console.log('newListItem.setAttribute("title", "test-title") - ', newListItem);

  //createTextNode() Method
    // - There are two ways to add text to an element using the createTextNode() method.
      // - A string can be saved to a variable to be accessed later.
        
        const newTextNode = "String saved to variable";

        console.log("newTextNode - ", newTextNode);

      // - The createTextNode() method can be used which takes in a string as an argument.

        console.log(
          "document.createTextNode() Method - ",
          document.createTextNode("String created using createTextNode Method")
        );

  //appendChild() Method
    // - The appendChild() method can be used to add (append) nodes to an element.
    // - This method takes in one argument which is another method creating a node.
      // - For Example, the createTextNode() method.

        //newListItem.appendChild(document.createTextNode(newTextNode));

        //console.log("newListItem.appendChild(newTextNode) - ", newListItem);
    
      // - A string can be passed in as well.
        
        newListItem.appendChild(document.createTextNode("New List Item"));

        console.log("newListItem.appendChild(document.createTextNode(\"New List Item\")) - ", newListItem);

    // - Finally this method can be used to add the newListItem to the ul tag after it has been selected.

        document.querySelector('ul.collection').appendChild(newListItem);

  //Example
    // - Creating <a> tag
        const link = document.createElement('a');

    // - Setting class of element to match others for styling
        link.className = "delete-item secondary-content";

    // - Setting innerHTML of the new element as an icon matching the others
        link.innerHTML = "<i class='fa fa-remove'></i>";

    // - Appending the new Element to the newListItem.
        newListItem.appendChild(link);

  //Array forEach() Example

    // - Creating an array of to do items to loop over.
        const toDoList = ['Walk the Dog', 'Get the mail', 'Clean the House', 'Do the Dishes'];

    // - Creating a forEach loop over the toDoList array.
        toDoList.forEach(function(listItem){

          // - Creating an <li> for each index of the array
          const toDoItem = document.createElement('li');

          // - Setting the class property of each element to match the others for styling
          toDoItem.className = "collection-item";

          // - Appending a textNode as a child of the new element.
            // - Each value will contain the text from that index.
          toDoItem.appendChild(document.createTextNode(`${listItem}`));

          // - Appending each <li> to the collection
          document.querySelector('ul.collection').appendChild(toDoItem);

          // - Creating an <a> tag for each index that will act as a delete link
          const toDoLink = document.createElement('a');

          // - Setting the class property of the <a> tag to match the others
          toDoLink.className = "delete-item secondary-content";

          // - Setting the innerHTML property of the <a> tag to an icon matching the others
          toDoLink.innerHTML = "<i class='fa fa-remove'></i>";

          // - Appending the toDoLink to the toDoItem.
          toDoItem.appendChild(toDoLink);

        })




        
    
    
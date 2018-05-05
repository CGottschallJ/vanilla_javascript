/* DOM FAMILY TREE */

  // - The DOM consists of nodes (or elements) that make up a tree that resembles a family tree.
    // - This allows us to refer to the nodes as parents, children, siblings, grandparents, etc.
    // - A parent is a an element that contains other elements within it.
    // - A child component is an element or node that is directly within another element.
    // - Siblings are two components that live within the same element.
    // - A grandparent is an element that is two levels above the element being referenced.
    // - A grandchild is an element that is two levels below the element being referenced.

        let val; 

        const list = document.querySelector('ul.collection');
        const listItem = document.querySelector('li.collection-item:first-child');

        console.log(list);
        console.log(listItem);

  // Properties

    // - Each node in the DOM contains properties identical to one another.
      // - Some of these properties can be used to access elements related to the selected element.
      // - Accessing these properties can be accomplished using the dot syntax.
    
    // childNodes Property
      // - The .childNodes property can be used to return a node list of all elements within the selected element.
        val = list.childNodes;
        console.log("list.childNodes - ", val);

      // - Notice that every other index will read 'text'.
      // - These represent the line breaks between the items which are technically considered a text node.
      
      // - Each node also has properties that can be accessed using dot syntax.
      // - nodeName will return of either the element type or the tag name.
        val = list.childNodes[0].nodeName;
        console.log("list.childNodes[0].nodeName - ", val);

        val = list.childNodes[1].nodeName;
        console.log("list.childNodes[1].nodeName - ", val);

      // - The nodeType property will return a number.
      // - Each number represents a different node type, like a code.
        // - 1 - Element
        // - 2 - Attribute
        // - 3 - Text node
        // - 8 - Comment
        // - 9 - Document itself
        // - 10 - Doctype
      // Remember, with the childNodes property, each line break is considered to be a text node.

        val = list.childNodes[0].nodeType;
        console.log("list.childNodes[0].nodeType - ", val); // -> 3

        val = list.childNodes[1].nodeType;
        console.log("list.childNodes[1].nodeType - ", val); // - 1
      
    //children Property
      // - We can use the children property to avoid the text nodes instead.
      // - This will return an HTML collection containing only the elements.

        val = list.children;
        console.log("list.children - ", val);

      // - Individual elements can be accessed using bracket syntax.
        val = list.children[0];
        console.log("list.children[0] - ", val)

      // - Styling can then be applied individually.

        list.children[0].style.background = 'lightblue';
    
    //firstChild Property


    //lastChild Property

    //Accessing Grand Children
      // - An elements grand children can be accessed by stacking the children property with dot syntax
        // - This will return an HTML collection of the grandchild elements.
      // - Remember that you must specify the child using bracket syntax before you can access the grandchildren.
      
        val = list.children[0].children;
        console.log("list.children[0].children - ", val);

      // - We can then access an individual element from there using bracket syntax again.

        val = list.children[0].children[0];
        console.log("list.children[0].children[0] - ", val);

      // - We can also use this property to style.

      list.children[0].children[0].style.color = 'yellow';

  //


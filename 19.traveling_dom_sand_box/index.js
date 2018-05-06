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

        console.log("list - ", list);
        console.log("listItem - ", listItem);

  //Children Properties
  console.log("! - Children Property Section - !");

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
      // - The first child property can be used to access the first child node of the element.

        val = list.firstChild;
        console.log("list.firstChild - ", val);

      // - Since this returns a nodeList, text nodes will be included.
      // - To avoid this issue, the firstElementChild can be used.

    //firstElementChild Property
      // - The firstElementChild Property can be used to access the first element within the selected element.
      // - This will return an HTML collection which does not include text nodes, only elements.

        val = list.firstElementChild;
        console.log("list.firstElementChild - ", val);

    //lastChild Property
      // - The last child property can be used to access the last child node of the element.

        val = list.lastChild;
        console.log("list.lastChild - ", val);

      // - Since this returns a nodeList, text nodes will be included.
      // - To avoid this issue, the lastElementChild can be used.

    //lastElementChild Property
      // - The lastElementChild Property can be used to access the last element within the selected element.
      // - This will return an HTML collection which does not include text nodes, only elements.

        val = list.lastElementChild;
        console.log("list.lastElementChild - ", val);

    //childElementCount
      // - Other properties can be used to access information about the children of a selected element.
      // - the childElementCount can be used to return a number of how many child elements a selected element has.

        val = list.childElementCount;
        console.log("list.childElementCount - ", val);


  //Accessing Grand Children
  console.log("! - Grand Children Property Section - !");

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

  //Parent Properties
  console.log("! - Parent Property Section - !");
    // - Just like accessing child elements, we can access parents elements using the dot syntax.

    //parentNode Property
      // - The parent node property allows us to access the parent element of the selected element.
      // - Unlike the childNode property, this property returns an element rather than a nodeList

        val = listItem.parentNode;
        console.log("listItem.parentNode - ", val);

    //parentElement Property
      // - The parentElement property allows us to access the parent element as well.
      // - This property will return a single element rather than a HTML collection.

        val = listItem.parentElement;
        console.log("listItem.parentElement - ", val);
  
  //Accessing Grand Parents
    // - Just like grand children, grand parent elements can be accessed by stacking the parentElement property using dot syntax.
      // - The difference is that we do not have to specify which parent using the bracket syntax.
    // - This will return the element that is two levels above the selected element.

        val = listItem.parentElement.parentElement;
        console.log("listItem.parentElement.parentElement - ", val);
      
  //Sibling Element Properties
    // - Accessing siblings can be accomplished using the dot syntax.
    
    //nextSibling Property
      // - The nextSibling property can be used to access the first node following that element within the same parent element.

        val = listItem.nextSibling;
        console.log("listItem.nextSibling - ", val);

    //nextElementSibling Property
      // - The nextElementSibling property can be used to access the first element following that element within the same parent element.
        
        val = listItem.nextElementSibling;
        console.log("listItem.nextElementSibling - ", val);

      // - This property can also be stacked using dot syntax to access siblings further down the page.

        listItem.nextElementSibling.nextElementSibling.style.background = "lightgreen";

    //previousSibling Property

      // - The previousSibling property can be used to access the first node prior to the selected element within the same parent element.

        val = list.lastElementChild.previousSibling;
        console.log("list.lastElementChild.previousSibling - ", val);

      // - Remember this will return a node which will be a text node if there is a line break in between them.
      

    //previousElementSibling Property
      // - The previousElementSibling property can be used to access the first element prior to the selected element within the same parent element.
          
        val = list.lastElementChild.previousElementSibling;
        console.log("list.lastElementChild.previousElementSibling - ", val);
        list.lastElementChild.previousElementSibling.style.background = 'pink';

      // - This property can also be stacked using dot syntax to access siblings further down the page.

      list.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.style.background = "lightyellow";
    


  
  

  


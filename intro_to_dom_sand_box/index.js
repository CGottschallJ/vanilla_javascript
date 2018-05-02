/* THE DOCUMENT OBJECT MODEL (DOM) */

  // - The Document Object Model is a structured tree/chart of elements created by the browser representing the elements displayed on the page.
    // - The top of the tree is the entire document.
    // - This is followed by the html element (root element) as this is the first element on the page.
    // - The html element of the tree has two child components (siblings) which are the head tag and body tag.
    // - Subsequently, any tags created within either of those elements in the HTML document will stem from its respective node and so on and so on.
  // - JavaScript can be used to manipulate each element.
  // - Each element/node is Object Oriented meaning it has it's own set of properties and methods for each.
    // - Properties and Methods can therefore be added as well.
  // - The document object is a property of the window object.

/* THE DOCUMENT OBJECT */
console.log("! - Document Object Model - !");

  // - The document object is a property of the window object.
    console.log("Window Object - ", window);

  // - There are a number of properties that exist within the document object that can be accessed with 'dot' syntax.
    // - These propertioes are repeated for each of the elements that are loaded into the browser.
    // - https://www.w3schools.com/jsref/dom_obj_document.asp
  

  //Variable Declaration 
  console.log("! - Variable Declarations - !");

      let val;
      console.log("val - ", val);

  //The Document
  console.log("! - The Document - !");

    // - The Document consists of all elements that are rendered in the browser.
      // - This is an exact model of the HTML on the page.

        val = document;
        console.log("document - ", val);

    // - The document.all property will return an array of all elements in the HTML document starting from the top running down.
      // - This will include the class names associated with each as well.

        val = document.all;
        console.log("document.all return - ", val);

    // - Since this list is returned as an array, different elements can be accessed using the bracket syntax.

        val = document.all[0];
        console.log("document.all[0] return - ", val);

        val = document.all[1];
        console.log("document.all[1] return - ", val);
    
  // Document Properties
  console.log("! - Document Properties - !");

    // - The Document object has a number of properties that allow us to access information about the entire model.

      // - Finding the number of elements that are in the doucment with the length property of document.all
      
        val = document.all.length;
        console.log("document.all.length - ", val);

      // - Accesing the head element of the document.

        val = document.head;
        console.log("document.head - ", val); // -> <head>...</head>

      // - Accessing the body element of the document

        val = document.body;
        console.log("document.body - ", val); // -> <body>...</body>

      // - Accessing the DOCTYPE of the document.

        val = document.doctype;
        console.log("document.doctype - ", val); // -> <!DOCTYPE html>

      // - Accessing the domain of the document.

        val = document.domain;
        console.log("document.domain - ", val); // -> 127.0.0.1

      // - Accesing the URL of the document which includes the protocol and the file path.
        
        val = document.URL;
        console.log("document.URL - ", val); // -> http://127.0.0.1:5500/intro_to_dom_sand_box/

      // - Accessing the character set of the document

        val = document.characterSet;
        console.log("document.characterSet - ", val); // -> UTF-8

      // - Accessing the content type of the document

        val = document.contentType;
        console.log("document.contentType - ", val); // -> text/html

  //Selecting Elements w/o Selectors
  console.log("! - Selecting Elements Without Selectors - !");

    // - Though it is much easier to use selectors and not recommended to do it this way, it is important to understand how this works.
    // - Selecting elements works just like CSS where we choose which element(s) we would like to modify.
    // - Each group of elements on the page can be selected using the keywords associated with it
      // - This will return and HTML collection

    // - Different types of elements

      // - 'form' tags (forms)
        val = document.forms;
        console.log("document.forms", val);

      // - 'a' tags (links)
        val = document.links;
        console.log("document.links", val);

      // - 'img' tags (images)
        val = document.images;
        console.log("document.images", val);
      
  //Selecting Individual Elements
  console.log("! - Selecting Individual Elements - !");
    // - Individual elements can be selected from each of the HTML collections using the bracket syntax.
      
      // - Individual 'form' tags
        val = document.forms[0];
        console.log("document.forms - ", val);

      // - Individual 'a' tags
        val = document.links[0];
        console.log("document.links - ", val);

      // - Individual 'img' tags
        val = document.images[0];
        console.log("document.images - ", val);
  
  //Accessing Element Properties
  console.log("! - Accessing Element Properties - !");
    // - As we know, elements have properties that can be accessed using the dot syntax.

      // - Accessing an element ID.
        // - This will return a string of the ID associated with that element
        val = document.forms[0].id;
        console.log("document.forms[0].id - ", val);

      // - Accessing an elements classes.
        // - This will return a string of the classes associated with that element
        val = document.links[0].className;
        console.log("document.links[0].className - ", val);

      // - Accessing an elements list of classes.
        // - This will return a DOMTokenList (collection) of the classes associated with that element
        val = document.links[0].classList;
        console.log("document.links[0].classList - ", val);

      // - Unfotunately, some array methods cannot be used on collections because they are not technically arrays.
        // - In order to convert these collections into arrays, we must use the Array keyword and 'from()' method.

        let links = document.links;
        console.log("links - ", links);
        
        let linksArray = Array.from(links);
        console.log("Array.from(links) - ", linksArray);

      // - Now array methods like forEach() can be used to manipulate or loop the links array.

        linksArray.forEach(function(link){
          console.log("linksArray.forEach - ", link);
        })
    
  //Methods To Access Attributes
  console.log("! - Methods to Access Attributes - !");
    // - Methods can also be used to access information about each element on the DOM.

      // - getAttribute() method takes in an attriubute name that you would like the value of
        // - The value passed in should be a string and will return the value in a string.
        val = document.scripts[0].getAttribute('src');
        console.log("document.script[0].getAttribute('src') - ", val); 
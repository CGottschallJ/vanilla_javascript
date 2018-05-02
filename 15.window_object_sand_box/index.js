/* THE WINDOW OBJECT */

// - The Window Object represents an open window in the browser.
// - The Window object contains a lot of properties that developers commonly used including the Document Object Model.

console.log("Window Object - ", window);

  //Methods
  console.log("! - Window Methods - !")

    //console.log()

      // - The console.log method is used to print information into the console.

        window.console.log("window.console.log('hello') - ", 'hello'); // -> hello

      // - Though the console.log method is a part of the window object, it is not necessary to type that because we are already at the top of the window object.

        console.log("console.log('hello') - ", 'hello'); // -> hello

    //alert()

      // - The alert method can be used to create a pop up box that loads on an event.

        //window.alert("This is an alert box!");
      
      // - Like the console.log method, the alert method does not require the window keyword either.

        //alert("This is an alert box too!");

    //prompt()

      // - The prompt method creates a box with an input that can be used to prompt a question.
      // - The prompt method must be saved as the value of a variable.
      // - When the user completes the prompt, the answer they enter will become the value of the variable.

        // const userAnswer = prompt("What is your favorite color?");
        // console.log("userAnswer = prompt() - ", userAnswer);

    //confirm()

      // - The confirm method creates a pop up box with two answers, OK and cancel.
      // - The syntax of a confirm method works with an if statement.
        // - The if keyword initiates an if statement.
        // - The if statement takes in the confirm method as an argument.
        // - The first code block will run if the user selects 'OK'.
        // - By default nothing will happen on the cancel click.  If you'd like something to happen, an else statement can be added to the end.

        // if(confirm("Are you sure you'd like to delete this?")){
        //   console.log("confirm() response - ", "'OK' selected: Image Deleted");
        // } else {
        //   console.log("confirm() response - ", "'Cancel' selected: Image Not Deleted");
        // }

  // Properties
  console.log("! - Window Properties - !")
    let val;

    //Outer Height
      // - Accessing the outer height property will return the outer height of the window as a number
        // - Outer means that the meausre begins on the outside of the window and the  entire window including the scroll bar and navigation will be included.

        val = window.outerHeight;

        console.log("window.outerHeight - ", val);

    //Outer Width
      // - Accessing the outer width property will return the outer width of the window as a number
        // - Outer means that the meausre begins on the outside of the window and the  entire window including the scroll bar and navigation will be included.

        val = window.outerWidth;

        console.log("window.outerWidth - ", val);

    //Inner Height
      // - Accessing the inner height property will return the inner height of the window as a number
        // - Inner means that the meausre begins on the inside of the window and the   scroll bar and navigation will be exluded.
        // - Only the area where the content is displayed will be included

        val = window.innerHeight;

        console.log("window.innerHeight - ", val);

    //Inner Width
      // - Accessing the outer width property will return the width of the window
        // - Inner means that the meausre begins on the inside of the window and the   scroll bar and navigation will be exluded.
        // - Only the area where the content is displayed will be included

        val = window.innerWidth;

        console.log("window.innerWidth - ", val);

    //ScrollY
      // - Accessing the scrollY (vertical) property will return a number of what pixel is at the top of the inner window.
      // - Remember that these values do not update automatically but only return once when the page is loaded.

        val = window.scrollY;
        console.log("ScrollY return - ", val);

    //ScrollX
      // - Accessing the scrollX (horizontal) property will return a number of what pixel is at the left side of the inner window.
      // - Remember that these values do not update automatically but only return once when the page is loaded.

        val = window.scrollX;
        console.log("ScrollX return - ", val);

      
  // Objects
  console.log("! - Window Objects - !")
    // Loaction Object.
      // - The location object can be used to gather information about the current page.
        // - Some of this information includes the host, host name, href, pathname, port, protocol.

        val = window.location;
        console.log("window.location object - ", val);

        // - setting the value of val to the page host name.
        val = window.location.hostname;
        console.log("window.location.hostname - ", val);

        // - setting the value of val to the port number.
        val = window.location.port
        console.log("window.location.port - ", val);

        // - setting the value of val to the site's href.
        val = window.location.href;
        console.log("window.location.href - ", val);

        // - setting the value of val to the search parameters (query string).
          // - The search parameters are any characters that appear after the '?' following the file path.   
        val = window.location.search;
        console.log("window.location.search - ", val);

      // The href can also be set to a value of our choosing which will redirect the page.
        // window.location.href = 'http://google.com';

      // The reload method inside of the location object can be used to reload the page as well.
        // - Remeber that this should be placed in a function.  If it is left in the global variable then it will reload the page over and over again.

        // window.location.reload();

    // History Object
      // - The History object can be used to access the window or browser history.

      //go() method

        // - The go() method can be used to return the page back to a previous page by passing in -1.  Passing in -2 would take it back two pages.

        //window.history.go(-1);

      //history.length
        // - The history.length property will return as number of the length of the history array.
        val = window.history.length;
        console.log("window.history.length return - ", val);

    //Navigator Object
      // - The navigator object represents and deals with the actual browser itself (i.e. Chrome, FireFox, Explorer), not the window!
      // - Named after Netscape Navigator

      val = window.navigator
      console.log("Navigator Object - ", val);

      // - appName will return the name of the application.
        // - This will always be Netscape unless IE is being used.
      val = window.navigator.appName;
      console.log("window.navigator.appName - ", val);

      // - appVersion will return the version of the browser being used.
      val = window.navigator.appVersion;
      console.log("window.navigator.appVersion - ", val);

      // - userAgent will return the version of the browser being used as well in a slightly different format.
      val = window.navigator.userAgent;
      console.log("window.navigator.userAgent - ", val);

      // - The platform property will return the operating system being used.
      val = window.navigator.platform;
      console.log("window.navigator.platform - ", val);

      // - The vendor property will return the vendor of the browser.
      val = window.navigator.vendor;
      console.log("window.navigator.vendor - ", val);

      // - The language property will return the language the browser is set to
      val = window.navigator.language;
      console.log("window.navigator.language - ", val);




        



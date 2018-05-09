/* EVENT BUBBLING */

        const listItem = document.querySelector('.collection-item');
        const list = document.querySelector('.collection');
        const card = document.querySelector('.card');
        const body = document.querySelector('body');
  
  // - Event Bubbling means that an event that fired on one element will also be fired on the parent elements all of the way up.
      // - In this case, if a click is registered on a listItem, it will also be registered on...
      // - <ul> tag, <div class="card-action">, <div class="card">, etc. until it reaches the top of the tree.
    // - Remember, just because we cannot see all events does not mean that they are not happening.
      // - We can add eventListeners to see, control, and manipulate the event.

        
        // listItem.addEventListener("click", function(e){
        //   console.log(`List Item - ${e.type}`);
        // })

        // list.addEventListener("click", function(e){
        //   console.log(`List - ${e.type}`);
        // })

        // card.addEventListener("click", function(e){
        //   console.log(`Card - ${e.type}`);
        // })

        // body.addEventListener("click", function(e){
        //   console.log(`Body - ${e.type}`);
        // })


/* EVENT DELEGATION */

  // - Event Delegation is almost the opposite of event bubbling.
  // - Involves placing the event listener on the parent element and using logic to select the desired element.


  //Without Delegation
    // - When we do not use event delegation, the click only works on the first element of that class.
      // - This is because querySelector returns a nodeList and only the first index is referenced.
    // - Without delegation, any new elements added to the nodeList will not be recognized either.
      // - Again this is because query selector will only return the first instance that meets that criteria.
  
        const deleteLink = document.querySelector('.delete-item');

        deleteLink.addEventListener("click", consoleFunction);

        function consoleFunction(e) {
          e.preventDefault();
          console.log(deleteLink);
          console.log(`Event Type - ${e.type}`);
        }

  //With Delegation
    // - Involves placing the event listener on the parent element and using logic to select the desired element.
      // - e.target can be used to determine which element has been clicked.
    // - A conditional can set criteria for whether or not the event listener fires or not from here.
    // - .contain() method can be used to determine if a classList contains that given argument.
      // - This is beneficial over className === 'example' because the entire string would have to match.
      // - If a class of one element was changed or added to, that element would no longer work.
        document.body.addEventListener('click', deleteItem);
        
        function deleteItem(e) {
          e.preventDefault();
          console.log(e.target);

          if(e.target.parentElement.classList.contains("delete-item")) {
            console.log('Delete Item')
            e.target.parentElement.parentElement.remove();
          }

          if(e.target.classList.contains("clear-tasks")) {
            console.log("Delete All");
            const listArray = Array.from(document.querySelector('.collection').children);
            console.log(listArray)
            listArray.forEach(function(listItem) {
              listItem.remove();
            });
          }
        }



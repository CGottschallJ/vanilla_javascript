/* SWITCH STATEMENTS */ 
  // - Switch statements act just like else if statements with slightly different syntax.
    // - The switch syntax is used by using the switch keyword.
    // - The variable or expression that determines what code will run is then passed in.
    // - This is followed by the case keyword followed by a potential value for the variable passed in and a colon.
    // - Next, the code block you would like run (in this case) is placed below.
    // - Finally, a the break keyword is used to end the current case.
  // - A switch statement can be used in place of long else if statement.
  // - Each switch statement can contain as many 'cases' as you'd like.
  // - The code block matching the value of the variable or value passed in will run.
  // - The final case uses the default keyword and determines the code that will run if none of the cases are met.

    let color = "red";
    
    switch(color) {
      case "red":
        console.log("case 'red': - ", 'Color is Red');
        break;
      case "blue":
        console.log("case 'blue': - ", 'Color is Blue');
        break;
      default:
        console.log("The Color is neither Red or Blue");
        break;
    }

    color = "blue";

    switch(color) {
      case "red":
        console.log("case 'red': - ", 'Color is Red');
        break;
      case "blue":
        console.log("case 'blue': - ", 'Color is Blue');
        break;
      default:
        console.log("The Color is neither Red or Blue");
        break;
    }

    color = "white";

    switch(color) {
      case "red":
        console.log("case 'red': - ", 'Color is Red');
        break;
      case "blue":
        console.log("case 'blue': - ", 'Color is Blue');
        break;
      default:
        console.log("case 'white': - ", "The Color is neither Red or Blue");
        break;
    }

  
  // Another example is how the switch statement can be used with the Date object.

    let day;

    switch(new Date().getDay()){
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
    }

    console.log("case(day) return - ", `Today is ${day}`);

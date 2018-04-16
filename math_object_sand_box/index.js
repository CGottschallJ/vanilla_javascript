/* SIMPLE MATH WITH NUMBERS */
  console.log("! - SIMPLE MATH OPERATORS SECTION - !");

  //creating and defining a variable with a number value
  const num1 = 100;
  console.log("num1 = ", num1);

  //creating and defining a second variable with a number value
  const num2 = 50;
  console.log("num2 = ", num2);

  //Initailizing value variable to define later as return from equations.
  let val;
  console.log("val = ", val);

  //Setting the value of val to the sum of num1 and num2 using the '+' operator
      // - The addition operator can be used to add values together.
  val = num1 + num2;  // -> 150
  console.log("Addition Total - ", val);

  //Setting the value of val to the difference of num1 and num2 using the '-' operator
      // - The subtraction operator can be used used to subract values from one another.
  val = num1 - num2; // -> 50
  console.log("Subtraction Total - ", val);

  //Setting the value of val to the product of num1 and num2 using the '*' operator
      // - The multiplication operator can be used used to multiply values by one another.
  val = num1 * num2; // -> 5000
  console.log("Multiplication Total - ", val);

  //Setting the value of val to the quotient of num1 and num2 using the '/' operator
      // - The division operator can be used used to divide values by one another.
  val = num1 / num2; // -> 2
  console.log("Division Total - ", val);

  //Setting the value of val to the remainder of num1 and num2 using the '%' operator
      // - The modulus operator can be used used to divide values by one another.
  val = num1 % num2; // -> 0
  console.log("Modulus (Remainder) Total - ", val);


/* MATH OBJECT */
  console.log("! - MATH OBJECT SECTION - !")

  /* 
    The Math Object is an object with built in methods and values that allow 
      us to complete common math equations and access common values used in math 
      equations.

    The values and the equations in the Math Object can be accesses using dot
     syntax and the 'Math' keyword.
  */
 
  //Setting the value of the val variable to PI.
  val = Math.PI;
  console.log("Math.PI - ", val);

  //Setting the value of the val variable to Euler's number.
  val = Math.E;
  console.log("Math.E - ", val);

  //Setting the value of the val variable to the argument passed in rounded to the nearest whole number.
    // - In this case the number will be rounded up.
  val = Math.round(2.8); // -> 3
  console.log("Math.round(2.8) - ", val);

  //Setting the value of the val variable to the argument passed in rounded to the nearest whole number.
    // -In this case the number will be rounded down.
  val = Math.round(2.4); // -> 2
  console.log("Math.round(2.4) - ", val);

  //Setting the value of the val variable to the argument passed in rounded up to the nearest whole number. 
  val = Math.ceil(2.4); // -> 3
  console.log("Math.ceil(2.4) - ", val);

  //Setting the value of the val variable to the argument passed in rounded down to the nearest whole number.
  val = Math.floor(2.8); // -> 2
  console.log("Math.floor(2.8) - ", val);

  //Setting the value of the val variable to the square root of the argument passed in.
  val = Math.sqrt(64);
  console.log("Math.sqrt(64) - ", val);

  //Setting the value of the val variable to the absolute value of the argument passed in.
    // - The absolute value is a real number without regard to any signs.  In this case -3 has an absolute value of 3.
  val = Math.abs(-3); // -> 3
  console.log("Math.abs(-3) - ", val);

  //Setting the value of the val variable to the power of the two arguments passed in.
    // - In this case, val will be set to 8 to the 2 exponent.
  val = Math.pow(8, 2); // -> 64
  console.log("Math.pow(8, 2) - ", val);

  //Setting the value of the val variable to the lowest value of all of the arguments passed in.
  val = Math.min(2, 6, 9, 4); // -> 2
  console.log("Math.min(2, 6, 9, 4) - " , val);

  //Setting the value of the val variable to the highest value of all of the arguments passed in.
  val = Math.max(2, 6, 9, 4); // -> 9
  console.log("Math.min(2, 6, 9, 4) - " , val);

  //Setting the value of the val variable to a random number bewtween 0 and 1.
    // - Using Math.random is used to get a random number between 0 and 1.
  val = Math.random();
  console.log("Math.random() - ", val);

    //To retrieve a number higher than 1, Math.random() can be mulitplied by the max number desired.
      // - an addition of 1 is necessary to reach the highest number possible because the number will ultimately be rounded down.
    val = Math.floor(Math.random() * 10 + 1);
    console.log("Math.floor(Math.random() * 10 + 1) - ", val);


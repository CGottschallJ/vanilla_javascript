/* TYPE CONVERSION */

let value;

  /* TO STRING */

  /*
    Different data types can be converted into a string using different functions.
    - Those functions are String() and .toString()
    - Please see below for examples of each
  */

    //String() Section
    console.log("___ STRING() SECTION ___");

      //NUMBER to String() Section
      console.log("-- Number to String() Section --");

        // Setting the value of the value variable to a number
        value = 9;

        console.log("initial value - ", value);  // -> 9
        console.log("initial value type - ", typeof value); // -> "number"
        console.log("initial value length - ", value.length); // -> undefined

        //Using the String() method to convert the number into a string.
        value = String(9);

        console.log("number as string value - ", value); // -> "9"
        console.log("number as string type - ", typeof value); // -> "string"
        console.log("number as string length - ", value.length); // -> 1


      //BOOLEAN to String() Section
      console.log("-- Boolean to String() Section --");

        // Setting the value of the value variable to a boolean 
        value = true;
        console.log("initial value - ", value); // -> true
        console.log("initial value type - ", typeof value); // -> "boolean"
        console.log("initial length - ", value.length); // -> undefined
  
        //Using the String() method to reassign value of variable to a string
        value = String(true);
        console.log("boolean to string value - ", value); // -> "true"
        console.log("boolean to string type - ", typeof value); // -> "string"
        console.log("boolean to string length - ", value.length); // -> 4


      //ARRAY to String() Section
      console.log("-- Array to String() Section --");

        //Setting the value of the value variable to an array
        value = ["Today", "is", "the", "day"]; 
        console.log("initial value - ", value); // -> ["Today", "is", "the", "day"]
        console.log("initial value type - ", typeof value); // -> "object"
        console.log("initial length - ", value.length); // -> 4

        //Conerting the value of the variable to an String.
        value = String(["Today", "is", "the", "day"]);
        console.log("Array to String value", value); // -> "Today,is,the,day"
        console.log("Array to String type", typeof value); // -> "string"
        console.log("Array to String length", value.length); // -> 16

    //.toString() Section
    console.log("___ .TOSTRING() SECTION ___");

      //NUMBER .toString() Section
      console.log("-- Number .toString() Section --");
        
        //Setting the value of the value variable to a number
        value = 9999;
        console.log("initial value - ", value); // -> 9999
        console.log("initial value type - ", typeof value); // -> "number"

        //Converting the value of the value variable to a string
        value = (9999).toString();
        console.log("number toString() value - ", value); // -> "9999"
        console.log("number toString() type - ", typeof value) // -> "string"


      //BOOLEAN .toString() Section
      console.log("-- Boolean .toString() Section --");

        //Setting the value of the value variable to a boolean
        value = true;
        console.log("initial value - ", value); // -> true
        console.log("initial value type - ", typeof value); // -> object

        //Converting the value of the value variable to a string
        value = (true).toString();
        console.log("boolean toString() value - ", value); // -> "true"
        console.log("boolean toString() type - ", typeof value); // -> "string"


      //ARRAY .toString() Section
      console.log("-- Array .toString() Section --");

        //Setting the value of the value variable to an array
        value = ["Programming", "is", "the", "best"];
        console.log("initial value - ", value); // -> ["Programming", "is", "the", "best"];
        console.log("initial value type - ", typeof value); // -> object

        //Converting the array value to a string.
        value = (["Programming", "is", "the", "best"]).toString();
        console.log("Array toString() value - ", value); // -> "Programming,is,the,best"
        console.log("Array toString() type - ", typeof value); // -> "string"

  /* TO NUMBER */

  /*
    Different data types can be converted into a number using different functions.
    - Those functions are Number(), .parseInt(), and .parseFloat()
    - Please see below for examples of each
  */
      
    //Number() Section
    console.log("___ NUMBER() SECTION ___");

      //STRING to Number() Section
      console.log("-- string to number() Section --");

        //Setting the value of the value variable to a string that includes number
        value = "999";
        console.log("initial value - ", value); // -> "999"
        console.log("initial value type - ", typeof value); // -> "string"

        //Converting the string value to a number
        value = Number("999");
        console.log("string to number value - ", value); // -> 999
        console.log("string to number type - ", typeof value) // -> number


      //BOOLEAN to Number() Section
      console.log("-- Boolean to Number() Section --");

        //Setting the value of the value variable to a Boolean
        value = true;
        console.log("initial value - ", value); // -> true
        console.log("initial value type - ", typeof value); // -> boolean

        //Converting the boolean value to a number
        value = Number(true);
        console.log("boolean to number value - ", value); // -> 1
        console.log("boolean to number type - ", typeof value); // -> number

        //Setting the value of the value variable to a Boolean
        value = false;
        console.log("initial value - ", value); // -> false
        console.log("initial value type - ", typeof value); // -> boolean

        //Converting the boolean value to a number
        value = Number(false);
        console.log("boolean to number value - ", value); // -> 0
        console.log("boolean to number type - ", typeof value); // -> number


      //NULL to Number() Section
      console.log("-- Null to Number() Section --");

        //Setting the value of the value variable to null
        value = null;
        console.log("initial value - ", value); // -> null
        console.log("initial value type - ", typeof value); // -> object

        //Converting the null value to a number 
        value = Number(null);
        console.log("null to number value - ", value); // -> 0
        console.log("null to number type - ", typeof value); // -> number

      //ARRAY to Number() Section
      console.log("-- Array to Number() Section --");

        //Setting the value of the value variable to an array
        value = ["Programming", "is", "the", "best"];
        console.log("initial value - ", value); // -> ["Programming", "is", "the", "best"]
        console.log("initial value type - ", typeof value); // -> object

        //Converting the  value to a number
        value = Number(["Programming", "is", "the", "best"]);
        console.log("array to number value - ", value); // -> NaN
        console.log("array to number type - ", typeof value); // -> number



    //.parseInt() Section
    console.log("___ PARSEINT() SECTION ___");

      /*
        The parseInt() function will only return a whole number.
        - Therefore, if there are decimals included in the number, they will not be returned.

        - Below you can see that this function does not work with booleans and null the same way that the Number() function does.
          * In this case, they will both return NaN
      */

      //STRING .parseInt() Section
      console.log("-- String parseInt() Section --");

        //Setting the value of the value variable to a string containing a number
        value = "999.55";
        console.log("initial value - ", value); // -> "999.5"
        console.log("initial value type - ", typeof value); // -> "string"

        //Converting the string value into an integer (whole number)
        value = parseInt("999.55");
        console.log("string parseInt() value - ", value); // -> 999
        console.log("string parseInt() value type - ", typeof value); // -> "number"


      //BOOLEAN .parseInt() Section
      console.log("-- Boolean parseInt() Section --");

        //Setting the value of the value variable to a boolean
        value = true;
        console.log("initial value - ", value); // -> true 
        console.log("initial value type - ", typeof value); // -> "boolean"
        
        //Converting the boolean value into a number
        value = parseInt(true);
        console.log("boolean parseInt() value - ", value); // -> NaN
        console.log("boolean parseInt() type - ", typeof value); // -> "number"


      //NULL .parseInt() Section
      console.log("-- Null parseInt() Section --");

        //Setting the value of the value variable to null
        value = null;
        console.log("initial value - ", value); // ->
        console.log("initial value type - ", typeof value); // ->

        //Converting the null value into a number
        value = parseInt(null);
        console.log("null parseInt() value - ", value); // -> NaN
        console.log("null parseInt() type - ", typeof value); // -> "number"


    //.parseFloat() Section
    console.log("___ PARSEFLOAT() SECTION ___");

      /*
        The .parseFloat() function can be used to convert strings of numbers to a number with the decimal place included.
          - This is different from the the .parseInt() function that only returns a whole number.

        Finally, the amount of decimal places that are to be included can be determined by using the .toFixed() function.
          - This function takes in one number as a parameter that will determine the number of decimal places that will be returned.
          - The number will be rounded up.

      */

      //STRING .parseFloat() Section
      console.log("-- String parseFloat() Section --");

        //Setting the value of the value variable to a string that includes a number with decimals
        value = "999.55";
        console.log("initial value - ", value); // "999.55"
        console.log("initial value type - ", typeof value); // -> "string"

        //Converting the string value into a number using the parseFloat() function
        value = parseFloat("999.55");
        console.log("string parseFloat() value - ", value); // 999.55
        console.log("string parseFloat() type - ", typeof value); // -> "number"

        //Converting the string value to a number that displays just one decimal place rather than three.

        value = parseFloat("999.555");
        console.log("value toFixed() - ", value.toFixed(1));
        


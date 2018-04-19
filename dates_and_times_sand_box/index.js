/* DATES & TIMES */

// - Creating a varaible and instantiating the Date object as the value.
  // - The Date object will return the current date down to the millisecond.
  // - The format will be Day Month Date Year Hours:Minutes:Seconds TimeZone (TimeZoneCode)

//Variable Declaration
console.log("! - Variable Declaration Section - !")

  const today = new Date();
  console.log("today - ", today); // -> Thu Apr 19 2018 15:42:40 GMT-0500 (CDT);

  const birthday = new Date();
  console.log("birthday - ", birthday);

  let val;
  console.log("val - ", val);

//Accessing Individual Date Values
console.log("! - Accessing Data Section - !");
  //getMonth() method
    // - The getMonth() method will return the index that the month of the date holds.
      // - Remembering that arrays begin at the 0 index,  January will then be in the 0 index and December in the 11 index.
      // - This method will return a number
      val = today.getMonth();
      console.log("getMonth() return - ", val); // -> #

  //getDate() method
    // - The getDate() method will return the day of the month that the date object holds.
      // - The return will be a number.
      val = today.getDate();
      console.log("getDate() return - ", val); // -> #

  //getDay() method
    // - The getDay() method will return the index that the day of the week holds.
      // - Remembering that arrays begin at the 0 index, Sunday will then be in the 0 index and Saturday in the 6 index.
      val = today.getDay()
      console.log("getDay() return - ", val); // -> #

  //getFullYear() method
    // - The getFullYear() method will return the year of the date.
      // - This will be a number.
      val = today.getFullYear();
      console.log("getFullYear() return - ", val); // -> #

  //getHours() method
    // - The getHours() method will return the hour of the date.
      // - This hour will be on the 24hr clock.
      // - Therefore, 12am will be 0 and 1pm will return 13.
      val = today.getHours();
      console.log("getHours() return - ", val); // -> #

  //getMinutes() method
    // - The getMinutes() method will return the minutes of the date.
      // - The method will return a number between 0 and 59.
    val = today.getMinutes();
    console.log("getMinutes() return - ", val); // -> #

  //getSeconds() method
    // - The getSeconds() method will return the seconds of the date.
      // - This too will return a number between 0 and 59.
    val = today.getSeconds();
    console.log("getSeconds() return - ", val); // -> #

  //getMilliseconds() method
    // - The getMilliseconds() method will return the milliseconds of the date.
        // - This will return a number between 0 and 1000.
    val = today.getMilliseconds();
    console.log("getMilliseconds() return - ", val); // -> #

//Date Object Mutations
console.log("! - Date Object Mutation Section - !");

  //setMonth()
    // - The 

  //setDate()

  //setDay()

  //setFullYear()

  //setHours()

  //setMinutes()

  //setSeconds()



/* TEMPLATE LITERALS */

// - Template Literals are a part of es6 but is compatible with all browsers.
// - This style of concatenation has become best practice.

const name = "Cameron";
const age = 27;
const job = "Web Developer";
const city = "Austin";
let html;

  // Without template strings (es5)
    html = "<ul><li>Name: " + name + "</li><li>Age: " + age + "</li><li>Job: " + job + "</li><li>City: " + city + "</li></ul>"

    //Separating into HTML format
    html = "<ul>" +
              "<li>Name: " + name + "</li>" +
              "<li>Age: " + age + "</li>" +
              "<li>Job: " + job + "</li>" +
              "<li>City: " + city + "</li>" +
            "</ul>";

  // With Template Strings (Template Literal)
    // - Template Literals are created using a ` tick mark ` rather than a quotation mark around the string.
      // - Instead of concatenating variables into a string with the + operator, we can now inject them by wrapping them in ${variable}.
      // - This provides a much more fluid of way of creating a string that is concatenated together.
    // - Inside of a template literal, variables can be accessed, functions can be called, and conditionals can be written.
    

    function functionCall(){
      return "A function can be called in a template literal!"
    }
     
    html = `
      <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>2 + 2 = ${2 + 2}</li>
        <li>${functionCall()}</li>
        <li>${age > 30 ? 'Over 30' : "Under 30"}</li>
      </ul>
    `;

    document.body.innerHTML = html;
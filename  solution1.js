// Define a function called switchCase that takes a string as input
function switchCase(inputString) {
    // Initialize an empty string to store the result
    const resultCase = "";
    // Initialize an empty string to store the result
    for(let i = 0; i < inputString.length; i++) {
        // Get the current character
      let currentCharacter = inputString[i];
       // Check if the current character is uppercase
    if (currentCharacter ===  currentCharacter.toUpperCase()) {
        // If it's uppercase, convert it to lowercase and add it to the result
        resultCase += currentCharacter.toLowerCase();
      } else {
        // If it's lowercase, convert it to uppercase and add it to the result
        resultCase += currentCharacter.toUpperCase();
      }
    }
    return resultCase; 
  }
  
// Call the switchCase function with an example input string
  console.log(switchCase("The Quick Brown Fox"));








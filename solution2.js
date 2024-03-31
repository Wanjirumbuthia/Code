// Define a function called createArrayNumber that takes two numbers as input
function createArrayNumber(number1, number2) {
    // Initialize an empty array to store the result
    const finalresult = [];
    // Loop through numbers from number1 to number2 
    for (let i = number1; i <= number2; i++) {
    // Add the current number to the finalresult array
      finalresult.push(i);
    // Return the finalresult array containing all the numbers between number1 and number2
    }
    return finalresult;
  }
  
  //Call the createArrayNumber function
  console.log(createArrayNumber(-2,6))
  console.log(createArrayNumber(4,10))
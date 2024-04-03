// Define a function named PrimeNumber 
function PrimeNumber(getArray) {
// Define a nested function named Prime 
    function Prime(number) {
 // If the number is less than or equal to 1, it's not prime, return false
      if (number <= 1) {
        return false; 
      }
      // Loop through numbers from 2 to the square root of the number
      for (let i = 2; i <= Math.sqrt(number); i++) {
      // If the number is divisible evenly by any number in this range, it's not prime, return false
        if (number % i === 0) {
          return false;
        }
      }
      // If none of the conditions above are met, the number is prime, return true
      return true; 
    }
  // Initialize an empty array to store prime numbers
    const primeNumbers = [];
 // Iterate through each number in the input array
    for (const number of getArray) {
      if (Prime(number)) {
        primeNumbers.push(number);
      }
    }
    return primeNumbers;
  }
  
  
  const inputArray = [11,12,13,14,15,16,17,18,19,20,21];
  const primeResult = PrimeNumber(inputArray);
  // output
  console.log(primeResult);
  
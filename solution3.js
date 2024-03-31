function PrimeNumber(getArray) {
    function Prime(number) {
      if (number <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
      }
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false; // Found a divisor, so it's not prime
        }
      }
      return true; // No divisors found, it's prime
    }
  
    const primeNumbers = [];
    for (const number of getArray) {
      if (Prime(number)) {
        primeNumbers.push(number);
      }
    }
    return primeNumbers;
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primeResult = PrimeNumber(inputArray); // Pass inputArray here instead of getArray
  console.log(primeResult);
  
// Helper function to calculate the nth Fibonacci number
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Example of usage:
  const fibonacciIndex = 6;
  const fibonacciResult = fibonacci(fibonacciIndex);
  console.log(`The ${fibonacciIndex}th Fibonacci number is: ${fibonacciResult}`);
  
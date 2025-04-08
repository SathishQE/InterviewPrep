function factorial(n) {
    if (n < 0) {
        return -1;  // Return -1 for negative numbers (no factorial)
    }

    var result = 1;  // Start with 1 since factorial of 0 is 1

    // Multiply numbers from 1 to n
    for (var i = 1; i <= n; i++) {
        result = result * i;  // Multiply step-by-step
    }

    return result;  // Return the final result
}

// Example Usage
console.log(factorial(5));  // Output: 120
console.log(factorial(0));  // Output: 1
console.log(factorial(-3)); // Output: -1 (invalid)

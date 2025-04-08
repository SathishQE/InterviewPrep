function fibonacci(n) {
    if (n <= 0) {
        return;  // Exit if n is 0 or negative
    }

    var a = 0;       // First Fibonacci number
    var b = 1;       // Second Fibonacci number

    // Print the first number
    console.log(a);

    if (n > 1) {
        // Print the second number if n > 1
        console.log(b);
    }

    // Generate and print remaining Fibonacci numbers
    for (var i = 2; i < n; i++) {
        var next = a + b;  // Calculate next number
        console.log(next);  // Print next number
        a = b;              // Move forward in the sequence
        b = next;
    }
}

// Example Usage
fibonacci(10);

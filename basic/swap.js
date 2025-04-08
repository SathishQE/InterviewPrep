function swapWithThirdVariable(a, b) {
    var temp = a;  // Use a temporary variable to hold the value of a
    a = b;          // Assign b's value to a
    b = temp;       // Assign temp's value (original a) to b

    console.log("After Swap: a =", a, ", b =", b);
}

// Example Usage
swapWithThirdVariable(5, 10);  // Output: a = 10, b = 5


function swapWithoutThirdVariable(a, b) {
    a = a + b;  // Step 1: a becomes sum of a and b
    b = a - b;  // Step 2: b becomes original a
    a = a - b;  // Step 3: a becomes original b

    console.log("After Swap: a =", a, ", b =", b);
}

// Example Usage
swapWithoutThirdVariable(5, 10);  // Output: a = 10, b = 5

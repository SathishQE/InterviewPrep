function addNumbers(a, b) {
    var sum = 0;        // Initialize sum to 0
    sum = a + b;        // Add the two numbers directly
    return sum;         // Return the result
}

// Example Usage
console.log(addNumbers(5, 3));   // Output: 8
console.log(addNumbers(10, 20)); // Output: 30
console.log(addNumbers(-5, 7));  // Output: 2


function addArrayNumbers(arr) {
    var sum = 0;  // Initialize sum to 0

    // Loop through the array to add each number
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];  // Add current element to sum
    }

    return sum;  // Return the total sum
}

// Example Usage
console.log(addArrayNumbers([1, 2, 3, 4, 5]));  // Output: 15
console.log(addArrayNumbers([10, 20, 30]));     // Output: 60
console.log(addArrayNumbers([-5, 5, 10]));      // Output: 10

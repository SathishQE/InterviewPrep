function findSecondMax(arr) {
    var max = arr[0];         // Assume the first element is the maximum
    var secondMax = -Infinity; // Use -Infinity to handle negative numbers

    // Loop through the array to find max and second max
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {        // If current element is greater than max
            secondMax = max;       // Update second max to previous max
            max = arr[i];          // Update max to current element
        } else if (arr[i] > secondMax && arr[i] != max) {
            secondMax = arr[i];    // Update second max if it’s not equal to max
        }
    }

    return secondMax;  // Return the 2nd maximum number
}

// Example Usage
console.log(findSecondMax([3, 5, 7, 2, 8]));    // Output: 7
console.log(findSecondMax([10, 20, 5, 15]));    // Output: 15
console.log(findSecondMax([-5, -2, -9, -1]));   // Output: -2

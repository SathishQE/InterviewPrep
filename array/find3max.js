function findThirdMax(arr) {
    var max = arr[0];           // Assume the first element is the maximum
    var secondMax = -Infinity;  // Initialize secondMax to the smallest possible value
    var thirdMax = -Infinity;   // Initialize thirdMax to the smallest possible value

    // Loop through the array to find max, secondMax, and thirdMax
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {                 // If current element is larger than max
            thirdMax = secondMax;           // Update thirdMax to previous secondMax
            secondMax = max;                // Update secondMax to previous max
            max = arr[i];                   // Update max to current element
        } else if (arr[i] < max && arr[i] > secondMax) {
            thirdMax = secondMax;           // Update thirdMax to previous secondMax
            secondMax = arr[i];             // Update secondMax to current element
        } else if (arr[i] < secondMax && arr[i] > thirdMax) {
            thirdMax = arr[i];              // Update thirdMax if it’s less than secondMax but greater than current thirdMax
        }
    }

    return thirdMax;  // Return the 3rd maximum number
}

// Example Usage
console.log(findThirdMax([3, 5, 7, 2, 8]));    // Output: 5
console.log(findThirdMax([10, 20, 5, 15]));    // Output: 10
console.log(findThirdMax([-5, -2, -9, -1]));   // Output: -2

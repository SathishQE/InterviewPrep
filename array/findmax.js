function findMax(arr) {
    var max = arr[0];  // Assume the first element is the maximum

    // Loop through the array to find the max
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {  // If current element is greater than max
            max = arr[i];     // Update max
        }
    }

    return max;  // Return the maximum number
}

// Example Usage
console.log(findMax([3, 5, 7, 2, 8]));    // Output: 8
console.log(findMax([10, 20, 5, 15]));    // Output: 20
console.log(findMax([-5, -2, -9, -1]));   // Output: -1

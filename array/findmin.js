function findMin(arr) {
    var min = arr[0];  // Assume the first element is the minimum

    // Loop through the array to find the min
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {  // If current element is smaller than min
            min = arr[i];     // Update min
        }
    }

    return min;  // Return the minimum number
}

// Example Usage
console.log(findMin([3, 5, 7, 2, 8]));    // Output: 2
console.log(findMin([10, 20, 5, 15]));    // Output: 5
console.log(findMin([-5, -2, -9, -1]));   // Output: -9

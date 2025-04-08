function findThirdMin(arr) {
    var min = arr[0];           // Assume the first element is the minimum
    var secondMin = Infinity;   // Initialize secondMin to the largest possible value
    var thirdMin = Infinity;    // Initialize thirdMin to the largest possible value

    // Loop through the array to find min, secondMin, and thirdMin
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {                // If current element is smaller than min
            thirdMin = secondMin;          // Update thirdMin to previous secondMin
            secondMin = min;               // Update secondMin to previous min
            min = arr[i];                  // Update min to current element
        } else if (arr[i] > min && arr[i] < secondMin) {
            thirdMin = secondMin;          // Update thirdMin to previous secondMin
            secondMin = arr[i];            // Update secondMin to current element
        } else if (arr[i] > secondMin && arr[i] < thirdMin) {
            thirdMin = arr[i];             // Update thirdMin if it’s greater than secondMin but smaller than current thirdMin
        }
    }

    return thirdMin;  // Return the 3rd minimum number
}

// Example Usage
console.log(findThirdMin([3, 5, 7, 2, 8]));    // Output: 5
console.log(findThirdMin([10, 20, 5, 15]));    // Output: 15
console.log(findThirdMin([-5, -2, -9, -1]));   // Output: -2

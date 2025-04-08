function findSecondMin(arr) {
    var min = arr[0];          // Assume the first element is the minimum
    var secondMin = Infinity;  // Use Infinity for initial second minimum

    // Loop through the array to find min and second min
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {         // If current element is smaller than min
            secondMin = min;        // Update secondMin to previous min
            min = arr[i];           // Update min to current element
        } else if (arr[i] > min && arr[i] < secondMin) {
            secondMin = arr[i];     // Update secondMin if it’s greater than min but smaller than current secondMin
        }
    }

    return secondMin;  // Return the 2nd minimum number
}

// Example Usage
console.log(findSecondMin([3, 5, 7, 2, 8]));    // Output: 3
console.log(findSecondMin([10, 20, 5, 15]));    // Output: 10
console.log(findSecondMin([-5, -2, -9, -1]));   // Output: -5

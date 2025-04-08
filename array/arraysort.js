function sortArray(arr) {
    // Simple Bubble Sort with less code
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {  // If current element is greater than the next
                // Swap elements directly
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;  // Return the sorted array
}

// Example Usage
console.log(sortArray([5, 2, 9, 1, 5, 6]));  // Output: [1, 2, 5, 5, 6, 9]
console.log(sortArray([3, 0, -2, 4, -1]));   // Output: [-2, -1, 0, 3, 4]
console.log(sortArray([10, 20, 15, 5]));     // Output: [5, 10, 15, 20]

function findDuplicates(arr) {
    var duplicates = [];    // To store duplicate elements
    var counts = [];        // To store counts of duplicates

    // Iterate through the array
    for (var i = 0; i < arr.length; i++) {
        var count = 1;      // Start count as 1 for the current element

        // Skip if already counted as duplicate
        var alreadyCounted = false;
        for (var k = 0; k < duplicates.length; k++) {
            if (arr[i] == duplicates[k]) {
                alreadyCounted = true;
                break;
            }
        }
        if (alreadyCounted) continue;

        // Count occurrences of current element
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }

        // If count > 1, it's a duplicate
        if (count > 1) {
            duplicates[duplicates.length] = arr[i];  // Add to duplicates
            counts[counts.length] = count;            // Add to counts
        }
    }

    // Print duplicates and their counts
    for (var m = 0; m < duplicates.length; m++) {
        console.log("Element:", duplicates[m], "| Count:", counts[m]);
    }
}

// Example Usage
findDuplicates([4, 5, 6, 4, 3, 6, 6, 7]);
// Output: 
// Element: 4 | Count: 2
// Element: 6 | Count: 3

findDuplicates([1, 2, 2, 3, 3, 3]);
// Output:
// Element: 2 | Count: 2
// Element: 3 | Count: 3

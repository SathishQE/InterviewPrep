function compareStrings(str1, str2) {
    // Check if lengths are different
    if (str1.length !== str2.length) {
        return false; // If lengths differ, strings are not the same
    }

    // Compare characters one by one
    for (var i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            return false; // If any character differs, strings are not the same
        }
    }

    return true; // All characters matched
}

// // Example Usage
// var string1 = "hello";
// var string2 = "hello";
// var string3 = "world";

// console.log(compareStrings(string1, string2)); // Output: true
// console.log(compareStrings(string1, string3)); // Output: false

// Explanation:
// Length Check:

// If the strings have different lengths, they can’t be the same.
// Character-by-Character Comparison:

// Iterates through each character to check if they match.
// Return Values:

// Returns false if any character is different.
// Returns true if all characters match.
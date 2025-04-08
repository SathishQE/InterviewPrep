function isSubstring(str, subStr) {
    // Get the lengths of both strings
    var strLength = 0;
    var subStrLength = 0;

    // Manually calculate string lengths
    while (str[strLength] !== undefined) strLength++;
    while (subStr[subStrLength] !== undefined) subStrLength++;

    // If substring is longer, it can't be part of the string
    if (subStrLength > strLength) {
        return false;
    }

    // Iterate through the main string
    for (var i = 0; i <= strLength - subStrLength; i++) {
        var match = true;

        // Check if substring matches part of the main string
        for (var j = 0; j < subStrLength; j++) {
            if (str[i + j] !== subStr[j]) {
                match = false;
                break;
            }
        }

        // If a match is found, return true
        if (match) {
            return true;
        }
    }

    // No match found
    return false;
}

// Example Usage
var string = "hello world";
var subString1 = "world";
var subString2 = "planet";

console.log(isSubstring(string, subString1)); // Output: true
console.log(isSubstring(string, subString2)); // Output: false


// Explanation:
// Manual Length Calculation:

// Uses a while loop to count characters without .length.
// Sliding Window Technique:

// Compares sections of the main string to the substring.
// Character-by-Character Comparison:

// If all characters match, it returns true; otherwise, continues.
// Early Exit:

// Stops immediately when a match is found.
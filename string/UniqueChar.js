function findUniqueCharacters(str) {
    var charCount = {};        // Object to store character counts
    var uniqueChars = [];      // Array to store unique characters

    // Manually count occurrences of each character
    for (var i = 0; str[i] !== undefined; i++) {
        var char = str[i];
        if (charCount[char] === undefined) {
            charCount[char] = 1; // Initialize count
        } else {
            charCount[char]++;   // Increment count if seen before
        }
    }

    // Find characters with count of 1
    for (var key in charCount) {
        if (charCount[key] === 1) {
            uniqueChars[uniqueChars.length] = key; // Append to uniqueChars array
        }
    }

    return uniqueChars;
}

// Example Usage
var input = "programming";
var result = findUniqueCharacters(input);

// Manually display result
var output = "Unique characters: ";
for (var i = 0; i < result.length; i++) {
    output += result[i];
    if (i < result.length - 1) {
        output += ", ";
    }
}
console.log(output);


// Explanation:
// Manual Counting:

// Uses a plain object charCount to count characters without .reduce() or .forEach().
// Character-by-Character Handling:

// Appends unique characters manually using uniqueChars[uniqueChars.length].
// Manual Display:

// Constructs the output string without .join().
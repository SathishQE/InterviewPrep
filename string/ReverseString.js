function reverseString(str) {
    var reversed = "";  // Initialize an empty string to store the result

    // Iterate through the original string backwards
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];  // Append each character in reverse order
    }

    return reversed;
}

// Example Usage
var input = "hello";
var result = reverseString(input);
console.log("Reversed string: " + result);

// Explanation:
// Empty String (reversed):

// Used to build the reversed string manually.
// Backward Iteration:

// Loops through the string from the last character to the first.
// Character-by-Character Appending:

// Uses reversed += str[i] to build the reversed string.
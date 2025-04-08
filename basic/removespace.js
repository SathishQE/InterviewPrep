function removeWhiteSpaces(str) {
    var result = "";  // To store the new string without spaces

    // Go through each character in the string
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {      // Check if the character is not a space
            result = result + str[i];  // Add non-space characters to result
        }
    }

    return result;  // Return the new string without spaces
}

// Example Usage
console.log(removeWhiteSpaces("Hello World!"));    // Output: HelloWorld!
console.log(removeWhiteSpaces("  A B C  "));       // Output: ABC
console.log(removeWhiteSpaces("JavaScript   Rocks"));  // Output: JavaScriptRocks

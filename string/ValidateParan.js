function validateParentheses(str) {
    var stack = [];  // Array to use as a stack
    var top = -1;    // Stack pointer

    // Iterate through each character in the string
    for (var i = 0; i < str.length; i++) {
        var char = str[i];

        // If opening parenthesis, push to stack
        if (char === '(') {
            top++;          // Increment stack pointer
            stack[top] = char; // Push to stack
        } 
        // If closing parenthesis
        else if (char === ')') {
            // Check for unmatched closing parenthesis
            if (top === -1) {
                return false;  // No matching opening parenthesis
            }
            top--;  // Pop from stack
        }
    }

    // If stack is empty, parentheses are balanced
    return top === -1;
}

// Example Usage
var str1 = "(())";
var str2 = "(()";
var str3 = "())";

console.log(validateParentheses(str1)); // Output: true
console.log(validateParentheses(str2)); // Output: false
console.log(validateParentheses(str3)); // Output: false


// Explanation:
// Manual Stack Implementation:

// Uses an array stack and a pointer top to manage parentheses manually.
// Push and Pop Logic:

// Push: Increment top and add ( to the stack.
// Pop: Decrement top for ) if a match exists.
// Unmatched Parentheses Check:

// Returns false if a closing parenthesis has no match.
// Final Validation:

// If top is -1 after processing, parentheses are balanced.
function isPalindrome(str) {
    var reversed = "";  // Initialize an empty string to store the reversed version

    // Manually reverse the string
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];  // Append characters from end to start
    }

    // Manually compare original and reversed strings
    for (var j = 0; j < str.length; j++) {
        if (str[j] !== reversed[j]) {
            return false;  // Not a palindrome if any character differs
        }
    }

    return true;  // It's a palindrome if all characters match
}

// Example Usage
var str1 = "level";
var str2 = "world";
var str3 = "deified";

console.log(isPalindrome(str1)); // Output: true
console.log(isPalindrome(str2)); // Output: false
console.log(isPalindrome(str3)); // Output: true

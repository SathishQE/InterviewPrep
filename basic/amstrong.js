function isArmstrong(n) {
    var original = n;      // Store the original number
    var sum = 0;           // To store the sum of cubes of digits
    var count = 0;         // To count the number of digits

    // Count the number of digits
    var temp = n;
    while (temp > 0) {
        count++;
        temp = (temp - (temp % 10)) / 10;  // Remove last digit
    }

    // Calculate the sum of digits raised to the power of count
    temp = n;  // Reset temp to original number
    while (temp > 0) {
        var digit = temp % 10;            // Get last digit
        var power = 1;                    // To store digit raised to power of count

        // Manually compute digit^count
        for (var i = 0; i < count; i++) {
            power = power * digit;
        }

        sum = sum + power;                // Add power to sum
        temp = (temp - digit) / 10;       // Remove last digit
    }

    return sum === original;  // Check if sum equals original number
}

// Example Usage
console.log(isArmstrong(153));  // Output: true  (1^3 + 5^3 + 3^3 = 153)
console.log(isArmstrong(370));  // Output: true  (3^3 + 7^3 + 0^3 = 370)
console.log(isArmstrong(371));  // Output: true  (3^3 + 7^3 + 1^3 = 371)
console.log(isArmstrong(123));  // Output: false

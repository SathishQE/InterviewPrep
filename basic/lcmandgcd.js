function findGCD(a, b) {
    // Find GCD using the Euclidean algorithm
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;  // GCD of a and b
}

function findLCM(a, b) {
    // LCM formula: (a * b) / GCD(a, b)
    var gcd = findGCD(a, b);          // Find GCD first
    var lcm = (a * b) / gcd;          // Calculate LCM
    return lcm;                       // Return LCM
}

// Example Usage
console.log(findLCM(4, 6));    // Output: 12
console.log(findLCM(10, 15));  // Output: 30
console.log(findLCM(7, 5));    // Output: 35

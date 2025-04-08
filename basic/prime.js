function isPrime(n) {
    if (n <= 1) {
        return false;  // Numbers less than 2 are not prime
    }

    // Check divisibility from 2 to n - 1
    for (var i = 2; i * i <= n; i++) {  // Optimize by checking up to √n
        if (n % i === 0) {
            return false;  // Not prime if divisible
        }
    }

    return true;  // Prime if no divisors found
}

// Example Usage
console.log(isPrime(5));  // Output: true
console.log(isPrime(4));  // Output: false
console.log(isPrime(1));  // Output: false
console.log(isPrime(13)); // Output: true

class RepeatedCharacterFinder {
    constructor(str) {
        this.str = str;           // Store input string
        this.charCount = {};      // To store character counts
        this.repeatedChars = [];  // To store repeated characters
    }

    // Method to count characters manually
    countCharacters() {
        for (var i = 0; i < this.str.length; i++) {
            var char = this.str[i];
            if (this.charCount[char] === undefined) {
                this.charCount[char] = 1; // Initialize count
            } else {
                this.charCount[char]++;   // Increment count if seen before
            }
        }
    }

    // Method to find repeated characters manually
    findRepeated() {
        for (var key in this.charCount) {
            if (this.charCount[key] > 1) {
                this.repeatedChars[this.repeatedChars.length] = key; // Append to array
            }
        }
    }

    // Method to display repeated characters manually
    displayResult() {
        var output = "Repeated characters: ";
        for (var i = 0; i < this.repeatedChars.length; i++) {
            output += this.repeatedChars[i];
            if (i < this.repeatedChars.length - 1) {
                output += ", ";
            }
        }
        console.log(output);
    }

    // Method to run all steps
    run() {
        this.countCharacters();
        this.findRepeated();
        this.displayResult();
    }
}

// Example Usage
// var finder = new RepeatedCharacterFinder("programming");
// finder.run();

// Explanation:
// Single Class (RepeatedCharacterFinder):

// Combines counting, finding, and displaying into one class.
// Methods:

// countCharacters(): Counts each character manually.
// findRepeated(): Identifies repeated characters without built-ins.
// displayResult(): Manually builds and prints the result string.
// run(): Calls all methods sequentially.
// Manual Handling:

// No use of .push(), .join(), or other built-ins.

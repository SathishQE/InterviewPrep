//sum of given number

// let number = 635732;
// let sum=0;
// let rem=0;

// console.log("Before sum: ", sum);
// while(number > 0){
//     rem = number%10;
//     sum += rem;
//     number = Math.floor(number/10);
// }

// console.log("After sum: ", sum);


//Reverse the given number
number = 123456;
rem = 0;
rev = 0;

console.log("Before Reverse: ", number);

while(number>0){
    rem = number%10;
    rev = (rev*10)+rem;
    number = Math.floor(number/10);
}
console.log("After Reverse: ", rev);
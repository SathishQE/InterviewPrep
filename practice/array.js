
const numbers= [12, 90, 45, 23, 764, -10, 0, 2, -1, 11,-100,  87, 43]
const numb = [10, 10, 10]

//array sort
for(let i=0; i<numbers.length; i++){
    for(let j=i+1; j<numbers.length; j++){
        if(numbers[i]> numbers[j]){
            let temp = numbers[i];
            numbers[i] = numbers[j]
            numbers[j] = temp;
        }
    }
}

console.log("Below is Array Sort: ")
for(let a in numbers){
    console.log(numbers[a]);
}

//Find Max from array

//assume first is max number

let max = numbers[0];

console.log("Max before search: ", max);
for(let i=0; i<numbers.length; i++){
    if(numbers[i]>max){
        max = numbers[i];
    }
}
console.log("Max after search: ", max);

//Find Min from array
let min = numbers[0];

console.log("Minimum before search: ", min);

for(let i=0; i<numbers.length; i++){
    if(numbers[i]<min){
        min = numbers[i];
    }
}

console.log("Minimum after search: ", min);

//sum of array

let sum=0;
for(let num in numb){
    sum += numb[num];
}
console.log("Sum of array: ", sum);


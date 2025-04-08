let number = 10;
let isPrime = true;

for(let i =0; i<=number/2; i++){

    if(number%i == 0){
        isPrime = false;
        break;
    }

}


if(isPrime){
    console.log("Prime");
}
else{
    console.log("Not prime");
}
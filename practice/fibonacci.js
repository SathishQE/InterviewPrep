let a = 0;
let b = 1;
let n = 10;
let c = 0;

// 0+1 =1, 1+1=2, 2+1=3, 3+2=5, 5+3=8
// sum of Preceeding 2 number 
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55

// we already having a=0, b=1 s lets starts from 2. 
for(let i = 2; i<=n; i++){
    c = a+b;

    console.log(c);

    a = b;
    b = c;
    //need to free up the 3rd variable

}
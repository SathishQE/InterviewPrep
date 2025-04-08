//using 3rd Variable

var a = 10;
var b = 12;
var c = 0;

console.log('Before Swap', a , b);

c = a;
a = b;
b = c; 

console.log('After Swap', a, b);

//with out using 3rd variable

var d = 10;
var e = 20;

console.log('Before Swap', d, e);


d = d+e;
e = d - e;
d = d - e;

console.log('After Swap', d, e);

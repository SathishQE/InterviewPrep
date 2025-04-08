let string1 = "Sathish";
let string2 = "geetha";
let string3 = "";
let isSame = true;

//console.log(string1, string2);

// swap using 3rd var

string3 = string2;
string2 = string1;
string1 = string3;

console.log(string1, string2);

//swap w/o using 3rd var

string1 = string1+string2;
string2 = string1.substring(0,string1.length- string2.length);
string1 = string1.substring(string2.length)

console.log(string1, string2);

//Comparing string


if(string1.length == string2.length){
    for(let i=0; i<string1.length; i++){
        if(string1[i] != string2[i]){
            isSame=false;
            break;
        }

    }
    if(isSame){
        console.log("Strings are Matching");
    }else{
        console.log("String are unmatching");
    }
}
else{
    console.log("Mismatching string length");
}

//reverse the string

for(let i=string1.length-1;i>=0 ;i--){
    console.log(string1[i]);
}



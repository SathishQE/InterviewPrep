var _number = [21,5,8,11,22,1000,42,64,35,50,-2,-10, 1998, 5000];

var _maxNumber = _number[0];

for(var i=0; i<_number.length; i++){
    if(_maxNumber < _number[i]){
        _maxNumber = _number[i];
    }
}

console.log("Maximum Number is: ", _maxNumber);
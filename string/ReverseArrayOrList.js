// In Js No list but instead we have array List == array in Js
// const _arrayName = [];

var _number = [0,74,34,21,99,27,1,0,2]

for(var i=0; i<_number.length; i++){
    for(var j=i+1; j<_number.length; j++){
        if(_number[i] > _number[j]){

            var temp = _number[i];
            _number[i] = _number[j];
            _number[j] = temp;

        }
        
    }
    
}
for(var x in _number){
    console.log(_number[x]);
}




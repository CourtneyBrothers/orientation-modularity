'use strict'


module.exports = function(){
    let roll ={};
    
    if (process.argv[3]){
        roll.count=process.argv[2];
        roll.sides=process.argv[3];
    }else if (process.argv[2]) {
        roll.sides = process.argv[2];
        roll.count = 1;
    } else {
        roll.sides = 6;
        roll.count = 1;
    }
   
    
    // console.log(roll,"roll");
    return roll;
   
    
}



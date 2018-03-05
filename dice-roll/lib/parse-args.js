'use strict'


module.exports = function(){
    let roll ={};
    roll.count=process.argv[2];
    if (process.argv[3]){
        roll.sides=process.argv[3];
    }else {
        roll.sides = 1;
    }
   
    
    console.log(roll,"roll");
    return roll;
   
    
}



'use strict'


module.exports = function(){
    let roll ={};
    
    if (process.argv[3]){
        roll.count=process.argv[2];
        roll.sides=process.argv[3];
    }else {
        roll.sides = process.argv[2];
    }
   
    
    console.log(roll,"roll");
    return roll;
   
    
}



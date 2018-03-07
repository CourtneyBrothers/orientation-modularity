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

//Joes way from class 
//module.exports = ([num,sides])> {
   // const dieNums = {};
    //dieNums.count = sides ? num :1;
//     dieNums.sides = sides || num || 6;
//  return dieNums;
// }

//ES6 inc way to destructure objects with default arguments 
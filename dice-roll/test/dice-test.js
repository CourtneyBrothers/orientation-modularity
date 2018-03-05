// "use strict"
// const randomInt = require('./math')


// module.exports = {
    
//     toDiceNotation({count,sides}){
//         console.log(count,sides,"count");
//         let diceStr = `${count}d${sides}`;
//         console.log(diceStr, "diceStr");
//         return diceStr;
        
//     },

//     roll(diceStr){
//         let diceArry = [...diceStr] 
//         const [count, sides] = diceStr.split('d'); //deconstruct array

//         let lower = +sides; 
//         let upper = +count * +sides;
//         return randomInt(lower,upper);
//     }

 
// };

function makeDiceNotation(count,sides){
    return `${count}d${sides}`;
}

function testDiceNotation(){
    const count=10;
    const sides=1000;
    const diceStr1 = `10d1000`;
    const diceStr2 = makeDiceNotation(count,sides);
}

console.log("Expect diceStr1 and diceStr2 to equal 10d1000");
if (diceStr1 === diceStr2){
    console.log("passed")
}else{
    console.log("failed")
}

testDiceNotation();

//TEST Roll
// roll(diceStr){
    //         let diceArray = [...diceStr] 
    //         const [count, sides] = diceStr.split('d'); //deconstruct array
    
    //         let lower = +sides; 
    //         let upper = +count * +sides;
    //         return randomInt(lower,upper);
    //     }
    
     
    // };
function makeDiceRoll (diceStr2){
    const [x,y] = diceStr.split('d');
    let min = +y;
    let max = +x * +y;

}

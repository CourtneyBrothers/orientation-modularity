//The toDiceNotation method should accept an object with a sides and count property and convert it to a String with the dice notation i.e. "1d6" or "2d40". The roll method should accept a dice notation String and produce a random Number which is the result of the dice roll.

"use strict"
const randomInt = require('./math')


module.exports = {
    
    toDiceNotation({count,sides}){
        console.log(count,sides,"count");
        let diceStr = `${count}d${sides}`;
        console.log(diceStr, "diceStr");
        return diceStr;
        
    },

    roll(diceStr){
        let diceArry = [...diceStr] 
        const [count, sides] = diceStr.split('d'); //deconstruct array

        let lower = +count; 
        let upper = +count * +sides;
        return randomInt(lower,upper);
    }

 
};
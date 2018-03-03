//The toDiceNotation method should accept an object with a sides and count property and convert it to a String with the dice notation i.e. "1d6" or "2d40". The roll method should accept a dice notation String and produce a random Number which is the result of the dice roll.

"use strict"
const randomInt = require('./math')


module.exports = function({count,sides}){
    
    function toDiceNotation({count,sides}){
        diceStr = `${count}d${sides}`
        return diceStr;
    }

    function roll(diceStr){
        let diceArry = [...diceStr] 
        const [count, sides] = input.split('d'); //deconstruct array

        lower = +sides; 
        upper = +count * +sides;
        randomInt(lower,upper);
    }


    return{
        toDiceNotation,
        roll
    };

};
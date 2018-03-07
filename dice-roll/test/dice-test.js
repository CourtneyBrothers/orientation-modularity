const {roll,toDiceNotation}= require("../lib/dice");
const {assert:{isFunction,isNumber,isString,property,oneOf}} = require("chai");

describe("dice module", () => {
    describe("roll",()=>{
        it('should be a function', ()=>{
            isFunction(roll);
        });
        it('result of dice notation string enter should be a number', ()=>{
            isNumber(roll('1d20'));
        });
        it ("should accept a string and return a computed nomber",()=>{
            for (let i=0; i<10; i++){
                let diceNotation = `${i}d6`;
                oneOf(roll(diceNotation),Array.from(Array(61).keys()));
            };
        });
    });
    describe("toDiceNotation",()=>{
        it("should return a string",()=>{
            isString(toDiceNotation(2,4));
        });
        
    });
});


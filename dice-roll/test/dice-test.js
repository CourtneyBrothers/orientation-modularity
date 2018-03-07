const {roll,toDiceNotation}= require("../lib/dice");
const {assert:{isFunction,isNumber,isString}} = require("chai");

describe("dice module", () => {
    describe("roll",()=>{
        it('should be a function', ()=>{
            isFunction(roll);
        });
        it('result of dice notation string enter should be a number', ()=>{
            isNumber(roll('1d20'));
        });
    });
    describe("toDiceNotation",()=>{
        it("should return a string",()=>{
            isString(toDiceNotation(2,4));
        });
    });
});


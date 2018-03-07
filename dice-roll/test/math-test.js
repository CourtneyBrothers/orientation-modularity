const randomInt = require("../lib/math");
const {assert:{isFunction,isNumber,oneOf}} = require("chai");

describe("Math",()=>{
    describe("random int",()=>{
        it("should be a function",()=>{
            isFunction(randomInt);
        });
        it('should return a number',()=>{
            isNumber(randomInt(1,6));
            for (let i=0; i<1000; i++){
               oneOf(randomInt(1,6),[1,2,3,4,5,6])
            }
        });
        it('should handle args that are not numbers',()=>{
            oneOf(randomInt("1",6),[1,2,3,4,5,6])
        })
    });
});


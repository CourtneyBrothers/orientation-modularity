const parseArgs = require("../lib/parse-args");
const {assert:{isObject,deepEqual}} = require("chai");
const {expect}= require("chai");

describe("Parse Args",()=>{
    describe("Parse Args",()=>{
        it(" should return an object ",()=>{
            isObject(parseArgs());
        });
        it("should make an object with roll: 1 and sides 6",()=>{
            let args=[];
            deepEqual({count:1,sides:6},parseArgs(args));
        });
        it.skip ("should make an object with roll 20",()=>{
            let args1=[1,2,3,4];
            deepEqual({count:2,sides:3},parseArgs(args1));
        });
        it.skip ("should make an object with roll 20 sides 10",()=>{
            let args=[1,10,20];
            parseArgs(args);
        })
    });
});


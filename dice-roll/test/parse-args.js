const parseArgs = require("../lib/parse-args");
const {assert:{isObject}} = require("chai");

describe("Parse Args",()=>{
    describe("Parse Args",()=>{
        it(" should return an object ",()=>{
            isObject(parseArgs());
        });
    });
});
'use strict';

module.exports = function(lowBound, upperBound){
   console.log(lowBound, upperBound, "low", "up")
   console.log(Math.floor(Math.random()* (upperBound - lowBound + 1)), "math");

    return Math.floor(Math.random()* (upperBound - lowBound + 1)) + lowBound;

}
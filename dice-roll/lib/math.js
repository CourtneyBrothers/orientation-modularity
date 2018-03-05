'use strict';

module.exports = function(lowBound, upperBound){
   console.log(lowBound, upperBound, "low", "up")
    return Math.floor(Math.random()* (upperBound - lowBound + 1) + lowBound);

}
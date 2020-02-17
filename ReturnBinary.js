

//This challenge is from codewars.com

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.



//function accepts two arguments
function addBinary(a,b) {  
    //sum up the value of both arguments
    var result = a+b;
    //returns the value of result converted to binary(that is in base of 2) in string format
    return (result >>> 0).toString(2);
    }
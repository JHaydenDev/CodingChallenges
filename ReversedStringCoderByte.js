
/*
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
For example: if the input string is "Hello World and Coders"
then your program should return the string sredoC dna dlroW olleH. 
*/


/*
For this challenge I found the easiest and most concise way to finish was to string several functions together first
splitting the array, then using the reverse function to reverse the order and then join the new array together 
into a string.  I finally return the new variable.
*/
function FirstReverse(str) { 

    var reversedString=str.split("").reverse().join("");
    return reversedString; 
           
  }
     

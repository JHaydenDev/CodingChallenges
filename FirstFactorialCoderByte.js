/*
This Challenge is from CoderByte.com
Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it.
For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases,
the range will be between 1 and 18 and the input will always be an integer.
*/




/*Here I use an if/else statement to solve the challenge.
The if statement covers 1 and 0 since you cant return multiple factorials of those numbers.
Then I use the else statement to take num and multiply it as you would for a factorial against num-1 
*/
function FirstFactorial(num) { 

    if (num === 1 || num === 0){
         return 1; 
   
    }
   else {
       return num * FirstFactorial(num-1)}
  }
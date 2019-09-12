//This Challenge is from CoderByte.com
// Letter Capitalize 
// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first
// letter of each word.  Words will be separated by only one space.
// Use the Parameter Testing feature in the box below to test your code with different arguments.

function LetterCapitalize(str) { 
    //I first created a new variable then split it.  I then mapped the first letter of each new string and made that character upper case
    //I then added that string to the rest of the string which was lowercased and joined them.  Finally I returned the new variable.
    const newString = str.split(/\s+/).map( s => s.charAt( 0 ).toUpperCase() + s.substring(1).toLowerCase() ).join(" ");
      // code goes here  
      return newString; 
             
    }
       
    // keep this function call here 
    LetterCapitalize(readline());
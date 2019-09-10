// Challenge
// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
//Replace every letter in the string with the letter following it in the alphabet 
//(ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and 
//finally return this modified string.
// Sample Test Cases
// Input:"hello*3"

// Output:Ifmmp*3


// Input:"fun times!"

// Output:gvO Ujnft!


function LetterChanges(str) {
  //Set up my variables, trim the whitespace in the string and convert the string to lower case.
    str = str.trim().toLowerCase();
    var len = str.length;
    var newStr = '';
    
    //Itterate throuth the letters using a for loop.
    for (var i = 0; i < len; i++) {

        //Found character code index and tested for matches in the string.
      if (/[a-ce-gi-mo-su-y]/.test(str[i])) {
        newStr += String.fromCharCode(((str[i].charCodeAt(0) - 18) % 26) + 97)    
      }
      else if (/[zdhnt]/.test(str[i])) {
          newStr += String.fromCharCode(((str[i].charCodeAt(0) - 18) % 26) + 65);
      }
      else {
       newStr += str[i]; 
      }
    }
    return newStr; 
           
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  LetterChanges(readline());
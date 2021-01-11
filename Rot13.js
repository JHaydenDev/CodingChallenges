//This challenge is from codewars.com

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let cipher = '';
    message.split('').forEach(str => {
      if (alphabet.indexOf(str) !== -1 || upperAlpha.indexOf(str) !== -1) {
        let finStr = '';
        if (str === str.toUpperCase()) {
          finStr = upperAlpha.substr(upperAlpha.indexOf(str, upperAlpha[-1])) + upperAlpha.substr(0, upperAlpha.indexOf(str))
          cipher += finStr[finStr.indexOf(str) + 13]
        } else {
          finStr = alphabet.substr(alphabet.indexOf(str, alphabet[-1])) + alphabet.substr(0, alphabet.indexOf(str))
          cipher += finStr[finStr.indexOf(str) + 13]
        }
      } else {
         cipher += str;
      }
    });
    return cipher
  }
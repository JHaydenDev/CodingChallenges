/*
This Challenge is from CoderByte.com
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
If there are two or more words that are the same length, return the first word from the string with that length.
Ignore punctuation and assume sen will not be empty. 
*/

function LongestWord(sen) { 
    //Here I use .match to filter the characters that we need
    var arr = sen.match(/[a-z0-9]+/gi);
    //I now use .sort to take the elements and orginize them by size.
    var sorted = arr.sort(function(a, b) {
        return b.length - a.length;
      });
      //Here I just return the first element sorted.
      return sorted[0];
      
    }
       
    // keep this function call here 
    LongestWord(readline());
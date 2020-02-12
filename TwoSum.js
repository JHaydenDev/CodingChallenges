//This challenge is from codewars.com

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
function twoSum(numbers, target) {
    var sums = [];
    for (var i = 0; i < numbers.length; i++) {
      for (var j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target && numbers.indexOf(numbers[i]) != numbers.indexOf(numbers[j])) {
          sums.push(numbers.indexOf(numbers[i]), numbers.indexOf(numbers[j]));
        }
      }
    }
    return sums;
  }

//This solution works for most cases but if there are multiple integers of the same number this returns an empty array.

function twoSum(numbers, target) {
    const numsMap = new Map();
    for (let i = 0; i < numbers.length; i++) {
        if(numsMap.has(target - numbers[i])) {
            return [numsMap.get(target - numbers[i], i)];
            // get() returns a specified element associated with the specified key from the Map object.
        } else {
            numsMap.set(numbers[i], i);
            //  set() adds or updates an element with a specified key and value to a Map object.
        }
    }
}

//This solution checks everything in one pass and solves the issues with the previous solution.
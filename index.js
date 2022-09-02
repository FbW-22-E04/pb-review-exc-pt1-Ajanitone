// ### CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
//  ex:

const reverseString = (str) => str.split("").reverse().join("");

console.log("Q1: Reversed string:", reverseString("hello"));

console.log(
  "----------------------------------------------------------------------"
);

// #### CHALLENGE 2: VALIDATE A PALINDROME
// // Return true if palindrome and false if not
// // ex:

const isPalindrome = (str) => {
  let strRev = str.split("").reverse().join("");

  if (str === strRev) {
    return true;
  }
  return false;
};
console.log("Q2:Is this a Palindrome?", isPalindrome("racecar"));
console.log("Q2:Is this a Palindrome?", isPalindrome("hello"));
console.log("Q2:Is this a Palindrome?", isPalindrome("ojijo"));

console.log(
  "----------------------------------------------------------------------"
);

// ### CHALLENGE 3: REVERSE AN INTEGER
// // Return an integer in reverse
// // ex:

const reverseInt = (int) =>
  parseFloat(int.toString().split("").reverse().join("")) * Math.sign(int);

console.log("Q3:Reversed integer", reverseInt(521));

console.log(
  "----------------------------------------------------------------------"
);

// ### CHALLENGE 4: CAPITALIZE LETTERS
// // Return a string with the first letter of every word capitalized
// //  ex:
// capitalizeLetters('i love javascript') === 'I Love Javascript';

const capitalizeLetters = (str) => str.toUpperCase();

console.log("Q4:", capitalizeLetters("i love javascript"));

console.log(
  "----------------------------------------------------------------------"
);

// ### CHALLENGE 5: MAX CHARACTER
// // Return the character that is most common in a string
// // ex:
// maxCharacter('javascript') == 'a';

const maxCharacter = (str) => {
  let max = 0;
  maxChar = "";
  str.split("").forEach((char) => {
    if (str.split(char).length - 1 > max) {
      max = str.split(char).length - 1;
      maxChar = char;
    }
  });
  return maxChar;
};

console.log(
  "Q5:The most common character in the string is:",
  maxCharacter("javascript")
);

console.log(
  "----------------------------------------------------------------------"
);
// ### CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

const fizzBuzz = () => {
  for (let i = 1; i < 101; i++) {
    i % 3 === 0 && i % 5 === 0
      ? console.log("FizzBuzz")
      : i % 3 === 0
      ? console.log("Fizz")
      : i % 5 === 0
      ? console.log("Buzz")
      : console.log(i);
  }
};

// fizzBuzz();

console.log(
  "----------------------------------------------------------------------"
);
// ### CHALLENGE 7: LONGEST WORD
// Return the longest word of a string
// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string
// ex:
// longestWord('Hi there, my name is Brad') === 'there,';
// longestWord('My name is Brad''My name is Brad') === ['name', 'brad'];
// longestWord('Brad') === 'brad';

const longestWord = (str) => {
  const sorted = str.split(" ").sort((a, b) => b.length - a.length);
  const filter = sorted.filter((el) => el.length >= sorted[0].length);
  //   console.log(sorted);
  //   console.log(filter);
  return filter.length === 1 ? filter.join("") : filter;
};

console.log("Q7:", longestWord("Hi there, my name is Brad"));
console.log("Q7:", longestWord("My name is Brad"));

console.log(
  "----------------------------------------------------------------------"
);

// ### CHALLENGE 8: ARRAY CHUNKING
// // Split an array into chunked arrays of a specific length
// // ex:
// chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]];
// chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2], [3, 4], [5, 6], [7]]; {}

const chunkArray = (arr, len) => {
  let pushedArr = [];
  return arr.reduce((acc, el) => {
    pushedArr.push(el);
    if (pushedArr.length === len) {
      acc.push(pushedArr);
      pushedArr = [];
    }
    return acc;
  }, []);
};

console.log("Q8:", chunkArray([1, 2, 3, 4, 5, 6, 7], 2));
console.log("Q8:", chunkArray([1, 2, 3, 4, 5, 6, 7], 3));

console.log(
  "----------------------------------------------------------------------"
);

// ### CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex:
// [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

const flattenArr = (arr) => arr.flat();

console.log("Q9:", flattenArr([[1, 2], [3, 4], [5, 6], [7]]));

console.log(
  "----------------------------------------------------------------------"
);

// ### CHALLENGE 10: ANAGRAM
// Return true if anagram and false if not
// ex. isAnagram('elbow', 'below') === true
// ex. isAnagram('Dormitory', ''dirty room##'') --> false

const anagram = (s1, s2) => {
  return s1.split("").sort().join("") === s2.split("").sort().join("");
};

console.log("Q10:", anagram("elbow", "below"));
console.log("Q10:", anagram("Dormitory", "dirty room##"));
console.log("Q10:", anagram("Dormitory", "yrotimroD"));
console.log(
  "----------------------------------------------------------------------"
);
// ### CHALLENGE 11: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers
// ex:
// addAll(2, 5, 6, 7) === 20;

console.log(
  "----------------------------------------------------------------------"
);

const addAll = (arr) => arr.reduce((total, num) => total + num, 0);

console.log("Q11:", addAll([2, 5, 6, 7]));

console.log(
  "----------------------------------------------------------------------"
);

// ### CHALLENGE 12: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex.
// sumAllPrimes(10) === 17;

console.log(
  "----------------------------------------------------------------------"
);

function sumAllPrimes(num) {
  var sumArr = [];
  for (var i = 0; i <= num; i++) {
    if (isPrime(i)) sumArr.push(i);
  }

  sumArr = sumArr.reduce(function (a, b) {
    return a + b;
  });

  return sumArr;
}

function isPrime(num) {
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log("Q12:", sumAllPrimes(10));

console.log(
  "----------------------------------------------------------------------"
);

// ### CHALENGE 13: SEEK AND DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex:
// seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello'];

const seekAndDestroy = (arr, ...num) => {
  const target = num;

  let i = 0;
  while (i < arr.length) {
    if (arr[i] === target) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  return arr;
};

function removeFirst(arr, target) {
  let idx = arr.indexOf(target);
  if (idx > -1) {
    return arr.splice(idx, 1);
  }
  return target;
}

console.log("Q13:", seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6));

console.log(
  "----------------------------------------------------------------------"
);

// ### CHALLENGE 14: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex:
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116];

const evenOddSums = (arr) => {
  let { even, odd } = arr.reduce(
    (acc, num) => {
      if (num % 2 == 0) {
        acc.even += num;
      } else {
        acc.odd += num;
      }

      return acc;
    },
    {
      even: 0,
      odd: 0,
    }
  );

  return {
    even,
    odd,
  };
};

console.log("Q14:", evenOddSums([50, 60, 60, 45, 71]));

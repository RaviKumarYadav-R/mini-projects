// function reverseString(str) {
//   // #1
// //   return str.split("").reverse().join("")

//   // #2
//   let reversed = "";
//   for (let i = 0; i < str.length; i++) {
//     reversed = str[i] + reversed;
//   }
//   return reversed;
// }
// console.log(reverseString("hello")); // "olleh"

// function countVowels(str) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let vowelsCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     vowels.includes(str[i]) ? vowelsCount++ : vowelsCount;
//   }
//   return vowelsCount;
// }
// console.log(countVowels("javascript")); // 3

// function fizzBuzz() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz();

// function isPalindrome(str) {
//   for (let left = 0, right = str.length - 1; left < right; left++, right--) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//   }

//   return true;
// }
// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello")); // false

// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(factorial(5)); // 120

// function findMax(arr) {
//   //#1
//   return Math.max(...arr);
//   //#2

//   // let largest = arr[0]
//   // for (let i = 1; i < arr.length; i++) {
//   //    if(arr[i] > largest){
//   //     largest = arr[i]
//   //    }
//   // }
//   // return largest
// }
// console.log(findMax([5, 1, 9, 3, 7])); // 9

// function capitalizeWords(str) {
//   let strArray = str.split(" ");
//   let capitalizeWordArray = [];
//   for (let i = 0; i < strArray.length; i++) {
//     capitalizeWordArray.push(
//       strArray[i][0].toUpperCase() + strArray[i].slice(1, strArray[i].length)
//     );
//   }
//   return capitalizeWordArray.join(" ");
// }
// console.log(capitalizeWords("hello world")); // "Hello World"

// function removeDuplicates(arr) {
//   // #1
//   // return [...new Set(arr)]

//   // #2

//   return arr.filter((elem, i, array) => array.indexOf(elem) === i);
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// function countChar(str, char) {
//   let charCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) charCount++;
//   }
//   return charCount;
// }
// console.log(countChar("javascript", "a")); // 2

// function reverseWords(str) {
//   let stringArray = str.split(" ");
//   let reversedArray = [];
//   for (let i = 0; i < stringArray.length; i++) {
//     reversedArray.push(stringArray[i].split("").reverse().join(""));
//   }
//   return reversedArray.join(" ");
// }
// console.log(reverseWords("hello world")); // "olleh dlrow"

// function countOccurrences(arr, target) {
//   return arr.filter((num) => num === target).length;
// }
// console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2)); // 3

// function removeFalsy(arr) {
//    return arr.filter(Boolean)
//   }
//   console.log(removeFalsy([0, "hello", false, "", 42, null, undefined])); // ["hello", 42]

// function firstUniqueChar(str) {
//   let uniqueChar = new Map();
//   for (const char of str) {
//     uniqueChar.get(char)
//       ? uniqueChar.set(char, uniqueChar.get(char) + 1)
//       : uniqueChar.set(char, 1);
//   }

//   for (const char of str) {
//     if (uniqueChar.get(char) === 1) {
//       return char;
//     }
//   }

//   return null
// }

// console.log(firstUniqueChar("aabbccddeefg")); // "f"
// console.log(firstUniqueChar("aabbcc")); // null

// function digitalRoot(num) {
//   return num
//     .toString()
//     .split("")
//     .map(Number)
//     .reduce((acc, numb) => acc + numb, 0)
//     .toString()
//     .split("")
//     .map(Number)
//     .reduce((acc, numb) => acc + numb, 0);
// }

// console.log(digitalRoot(942)); // 6
// console.log(digitalRoot(132189)); // 6

// function longestWord(str) {
//   return str.split(" ").sort((a, b) => b.length - a.length)[0]
// }

// console.log(longestWord("The quick brown fox jumps over the lazy dog"));
// Output: "jumps"

// function isAnagram(str1, str2) {
//   let str1Sort = str1.split("").sort().join("");
//   let str2Sort = str2.split("").sort().join("");
//   return str1Sort === str2Sort ? true : false;
// }

// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("hello", "world")); // false

function missingNumber(arr) {
  let sumofArray = arr.reduce((acum, all) => {
    return acum + all
  }, 0)
  let biggestNumber = Math.max(...arr), totalSum = 0
  for (let i = 0; i <= biggestNumber; i++) {
    totalSum += i
    
  }
  console.log(totalSum - sumofArray);
  
}
missingNumber([0, 1, 2, 4, 5]); // Output: 3
missingNumber([3, 0, 1]);       // Output: 2



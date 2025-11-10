/*
1. Sum Array Elements with a For Loop
   - Define a function `sumArray(numbers)` that uses a for loop
     to sum all elements in an array of numbers.
   - Log the final sum.
*/

// for (let i = 0; i < 5; i++) { console.log("i: ", i); }
console.log("Exp.1");
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log("Sum: ", sum);
}
sumArray([0, 1, 2, 3]);

/*
2. Find Maximum Number in an Array
   - Define a function `findMax(numbers)` that uses a for loop to iterate
     through an array and find the largest value.
   - Log the largest value.
*/
console.log("Exp.2");
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  console.log("max: ", max);
}

findMax([6, 3, 4, 2, 5]);

/*
3. Count Odd and Even Numbers
   - Define a function `countOddEven(numbers)` that loops through an array
     of numbers and counts how many are odd and how many are even.
   - Log the counts in the format: "Odd: X, Even: Y"
*/
console.log("Exp.3");

function countOddEven(numbers) {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      ++even;
    } else {
      ++odd;
    }
  }
  console.log("Odd: ", odd, "Even: ", even);
}

countOddEven([2, 3, 4, 5, 6, 8]);
countOddEven([1, 2, 3, 4, 5, 7, 9]);

/*
4. Sum of Numbers in a Range (While Loop)
   - Define a function `sumRange(start, end)` that uses a while loop
     to sum all integers from `start` to `end` (inclusive).
   - Log the final sum.
*/

console.log("Exp.4");
function sumRange(start, end) {
  let sum = start;

  if (start < end) {
    let i = start + 1; // i  is for index
    while (i <= end) {
      console.log("While loop iteration:", i);
      sum += i; // sum = sum + i;
      i++;
    }
  } else {
    let i = start - 1;
    while (i >= end) {
      console.log("While loop iteration:", i);
      sum += i; // sum = sum + i;
      i--;
    }
  }
  console.log(sum);
}

sumRange(5, 13);
sumRange(13, 5);
sumRange(13, 13);

console.log("Exp.4.1");

function sumRange(start, end) {
  let sum = 0;
  let i = start;
  while (i <= end) {
    sum += i;
    i++;
  }
  console.log("Sum: ", sum);
}
sumRange(6, 10);

/*
5. Reverse an Array
   - Define a function `reverseArray(arr)` that reverses the elements
     of an array manually using a for loop (without using .reverse()).
   - Log the reversed array.
*/
console.log("Exp.5");

function reverseArray(arr) {
  let reverseArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i]);
  }
  console.log("Reversed array is ", reverseArray);
}

reverseArray([1, 2, 3]);

/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/
console.log("Exp.6");

function filterNegative(numbers) {
  let positiveNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      positiveNumbers.push(numbers[i]);
    }
  }
  console.log(positiveNumbers);
}
filterNegative([3, 6, -8, 5, -3, 7]);

/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/
console.log("Exp.7");

doubleValues([1, 2, 3]);

function doubleValues(numbers) {
  let doubleTwo = [];
  for (let num of numbers) {
    doubleTwo.push(num * 2);
  }
  console.log(doubleTwo);
}

/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
console.log("Exp.8");

printCharacters("İstanbul");

function printCharacters(str) {
  for (let character of str) {
    console.log(character);
  }
}

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/
console.log("Exp.9");

function sumObjectValues(obj) {
  let sumObject = 0;
  for (const counter in obj) {
    sumObject += obj[counter];
  }
  console.log(sumObject);
}

sumObjectValues({ a: 40, b: 30, c: 30 });

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/
console.log("Exp.10");

function printObjectKeys(obj) {
  let objectKey = [];
  for (let key in obj) {
    objectKey.push(key);
  }
  console.log(objectKey);
}

printObjectKeys({ firstName: "Kuzey", lastName: "Güner", age: 4 });

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/
console.log("Exp.11");

function sumWithDoWhile(numbers) {
  let sum = 0;
  let i = 0;

  do {
    sum += numbers[i];
    i++;
  } while (i < numbers.length);
  console.log(sum);
}
sumWithDoWhile([1, 2, 3]);

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
console.log("Exp.12");

function removeDuplicates(arr) {
  let remove = [];
  for (let char of arr) {
    if (!remove.includes(char)) {
      remove.push(char);
    }
  }
  console.log(remove);
}

removeDuplicates([1, 2, 3, 4, 5, 4, 3, 2, 1]);

/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/
console.log("Exp.13");

function factorial(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= [i];
  }
  console.log(sum);
}
factorial(6);

/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/
console.log("Exp.14");

function reverseWords(sentence) {
  if (typeof sentence === "string") {
    let splitWords = sentence.split(" ");
    let reverseWords = splitWords.reverse();
    let joinWord = reverseWords.join(" ");
    console.log(joinWord);
  }
}

reverseWords(
  "Logical operators are fully described in the JS Logical chapter."
);

/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
console.log("Exp.15");

function filterLongWords(words, minLength) {
  let longWords = [];
  for (let char of words) {
    if (char.length >= minLength) {
      longWords.push(char);
    }
  }
  console.log(longWords);
}

filterLongWords(["words", "sea", "like", "cat", "dog", "no", "at"], 3);

/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
console.log("Exp.16");

function logElementsWithIndex(arr) {
  let index = [];
  for (let key in arr) {
    console.log("İndex: ", key, "Value: ", arr[key]);
  }
}

logElementsWithIndex([2, 4, 6, 8, 10, 12]);

/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
console.log("Exp.17");

function findMin(numbers) {
  minNum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minNum) {
      minNum = numbers[i];
    }
  }
  console.log(minNum);
}

findMin([2, 6, 9, 1]);

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/
console.log("Exp.18");

function countOccurrences(arr, word) {
  let repeatWords = 0;
  for (let char of arr) {
    if (char === word) {
      repeatWords++;
    }
  }
  console.log(repeatWords);
}

countOccurrences(["kedi", "köpek", "kuş", "kedi", "balık", "kedi"], "kedi");

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
console.log("Exp.19");

function removeFalsyValues(arr) {
  let trueWords = [];
  for (let char of arr) {
    if (char) {
      trueWords.push(char);
    }
  }
  console.log(trueWords);
}

removeFalsyValues([0, 1, false, 2, "", 3, null, undefined, NaN, 4, "kedi"]);

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
console.log("Exp.20");

function sumDigits(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    let digit = parseInt(str[i]);
    if (!isNaN(digit)) {
      sum += digit;
    }
  }
  console.log(sum);
}

sumDigits("11abg11");

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
console.log("Exp.21");

function averageArray(numbers) {
  let average = 0;
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  average = sum / numbers.length;
  console.log(average);
}
averageArray([1, 2, 3, 4]);

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
console.log("Exp.22");

function flattenArray(twoDArray) {
  let newString = [];
  for (let i = 0; i < twoDArray.length; i++) {
    newString = twoDArray.flat();
  }
  console.log(newString);
}

flattenArray([
  [1, 2],
  [3, 4],
]);

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
console.log("Exp.23");

function findWordsWithLetter(words, letter) {
  let foundWords = [];
  for (let char of words) {
    if (char.includes(letter)) {
      foundWords.push(char);
    }
  }
  console.log(foundWords);
}
findWordsWithLetter(["Ben", "kedi", "aile"], "a");

/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/
console.log("Exp.24");

function pushPopExample(arr, itemToPush) {
  let pustItem = arr;
  arr.push(itemToPush);
  console.log(pustItem);
  const popItem = pustItem.pop();
  console.log(popItem);
}

pushPopExample([1, 2, 3], 4);

/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/
console.log("Exp.25");

function manageQueue(queue, newPerson) {
  let pustItem = queue;
  queue.push(newPerson);
  console.log(pustItem);
  const shiftItem = pustItem.shift();
  console.log(shiftItem);
  console.log(pustItem);
}

manageQueue(["Sinem", "Cevdet"], "Kuzey");

/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
console.log("Exp.26");

function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  console.log(todoList);
  todoList.splice(startIndex, deleteCount);
  console.log(todoList);
  const newList = todoList.concat(newTasks);
  console.log(newList);
}
updateTodoList(
  ["Study JS", "Eat breakfast", "Walk dog", "Shower in bath"],
  [1],
  [2],
  "Go to the supermarket"
);

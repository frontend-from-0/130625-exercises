/*
1. Sum Array Elements with a For Loop
   - Define a function `sumArray(numbers)` that uses a for loop
     to sum all elements in an array of numbers.
   - Log the final sum.
*/
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
}

sumArray([1, 2, 3, 4]);
/*
2. Find Maximum Number in an Array
   - Define a function `findMax(numbers)` that uses a for loop to iterate
     through an array and find the largest value.
   - Log the largest value.
*/
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  console.log("Maximum number is:", max);
}

findMax([3, 5, 7, 2, 8]);

/*
3. Count Odd and Even Numbers
   - Define a function `countOddEven(numbers)` that loops through an array
     of numbers and counts how many are odd and how many are even.
   - Log the counts in the format: "Odd: X, Even: Y"
*/

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

  console.log("Odd:", odd, "Even:", even);
}

countOddEven([1, 2, 3, 4, 5]);

/*
4. Sum of Numbers in a Range (While Loop)
   - Define a function `sumRange(start, end)` that uses a while loop
     to sum all integers from `start` to `end` (inclusive).
   - Log the final sum.
*/
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

/*
5. Reverse an Array
   - Define a function `reverseArray(arr)` that reverses the elements
     of an array manually using a for loop (without using .reverse()).
   - Log the reversed array.
*/
function reverseArray(arr) {
  const reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  console.log("Reversed array is", reversedArray);
}
reverseArray([1, 2, 3, 4, 5]);

/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/

function filterNegative(numbers) {
  const filteredArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number" && numbers[i] >= 0) {
      filteredArray.push(numbers[i]);
    }
  }

  console.log("Filtered positive numbers:", filteredArray);
}

filterNegative([-3, -2, -1, 0, 1, 2, 3, 4]);

/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/

function doubleValues(numbers) {
  const multipliedNumbers = [];
  for (const number of numbers) {
    multipliedNumbers.push(number * 2);
  }

  console.log("Multiplied numbers:", multipliedNumbers);
}

doubleValues([2, 3, 4, 5]);

/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/

function printCharacters(str) {
  for (const letter of str) {
    console.log("Letters of lavender:", letter);
  }
}

printCharacters("lavender");

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/

function sumObjectValues(obj) {
  let sum = 0;
  for (const numbers in obj) {
    if (typeof obj[numbers] === "number") sum += obj[numbers];
  }

  console.log("Sum of the numeric values:", sum);
}

sumObjectValues({ a: 10, b: 20, c: 5 });

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/

function printObjectKeys(obj) {
  for (const key in obj) {
    console.log("The keys are:", key);
  }
}

printObjectKeys({ name: "Alice", age: 25 });

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/

function sumWithDoWhile(numbers) {
  let sum = 0;
  let i = 0;
  do {
    sum += numbers[i];
    i++;
  } while (i < numbers.length);
  console.log("Sum of the numbers is:", sum);
}

sumWithDoWhile([1, 2, 3, 4, 5, 6, 7]);

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/

function removeDuplicates(arr) {
  const uniqueNumbers = [];
  for (const number of arr) {
    if (!uniqueNumbers.includes(number)) {
      uniqueNumbers.push(number);
    }
  }

  console.log("Unique numbers are:", uniqueNumbers);
}

//Gemini Öğrenme Rehberi'nden destek aldım. ! ile kullanımı bilmiyordum.

removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 6]);

/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/

function factorial(n) {
  let totalFactorial = 1;
  for (let i = 2; i <= n; i++) {
    totalFactorial *= i;
  }

  console.log("Total factorial is:", totalFactorial);
}

factorial(3);

//Gemini Öğrenme Rehberi'nden destek aldım. (Her bir loop'ta faktoriyelin 1 çarpımı yapılıyor. Ben tek bir seferde yapılacak gibi hatalı düşündüm başta. Hesaplama mantığını gemini'ya sordum.)

/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/

function reverseWords(sentence) {
  let array = [];
  array = sentence.split(" ");
  array.reverse();
  let reversedSentence = array.join(" ");

  console.log("Reversed Sentence:", reversedSentence);
}

reverseWords("Hello I am Elif");

//Gemini Öğrenme Rehberi'nden destek aldım. (önce loop ile yapmaya çalıştım ama o biraz karışık geldi. Sonrasında built-in methodlara W3school'dan baktım.)

/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/

function filterLongWords(words, minLength) {
  const longWords = [];
  for (let i = 0; i < words.length; i++) {
    if (typeof words[i] === "string" && words[i].length >= minLength) {
      longWords.push(words[i]);
    }
  }

  console.log("Long Words:", longWords);
}

filterLongWords(["Lavanta", "Itır", "Gül", "Biberiye"], 5);

/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/

function logElementsWithIndex(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
}

logElementsWithIndex(["Defter", "Kalem", "Bilgisayar"]);

/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/

function findMin(numbers) {
  let min = numbers[0];

  for (i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  console.log("The smallest number is:", min);
  return min;
}

findMin([2, 3, 5, 1, 8, 9]);

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/

function countOccurrences(arr, word) {
  let wordCount = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      wordCount++;
    }
  }

  console.log("Count of the word is", wordCount);
}

countOccurrences(["name", "age", "e-mail", "name", "phone", "name"], "name");

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/

function removeFalsyValues(arr) {
  const correctedArray = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i]) {
      correctedArray.push(arr[i]);
    }
  }

  console.log("The new array without falsy values:", correctedArray);
  return correctedArray;
}

//Gemini (if condition'ın yalnızca değeri true olursa çalıştığını bilmiyordum, o kısımda destek aldım.)

removeFalsyValues([23, 0, "tea", false, true, NaN, 12, "hi", undefined, ""]);

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/

function sumDigits(str) {
  let sum = 0;
  for (const character of str) {
    const convertedValue = parseInt(character);
    if (!isNaN(convertedValue)) {
      sum += convertedValue;
    }
  }

  console.log("Sum of the digits:", sum);
}

//Gemini (string'in içinde number var mı koşulunu (!isNan kullanımı) öğrenmek için Öğrenme Rehberi kullandım.

sumDigits("Frontend123");

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/

function averageArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    {
      sum / numbers.length;
    }
  }

  console.log("Avarage of the array is:", sum / numbers.length);
}

averageArray([2, 3, 7]);

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/

function flattenArray(twoDArray) {
  const oneDimensionalArray = [];

  for (let i = 0; i < twoDArray.length; i++)
    for (let j = 0; j < twoDArray[i].length; j++) {
      oneDimensionalArray.push(twoDArray[i][j]);
    }

  console.log(oneDimensionalArray);
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

function findWordsWithLetter(words, letter) {
  const newArray = [];
  for (const word of words) {
    if (word.includes(letter)) {
      newArray.push(word);
    }
  }

  console.log("Filtered array is:", newArray);
  return newArray;
}

findWordsWithLetter(["kulaklık", "telefon", "bardak"], "a");

/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/

function pushPopExample(arr, itemToPush) {
  arr.push(itemToPush);
  console.log("Pushed array:", arr);
  const poppedElement = arr.pop();
  console.log("Popped element:", poppedElement);
  console.log("Final array:", arr);
}

pushPopExample([2, 3, 4, 5, 6], 7);

/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/

function manageQueue(queue, newPerson) {
  queue.push(newPerson);
  console.log("Pushed queue:", queue);
  const removedPerson = queue.shift();
  console.log("Removed Person:", removedPerson);
  console.log("Final queue:", queue);
}

manageQueue(["Person1", "Person2", "Person3"], "Person4");

/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/

function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  console.log("Current List:", todoList);

  todoList.splice(startIndex, deleteCount);

  todoList.push(...newTasks);

  console.log("Updated List:", todoList);
}

const todoList = ["Study JS", "Eat breakfast", "Walk dog"];

updateTodoList(["Study JS", "Eat breakfast", "Walk dog"], 2, 1, "Cook dinner");

// Bu soruda da Gemini Öğrenme Rehberi'nden faydalandım.

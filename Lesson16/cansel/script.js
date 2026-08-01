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
  console.log('Sum of array:', sum);
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
  console.log('Maximum number is:', max);
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
      even++;
    } else {
      odd++;
    }
  }
  console.log(`Odd: ${odd}, Even: ${even}`);
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
    let i = start + 1;
    while (i <= end) {
      sum += i;
      i++;
    }
  } else {
    let i = start - 1;
    while (i >= end) {
      sum += i;
      i--;
    }
  }
  console.log('Sum of range:', sum);
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
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  console.log('Reversed array is:', reversedArray);
}

reverseArray([1, 2, 3, 4, 5]);

/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/
function filterNegative(numbers) {
  let positiveNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      positiveNumbers.push(numbers[i]);
    }
  }
  console.log('Array without negatives:', positiveNumbers);
}

filterNegative([10, -5, 3, -1, 0, 8]);

/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/
function doubleValues(numbers) {
  let doubledArray = [];
  for (const num of numbers) {
    doubledArray.push(num * 2);
  }
  console.log('Doubled array:', doubledArray);
}

doubleValues([2, 4, 6]);

/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
function printCharacters(str) {
  console.log(`Characters of "${str}":`);
  for (const char of str) {
    console.log(char);
  }
}

printCharacters('Hello');

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/
function sumObjectValues(obj) {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      sum += obj[key];
    }
  }
  console.log('Sum of object values:', sum);
}

sumObjectValues({a: 10, b: 20, c: 5, d: 'string'});

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/
function printObjectKeys(obj) {
  console.log('Object keys:');
  for (const key in obj) {
    console.log(key);
  }
}

printObjectKeys({ name: "Alice", age: 25, role: "Developer" });

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/
function sumWithDoWhile(numbers) {
  let sum = 0;
  let i = 0;
  if (numbers.length > 0) {
    do {
      sum += numbers[i];
      i++;
    } while (i < numbers.length);
  }
  console.log('Total sum with do-while:', sum);
}

sumWithDoWhile([5, 10, 15]);

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
function removeDuplicates(arr) {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  console.log('Array without duplicates:', uniqueArray);
}

removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(`Factorial of ${n}:`, result);
}

factorial(5);

/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/
function reverseWords(sentence) {
  let wordsArray = sentence.split(' ');
  wordsArray.reverse();
  let reversedSentence = wordsArray.join(' ');
  console.log('Reversed sentence:', reversedSentence);
}

reverseWords('Hello world this is JavaScript');

/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
function filterLongWords(words, minLength) {
  let longWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      longWords.push(words[i]);
    }
  }
  console.log(`Words with length >= ${minLength}:`, longWords);
}

filterLongWords(['apple', 'cat', 'banana', 'dog'], 4);

/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
function logElementsWithIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
}

logElementsWithIndex(['HTML', 'CSS', 'JS']);

/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
function findMin(numbers) {
  if (numbers.length === 0) return;
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  console.log('Smallest number is:', min);
}

findMin([5, 2, 8, 1, 9]);

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/
function countOccurrences(arr, word) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      count++;
    }
  }
  console.log(`Occurrences of "${word}":`, count);
}

countOccurrences(['apple', 'banana', 'apple', 'orange', 'apple'], 'apple');

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
function removeFalsyValues(arr) {
  let truthyArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthyArray.push(arr[i]);
    }
  }
  console.log('Array without falsy values:', truthyArray);
}

removeFalsyValues([0, 1, false, 2, '', 3, null, 'hello', undefined, NaN]);

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
function sumDigits(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    let num = parseInt(str[i]);
    if (!isNaN(num)) {
      sum += num;
    }
  }
  console.log(`Sum of digits in "${str}":`, sum);
}

sumDigits('abc123xyz4');

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
function averageArray(numbers) {
  if (numbers.length === 0) {
    console.log('Average: 0');
    return;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let average = sum / numbers.length;
  console.log('Average of array elements:', average);
}

averageArray([10, 20, 30, 40]);

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
function flattenArray(twoDArray) {
  let flatArray = [];
  for (let i = 0; i < twoDArray.length; i++) {
    for (let j = 0; j < twoDArray[i].length; j++) {
      flatArray.push(twoDArray[i][j]);
    }
  }
  console.log('Flattened array:', flatArray);
}

flattenArray([[1, 2], [3, 4], [5]]);

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
function findWordsWithLetter(words, letter) {
  let filteredWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(letter)) {
      filteredWords.push(words[i]);
    }
  }
  console.log(`Words containing "${letter}":`, filteredWords);
}

findWordsWithLetter(['apple', 'banana', 'cherry', 'date'], 'a');

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
  console.log('Array after push:', arr);
  let poppedItem = arr.pop();
  console.log('Popped element:', poppedItem);
  console.log('Final array:', arr);
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
function manageQueue(queue, newPerson) {
  queue.push(newPerson);
  console.log('Queue after push:', queue);
  let removedPerson = queue.shift();
  console.log('Removed person:', removedPerson);
  console.log('Final queue:', queue);
}

manageQueue(['Alice', 'Bob'], 'Charlie');

/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  console.log('Current to-do list:', todoList);
  todoList.splice(startIndex, deleteCount, ...newTasks);
  console.log('Updated to-do list:', todoList);
}

const todoList = ['Study JS', 'Eat breakfast', 'Walk dog'];
updateTodoList(todoList, 1, 1, 'Read a book', 'Go to gym');
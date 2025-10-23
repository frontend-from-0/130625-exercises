/*
1. Sum Array Elements with a For Loop
   - Define a function `sumArray(numbers)` that uses a for loop
     to sum all elements in an array of numbers.
   - Log the final sum.
*/

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    console.log("Ex.1. Iteration:", i, "value: ", numbers[i]);
    sum += numbers[i];
  }
  console.log(`Ex.1.Current sum is: ${sum}`);
}
sumArray([1, 2, 3, 4]);

/*function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
}

sumArray([1, 2, 3, 4]); */
/*
2. Find Maximum Number in an Array
   - Define a function `findMax(numbers)` that uses a for loop to iterate
     through an array and find the largest value.
   - Log the largest value.
*/

function findMax(numbers) {
  let maxNumber = numbers[0];
  for (const number of numbers) {
    if (number > maxNumber) {
      maxNumber = number;
      console.log("Current number is:", number);
    }
  }
  console.log(`The max number is ${maxNumber}`);
}

findMax([3, 5, 7, 2, 8]);

/*

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
*/
/*
3. Count Odd and Even Numbers
   - Define a function `countOddEven(numbers)` that loops through an array
     of numbers and counts how many are odd and how many are even.
   - Log the counts in the format: "Odd: X, Even: Y"
*/
function countOddEven(numbers) {
  let oddNumbers = 0;
  let evenNumbers = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      evenNumbers++;
    } else {
      oddNumbers++;
    }
  }
  console.log("Odd:", oddNumbers, "Even:", evenNumbers);
}

countOddEven([1, 2, 3, 4, 5]);

/*
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
*/

/*
4. Sum of Numbers in a Range (While Loop)
   - Define a function `sumRange(start, end)` that uses a while loop
     to sum all integers from `start` to `end` (inclusive).
   - Log the final sum.
*/
function sumRange(start, end) {
  if (start > end) {
    //değişkenlerin yerlerini değiştirme
    let temp = start; //burda start değerini temp e atadık ki kaybolmasın
    start = end; //daha sonra end değeri olarak startı atadık
    end = temp; //sonra tempdeki koyduğumuz start değerini de end e atadık.
  }
  let sum = 0;
  let currentNum = start;
  while (currentNum <= end) {
    sum = sum + currentNum;
    currentNum++;
  }
  console.log(`The sum of the range is:${sum}`);
}

sumRange(5, 8);
sumRange(8, 5);
sumRange(5, 5);
/*

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
function reversedArray(arr) {
  let reverseArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i]);
    console.log("Reversing array iteration:", i, "value:", arr[i]);
  }
  console.log(`Reversed array is: ${reverseArray}`);
}

reversedArray([1, 2, 3, 4, 5]);

/*

function reverseArray(arr) {
  let reversedArray = [];
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
  let newArray = [];
  for (const number of numbers) {
    if (number >= 0) {
      newArray.push(number);
    }
  }
  console.log(`New array without negative numbers: ${newArray}`);
}

filterNegative([3, -1, 4, -2, 5, -3, 0]);

/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/

function doubleValues(numbers) {
  let doubledArray = [];
  for (let number of numbers) {
    number *= 2;
    doubledArray.push(number);
  }
  console.log(`Ex.7.New array with doubled numbers: ${doubledArray}`);
}

doubleValues([2, 4, 5, 6]);

/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/

function printCharacters(str) {
  for (let x of str) {
    console.log(x);
  }
}
printCharacters("hello");

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
    sum = sum + obj[key];
  }
  console.log(`The sums for the all numeric values:${sum}`);
}

sumObjectValues({ a: 10, b: 20, c: 5 });

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/

function printObjectKeys(obj) {
  let keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  console.log(`The keys of the objects are: ${keys}`);
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
  let k = 0;
  do {
    sum = sum + numbers[k];
    k++;
  } while (k <= numbers.length - 1);
  console.log(`The sum of the array using do-while loop is: ${sum}`);
}

sumWithDoWhile([3, -1, 4, -2, 5, -3, 0]);

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
function removeDuplicates(arr) {
  let newArraywithoutDup = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArraywithoutDup.includes(arr[i]) === false) {
      newArraywithoutDup.push(arr[i]);
      console.log(`State of new array:${newArraywithoutDup}`);
    }
  }
  console.log(`The new array without duplicates is:${newArraywithoutDup}`);
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 5]);

/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/
function factorial(n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  console.log(`Ex.13.The result is:${product}`);
}

factorial(4);

/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/

function reverseWords(sentence) {
  let splitArray = sentence.split(" ");
  let collectWord = [];
  for (let i = splitArray.length - 1; i >= 0; i--) {
    collectWord = collectWord + " " + splitArray[i];
  }
  console.log(`The reversed sentence is:${collectWord}`);
}

reverseWords("Hey Jude, Dont make it bad");

/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
function filterLongWords(words, minLength) {
  let resultArray = [];
  for (const word of words) {
    if (word.length >= minLength) {
      resultArray.push(word);
    }
  }
  console.log(`The resulting array is:${resultArray}`);
}

filterLongWords(["apple", "banana", "kiwi", "grape", "watermelon"], 5);

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

logElementsWithIndex(["apple", "banana", "kiwi", "grape", "watermelon"]);

/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
function findMin(numbers) {
  let smallestNumber = numbers[0];
  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }
  console.log(`The smallest number is : ${smallestNumber}`);
}

findMin([2, 5, 6, 1, 0]);
findMin([-2, -4, 4, 2, 1, -1]);

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/

function countOccurrences(arr, word) {
  let countOccurrences = 0;
  for (const count of arr) {
    if (count === word) {
      ++countOccurrences;
    }
  }
  console.log(`Ex.18.The word appears ${countOccurrences} times.`);
}

countOccurrences(
  ["apple", "banana", "apple", "kiwi", "banana", "apple"],
  "apple",
);

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
function removeFalsyValues(arr) {
  let newArray = [];
  for (const values of arr) {
    if (values) {
      newArray.push(values);
    }
  }
  console.log(`Ex.19.The array cleaned from falsy values: ${newArray}`);
}

removeFalsyValues([0, 1, false, 2, "", 3, null, undefined, NaN, 4]);

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
function sumDigits(str) {
  let sum = 0;
  for (const number of str) {
    if (isNaN(parseInt(number)) === false) {
      sum += parseInt(number);
    }
  }
  console.log(`Ex.20.The sum of all digits in the string is:${sum}`);
}

sumDigits("abc123");
sumDigits("5h3ll0");

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/

function averageArray(numbers) {
  let sum = 0;
  let length = 0;
  for (const number of numbers) {
    sum = sum + number;
    ++length;
  }
  console.log(`The sum of the array is ${sum} and arrays length is ${length}`);
  console.log(`The average of the array elements is:${sum / length}`);
}

averageArray([2, 4, 6, 8, 10]);

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
function flattenArray(twoDArray) {
  let newArray = [];
  for (let i = 0; i < twoDArray.length; i++) {
    for (let j = 0; j < twoDArray[i].length; j++) {
      newArray.push(twoDArray[i][j]);
      console.log(`State of new array:${newArray}`);
    }
  }
  console.log(`The flattened array is:${newArray}`);
}
flattenArray([
  [1, 2],
  [3, 4],
  [5, 6],
]);

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
function findWordsWithLetter(words, letter) {
  let wordPackage = [];
  for (const x of words) {
    if (x.includes(letter)) {
      wordPackage.push(x);
    }
  }
  console.log(`Ex.23.The new array is: ${wordPackage}`);
}
findWordsWithLetter(["apple", "banana", "kiwi", "grape", "watermelon"], "a");

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
  let poppedElement = [];
  arr.push(itemToPush);
  console.log(`Ex.24.The updated array is ${arr}`);
  poppedElement = arr.pop();
  console.log(`The popped element is:${poppedElement}`);
  console.log(`The final array is: ${arr}`);
}

pushPopExample([1, 2, 3, 4], "hello");

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
  let removedPerson = [];
  queue.push(newPerson);
  console.log(`The updated queue:${queue}`);
  removedPerson = queue.shift();
  console.log(`The removed person: ${removedPerson}`);
  console.log(`The final queue is ${queue}`);
}

manageQueue(["Alice", "Bob", "Charlie"], "David");

/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  console.log(`Current list of tasks: ${todoList}`);
  todoList.splice(startIndex, deleteCount);
  todoList.push(...newTasks);
  console.log("Listenin Gerçek Uzunluğu:", todoList.length);
  console.log(`The new tasks are: ${newTasks}`);
  console.log(`Here you can find updated ${todoList}`);
 
}

const todoList = ["Study JS", "Eat breakfast", "Walk dog"];
updateTodoList(todoList, 1, 1, "Read a book", "Go shopping");

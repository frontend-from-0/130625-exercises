/*
1. Sum Array Elements with a For Loop
   - Define a function `sumArray(numbers)` that uses a for loop
     to sum all elements in an array of numbers.
   - Log the final sum.
*/
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log("Sum:", sum);
}


sumArray([1, 2, 3, 4, 5]); 

/*
2. Find Maximum Number in an Array
   - Define a function `findMax(numbers)` that uses a for loop to iterate
     through an array and find the largest value.
*/
function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    console.log("Max:", max);
}


findMax([1, 2, 3, 4, 5]);


/*
3. Count Odd and Even Numbers
   - Define a function `countOddEven(numbers)` that loops through an array
     of numbers and counts how many are odd and how many are even.
   - Log the counts in the format: "Odd: X, Even: Y"
*/
function countOddEven(numbers) {
    let oddCount = 0;
    let evenCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    console.log("Odd:", oddCount, "Even:", evenCount);
}


countOddEven([1, 2, 3, 4, 5]); 
  
/*
4. Sum of Numbers in a Range (While Loop)
   - Define a function `sumRange(start, end)` that uses a while loop
     to sum all integers from `start` to `end` (inclusive).
   - Log the final sum.
*/
function sumRange(start, end) {
    let sum = 0;
    while (start <= end) {
        sum += start;
        start++;
    }
    console.log("Sum of range:", sum);
}


sumRange(1, 5);

/*
5. Reverse an Array
   - Define a function `reverseArray(arr)` that reverses the elements
     of an array manually using a for loop (without using .reverse()).
   - Log the reversed array.
*/
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    console.log("Reversed Array:", reversed);
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
    console.log("Filtered Array (Negative removed):", positiveNumbers);
}


filterNegative([-1, 2, -3, 4, 5]); 

/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/
function doubleValues(numbers) {
    let doubled = [];
    for (let num of numbers) {
        doubled.push(num * 2);
    }
    console.log("Doubled Array:", doubled);
}


doubleValues([1, 2, 3, 4, 5]); 
/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
function printCharacters(str) {
    for (let char of str) {
        console.log(char);
    }
}


printCharacters("Hello"); 

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/
function sumObjectValues(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }
    console.log("Sum of object values:", sum);
}


sumObjectValues({a: 10, b: 20, c: 5});

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/
function printObjectKeys(obj) {
    for (let key in obj) {
        console.log(key);
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
    console.log("Total sum (do-while):", sum);
}


sumWithDoWhile([1, 2, 3, 4, 5]); 

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
*/
function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    console.log("Array without duplicates:", unique);
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
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    console.log("Factorial:", result);
}


factorial(5);

/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
*/

function reverseWords(sentence) {
    let words = sentence.split(" ");
    words.reverse();
    let reversed = words.join(" ");
    console.log("Reversed sentence:", reversed);
}


reverseWords("Hello world");

/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/

function filterLongWords(words, minLength) {
    let filtered = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= minLength) {
            filtered.push(words[i]);
        }
    }
    console.log("Filtered words:", filtered);
}


filterLongWords(["apple", "banana", "cherry", "date"], 6);

/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
function logElementsWithIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("Index:", i, "Value:", arr[i]);
    }
}


logElementsWithIndex(['a', 'b', 'c']); 
    
/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
function findMin(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    console.log("Min:", min);
}


findMin([3, 1, 4, 1, 5, 9]);
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
    console.log("Count of", word + ":", count);
}


countOccurrences(["apple", "banana", "apple", "cherry"], "apple");

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/

function removeFalsyValues(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }
    console.log("Array without falsy values:", result);
    return result;
}


removeFalsyValues([0, 1, false, 2, "", 3, NaN, 4]);

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/

function sumDigits(str) {
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!isNaN(char) && char !== " ") {
            total += parseInt(char);
        }
    }
    console.log("Sum of digits:", total);
}


sumDigits("abc123");

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
    }
    let average = sum / numbers.length;
    console.log("Average:", average);
}


averageArray([1, 2, 3, 4, 5]);

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
function flattenArray(twoDArray) {
    let flat = [];
    for (let i = 0; i < twoDArray.length; i++) {
        for (let j = 0; j < twoDArray[i].length; j++) {
            flat.push(twoDArray[i][j]);
        }
    }
    console.log("Flattened Array:", flat);
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
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(letter)) {
            result.push(words[i]);
        }
    }
    console.log("Words containing", letter + ":", result);
}


findWordsWithLetter(["apple", "banana", "cherry", "date"], "a");
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
    console.log("After push:", arr);
    let popped = arr.pop();
    console.log("Popped element:", popped);
    console.log("Final array:", arr);
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
    console.log("After push:", queue);
    let removed = queue.shift();
    console.log("Removed person:", removed);
    console.log("Final queue:", queue);
}

manageQueue(['Alice', 'Bob', 'Charlie'], 'David');
/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
    console.log("Current To-Do List:", todoList);
    todoList.splice(startIndex, deleteCount);
    todoList.push(...newTasks);
    console.log("Updated To-Do List:", todoList);
}


// Example usage:
const todoList = ['Study JS', 'Eat breakfast', 'Walk dog'];
/*
1. Sum Array Elements with a For Loop
   - Define a function `sumArray(numbers)` that uses a for loop
     to sum all elements in an array of numbers.
   - Log the final sum.
*/

function sumArray(numbers) {
  if (!Array.isArray(numbers)) {
    return; 
  }

  if (numbers.length === 0) {
    console.log(0);
    return;
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
}

sumArray([10, 20, 30]);
sumArray([-5, -10, -3]);
const dailyCalories = [1800, 1950, 2100, 1850];
sumArray(dailyCalories);
const prices = [199, 349, 129, 89];
sumArray(prices); 
sumArray([]);


/*
2. Find Maximum Number in an Array
   - Define a function `findMax(numbers)` that uses a for loop to iterate
     through an array and find the largest value.
   - Log the largest value.
*/

function findMax(numbers){
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        if (numbers[i] > max){
            max = numbers[i];
        }
    }
    console.log(max);
}

const weightChanges = [-1, 0.3, 0.8, -0.5, 1.2];
findMax(weightChanges);  
const pricesforMax = [199, 349, 129, 89];
findMax(pricesforMax);  
const scores = [5000, 12000, 9000, 14000];
findMax(scores);  


/*
3. Count Odd and Even Numbers
   - Define a function `countOddEven(numbers)` that loops through an array
     of numbers and counts how many are odd and how many are even.
   - Log the counts in the format: "Odd: X, Even: Y"
*/

function countOddEven(numbers) {

  if (numbers.length === 0) {
    console.log("Array is empty.");
    return;
  }

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

countOddEven([61, 62, 63, 64, 65, 66]);
countOddEven([8450, 10020, 9321, 7820, 11003]);
countOddEven([-1, -2, -3, -4]);
countOddEven([]);


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
     sum += i
       i++ 
    }

  } else {
    let i = start - 1;

    while (i >= end) {
       sum += i 
       i-- 
    }
  }

return sum;
}

console.log("Test (18 → 4):", sumRange(18, 4));
console.log("Test (10 → 10):", sumRange(10, 10));
console.log("Range from -3 to 3:", sumRange(-3, 3));  
console.log("Range from 3 to -3:", sumRange(3, -3));  
console.log("Total steps between day 5 and 10:", sumRange(5, 10));
console.log("Total calories from day 1 to 7:", sumRange(1, 7));
console.log("Total monthly payments (1 to 12):", sumRange(1, 12));


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

  console.log(reversed);
}

reverseArray([1,2,3,4,5]);
reverseArray(["a", "b", "c"]);
reverseArray(["diet", "health", "energy"]);


/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/
function filterNegative(numbers) {
  let filtered = [];

  for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] >= 0) {
      filtered.push(numbers[i]);
    }
  }

  console.log(filtered);
}


filterNegative([5, -3, 0, 12, -9, 7]);    
filterNegative([10, 20, 30]);                               
console.log("Weight changes (only gains):");
filterNegative([-1, 0.3, 0.8, -0.5, 1.2]);
console.log("Calories (valid values only):");
filterNegative([1800, -1500, 2000, -300]);
console.log("Bank deposits only:");
filterNegative([-50, 200, -100, 500]);
  
/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/

function doubleValues(numbers) {
  let doubled = [];

  for (let value of numbers) {
    doubled.push(value * 2);
  }

  console.log(doubled);
}

// Basic tests
doubleValues([1, 2, 3, 4]);
doubleValues([-1, -5, 10]);
doubleValues([0, 100, 250]);

// Labeled examples
console.log("Workout reps doubled:");
doubleValues([10, 15, 20]);

console.log("Stock amounts doubled:");
doubleValues([30, 50, 12]);


/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/

function printCharacters(str) {
// I added typeof checking intentionally to demonstrate input validation.
   if (typeof str !== "string") {
      console.error("Error: Input must be a string.");
      return;
   }

   for (let char of str) {
      console.log(char);
   }
}

printCharacters("hello");
printCharacters("JavaScript");
printCharacters("");            
printCharacters("123");                  
printCharacters("MyPass123!");


/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/

function sumObjectValues(obj) {
  if (typeof obj !== "object" || obj === null) {
    console.error("Error: Input must be a valid object.");
    return; 
  }

  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }
  console.log(sum);
}

sumObjectValues({a: 10, b: 20, c: 5});                   
sumObjectValues({protein: 30, carbs: 50, fat: 20});        
sumObjectValues({monday: 1800, tuesday: 1950, wed: "off"}); 
sumObjectValues({score1: 100, score2: 200, bonus: true});   
sumObjectValues({});                                      


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
printObjectKeys({ brand: "Nike", price: 129, inStock: true });
printObjectKeys({ a: 1, b: 2, c: 3 });


/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/

function sumWithDoWhile(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    console.log(0);
    return;
  }

  let sum = 0;
  let i = 0;

  do {
    sum += numbers[i];
    i++;
  } while (i < numbers.length);

  console.log(sum);
}

sumWithDoWhile([-5, -10, 0, 15]);  
sumWithDoWhile([1, 2, 3]);   
sumWithDoWhile([]);                               
sumWithDoWhile([100]);             


/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/

function removeDuplicates(arr) {

    if (!Array.isArray(arr)) {
        console.log("Error: Expected an array, but received:", typeof arr);
        return; 
    }

    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];

        if (!unique.includes(value)) {
            unique.push(value);
        }
    }

    console.log(unique);
}

removeDuplicates([1,1,2,2,3,3,4]); 
removeDuplicates(["apple", "banana", "apple", "orange", "banana"]); 
removeDuplicates([true, false, true]); 
removeDuplicates([]); 
removeDuplicates(["a", "A", "a"]);


/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/

function factorial(n) {
  let result = 1;

  for (let i = n; i >= 1; i--) {
    result = result * i;
  }

  console.log(result);
}

factorial(5);    
factorial(12);   
factorial(0);   
  

/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/

function reverseWords(sentence) {
  // Optional guard: make sure input is a string
  if (typeof sentence !== "string") {
    console.log("Error: Input must be a string.");
    return;
  }

  let words = sentence.split(" ");

 
  let reversed = [];

 
  for (let i = words.length - 1; i >= 0; i--) {
    reversed.push(words[i]);
  }

  let result = reversed.join(" ");

  console.log(result);
  return result;
}

reverseWords("I love JavaScript");
reverseWords("Frontend development is fun");
reverseWords("Dietitian turned developer");
reverseWords("Hello");                  


/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/

function filterLongWords(words, minLength) { 
  let result = [];

  for (let i = 0; i < words.length; i++) {   
    if (words[i].length >= minLength) { 
      result.push(words[i]);
    }
  } 

  console.log(result);
}


filterLongWords(["hi", "hello", "merhaba"], 5);
filterLongWords(["cat", "dog", "bird"], 3);
filterLongWords(["x", "yy", "zzz"], 4);
filterLongWords([], 2);
filterLongWords(["", "x", "xy", "xyz"], 1);


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

logElementsWithIndex(["apple", "banana", "orange"]);
logElementsWithIndex([10, 20, 30, 40]);
logElementsWithIndex(["text", 42, true, null]);
logElementsWithIndex([]);


/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/

/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/

/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/

/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/

const todoList = ['Study JS', 'Eat breakfast', 'Walk dog'];

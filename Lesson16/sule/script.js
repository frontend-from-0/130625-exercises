/*
1. Sum Array Elements with a For Loop
   - Define a function `sumArray(numbers)` that uses a for loop
     to sum all elements in an array of numbers.
   - Log the final sum.
*/

function sumArray(numbers) { 
  let sum = 0; 
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
  }
  console.log(sum)
}

sumArray([10, 20, 30]);
sumArray([100]);
sumArray([-5, -10, -3]);
sumArray(["1", 2, 3]);
sumArray([1, true, 2, false]);
sumArray(["dietetian", "healty", "nutrition"]);
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

findMax(["5", 2, 10]);
findMax(["abc", 2, 10]);
findMax(["one", "two", "three"]);
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
  let odd = 0;
  let even = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log("Odd:", odd, "Even:", even);
}

countOddEven([61, 62, 63, 64, 65, 66]);
countOddEven([8450, 10020, 9321, 7820, 11003]);
countOddEven([-1, -2, -3, -4]);
countOddEven([]);
countOddEven(["10", "21", "32"]);
countOddEven(["bread", 12, 7]);
countOddEven([true, false, 3]);
countOddEven([1, "2", null, undefined, 5, "calories"]);


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

  console.log(sum);
}

console.log("Test (18 → 4):", sumRange(18, 4));
console.log("Test (10 → 10):", sumRange(10, 10));
console.log("Invalid input (start = 'a'):", sumRange("a", 10));
console.log("Missing parameter:", sumRange(5));
console.log("Floating values:", sumRange(2.5, 6.5));
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
reverseArray([10]);
reverseArray([]);
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
filterNegative([-1, -2, -3]);           
filterNegative([10, 20, 30]);           
filterNegative([]);                     
filterNegative([true, "5", -2, null]);  
console.log("Weight changes (only gains):", filterNegative([-1, 0.3, 0.8, -0.5, 1.2]));
console.log("Calories (valid values only):", filterNegative([1800, -1500, 2000, -300]));
console.log("Bank deposits only:", filterNegative([-50, 200, -100, 500]));
console.log("Empty array:", filterNegative([]));
console.log("Mixed input:", filterNegative([4, "text", -2, true, 7]));

  
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

doubleValues([1, 2, 3, 4]);
doubleValues([-1, -5, 10]);
doubleValues([0, 100, 250]);
doubleValues([]);
doubleValues(["5", 2, "a"]);
doubleValues([true, false, 3]);
console.log("Double workout reps:", doubleValues([10, 15, 20]));
console.log("Double stock amounts:", doubleValues([30, 50, 12]));
console.log("Double calorie portions:", doubleValues([250, 350, 500]));
console.log("Mixed types (invalid case):", doubleValues([2, "5", true]));
console.log("Empty array:", doubleValues([]));
console.log("Negative numbers:", doubleValues([-2, -5, -10]));


/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/

function printCharacters(str) {
// I added typeof checking intentionally to demonstrate input validation.
   if (typeof str !== "string") {
      console.log("Error: Input must be a string.");
      return;
   }

   for (let char of str) {
      console.log(char);
   }
}

printCharacters("hello");
printCharacters("JavaScript");
printCharacters("");           
printCharacters(123);  
printCharacters("123");         
printCharacters(true);         
printCharacters("MyPass123!");


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
printObjectKeys({});
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

sumWithDoWhile([1, 2, 3]);   
sumWithDoWhile([10]);      
sumWithDoWhile([]);              
sumWithDoWhile([-3, 5, -2]);   
sumWithDoWhile(["5", 2, 3]);     
sumWithDoWhile([true, 1, 2]);    
sumWithDoWhile([1, 2, 3, 4]);      
sumWithDoWhile([]);           
sumWithDoWhile(["5", 10, 20]);  
sumWithDoWhile("text");          
sumWithDoWhile([true, false, 3]); 
sumWithDoWhile([100]);             
sumWithDoWhile([-5, -10, 0, 15]);  


/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
 function removeDuplicates(arr){
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
removeDuplicates([1, "1", 1, "1"]); 
removeDuplicates(["diet", "health", "diet", "energy"]); console.log("Invalid input:", 
removeDuplicates(123));
console.log("Unique emails:", 
removeDuplicates([
  "user@example.com",
  "admin@test.com",
  "user@example.com",
  "info@mail.com",
  "info@mail.com"
]));  
console.log("Cart items (unique):", 
removeDuplicates([
  "Apple", "Banana", "Apple", "Orange", "Orange", "Banana"
]));
 

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
factorial(3);   
factorial(1);   
factorial(0);   
factorial(10);  
factorial(-5);    
factorial("abc");  
factorial(null);   


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
reverseWords("");
reverseWords(123);           
reverseWords(undefined);     
reverseWords(null);          
reverseWords(true);          
reverseWords("I  love   JS");   
reverseWords("   Hello   world  "); 


/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/

/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/

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

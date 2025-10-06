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
      ++even;
    } else {
      ++odd;
    }
  }

  console.log('Odd:', odd, 'Even:', even);
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
      console.log('While loop iteration:', i);
      sum += i; // sum = sum + i;
      i++;
    }
  } else {
    let i = start - 1;
    while (i >= end) {
      console.log('While loop iteration:', i);
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
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  console.log('Reversed array is', reversedArray);
}
reverseArray([1,2,3,4,5]);


/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/
function filterNegative(numbers) {
    const newArray = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number >= 0) {
            newArray.push(number);
        }
    }
    return newArray;
}
const numbersArray = [10, -5, 0, 42, -99, 3.14, -1, 7];
const filteredResult = filterNegative(numbersArray);
console.log(filteredResult);
/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/
function doubleValues(numbers) {
    const doubledNumbers = [];
    for (const number of numbers) {
        doubledNumbers.push(number * 2);
    }
    return doubledNumbers;
}
const numbersArray2 = [1, 5, 10, 3, 7];
const doubledResult = doubleValues(numbersArray2);
console.log(doubledResult);
/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
function printCharacters(str) {
    for (const char of str) {
        console.log(char);
    }
}

const testString1 = "Selam";
printCharacters(testString1);
/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/
function sumObjectValues(obj) {
    let totalSum = 0;

    for (const key in obj) {
     
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key];

            if (typeof value === 'number') {
                totalSum += value;
            }
        }
    }

    console.log(totalSum);
}

sumObjectValues({
    a: 10,
    b: 20,
    c: 5,
    d: "ignore",
    e: 1.5
});
/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/
function printObjectKeys(obj) {
  
    for (const key in obj) {
    
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            console.log(key);
        }
    }
}

const testObject2 = {
    firstName: "Jane",
    lastName: "Doe",
    city: "Ankara"
};
printObjectKeys(testObject2);
/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/
function sumWithDoWhile(numbers) {
    let sumTotal = 0;
    let i = 0; 

    if (numbers.length === 0) {
        console.log(0); 
        return;
    }

    do {
        sumTotal += numbers[i]; 
        i++; 
    } while (i < numbers.length); 

    console.log(sumTotal);
}

const testArray11 = [15, 20, 5, 10];
sumWithDoWhile(testArray11);
/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
function removeDuplicates(arr) {
    const uniqueArray = [];

    for (const item of arr) {
       
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    }

    console.log(uniqueArray);
    return uniqueArray;
}

const testArray12 = [1, 2, 3, 2, 4, 1, 5, 3];
removeDuplicates(testArray12);
/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/
function factorial(n) {
   
    if (n < 0) {
        console.log("Faktöriyel negatif sayılar için tanımlı değildir.");
        return;
    }
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i; 
    }

    console.log(result);
    return result;
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
    
    const wordsArray = sentence.split(' ');

    
    wordsArray.reverse();

   
    const reversedSentence = wordsArray.join(' ');

    console.log(reversedSentence);
    return reversedSentence;
}

const testSentence1 = "Bu bir test cümlesidir";
reverseWords(testSentence1);
/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
function filterLongWords(words, minLength) {
    const longWords = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        
        if (word.length >= minLength) {
            longWords.push(word);
        }
    }

    console.log(longWords);
    return longWords;
}

const testWords1 = ["elma", "armut", "kiraz", "muz", "çilek"];
filterLongWords(testWords1, 5);
/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
function logElementsWithIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("Index: " + i + ", Value: " + arr[i]);
    }
}

const testArray16 = ["A", "B", "C", "D"];
logElementsWithIndex(testArray16);
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

    console.log(min);
    return min;
}

const testNumbers17 = [50, 12, 99, 4, 30];
findMin(testNumbers17);
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

    console.log(count);
    return count;
}

const testWordsArray18 = ["elma", "armut", "elma", "kiraz", "elma"];
countOccurrences(testWordsArray18, "elma");
/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
function removeFalsyValues(arr) {
    const truthyArray = [];

    for (const item of arr) {
 
        if (item) {
            truthyArray.push(item);
        }
    }

    console.log(truthyArray);
    return truthyArray;
}

const testArray19 = [false, 0, "Hello", "", null, 42, undefined, NaN, ""];
removeFalsyValues(testArray19);
/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
function sumDigits(str) {
    let finalSum = 0;

    for (const char of str) {
     
        if (!isNaN(parseInt(char))) {
      
            finalSum += parseInt(char);
        }
    }

    console.log(finalSum);
    return finalSum;
}

sumDigits("data2025model1");
/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
function averageArray(numbers) {
    if (numbers.length === 0) {
        console.log(0);
        return 0;
    }

    let sum = 0;

    for (const number of numbers) {
        sum += number;
    }
    
    const average = sum / numbers.length;

    console.log(average);
    return average;
}

const testNumbers21 = [10, 20, 30, 40];
averageArray(testNumbers21);
/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
function flattenArray(twoDArray) {
    const flatArray = [];

    for (let i = 0; i < twoDArray.length; i++) {
        const subArray = twoDArray[i];

        for (let j = 0; j < subArray.length; j++) {
            flatArray.push(subArray[j]);
        }
    }

    console.log(flatArray);
    return flatArray;
}

const testTwoDArray = [[1, 2, 3], [4, 5], [6]];
flattenArray(testTwoDArray);
/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
function findWordsWithLetter(words, letter) {
    const filteredWords = [];

    const searchLetter = letter.toLowerCase();

    for (const word of words) {
      
        if (word.toLowerCase().includes(searchLetter)) {
            filteredWords.push(word);
        }
    }

    console.log(filteredWords);
    return filteredWords;
}

const testWords23 = ["masa", "kalem", "defter", "silgi", "kitap"];
findWordsWithLetter(testWords23, "a");
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
    console.log("--- 24. İşlemler ---");
    
    arr.push(itemToPush);
  
    console.log("Push sonrası dizi:", arr); 

    const poppedItem = arr.pop();
   
    console.log("Çıkarılan eleman (Pop):", poppedItem); 

    console.log("Nihai dizi:", arr); 
    return arr;
}

const testArray24 = [10, 20, 30];
pushPopExample(testArray24, 40);
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
    console.log("--- 25. İşlemler ---");

    queue.push(newPerson);
   
    console.log("Giriş sonrası kuyruk:", queue); 

    const removedPerson = queue.shift();
 
    console.log("Çıkarılan kişi (Shift):", removedPerson); 

   
    console.log("Nihai kuyruk:", queue); 
    return queue;
}

const testQueue25 = ["Ali", "Veli", "Ayşe"];
manageQueue(testQueue25, "Can");
/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
const todoList = ['Study JS', 'Eat breakfast', 'Walk dog'];

function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
    console.log("--- 26. İşlemler ---");
 
    console.log("Başlangıç Listesi:", todoList); 

    todoList.splice(startIndex, deleteCount); 
    console.log("Silme sonrası Listesi:", todoList); 

    if (newTasks.length > 0) {
        todoList.push(...newTasks);
    }

    console.log("Güncellenmiş Liste:", todoList);
    return todoList;
}

updateTodoList(todoList, 1, 1, 'Go to gym', 'Read book');

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
function filterNegative(numbers){
  let positiveArr = [];
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
      positiveArr.push(numbers[i])
    } else{
     positiveArr.shift(numbers[i])
      
    }
  }
  console.log('positive numbers are:', positiveArr)
}
filterNegative([-1, -2, -3, 4, 5, 6])

 
/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/ function doubleValues(numbers){
   let multiplyArr = []
   for(const n of numbers){
    multiplyArr.push(n*2)
   }
   console.log(multiplyArr)
 

}

doubleValues([2,2, 4,10])

/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/ 
function printCharacters(str){
  for(const n of str){
    console.log(`displaying each character name: ${n}`)
  }
}
printCharacters(["Jane", "Thomas", "Ellie"])

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/ function sumObjectValues(obj){
  sum = 0;
  for(const n in obj){
  sum = sum + obj[n]
 }
  console.log("sum of values are:", sum)
}
sumObjectValues({a: 10, b: 50, c: 40})



/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/ function printObjectKeys(obj){
  for(const n in obj){
     console.log(n)
  }
}  printObjectKeys({name: "Kevin", age: 20, city: "Paris"})

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/function sumWithDoWhile(numbers){
  let i = 0;
  let sum = 0;
  do{
  sum = sum + numbers[i]
  i++
  } while(i < numbers.length);
  console.log(sum)
}
sumWithDoWhile([5,2,3])
console.log("----------")

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/  function removeDuplicates(arr){
  let newArr = []
  for( let i = 0; i < arr.length; i++){
    if (!newArr.includes(arr[i])){
      newArr.push(arr[i])
    } 
  }
  console.log(newArr)
}
removeDuplicates([2,2,2,2,5,6,7,8])

/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/ function factorial(n){
  let result = 1
  for (let i = 1; i <= n; i++){
   result = result * i
  }
  console.log(result)
}
factorial(5)

/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/ function reverseWords(sentence){
 
  const words = sentence.split(" ");
  const reversedWords = words.reverse();
  const joinedWords = reversedWords.join(" ");
  console.log(joinedWords)

}
reverseWords("I love you more than you think I do")

/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/  function filterLongWords(words, minLength){
  const wordArr = words.split(" ");
  const result = []
  for (let i = 0; i < wordArr.length; i++){
    if (wordArr[i].length >= minLength){
      result.push(wordArr[i])
    }
  }
  console.log(result)
}

filterLongWords("I love you so much", 4)

/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/ function logElementsWithIndex(arr){

  for (let i = 0; i < arr.length; i++) {
    console.log("Index:", i, "Value", arr[i])
}  }

logElementsWithIndex(["clothes", "shoes", "dresses"])

/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/ function findMin(numbers){
  let max = numbers[0];
  for(let i = 1; i < numbers.length; i++){
    if(numbers[i] < max){
      max = numbers[i]
    }
  }
  console.log(max)
}
findMin([20,30,5,2,8])

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/ function countOccurrences(arr, word){
  let count = 0;
  for(let i = 0; i < arr.length; i++){
  if(arr[i] === word){
    ++count
  }
  }
  console.log(count)
}
countOccurrences(["I", "love", "love", "you", "so much"], "love")

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/ function removeFalsyValues(arr){
  newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i]){
      newArr.push(arr[i])
    }

    
  }
  console.log(newArr)
} removeFalsyValues([0,1,2,3, null, NaN, "Hi"])

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/  function sumDigits(str){
  let sum = 0;
  for ( let i = 0; i < str.length; i++){
    if(!isNaN(str[i]) && str[i] !== " "){
      sum = sum + Number(str[i])
    }
  }
  console.log(sum)
}
sumDigits("hiiii78")

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.

*/ function averageArray(numbers){
  let sum = 0;
  let average = 0;
  for(let i = 0; i < numbers.length; i ++){
    sum = sum + numbers[i] ;
    average = sum / numbers[i]
  }
  
  console.log(average)
}


averageArray([1,2,3,4,5,6,7])  


/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
function flattenArray(twoDArray){
  let flatArr = []
  for(let i = 0; i < twoDArray.length; i++){
    for(let j = 0; j < twoDArray[i].length; j++){
      flatArr.push(twoDArray[i][j])
    }
  }
  console.log(flatArr)
 
}

flattenArray([[1,2], [3,4], [5,6]])


/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/ function findWordsWithLetter(words, letter){
  let result = []
 
 
  for(let i = 0; i < words.length; i++){
     if (words[i].includes(letter)){
      result.push(words[i])
     }

  }
  console.log(result)
}

findWordsWithLetter(["apple", "cherry", "break"], "r" )
/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/ function pushPopExample(arr, itemToPush){
   arr.push(itemToPush);
   console.log(arr)
   
   return arr.pop();
   
}
console.log(pushPopExample([1,2,3,4], 6))


/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/ function manageQueue(queue, newPerson){
  queue.push(newPerson);
  console.log(queue);
  return queue.shift()
}
console.log(manageQueue(["Anna", "Jane", "Janet"], "Bella"))

/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
function updateTodoList(todoList, startIndex, deleteCount, ...newTasks){
  console.log(todoList);
  todoList.splice(startIndex, deleteCount);
  todoList.push(...newTasks);
  console.log(todoList)
}

const todoList = ['Study JS', 'Eat breakfast', 'Walk dog'];
updateTodoList(todoList, 1, 2, 'dance' );

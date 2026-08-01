/* array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);
  
- callback: A function that is executed on each element of the array. It takes four arguments:
- accumulator: The accumulated value that is returned after each iteration. It starts with the value of initialValue on the first iteration and is the result of the previous iteration in subsequent iterations.
- currentValue: The current element being processed in the array.
- currentIndex: The index of the current element being processed.
- array: The array on which reduce() was called.

- initialValue: An optional initial value for the accumulator. If not provided, the first element of the array is used as the initial value and the iteration starts from the second element.
*/

// Exercise 1:
// Calculate the sum of all numbers in the given array.
const numbersEx1 = [1, 5, 3, 4, 2];

const resultEx1 = numbersEx1.reduce((acc, val, i, arr) => {
  console.log('------')
  console.log('acc', acc);
  console.log('val', val);
  console.log('i', i);
  console.log('arr', arr);
  return acc + val;
});

console.log('Result of ex. 1: ', resultEx1);

// Exercise 2:
// Find the maximum value in the given array. (Hint: Use -Infinity to compare values to)
const numbersEx2 = [8, 3, 11, 6, 4];

const maxResult = numbersEx2.reduce((acc, val) => {
  return val > acc ? val : acc;
}, -Infinity);

console.log('Result of ex. 2: ', maxResult);

// Exercise 3: Explain the code
// Count the occurrences of each element in the given array and return an object with the counts.
const elements = ['a', 'b', 'a', 'c', 'b', 'a'];

const elementCounts = elements.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log('Result of ex. 3: ', elementCounts); // Output: { a: 3, b: 2, c: 1 }

// Exercise 4:
// Calculate the average of all numbers in the given array.
const numbersEx4 = [10, 20, 30, 40, 50];

const averageResult = numbersEx4.reduce((acc, val, index, array) => {
  acc += val;
  // If it's the last element, divide the total sum by the array length to get the average
  if (index === array.length - 1) {
    return acc / array.length;
  }
  return acc;
}, 0);

console.log('Result of ex. 4: ', averageResult);

// Exercise 5: Explain the code below
// Count the number of unique elements in the array.
const numbersEx5 = [1, 2, 3, 2, 4, 3, 5];
const numbers = [1, 2, 3, 2, 4, 3, 5];

const uniqueCount = numbers.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []).length;

console.log('Result of ex. 5: ', uniqueCount); // Output: 5
/* 
Topic: JavaScript Basics

Focus: Variables, data types, arithmetic, strings, random numbers, template literals, increments
*/

// Instructions: Complete each exercise below by writing your code where indicated.

// 1. Declare variables firstNumber=5 and secondNumber=3 and log their sum.
const firstNumber = 5;
const secondNumber = 3;

console.log('Ex. 1.', firstNumber + secondNumber);

console.log('---------------------------------');

// 2. Declare variables userName and userAge. Log a greeting: "Hello! I am (userName) and I am (userAge) years old."
const userName = 'Elif';
const userAge = 24;
console.log('Hello! I am ' + userName + ' and I am ' + userAge + ' years old.');
console.log(`Hello! I am ${userName} and I am ${userAge} years old.`);

// 3. Declare variables a=10 and b=4. Log the result of a-b, a*b, and a/b.
const a = 10;
const b = 4;
const result = [a - b, a * b, a / b];
console.log('Ex. 3.', result);

// 4. Use template literals to log: "My name is (userName). I like JS."
console.log(`My name is ${userName}. I like JS.`);

// 5. Declare a string password = "securePass". Log the length of password.
const password = 'uppercase between type';
console.log('Ex.5.', 'The length of the password is ', password.length);


// 6. Convert the string "hello world" to uppercase and log it.
console.log('Ex.6.', 'hello world'.toUpperCase());

// 7. Concatenate "Hello" and "World" with a space in between and log the result.
const firstWord = 'Hello';
const secondWord = 'World';
console.log('Ex.7.', `${firstWord} ${secondWord}`);

// 8. Check the type of a variable, e.g., let x = 42. Log the type using typeof.
let x = 42;
console.log(typeof x);

x = 'Hello World';
console.log(typeof x);

x = ['Hello World'];
console.log(typeof x);

// 9. Convert the number 100 to a string and log the result.
const num = 100;
const string = num.toString();
const string21321 = num + '';
console.log(typeof string, num, string, string21321);

// 10. Convert the string "50" to a number and log its type to confirm the conversion.
const str = "50";
const number = parseInt(str, 10);
console.log(typeof str, str, typeof number, number);

// 11. Generate a random integer between 50 and 60 and log it.
/* const min = 50;
const max = 60;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('randomNumber', randomNumber);  */
 
const randomNumber = Math.floor(Math.random() * (60 - 50 + 1)) + 50;
console.log('randomNumber', randomNumber); 

// 12. Round the number 3.7 down using Math.floor and 3.2 up using Math.ceil, log both.
const floor=Math.floor(3.7);
const ceil=Math.ceil(3.2);
console.log('Math.floor(3.7)=', floor);
console.log('Math.ceil(3.2)=', ceil);

// 13. Declare a boolean variable isStudent = true. Log it.
const isStudent = true;
console.log('isStudent', isStudent);

// 14. Initialize counter = 0, then increment it by 1 using counter++ and log it.
let counter = 0;
counter++;
console.log('counter', counter);

// 15. Initialize points = 10, add 5 to it using points += 5, then log points.
let points = 10;
points += 5;
console.log('points', points);

// 16. Declare name="Alice", age=30, city="Paris". Log "Alice (30) lives in Paris" using template literals.
const name = "Alice";
const age = 30;
const city = "Paris";
console.log(`${name} (${age}) lives in ${city}`);

// 17. Declare variables x=5, y=10, z=15. Log their total sum.
const x1 = 5;
const y = 10;
const z = 15;
console.log('The total sum of x, y and z is', x1 + y + z);

// 18. Declare dividend=10 and divisor=3. Log the quotient (divisionResult) and difference (differenceResult).
const dividend = 10;
const divisor = 3;
const divisionResult = dividend / divisor;
const differenceResult = dividend - divisor;
console.log('divisionResult', divisionResult, 'differenceResult', differenceResult);

// 19. Declare firstName and lastName. Create fullName by concatenating them with a space and log it.
const firstName = 'Sinem';
const lastName = 'Güner';
const fullName = firstName + ' ' + lastName;
console.log('fullName', fullName);

// 20. Declare firstFactor=7 and secondFactor=2. Log the product.
const firstFactor = 7;
const secondFactor = 2;
console.log('product', firstFactor * secondFactor);

// 21. Log the value of Math.PI.
const pi = Math.PI;
console.log('Math.PI', pi);

// 22. Declare counter=0. Increment it using three different methods (e.g., counter++, counter+=1, counter=counter+1) and log the result each time.
let counterNew = 0;
counterNew++;
console.log('After counterNew++:', counterNew);
counterNew += 1;
console.log('After ccounterNew += 1:', counterNew);
counterNew = counterNew + 1;
console.log('After counterNew = counterNew + 1:', counterNew);

// 23. Declare initialTemperature=20. Increase it by 5 and log the result.
let initialTemperature = 20;
initialTemperature += 5;
console.log('initialTemperature', initialTemperature);

// 24. Declare numberEx9=6. Increment it using the prefix ++ operator and log both the variable and the incremented value.
let numberEx9 = 6;
let numberEx91 = ++ numberEx9;
console.log('numberEx9', numberEx9 , 'numberEx91', numberEx91);

// 25. Declare numberEx10=8. Increment it using the postfix ++ operator and log both the original variable and the incremented value.
let numberEx10 = 8;
let numberEx101 = numberEx10++;
console.log('numberEx10', numberEx10 , 'numberEx101', numberEx101);

// 26. Declare numberEx11=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
let numberEx11 = -3;
let numberEx111 = ++numberEx11 * 2;
console.log('numberEx11', numberEx11 , 'numberEx111', numberEx111);

// 27. Declare a=2 and b=3. Increment a using the prefix ++ operator, then add b to the result and log it.
let a1 = 2;
let b1 = 3;
const a1prefix = ++a1;
const resultAb = a1prefix + b1;
console.log('a1', a1 , 'b1', b1, 'resultAb', resultAb);

/* 
Topic: JavaScript Basics

Focus: Variables, data types, arithmetic, strings, random numbers, template literals, increments
*/

// Instructions: Complete each exercise below by writing your code where indicated.

// 1. Declare variables firstNumber=5 and secondNumber=3 and log their sum.

const firstNumber = 5;
const secondNumber = 3;

console.log('Ex.1.', firstNumber + secondNumber);

console.log('---------------------------------');

// 2. Declare variables userName and userAge. Log a greeting: "Hello! I am (userName) and I am (userAge) years old."
// CODE HERE
const userName = 'Elif';
const userAge = 24;
console.log('Ex.2.', 'Hello! I am ' + userName + ' and I am ' + userAge + ' years old.');
console.log('Ex.2.', `Hello! I am ${userName} and I am ${userAge} years old.`);

// 3. Declare variables a=10 and b=4. Log the result of a-b, a*b, and a/b.
// CODE HERE
const a = 10;
const b = 4;
const result = [a - b, a * b, a / b];
console.log('Ex.3.', result);

// 4. Use template literals to log: "My name is (userName). I like JS."
console.log('Ex.4.', `My name is ${userName}. I like JS.`);

// 5. Declare a string password = "securePass". Log the length of password.
// CODE HERE
const password = 'uppercase between type';
console.log('Ex.5.', 'The length of the password is ', password.length);
// 6. Convert the string "hello world" to uppercase and log it.
// CODE HERE
console.log('Ex.6.', 'hello world'.toUpperCase());

// 7. Concatenate "Hello" and "World" with a space in between and log the result.
// CODE HERE
const firstWord = 'Hello';
const secondWord = 'World';
console.log('Ex.7.', `${firstWord} ${secondWord}`);

// 8. Check the type of a variable, e.g., let x = 42. Log the type using typeof.
// CODE HERE
let x = 42;
console.log('Ex.8.', typeof x);

x = 'Hello World';
console.log('Ex.8.', typeof x);

x = ['Hello World'];
console.log('Ex.8.', typeof x);

// 9. Convert the number 100 to a string and log the result.
// CODE HERE
const num = 100;
const string = num.toString();
const string21321 = num + '';
console.log('Ex.9.', typeof string, num, string, string21321);

// 10. Convert the string "50" to a number and log its type to confirm the conversion.
// CODE HERE

const str = "10";
const number = parseInt(str, 10);
console.log('Ex.10.', typeof str, str, typeof number, number);

// 11. Generate a random integer between 50 and 60 and log it.
// CODE HERE
const min = 50;
const max = 60;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('Ex.11.', 'randomNumber', randomNumber);

// 12. Round the number 3.7 down using Math.floor and 3.2 up using Math.ceil, log both.
// CODE HERE
const num1 = 3.7;
const num2 = 3.2; 
console.log('Ex.12.', Math.floor(num1), Math.ceil(num2))

// 13. Declare a boolean variable isStudent = true. Log it.
// CODE HERE
const isStudent = true;
console.log('Ex.13.', isStudent);

// 14. Initialize counter = 0, then increment it by 1 using counter++ and log it.
// CODE HERE
let counter = 0;
counter++;
console.log('Ex.14.', counter);

// 15. Initialize points = 10, add 5 to it using points += 5, then log points.
// CODE HERE
let points = 10;
points += 5;
console.log('Ex.15', points)

// 16. Declare name="Alice", age=30, city="Paris". Log "Alice (30) lives in Paris" using template literals.
// CODE HERE
const name ="Alice";
const age = 30;
const city = "Paris";
console.log('Ex.16', `${name} (${age}) lives in ${city}.`);

// 17. Declare variables x=5, y=10, z=15. Log their total sum.
// CODE HERE
const valueX = 5;
const valueY = 10;
const valueZ = 15;
const valueSum = valueX + valueY + valueZ;
console.log('Ex.17', valueSum);

// 18. Declare dividend=10 and divisor=3. Log the quotient (divisionResult) and difference (differenceResult).
// CODE HERE
const dividend = 10;
const divisior = 3;
const divisionResult = dividend/divisior;
const differenceResult = dividend-divisior;
console.log('Ex.18.', divisionResult, differenceResult);

// 19. Declare firstName and lastName. Create fullName by concatenating them with a space and log it.
// CODE HERE
const firstName = "Pelin";
const lastName = "Turan Kurudirek";
console.log('Ex.19.', `${firstName} ${lastName}`);

// 20. Declare firstFactor=7 and secondFactor=2. Log the product.
// CODE HERE
const firstFactor = 7;
const secondFactor = 2;
const product= firstFactor*secondFactor;
console.log('Ex.20.', product);

// 21. Log the value of Math.PI.
// CODE HERE
const pi= Math.PI;
console.log('Ex.21.', pi);

// 22. Declare counter=0. Increment it using three different methods (e.g., counter++, counter+=1, counter=counter+1) and log the result each time.
// CODE HERE
let count= 0;
count++;
console.log('Ex.22.', count);
count= 0;
count+=1;
console.log('Ex.22.', count);
count= 0;
count=count+1;
console.log('Ex.22.', count);

// 23. Declare initialTemperature=20. Increase it by 5 and log the result.
// CODE HERE
let initialTemperature = 20;
initialTemperature +=5;
console.log('Ex.23.', initialTemperature);

// 24. Declare numberEx9=6. Increment it using the prefix ++ operator and log both the variable and the incremented value.
// CODE HERE
let numberEx9= 6;
const incrementedValue= ++numberEx9;
console.log('Ex.24.', numberEx9, incrementedValue);

// 25. Declare numberEx10=8. Increment it using the postfix ++ operator and log both the original variable and the incremented value.
// CODE HERE
let numberEx10= 8;
incrementedNum= numberEx10++;
console.log('Ex.25.', numberEx10, incrementedNum);

// 26. Declare numberEx11=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
// CODE HERE
let numberEx11= 3;
incrementedEx11= ++numberEx11;
finalValue= incrementedEx11*2;
console.log('Ex.26.', finalValue);

// 27. Declare a=2 and b=3. Increment a using the prefix ++ operator, then add b to the result and log it.
// CODE HERE
let valueA = 2;
incrementedValueA = ++valueA;
valueB = 3;
finalResult = incrementedValueA + valueB;
console.log('Ex.27.', finalResult);
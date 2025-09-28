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
// CODE HERE
const userName = 'Elif';
const userAge = 24;
console.log('Hello! I am ' + userName + ' and I am ' + userAge + ' years old.');
console.log(`Hello! I am ${userName} and I am ${userAge} years old.`);

// 3. Declare variables a=10 and b=4. Log the result of a-b, a*b, and a/b.
// CODE HERE
const a = 10;
const b = 4;
const result = [a - b, a * b, a / b];
console.log('Ex. 3.', result);

// 4. Use template literals to log: "My name is (userName). I like JS."
console.log(`My name is ${userName}. I like JS.`);

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
console.log(typeof x);

x = 'Hello World';
console.log(typeof x);

x = ['Hello World'];
console.log(typeof x);

// 9. Convert the number 100 to a string and log the result.
// CODE HERE
const num = 100;
const string = num.toString();
const string21321 = num + '';
console.log(typeof string, num, string, string21321);

// 10. Convert the string "50" to a number and log its type to confirm the conversion.
// CODE HERE

const str = "10";
const number = parseInt(str, 10);
console.log(typeof str, str, typeof number, number);

// 11. Generate a random integer between 50 and 60 and log it.
// CODE HERE
const min = 50;
const max = 60;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('randomNumber', randomNumber);

// 12. Round the number 3.7 down using Math.floor and 3.2 up using Math.ceil, log both.
// CODE HERE
const numberToRoundDown = 3.7;
const roundedDown = Math.floor(numberToRoundDown);
console.log(`Ex.12.1 ${roundedDown}`);

const numberToRoundUp = 3.2;
const roundedUp = Math.ceil(numberToRoundUp);
console.log(`Ex.12.2 ${roundedUp}`);

// 13. Declare a boolean variable isStudent = true. Log it.
// CODE HERE
const isStudent = true;
console.log('Ex.13.', isStudent);

// 14. Initialize counter = 0, then increment it by 1 using counter++ and log it.
// CODE HERE
const counter = 0;
counter++;
console.log('Ex.14.', counter);

// 15. Initialize points = 10, add 5 to it using points += 5, then log points.
// CODE HERE
const points = 10;
points += 5;
console.log('Ex.15.', points);

// 16. Declare name="Alice", age=30, city="Paris". Log "Alice (30) lives in Paris" using template literals.
// CODE HERE
const name = "Alice";
const age = 30;
const city = "Paris";
const message = `${name} (${age}) lives in ${city}`;
console.log('Ex.16.', message);

// 17. Declare variables x=5, y=10, z=15. Log their total sum.
// CODE HERE
const x = 5;
const y = 10;
const z = 15;
const totalSum = x + y + z;
console.log('Ex.17.', totalSum);

// 18. Declare dividend=10 and divisor=3. Log the quotient (divisionResult) and difference (differenceResult).
// CODE HERE
const dividend = 10;
const divisor = 3;
const divisionResult = dividend / divisor;
const differenceResult = dividend - divisor;
const remainderResult = dividend % divisor;
console.log(`'Ex.18.1'${divisionResult}`);
console.log(`'Ex.18.2'${differenceResult}`);
console.log(`'Ex.18.3'${remainderResult}`);

// 19. Declare firstName and lastName. Create fullName by concatenating them with a space and log it.
// CODE HERE
const firstName = "Cansel";
const lastName = "Yilmaz Canturk";
const fullName = `${firstName} ${lastName}`;
console.log('Ex.19.', fullName);

// 20. Declare firstFactor=7 and secondFactor=2. Log the product.
// CODE HERE
const firstFactor = 7;
const secondFactor = 2;
const product = firstFactor * secondFactor;
console.log('Ex.20.', product);

// 21. Log the value of Math.PI.
// CODE HERE
const piValue = Math.PI;
console.log('Ex.21.', piValue);

// 22. Declare counter=0. Increment it using three different methods (e.g., counter++, counter+=1, counter=counter+1) and log the result each time.
// CODE HERE
const counter = 0;
console.log(`'Ex.22.1'${counter}`);
counter++;
console.log(`'Ex.22.2'${counter}`);
counter += 1;
console.log(`'Ex.22.3'${counter}`);
counter = counter + 1;
console.log(`'Ex.22.4'${counter}`);

// 23. Declare initialTemperature=20. Increase it by 5 and log the result.
// CODE HERE
const initialTemperature = 20;
initialTemperature += 5;
console.log('Ex.23.', initialTemperature);

// 24. Declare numberEx9=6. Increment it using the prefix ++ operator and log both the variable and the incremented value.
// CODE HERE
const numberEx9 = 6;
console.log(`'Ex.24.1'${numberEx9}`);
const incrementedValue = ++numberEx9;
console.log(`'Ex.24.2'${incrementedValue}`);
console.log(`'Ex.24.3'${numberEx9}`);

// 25. Declare numberEx10=8. Increment it using the postfix ++ operator and log both the original variable and the incremented value.
// CODE HERE
const numberEx10 = 8;
console.log(`'Ex.25.1'${numberEx10}`);
const returnedValue = numberEx10++;
console.log(`'Ex.25.2'${returnedValue}`);
console.log(`'Ex.25.3'${numberEx10}`);

// 26. Declare numberEx11=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
// CODE HERE
const numberEx11 = -3;
const finalValue = (++numberEx11) * 2;
console.log(`'Ex.26.'${finalValue}`);

// 27. Declare a=2 and b=3. Increment a using the prefix ++ operator, then add b to the result and log it.
// CODE HERE
const a = 2;
const b = 3;
const result = ++a + b;
console.log('Ex.27.', result);

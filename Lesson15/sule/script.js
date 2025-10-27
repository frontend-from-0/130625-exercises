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
const password = 'securePass';
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

const str = "50";
const number = parseInt(str, 10);
console.log('Ex.10.', typeof str, str, typeof number, number);


// 11. Generate a random integer between 50 and 60 and log it.
// CODE HERE
const min = 50;
const max = 60;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('randomNumber', randomNumber);

// 12. Round the number 3.7 down using Math.floor and 3.2 up using Math.ceil, log both.
// CODE HERE
// Ex.12 – Rounding numbers with Math.floor() and Math.ceil()
// Math.floor() → sayıyı aşağı yuvarlar (örnek: 3.7 → 3)
// Math.ceil() → sayıyı yukarı yuvarlar (örnek: 3.2 → 4)
// This example shows how to round numbers up and down in JavaScript.
const num1 = 3.7;
const num2 = 3.2;
console.log('Ex.12.', Math.floor(num1), Math.ceil(num2));

// 13. Declare a boolean variable isStudent = true. Log it.
// CODE HERE
// Ex.13 – Boolean variable example
// Burada true/false değeri tutan bir değişken oluşturuyoruz.
// "typeof" ile değişkenin türünü kontrol ediyoruz.
// This example demonstrates a boolean variable and checking its type.
const isStudent = true;
console.log('Ex.13.', isStudent, '-', typeof isStudent);

// 14. Initialize counter = 0, then increment it by 1 using counter++ and log it.
// CODE HERE
// Ex.14 – Increment (arttırma) operator example
// counter değişkeni başlangıçta 0’dır. ++ operatörü sayıyı 1 artırır.
// This example shows how to increment a number by one using the ++ operator.
let counter=0;
counter++;
console.log('Ex.14.', counter);

// 15. Initialize points = 10, add 5 to it using points += 5, then log points.
// CODE HERE
// Ex.15 – Addition assignment (+=) operator example
// points değişkeni 10 olarak başlar, += 5 ifadesi mevcut değere 5 ekler.
// This example demonstrates how to add a value to a variable using the += operator.
let points = 10;
points += 5;
console.log('Ex.15.', points);

// 16. Declare name="Alice", age=30, city="Paris". Log "Alice (30) lives in Paris" using template literals.
// CODE HERE
// Ex.16 – Template literals and variable interpolation example
// Template literal (``) kullanarak değişkenleri metin içine yerleştiriyoruz.
// ${} yapısı değişkenleri string içinde dinamik olarak göstermeyi sağlar.
// This example shows how to use template literals to embed variables inside strings.

const personName = "Alice";
const age = 30;
const city = "Paris";

console.log(`${personName} (${age}) lives in ${city}`);


// 17. Declare variables x=5, y=10, z=15. Log their total sum.
// CODE HERE
// Ex.17 – Summing multiple variables example
// Üç sayının (x, y, z) toplamını hesaplıyoruz.
// This example shows how to add multiple variables together.
const x1 = 5;
const y1 = 10;
const z1 = 15;
const totalSum = x1 +  y1 + z1;
console.log('Ex.17.', totalSum); 

// 18. Declare dividend=10 and divisor=3. Log the quotient (divisionResult) and difference (differenceResult).
// CODE HERE
// Ex.18 – Division and subtraction example
// İki sayının bölümünü ve farkını hesaplıyoruz (divisionResult, differenceResult).
// This example demonstrates how to perform division and subtraction operations.
const dividend = 10;
const divisor = 3;
const divisionResult = dividend / divisor;
const differenceResult = dividend - divisor;
console.log('Ex.18.', 'Division Result:', divisionResult, 'Difference Result:', differenceResult);

// 19. Declare firstName and lastName. Create fullName by concatenating them with a space and log it.
// CODE HERE
// Ex.19 – String concatenation and template literals example
// firstName ve lastName değişkenlerini birleştirerek fullName oluşturuyoruz.
// This example shows how to combine strings using template literals.
const firstName = 'Emine Şule';
const lastName = 'Öztemiz';
const fullName = `${firstName} ${lastName}`;
console.log('Ex.19.', fullName);

// 20. Declare firstFactor=7 and secondFactor=2. Log the product.
// CODE HERE
// Ex.20 – Multiplication (çarpma) operator example
// İki sayıyı çarparak sonuç değişkenine atıyoruz (product = firstFactor * secondFactor).
// This example demonstrates how to multiply two numbers in JavaScript.
const firstFactor = 7;
const secondFactor = 2;
const product = firstFactor * secondFactor;
console.log('Ex.20.', product);

// 21. Log the value of Math.PI.
// CODE HERE
// Ex.21 – Using Math.PI constant example
// Math.PI sabiti, pi sayısının (~3.14159) JavaScript’teki hazır değeridir.
// This example shows how to access and log the constant value of Math.PI.
const piValue = Math.PI;
console.log('Ex.21.', piValue);

// 22. Declare counter=0. Increment it using three different methods (e.g., counter++, counter+=1, counter=counter+1) and log the result each time.
// CODE HERE
// Ex.22 – Incrementing a number in different ways example
// Bir değişkeni 1 artırmak için üç farklı yöntem (++, += 1, counterValue = counterValue + 1) gösterilmektedir.
// This example demonstrates three ways to increment a number by one in JavaScript.
let counterValue = 0;
counterValue++;
console.log('Ex.22. - Method 1:', counterValue);
counterValue += 1;
console.log('Ex.22. - Method 2:', counterValue);
counterValue = counterValue + 1;
console.log('Ex.22. - Method 3:', counterValue);

// 23. Declare initialTemperature=20. Increase it by 5 and log the result.
// CODE HERE
let initialTemperature = 20;
initialTemperature += 5;
console.log('Ex.23.', initialTemperature);
// 24. Declare numberEx9=6. Increment it using the prefix ++ operator and log both the variable and the incremented value.
// CODE HERE
// Ex.24 – Prefix increment (ön ek artırma) example
// ++numberEx9 ifadesi önce sayıyı 1 artırır, ardından yeni değeri döndürür.
// This example demonstrates the prefix increment operator (++variable).
let numberEx9 = 6;
const prefixResult24 = ++numberEx9; // prefix: önce artırır, sonra değeri döndürür
console.log('Ex.24 – prefixResult24 =', prefixResult24, ', numberEx9 =', numberEx9);


// 25. Declare numberEx10=8. Increment it using the postfix ++ operator and log both the original variable and the incremented value.
// CODE HERE
// Ex.25 – Postfix increment (son ek artırma) example
// numberEx10++ ifadesi önce mevcut değeri kullanır, ardından artırır.
// This example shows the postfix increment operator (variable++).
let numberEx10 = 8;
const postfixResult25 = numberEx10++; // postfix: önce mevcut değeri döndürür, sonra artırır
console.log('Ex.25 – postfixResult25 =', postfixResult25, ', numberEx10 =', numberEx10);

// 26. Declare numberEx11=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
// CODE HERE
// Ex.26 – Prefix increment and multiplication example
// numberEx11 değişkenini ++ operatörüyle 1 artırıyoruz ve sonucu 2 ile çarpıyoruz.
// This example shows how to increment a number using prefix ++ and then multiply it.
let numberEx11 = -3;
let result26 = ++numberEx11 * 2;
console.log('Ex.26.', result26);

// 27. Declare a=2 and b=3. Increment a using the prefix ++ operator, then add b to the result and log it.
// CODE HERE
// Ex.27 – Prefix increment and addition example
// a27 değişkenini ++ operatörüyle artırıyoruz, ardından b27 ile topluyoruz.
// This example demonstrates using the prefix ++ operator and adding another variable.
let a27 = 2;
let b27 = 3;
let result27 = ++a27 + b27;
console.log('Ex.27.', result27);

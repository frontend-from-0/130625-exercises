/*
1. Check Password Length
   - Define a function `checkPassword(password)` that checks if `password` length
     is at least 8 characters.
   - If >= 8, log: "Password length is sufficient."
   - Otherwise, log: "Password is too short."
   - Call the function with different passwords and log the result.
*/
function checkPassword(password) {
  if (password.toString().length >= 8) {
    console.log('Password length is sufficient.');
  } else {
    console.log('Password is too short.');
  }
}

checkPassword('123456');
checkPassword('123456789');

/*
2. Uppercase Name
   - Define a function `uppercaseName(name)` that converts a given name to uppercase.
   - Log the uppercase result to the console.
   - Example: "John Doe" -> "JOHN DOE"
*/
function uppercaseName(name) {
  if (typeof name !== 'string') {
    console.log('Please prvide a string value');
    return;
  } else {
    console.log(name.toUpperCase());
  }
}
uppercaseName();
uppercaseName('hasan');

/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/
function normalizeEmail(email) {
  if (typeof email !== 'string') {
    console.log('Please provide a string value');
    return;
  } else {
    console.log(email.toLowerCase());
  }
}
normalizeEmail();
normalizeEmail('didemkardas@example.com');
/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/
function getDomain(email) {
  if (typeof email !== 'string') {
    console.log('Please prvide a string value');
    return;
  }
  //   const startIndex = email.indexOf('@') + 1;

  //   const domain = email.substring(startIndex);
  //   console.log(domain);

  const result = email.split('@');
  console.log(result[1]);
}
getDomain('jjasdasdas@example.com');

/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/

// && - all values must be true for expression to be true (like multiplication by 0)
// true && false && true && true => false
// || -
// true || false || true => true (is like +)
function containsWord(sentence, word) {
  if (typeof sentence !== 'string' || typeof word !== 'string') {
    console.log('Please provide sentece and word parameters as string.');
    return;
  }

  if (sentence.includes(word)) {
    console.log(word + ' found in sentence.');
  } else {
    console.log(word + ' not found in the sentence.');
  }
}

containsWord('<word> found in sentence.', ' ');
containsWord('<word> found in sentence.', 'comma found in sentence.');
containsWord('<word> found in sentence.', true);
containsWord(124321321312, 12);

/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/
function checkFileExtension(filename) {
  if (typeof filename !== 'string') {
    console.log('Please provide a filename as a string.');
    return;
  }
  if (filename.endsWith('.pdf')) {
    console.log('This is a PDF file.');
  } else {
    console.log('Not a PDF file.');
  }
}

checkFileExtension('myassignment.pdf');

/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/
function compareNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number'){
    console.log('Please provide both parameters as numbers.');
    return;
  }
  if (a > b) {
    console.log('a is bigger');
  } else if (b > a) {
    console.log('b is bigger');
  } else {
    console.log('Numbers are equal');
  }
}

compareNumbers(9, 5);
compareNumbers(5, 6);
compareNumbers(4, 4);

/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards.
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/
function isPalindrome(str) {
  if (typeof str !== 'string') {
    console.log('Please provide a string value');
    return;
  }
  const reversed = str.split('').reverse().join('');
  if (str === reversed) {
    console.log(str + ' is a palindrome');
  } else {
    console.log(str + ' is not a palindrome');
  }
}

isPalindrome('madam');
isPalindrome('hello');
/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/
function truncateString(text, maxLength) {
  if (typeof text !== 'string' || typeof maxLength !== 'number') {
    console.log('Please provide text as string and maxLength as number.');
    return;
  }
  if (text.length > maxLength) {
    const truncated = text.slice(0, maxLength) + '...';
    console.log(truncated);
  } else {
    console.log(text);
  }
}

truncateString('This is a long sentence that needs truncation.', 20);
truncateString('Short text', 20);
/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
function evenOrOdd(number) {
  if (typeof number !== 'number') {
    console.log('Please provide a number value');
    return;
  }
  if (number % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}

evenOrOdd(4);
evenOrOdd(7);
/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
function checkProtocol(url) {
  if (typeof url !== 'string') {
    console.log('Please provide a string value');
    return;
  }
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.startsWith('https')) {
    console.log('Secure connection');
  } else {
    console.log('Unsecure connection');
  }
}

checkProtocol('HTTPS://example.com');
checkProtocol('http://example.com'); 
/*
12. Switch: Day of the Week
   - Define a function `getDayOfWeek(num)` that uses a switch statement:
     1 -> "Monday"
     2 -> "Tuesday"
     ...
     7 -> "Sunday"
     - Log the matched day or "Invalid day" if out of range.
*/
function getDayOfWeek(num) {
  if (typeof num !== 'number') {
    console.log('Please provide a number value.');
    return;
  }
  switch (num) {
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
    case 7:
      console.log('Sunday');
      break;
    default:
      console.log('Invalid day');
  }
}

getDayOfWeek(2);
getDayOfWeek(9);


// value == value
/// value and type === value and type

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/
function repeatWord(word, times) {
  if (typeof word !== 'string' || typeof times !== 'number') {
    console.log('Please provide word as string and times as number.');
    return;
  }
  const result = word.repeat(times);
  console.log(result);
}

repeatWord('Hello! ', 3);
/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
function censorWord(sentence, target) {
  if (typeof sentence !== 'string' || typeof target !== 'string') {
    console.log('Please provide both sentence and target as strings.');
    return;
  }
  const censored = sentence.replaceAll(target, '****');
  console.log(censored);
}

censorWord('This is a bad word. Such a bad word!', 'bad');
/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
function startsWithA(str) {
  if (typeof str !== 'string' || str.length === 0) {
    console.log('Please provide a string value');
    return;
  }
  if (str.charAt(0).toUpperCase() === 'A') {
    console.log('Starts with A');
  } else {
    console.log('Does not start with A');
  }
}

startsWithA('Apple');
startsWithA('banana');
/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLastN(text, n) {
  if (typeof text !== 'string' || typeof n !== 'number' || text.length < n) {
    console.log('Please provide text as string and n as number.');
    return;
  }
  const result = text.slice(-n);
  console.log(result);
}

sliceLastN('Hello, world!', 6); 
/*
17. Switch: Grade Checker
   - Define a function `gradeChecker(score)` that uses a switch (or if-else chain):
     90+ -> "A"
     80-89 -> "B"
     70-79 -> "C"
     60-69 -> "D"
     below 60 -> "F"
   - Log the grade.
*/
function gradeChecker(score) {
  if (typeof score !== 'number' || score <0 || score >100) {
    console.log('Please provide a valid score between 0 and 100.');
    return;
  }
  if (score >= 90) {
    console.log('A');
  } else if (score >= 80) {
    console.log('B');
  } else if (score >= 70) {
    console.log('C');
  } else if (score >= 60) {
    console.log('D');
  } else {
    console.log('F');
  }
}
gradeChecker(95);
gradeChecker(25);
/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
function replaceCharacter(str, oldChar, newChar) {
  if (typeof str !== 'string' || typeof oldChar !== 'string' || typeof newChar !== 'string') {
    console.log('Please provide str, oldChar, and newChar as strings.');
    return;
  }
  const result = str.replaceAll(oldChar, newChar);
  console.log(result);
}

replaceCharacter('banana', 'a', 'o');
/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/
function titleCase(sentence) {
  if (typeof sentence !== 'string' || sentence.length === 0) {
    console.log('Please provide a string value');
    return;
  }
  const result = sentence
    .split(' ')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();  
    })
    .join(' ');
  console.log(result);
}

titleCase('hello world from javascript');
/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/
function trafficLight(color) {
  if (typeof color !== 'string') {
    console.log('Please provide a string value');
    return;
  }
  switch (color.toLowerCase()) {
    case 'red':
      console.log('Stop');
      break;
    case 'yellow':
      console.log('Caution');
      break;
    case 'green':
      console.log('Go');
      break;
    default:
      console.log('Invalid color');
  }
}
  trafficLight('Red');
/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/
function isLongString(str) {
  if (typeof str !== 'string') {
    console.log('Please provide a string value');
    return;
  }
  if (str.length > 10) {
    console.log('Long string');
  } else {
    console.log('Short string');
  }
}

isLongString('Hello, world!');
isLongString('Short');
/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text) {
  if (typeof text !== 'string') {
    console.log('Please provide a string value');
    return;
  }
  const lowerText = text.toLowerCase();
  if (lowerText.includes('spam')) {
    console.log('This text is spam.');
  } else {
    console.log('This text is not spam.');
  }
}

isSpam('This is a SPAM message.');
isSpam('Hello, how are you?');
/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
function getInitials(fullName) {
  if (typeof fullName !== 'string' || fullName.length === 0) {
    console.log('Please provide a string value');
    return;
  }
const Initials = fullName
.split(' ')
.map(word => word.charAt(0).toUpperCase())
.join('.');
console.log(Initials + '.');
}

getInitials('Didem Kardas');
/*
24. Switch: Month to Season
   - Define a function `getSeason(monthNum)` (1-12). Use switch or if-else:
     - 12, 1, 2  -> "Winter"
     - 3, 4, 5   -> "Spring"
     - 6, 7, 8   -> "Summer"
     - 9, 10, 11 -> "Autumn"
   - Log the season or "Invalid month" if out of range.
*/
function getSeason(monthNum) {
  if (typeof monthNum !== 'number' || monthNum < 1 || monthNum > 12) {
    console.log('Please provide a valid month number between 1 and 12.');
    return;
  }
  switch (monthNum) {
    case 12:
    case 1:
    case 2:
      console.log('Winter');
      break;
    case 3:
    case 4:
    case 5:
      console.log('Spring');
      break;
    case 6:
    case 7:
    case 8:
      console.log('Summer');
      break;
    case 9:
    case 10:
    case 11:
      console.log('Autumn');
      break;
    default:
      console.log('Invalid month');
  } 
}
  getSeason(4);

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/
function containsNumber(str) {
  if (typeof str !== 'string') {
    console.log('Please provide a string value');
    return;
  }
  const hasNumber = /\d/.test(str);
  if (hasNumber) {
    console.log('Contains number');
  } else {
    console.log('No number found');
  }
}

containsNumber('Hello123');
containsNumber('Hello');
/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
function padString(str, maxLength) {
  if (typeof str !== 'string' || typeof maxLength !== 'number') {
    console.log('Please provide str as string and maxLength as number.');
    return;
  }
  let result = str;
  if (str.length < maxLength) {
    result = str.padEnd(maxLength, '*');
  }
  console.log(result);
}

padString('Hello', 10);
padString('Hello, world!', 10);
/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
function canVote(age) {
  if (typeof age !== 'number') {
    console.log('Please provide a number value');
    return;
  }
  if (age >= 18) {
    console.log('Can vote');
  } else {
    console.log('Too young to vote');
  }
}

canVote(20);
canVote(16);
/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/
function reverseWords(sentence) {
  if (typeof sentence !== 'string' || sentence.length === 0) {
    console.log('Please provide a string value');
    return;
  }
  const result = sentence
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
  console.log(result);
}

reverseWords('Hello World');
/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
function findWordPosition(sentence, word) {
  if (typeof sentence !== 'string' || typeof word !== 'string') {
    console.log('Please provide both sentence and word as strings.');
    return;
  }
  const index = sentence.indexOf(word);
  if (index !== -1) {
    console.log(index);
  } else {
    console.log('Not found');
  }
}

findWordPosition('Hello world', 'world');
findWordPosition('Hello world', 'JavaScript');
/*
30. Switch: Simple Calculator
   - Define a function `calculate(a, operator, b)` that uses switch to handle:
     - "+" -> a + b
     - "-" -> a - b
     - "*" -> a * b
     - "/" -> a / b
     - Otherwise -> "Invalid operator"
   - Log the result.
*/
function calculate(a, operator, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof operator !== 'string') {
    console.log('Please provide a and b as numbers and operator as string.');
    return;
  }
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    default:
      console.log('Invalid operator');
      return;
  }
  console.log(result);
}

calculate(5, '+', 3);
calculate(10, '/', 2);

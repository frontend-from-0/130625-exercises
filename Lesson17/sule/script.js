/*
1. Check Password Length
   - Define a function `checkPassword(password)` that checks if `password` length
     is at least 8 characters.
   - If >= 8, log: "Password length is sufficient."
   - Otherwise, log: "Password is too short."
   - Call the function with different passwords and log the result.
*/

function checkPassword(password) {
  if (password.length >= 8) {
    console.log("Password length is sufficient.");
  } else {
    console.log("Password is too short.");
  }
}

checkPassword('1'); 
checkPassword('123456789'); 
checkPassword('1234asdfc');

/*
2. Uppercase Name
   - Define a function `uppercaseName(name)` that converts a given name to uppercase.
   - Log the uppercase result to the console.
   - Example: "John Doe" -> "JOHN DOE"
*/

function uppercaseName(name) {
if (typeof name !== 'string') {
  console.log("Please provide a string value");
  return;
} else {
  console.log(name.toUpperCase());
}
}

uppercaseName(123);
uppercaseName('emine sule');
uppercaseName('emine123');

/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/

function normalizeEmail(email) {
  if (typeof email !== 'string') {
    console.log("Please provide a string value");
    return;
  } else {
    console.log(email.toLowerCase());
  }
}

normalizeEmail('1A2B3C');
normalizeEmail('SuLE@gmail.com');

/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/

function getDomain(email) {
  if (typeof email !== 'string') {
    console.log("Please provide a string value");
    return;
  } else {
    const result = email.split('@');
    console.log(result[1]);
  }
}

getDomain(1999);
getDomain("sulemine@gmail.com");
getDomain("test@example.org");

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
    console.log("Please provide sentence and word parameters as string.");
    return;
  }

  if (sentence.includes(word)) {
    console.log(word + " found in sentence.");
  } else {
    console.log(word + " not found in the sentence.");
  }
}

containsWord('<word> found in sentence.', ' ');
containsWord('<word> found in sentence.', 'comma found in sentence.');
containsWord('<word> found in sentence.', true);
containsWord(124321321312, 12);
containsWord("Hello world", "world");
containsWord("this color is yellow", "white");
containsWord("Are you twenty-six years old?", "26");

/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/

function checkFileExtension(filename) {
  if (typeof filename !== 'string') {
    console.log("Please provide a string value");
    return;
  } else {
    const lowerFile = filename.trim().toLowerCase();

    if (lowerFile.endsWith('.pdf')) {
      console.log("This is a PDF file.");
    } else {
      console.log("Not a PDF file.");
    }
  }
}

checkFileExtension('myassignment.pdf');
checkFileExtension("reportthat.PDF");
checkFileExtension("photosule.png");
checkFileExtension(19992000);

/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/

function compareNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Please provide two numbers.');
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

compareNumbers(0, 00);
compareNumbers(5, 5);
compareNumbers(3, 'a');
compareNumbers(0, -4);
compareNumbers(5, 6);
compareNumbers(9, 2);

/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards.
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/

function isPalindrome(str) {
  if (typeof str !== 'string') {
    console.log("Please provide a string value");
    return;
  } else {
    str = str.toLowerCase();
    const reversed = str.split('').reverse().join('');
     if (str === reversed) {
    console.log(str + " is a palindrome");
  } else {
    console.log(str + " is not a palindrome");
  }
}
}

console.log("✅ Palindrome Tests:");

isPalindrome("mom");
isPalindrome("dad");
isPalindrome("a3aa3a");
isPalindrome("98766789");
isPalindrome("000");
isPalindrome("A8b404b8A");


console.log("❌ Not Palindrome Tests:");

isPalindrome("computer");
isPalindrome("javascript");
isPalindrome("program");

/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/

function truncateString(text, maxLength) {
  if (typeof text !== 'string' || typeof maxLength !== 'number') {
    console.log("Please provide (text: string, maxLength: number)");
    return;
  }

  if (text.length <= maxLength) {
    console.log(text);
    return;
  } else {
    const truncated = text.slice(0, maxLength) + "...";
    console.log(truncated);
  }
}

console.log("\n--- TURKISH CTA MESSAGES ---");

truncateString("Tüm içeriği görmek için buraya tıklayın", 25);
truncateString("Daha fazla bilgi almak için tıklayın", 20);
truncateString("Devamını görüntüle", 10);
truncateString("Detaylı diyet planı için bizimle iletişime geçin", 30);
truncateString("Hemen randevu oluşturun", 15);
truncateString("Tüm özellikleri keşfetmek için tıklayın", 22); 

console.log("\n--- ENGLISH CTA MESSAGES ---");

truncateString("View full content", 8);
truncateString("Learn more", 5);
truncateString("Read more", 6);
truncateString("Contact for a personalized plan", 15);
truncateString("Book your appointment", 10);
truncateString("Explore all features", 12);

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/

function evenOrOdd(number) {
  if (typeof number !== 'number') {
    console.log("Please provide a number");
    return;
  }

  if (!Number.isInteger(number)) {
    console.log("Please provide an integer (no decimals)");
    return;
  }

  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

evenOrOdd(4);
evenOrOdd(-3);
evenOrOdd(0);
evenOrOdd(2.5);
evenOrOdd(-7.2);
evenOrOdd('10');

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/

function checkProtocol(url) {
  if (typeof url !== 'string') {
    console.log("Please provide a string value");
    return;
  }

  url = url.toLowerCase();

  if (url.startsWith("https")) {
    console.log("Secure connection");
  } else {
    console.log("Unsecure connection");
  }
}

// ✅ Working examples
checkProtocol("https://dietitian.com");
checkProtocol("HTTPS://secure-health.net");
checkProtocol("https://github.com/suleoztemiz");

// ❌ Failing examples
checkProtocol("http://example.com");
checkProtocol(12345);
checkProtocol(["https://array.com"]);

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
    console.log("Please provide a number");
    return;
  }

  switch (num) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day number");
  }
}

// ✅ Correct examples
getDayOfWeek(1);
getDayOfWeek(5);
getDayOfWeek(7);

// ❌ Incorrect examples
getDayOfWeek(9);
getDayOfWeek("3");
getDayOfWeek(-1);
getDayOfWeek("summer");
getDayOfWeek(2025);

// value == value
/// value and type === value and type

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/

function repeatWord(word, times) {
  // Check that 'word' is a string
  if (typeof word !== 'string') {
    console.log('Please provide a string as the first argument.');
    return;
  }

  // Check that 'times' is a non-negative number
  if (typeof times !== 'number' || times < 0) {
    console.log('Please provide a non-negative number as the second argument.');
    return;
  }

  // Repeat and log the word
  console.log(word.repeat(times));
}

repeatWord('aa', 3);
repeatWord('by', 2);
repeatWord('yo', -1);
repeatWord(42, 3);
repeatWord(123, 'five');

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/

function censorWord(sentence, target) {
  const result = sentence.replaceAll(target, '****');
  console.log(result);
}

censorWord('Please do not share your password with anyone.', 'password');
censorWord('The meeting link is private, keep it private please.', 'private');
censorWord('The API key must remain secret at all times.', 'secret');
censorWord('Credit card number detected: 1234-5678-9012-3456', '1234-5678-9012-3456');

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/

function startsWithS(str) {
  if (str.charAt(0).toUpperCase() === 'S') {
    console.log('Starts with S');
  } else {
    console.log('Does not start with S');
  }
}

startsWithS('start');
startsWithS('Sule');
startsWithS('developer');
startsWithS('software');

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/

function sliceLastN(text, n) {
  if (typeof text !== 'string') {
    console.log('Please provide a string as the first argument.');
    return;
  } else if (typeof n !== 'number' || n <= 0) {
    console.log('Please provide a positive number as the second argument.');
    return;
  }

  const result = text.slice(-n);
  console.log(result);
}

sliceLastN('Front-End Developer', 9);  
sliceLastN('Healthy Lifestyle', 4);    
sliceLastN('JavaScript Project', 7);
sliceLastN(12345, 2);                 
sliceLastN('Portfolio', -3);

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

// ===========================
// 17. Grade Checker (IF–ELSE)
// ===========================

function gradeChecker(score) {
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

gradeChecker(96); 
gradeChecker(83); 
gradeChecker(72); 
gradeChecker(62); 
gradeChecker(49); 

// ===========================
// 17. Grade Checker (SWITCH–CASE)
// ===========================

function gradeCheckerSwitch(score) {
  let grade;

  switch (true) {
    case (score >= 90):
      grade = 'A';
      break;
    case (score >= 80):
      grade = 'B';
      break;
    case (score >= 70):
      grade = 'C';
      break;
    case (score >= 60):
      grade = 'D';
      break;
    default:
      grade = 'F';
  }

  console.log(grade);
}

gradeCheckerSwitch(96);
gradeCheckerSwitch(83);
gradeCheckerSwitch(72);
gradeCheckerSwitch(62);
gradeCheckerSwitch(49);

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/

function replaceCharacter(str, oldChar, newChar) {
  const result = str.replaceAll(oldChar, newChar);
  console.log(result);
}

replaceCharacter('çiçek', 'ç', 'c');    
replaceCharacter('Şule', 'Ş', 'S');    
replaceCharacter('düşünce', 'ü', 'u'); 
replaceCharacter('gözlük', 'ö', 'o');   
replaceCharacter('5556123456', '6', '*');   
replaceCharacter('05341234567', '3', 'x');  
replaceCharacter('02121234567', '2', '#');  

/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/

function titleCase(sentence) {
  if (typeof sentence !== 'string' || sentence.trim() === '') {
    console.log('Please provide a valid sentence.');
    return;
  }

  const result = sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  console.log(result);
}

titleCase('hello world from sule');              
titleCase('diyetisyen emine şule öztemiz');     
titleCase('front end developer journey');         
titleCase('learning javascript is fun');          
titleCase(12345);                                 
titleCase('');  
titleCase('12345');  

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
    console.log('Please provide a color name as text.');
    return;
  }
  color = color.toLowerCase();

  switch (color) {
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

trafficLight('red');     
trafficLight('yellow'); 
trafficLight('green');  
trafficLight('RED');      
trafficLight('table');     
trafficLight('door');   
trafficLight(123);        

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/

function isLongString(str) {
  if (typeof str !== 'string' || str.trim() === '') {
    console.log('Please provide a valid string.');
    return;
  }

  const cleanedStr = str.trim().replace(/\s+/g, ' ');

  if (cleanedStr.length > 10) {
    console.log('Long string');
  } else {
    console.log('Short string');
  }
}

isLongString('hello sule');         
isLongString('hello  sule');         
isLongString('front end developer'); 
isLongString('          ');          
isLongString('');                    
isLongString(12345);                 

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/

function isSpam(text) {
  if (typeof text !== 'string' || text.trim() === '') {
    console.log('Please provide valid text.');
    return;
  }

  const lowerText = text.toLowerCase();
  if (lowerText.includes('spam')) {
    console.log('This text is spam.');
  } else {
    console.log('This text is not spam.');
  }
}

isSpam('Buy SPAM now!');        
isSpam('Fresh salad recipe');     
isSpam('Limited offer: SPam & eggs'); 
isSpam('');                     
isSpam(12345);                     

/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/

function getInitials(fullName) {
  if (typeof fullName !== 'string' || fullName.trim() === '') {
    console.log('Please provide a valid name.');
    return;
  }

  const parts = fullName.trim().split(' ');
  const initials = parts.map(word => word.charAt(0).toUpperCase());
  const result = initials.join('.') + '.';

  console.log(result);
}

getInitials('John Doe');                     
getInitials('Emine Şule Öztemiz');           
getInitials('diyetisyen emine şule');      
getInitials('frontend developer');            
getInitials('');                           
getInitials(123);                            

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

  if (typeof monthNum !== 'number' || !Number.isInteger(monthNum)) {
    console.log('Please provide an integer between 1 and 12.');
    return;
  }

  if (monthNum < 1 || monthNum > 12) {
    console.log('Invalid month');
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
  }
}

getSeason(1);   
getSeason(4);   
getSeason(7);   
getSeason(10);  
getSeason(12); 
getSeason(0);   
getSeason(13);  
getSeason('5'); 
getSeason(2.5); 

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/

function containsNumber(str) {
  if (typeof str !== 'string' || str.trim() === '') {
    console.log('Please provide a string.');
    return;
  }

  const cleaned = str.trim();


  const hasDigit = /\d/.test(cleaned);


  if (hasDigit) {
    console.log('Contains number');
  } else {
    console.log('No number found');
  }
}

containsNumber('Room number: 007');
containsNumber('Price: 3.50$');   
containsNumber('abc0def');           
containsNumber('   42  ');            
containsNumber('');                    
containsNumber(12345);         
containsNumber('fourfivesix');

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/

function padString(str, maxLength) {

  if (typeof str !== 'string' || str.trim() === '') {
    console.log('Please provide a valid string.');
    return;
  }

  if (typeof maxLength !== 'number' || maxLength <= 0) {
    console.log('Please provide a positive number for maxLength.');
    return;
  }

  if (str.length > maxLength) {
    console.log(str.slice(0, maxLength));
    return;
  }

  const totalStars = maxLength - str.length; 
  const half = Math.floor(totalStars / 2);   
  const padded = '*'.repeat(half) + str + '*'.repeat(totalStars - half);

  console.log(padded);
}

padString('JavaScript', 15);
padString('  Emine  ', 12);
padString('0530', 11);
padString('FrontendDeveloper', 10);
padString('9876', 16);

/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/

function canVote(age) {
  if (typeof age !== 'number' || age < 0) {
    console.log('Please provide a valid age.');
    return;
  }

  if (age >= 18) {
    console.log('Can vote');
  } else {
    console.log('Too young to vote');
  }
}

canVote(25);   
canVote(17);   
canVote('six');   
canVote('seven');   
canVote(18);   
canVote(-5);   
canVote('20'); 

/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/

function reverseWords(sentence) {
 
  if (typeof sentence !== 'string' || sentence.trim() === '') {
    console.log('Please provide a valid sentence.');
    return;
  }


  const words = sentence.split(' ');
  const reversedWords = words.map(word =>
    word.split('').reverse().join('')
  );


  const result = reversedWords.join(' ');
  console.log(result);
}

reverseWords('hello sule');        
reverseWords('daire no:009');       
reverseWords('front end developer'); 
reverseWords('block 42 door 7');     
reverseWords('');                    
reverseWords(12345);                 

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/

function findWordPosition(sentence, word) {
  if (typeof sentence !== 'string' || typeof word !== 'string') {
    console.log('Please provide valid strings.');
    return;
  }

  const position = sentence.indexOf(word);

  if (position === -1) {
    console.log('Not found');
  } else {
    console.log(position);
  }
}

findWordPosition('I love JavaScript', 'JavaScript'); 
findWordPosition('Front end developer journey', 'developer'); 
findWordPosition('Hello Sule', 'sule'); 
findWordPosition('Learning JavaScript is fun', 'Python');
findWordPosition(12345, '5'); 
findWordPosition('Hello world', 10); 

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
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Please provide valid numbers.');
    return;
  }


  switch (operator) {
    case '+':
      console.log(a + b);
      break;

    case '-':
      console.log(a - b);
      break;

    case '*':
      console.log(a * b);
      break;

    case '/':
      if (b === 0) {
        console.log('Cannot divide by zero.');
      } else {
        console.log(a / b);
      }
      break;

    default:
      console.log('Invalid operator.');
  }
}

calculate(12.5, '+', 7.3);       
calculate(100, '/', 3);        
calculate(5, '*', -4);           
calculate(0, '+', 45);     
calculate(200, '/', 0);     
calculate('20', '+', 5);         
calculate(30, '#', 5);         
calculate(15.75, '-', 5.25);


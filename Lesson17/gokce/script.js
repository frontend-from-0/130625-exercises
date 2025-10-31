/*
1. Check Password Length
   - Define a function `checkPassword(password)` that checks if `password` length
     is at least 8 characters.
   - If >= 8, log: "Password length is sufficient."
   - Otherwise, log: "Password is too short."
   - Call the function with different passwords and log the result.
*/
function checkPassword(password) {
  if (typeof password !== "string") {
    console.log("Please prvide a string value");
    return;
  }
  if (password.toString().length >= 8) {
    console.log("Password length is sufficient.");
  } else {
    console.log("Password is too short.");
  }
}

checkPassword("123456");
checkPassword("123456789");

/*
2. Uppercase Name
   - Define a function `uppercaseName(name)` that converts a given name to uppercase.
   - Log the uppercase result to the console.
   - Example: "John Doe" -> "JOHN DOE"
*/
function uppercaseName(name) {
  if (typeof name !== "string") {
    console.log("Please prvide a string value");
    return;
  } else {
    console.log(name.toUpperCase());
  }
}
uppercaseName();
uppercaseName("hasan");

/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/

function normalizeEmail(email) {
  let normalized = email.toLowerCase();
  console.log(`Ex.3. ${normalized}`);
}
normalizeEmail("GOKCEEMSAL34@gmail.cOm");
/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/
function getDomain(email) {
  if (typeof email !== "string") {
    console.log("Please prvide a string value");
    return;
  }
  //   const startIndex = email.indexOf('@') + 1;

  //   const domain = email.substring(startIndex);
  //   console.log(domain);

  const result = email.split("@");
  console.log(result[1]);
}
getDomain("jjasdasdas@example.com");

/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/
function containsWord(Sentence, word) {
  if (typeof Sentence !== "string" || typeof word !== "string") {
    console.log("Please provide sentence or word parameters in string format");
    return;
  }
  if (Sentence.includes(word)) {
    console.log(`Ex.5. <${word}> found in sentence. `);
  } else {
    console.log(`Ex.5. <${word}> not found in sentence. `);
  }
}
containsWord("This is a sample sentence.", "sample");
containsWord("This is a sample sentence.", "test");
containsWord("This is a sample sentence.", 123);

// && - all values must be true for expression to be true (like multiplication by 0)
// true && false && true && true => false
// || -
// true || false || true => true (is like +)
/*
function containsWord(sentence, word) {
  if (typeof sentence !== "string" || typeof word !== "string") {
    console.log("Please provide sentece and word parameters as string.");
    return;
  }

  if (sentence.includes(word)) {
    console.log(word + " found in sentence.");
  } else {
    console.log(word + " not found in the sentence.");
  }
}

containsWord("<word> found in sentence.", " ");
containsWord("<word> found in sentence.", "comma found in sentence.");
containsWord("<word> found in sentence.", true);
containsWord(124321321312, 12);
*/
/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/
function checkFileExtension(filename) {
  // TODO: add type
  if (filename.endsWith(".pdf")) {
    console.log("This is a PDF file.");
  } else {
    console.log("Not a PDF file.");
  }
}

checkFileExtension("myassignment.pdf");

/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/
function compareNumbers(a, b) {
  // TODO: check that a and b are numbers
  if (typeof a !== "string" || typeof b !== "string") {
    console.log("Please prvide a number value");
    return;
  }
  if (a > b) {
    console.log("a is bigger");
  } else if (b > a) {
    console.log("b is bigger");
  } else {
    console.log("Numbers are equal");
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
  if (typeof str !== "string") {
    console.log("Please provide str parameter in string format");
    return;
  }
  let splitted = str.split("");
  let reverseWords = [];
  for (let i = splitted.length - 1; i >= 0; i--) {
    reverseWords.push(splitted[i]);
  }
  if (str === reverseWords.join("")) {
    console.log(`<${str}> is a palindrome`);
  } else {
    console.log(`<${str}> is not a palindrome`);
  }
}
isPalindrome("gokce");

isPalindrome("madam");

/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/
function truncateString(text, maxLength) {
  let lengthOftext = text.length;
  let newState = " ";
  if (lengthOftext > maxLength) {
    newState = text.slice(0, maxLength);
    console.log(`Ex.9.The final truncated string is: ${newState} ...`);
  } else {
    console.log(`Ex.9.The final truncated string is: ${text}`);
  }
}

truncateString("This is a long string that needs to be truncated.", 10);

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
function evenOrOdd(number) {
  if (typeof number !== "number" || isNaN(number)) {
    console.log(
      `Please provide number parameter in number format.That you provided is <${number}> not a number`,
    );
    return;
  }
  if (number % 2 === 0) {
    console.log(`Ex.10.${number}:EVEN`);
  } else {
    console.log(`Ex.10.${number}:ODD`);
  }
}
evenOrOdd("dkj");
evenOrOdd(4);
evenOrOdd(7);

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/

function checkProtocol(url) {
  if (typeof url !== "string") {
    console.log(
      `Please provide url parameter in string format.That you provided is <${url}> not a string`,
    );
    return;
  }
  let checkUrl = url.toLowerCase();
  if (checkUrl.startsWith("https")) {
    console.log("Ex.11.Secure connection");
  } else {
    console.log("Ex.11.Unsecure connection");
  }
}

checkProtocol("HTTPS://example.com");
checkProtocol("http://example.com");
checkProtocol(12345);

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
  if (num <= 0 || num > 7 || typeof num !== "number") {
    console.log("Invalid day");
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
  }
}
getDayOfWeek(3);
getDayOfWeek(8);
getDayOfWeek(0);
getDayOfWeek("asdas");

// value == value
/// value and type === value and type

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/
function repeatWord(word, times) {
  if (typeof word !== "string") {
    console.log(
      `Please provide word parameter in string format.That you provided is <${word}> not a string`,
    );
    return;
  }
  let repeatedWord;
  if (times >= 0) {
    repeatedWord = word.repeat(times);
    console.log(`Ex.13. The repeated word is ${repeatedWord}`);
  } else {
    console.log(
      `Please provide times parameter in positive number format.That you provided is <${times}> not a positive number`,
    );
  }
}

repeatWord("Hello", 3);
repeatWord("Hello", -2);
repeatWord(123, 3);

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/

function censorWord(sentence, target) {
  if (typeof sentence !== "string" || typeof target !== "string") {
    console.log(`Please provide sentence-target parameter in string format.`);
    return;
  }
  let censoredSentence = sentence.replaceAll(target, "****");
  console.log(`Ex.14.The censored sentence is: ${censoredSentence}`);
}

censorWord("This is a bad word in a bad sentence.", "bad");

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
function startsWithA(str) {
  if (typeof str !== "string") {
    console.log(`Please provide str parameter in string format.`);
    return;
  }
  if (str.charAt(0) === "A") {
    console.log(`Starts with A`);
  } else {
    console.log(`Does not start with A`);
  }
}

startsWithA("Apple");
startsWithA("Banana");
/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLastN(text, n) {
  if (typeof text !== "string" || typeof n !== "number") {
    console.log(
      `Please provide text parameter in string, n parameter in number format.`,
    );
    return;
  }
  let lastNCharacters;
  lastNCharacters = text.slice(-n);
  console.log(`Ex.16.The sliced word is: ${lastNCharacters}`);
}

sliceLastN("JavaScript", -6);
sliceLastN("Hello World", -5);
sliceLastN(12345, -2);

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
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}

gradeChecker(95);
gradeChecker(85);
gradeChecker(75);
gradeChecker(69);
gradeChecker(59);
/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
function replaceCharacter(str, oldChar, newChar) {
  let changeChar = "";
  for (const char of str) {
    changeChar += char.replaceAll(oldChar, newChar);
  }
  console.log(`Ex.18. ${changeChar}`);
}
replaceCharacter("banana", "a", "o");

/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/

//Bu fonksiyonda çok zorlandım.

function titleCase(sentence) {
  let currentWord = "";
  let wordsArray = [];
  for (const char of sentence) {
    if (char !== " ") {
      currentWord += char;
    } else {
      wordsArray.push(currentWord);
      currentWord = "";
    }
  }
  wordsArray.push(currentWord);
  let titleCasedWords = [];
  let firstLetter = [];
  let restOfWord = [];
  let newWord = "";
  for (const word of wordsArray) {
    firstLetter = word[0].toUpperCase();
    restOfWord = word.slice(1).toLowerCase();
    newWord = firstLetter + restOfWord;
    titleCasedWords.push(newWord);
  }
  let newsentence = titleCasedWords.join(" ");
  console.log(newsentence);
}
titleCase("hello world from javascript");

function titleCase(sentence) {
  const wordsArray = sentence.split(" ");
  const titleCasedWords = wordsArray.map(
    (word) => word[0].toUpperCase() + word.slice(1).toLowerCase(),
  );
  let makeIttogether = titleCasedWords.join(" ");
  console.log(makeIttogether);
}
titleCase("hello world from javascript");

/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/
function trafficLight(color) {
  switch (color) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("Caution");
      break;
    case "green":
      console.log("Go");
      break;
    default:
      console.log("Invalid color");
  }
}
trafficLight("red");

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/

function isLongString(str) {
  if (typeof str !== "string") {
    console.log(`Please provide str parameter in string format.`);
    return;
  }
  if (str.length > 10) {
    console.log("Long string");
  } else {
    console.log("Short string");
  }
}
isLongString("Hello World!");
isLongString("Hello");

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/

function isSpam(text) {
  let checkTheWord = text.toLowerCase();
  let spamCheck = checkTheWord.includes("spam");
  if (spamCheck === true) {
    console.log("This text is spam");
  } else {
    console.log("This text is not spam");
  }
}
isSpam("This is a SPAM message.");

/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
function getInitials(fullName) {
  let splitName = fullName.split(" ");
  let initials = "";
  for (const namePart of splitName) {
    initials += namePart[0].toUpperCase();
  }
  console.log(initials.split("").join(".") + ".");
}
getInitials("John Doe");
getInitials("gokce emsal");

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
  if (typeof monthNum !== "number" || monthNum < 1 || monthNum > 12) {
    console.log(
      `Please provide monthNum parameter in number format and in an correct range.`,
    );
    return;
  }
  if (monthNum === 12 || monthNum === 1 || monthNum === 2) {
    console.log("Winter");
  } else if (monthNum === 3 || monthNum === 4 || monthNum === 5) {
    console.log("Spring");
  } else if (monthNum === 6 || monthNum === 7 || monthNum === 8) {
    console.log("Summer");
  } else if (monthNum === 9 || monthNum === 10 || monthNum === 11) {
    console.log("Autumn");
  }
}
getSeason(5);

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/
function containsNumber(str) {
  for (const char of str) {
    if (isNaN(char) === false) {
      console.log("Contains number");
      return true;
    }
  }
  console.log("No number found");
  return false;
}

containsNumber("askdhs8dnks");

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
function padString(str, maxLength) {
  if (str.length < maxLength) {
    let newVersion = str.padEnd(maxLength, "*");
    console.log(newVersion);
  }
}

padString("Hello", 10);

/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
function canVote(age) {
  if (age >= 18) {
    console.log("Can vote");
  } else {
    console.log("Too young to vote");
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
//Bu fonksiyonda çok zorlandım.
function reverseWords(sentence) {
  const makeWordArray = sentence.split(" ");
  let reversedWordsArray = [];

  for (const word of makeWordArray) {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWordsArray.push(reversedWord);
  }
  let makeStringAgain = reversedWordsArray.join(" ");
  console.log(makeStringAgain);
}
reverseWords("Hello World from JavaScript");

/*
function reverseWords(sentence) {
  const makeWordArray = sentence.split();
  let reversedSentence;

  for (const word of makeWordArray) {
    reversedSentence = word.split("").reverse().join("");
  }
  console.log(reversedSentence);
}
reverseWords("Hello World from JavaScript");
*/

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
function findWordPosition(sentence, word) {
  findIndex = sentence.indexOf(word);
  if (findIndex) {
    console.log(`Ex.29.${findIndex}`);
  } else {
    console.log("Not found");
  }
}
findWordPosition("This is a sample sentence.", "sample");
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
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Please provide a and b parameters in number format.");
    return;
  }
  let result;
  switch (operator) {
    case "+":
      result = a + b;
      console.log(result);
      break;
    case "-":
      result = a - b;
      console.log(result);
      break;
    case "*":
      result = a * b;
      console.log(result);
      break;
    case "/":
      result = a / b;
      console.log(result);
      break;
    case 0:
      console.log("Invalid");
      break;
    default:
      console.log("Invalid operator");
      break;
  }
}
calculate(5, "+", 3);

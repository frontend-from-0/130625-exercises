/*
1. Check Password Length
   - Define a function `checkPassword(password)` that checks if `password` length
     is at least 8 characters.
   - If >= 8, log: 'Password length is sufficient.'
   - Otherwise, log: 'Password is too short.'
   - Call the function with different passwords and log the result.
*/

function checkPassword(password) {
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
   - Example: 'John Doe' -> 'JOHN DOE'
*/

function uppercaseName(name) {
  if (typeof name !== "string") {
    console.log("Please provide a string value.");
    return;
  } else {
    console.log(name.toUpperCase());
  }
}

uppercaseName("idil doğa");

/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: 'USER@Example.COM' -> 'user@example.com'
*/

function normalizeEmail(email) {
  if (typeof email !== "string") {
    console.log("Please provide a string value.");
    return;
  } else {
    //return kullandığımız için burda else olmasa da olur.
    console.log(email.toLowerCase());
  }
}

normalizeEmail("eliFBASak.yavuz@code2career.eu");

/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: 'user@example.com' -> 'example.com'
*/

function getDomain(email) {
  if (typeof email !== "string") {
    console.log("Please provide a string value.");
    return;
  }
  const domain = email.split("@");
  console.log(domain[1]);
}

getDomain("elifbasak@code2career.eu");

/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: '<word> found in sentence.'
   - Else, log: '<word> not found in sentence.'
*/

function containsWord(sentence, word) {
  if (typeof sentence !== "string" || typeof word !== "string") {
    console.log("Please provide a string value.");
    return;
  }
  if (sentence.includes(word)) {
    console.log(word + " found in sentence");
  } else {
    console.log(word + " not found in sentence");
  }
}

containsWord("merhaba bugün nasıl hissediyorsun?", "bugün");
containsWord("merhaba bugün nasıl hissediyorsun?", "yarın");

// && - all values must be true for expression to be true (like multiplication by 0)
// true && false && true && true => false
// || -
// true || false || true => true (is like +)

/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with '.pdf' using .endsWith().
   - If it does, log: 'This is a PDF file.'
   - Otherwise, log: 'Not a PDF file.'
*/

function checkFileExtension(filename) {
  if (typeof filename !== "string") {
    console.log("Please provide a string value.");
    return;
  }
  if (filename.endsWith(".pdf")) {
    console.log("This is a PDF file.");
  } else {
    console.log("Not a PDF file.");
  }
}

checkFileExtension("document.pdf");
checkFileExtension("document.doc");
checkFileExtension(45454.545);

/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs 'a is bigger' if a > b
     - Logs 'b is bigger' if b > a
     - Logs 'Numbers are equal' if they are the same
*/

function compareNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Please provide a number value.");
    return;
  }
  if (a > b) {
    console.log("a is bigger");
  } else if (b > a) {
    console.log("b is bigger");
  } else if (b === a) {
    console.log("Numbers are equal");
  }
}

compareNumbers(5, 8);
compareNumbers(8, 5);
compareNumbers(8, 8);
compareNumbers(8, "hello");

/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards.
   - If it is, log: '<str> is a palindrome'
   - Otherwise, log: '<str> is not a palindrome'
*/

function isPalindrome(str) {
  if (typeof str !== "string") {
    console.log("Ex.8. Please provide a string value.");
    return;
  }
  const splittedArray = str.split("");
  console.log("Ex.8. Converted to an array", splittedArray);
  const reversedArray = splittedArray.reverse();
  console.log("Ex.8. Reversed the array:", reversedArray);
  const palindromeString = reversedArray.join("");
  console.log("Ex.8. Joined as a string:", palindromeString);
  if (str === palindromeString) {
    console.log(`Ex.8. ${str} is a palindrome`);
  } else {
    console.log(`Ex.8. ${str} is not a palindrome`);
  }
}

isPalindrome("noon");
isPalindrome("elif");
isPalindrome(99);

/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends '...' if it was too long.
   - Log the final truncated string.
*/

function truncateString(text, maxLength) {
  if (typeof text !== "string" || typeof maxLength !== "number") {
    console.log(
      "Ex.9.",
      "Please provide a valid value for both text and number."
    );
    return;
  }

  const truncatedString = text.slice(0, maxLength);
  if (text.length > maxLength) {
    console.log(`Ex.9. ${truncatedString}...`);
  } else {
    console.log(`Ex.9. ${truncatedString}`);
  }
}

truncateString("watermelon", 8);
truncateString("birthday", 8);
truncateString(8, "watermelon");

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs 'Even' if the number is even
     - Logs 'Odd' if the number is odd
*/

function evenOrOdd(number) {
  if (typeof number !== "number") {
    console.log("Ex.10.", "Please provide a number value.");
    return;
  }

  if (number % 2 === 0) {
    console.log("Ex.10.", "Even");
  } else {
    console.log("Ex.10.", "Odd");
  }
}

evenOrOdd(8);
evenOrOdd(9);
evenOrOdd("8");
evenOrOdd("@)");

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with 'https' using .startsWith().
   - Log 'Secure connection' if true, otherwise 'Unsecure connection'.
*/

function checkProtocol(url) {
  if (typeof url !== "string") {
    console.log("Ex.11., Please provide a string value.");
    return;
  }

  const lowerCaseUrl = url.toLowerCase();
  if (lowerCaseUrl.startsWith("https")) {
    console.log("Ex.11.", "Secure connection");
  } else {
    console.log("Ex.11.", "Unsecure connection");
  }
}

checkProtocol("https://DEVELOPER.MOZILLA.org/en-US/");
checkProtocol("http://developer.mozilla.org/en-US/");
checkProtocol("");

/*
12. Switch: Day of the Week
   - Define a function `getDayOfWeek(num)` that uses a switch statement:
     1 -> 'Monday'
     2 -> 'Tuesday'
     ...
     7 -> 'Sunday'
     - Log the matched day or 'Invalid day' if out of range.
*/

function getDayOfWeek(num) {
  if (typeof num !== "number") {
    console.log("Ex.12.", "Please provide a number value.");
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
      console.log("Ex.12.", "Invalid day");
  }
}

getDayOfWeek(5);
getDayOfWeek(11);

// value == value
/// value and type === value and type

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/

function repeatWord(word, times) {
  if (typeof word !== "string" || typeof times !== "number") {
    console.log(
      "Ex.13.",
      "Please provide a valid value for both text and number."
    );
    return;
  }

  const repeatedWord = word.repeat(times);

  console.log(`Ex.13. ${repeatedWord}`);
}

repeatWord("love", 3);
repeatWord(3, "love");

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with '****' (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/

function censorWord(sentence, target) {
  const censoredSentence = sentence.replaceAll(target, "****");

  console.log(`Ex.14. ${censoredSentence}`);
}

censorWord(
  "This word is offending, so this function will censor this word.",
  "word"
);

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log 'Starts with A' or 'Does not start with A'.
*/

function startsWithA(str) {
  if (typeof str !== "string") {
    console.log("Ex.15. Please provide a string value.");
    return;
  }

  const firstLetter = str[0].toUpperCase();
  if (firstLetter === "A") {
    console.log("Ex.15", "Starts with A");
  } else {
    console.log("Ex.15", "Does not start with A");
  }
}

startsWithA("A child laughed with joy.");
startsWithA("Children laughed with joy.");

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/

function sliceLastN(text, n) {
  if (typeof text !== "string" || typeof n !== "number") {
    console.log(
      "Ex.16.",
      "Please provide a valid value for both text and number."
    );
    return;
  }
  const slicedText = text.slice(-n);
  console.log("Ex.16", slicedText);
}

sliceLastN("This is a sentence.", 5);

/*
17. Switch: Grade Checker
   - Define a function `gradeChecker(score)` that uses a switch (or if-else chain):
     90+ -> 'A'
     80-89 -> 'B'
     70-79 -> 'C'
     60-69 -> 'D'
     below 60 -> 'F'
   - Log the grade.
*/
function gradeChecker(score) {
  if (typeof score !== "number") {
    console.log("Ex.17.", "Please provide a number value.");
    return;
  }

  if (score >= 90) {
    console.log("Ex.17.", "A");
  } else if (score >= 80) {
    console.log("Ex.17.", "B");
  } else if (score >= 70) {
    console.log("Ex.17.", "C");
  } else if (score >= 60) {
    console.log("Ex.17.", "D");
  } else if (score < 60) {
    console.log("Ex.17.", "F");
  }
}

gradeChecker(95);
gradeChecker(85);
gradeChecker(70);
gradeChecker(60);
gradeChecker(20);

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/

function replaceCharacter(str, oldChar, newChar) {
  if (typeof str !== "string" || typeof oldChar !== "string") {
    console.log("Ex.18.", "Please provide a string value.");
    return;
  }
  //Kullanıcı newChar olarak number değeri girmek isteyebilir. Bu yüzden uyarı vermeden onu esnek bırakıp direkt string'e çevirdim.
  const stringedNewChar = newChar.toString();
  const newString = str.replaceAll(oldChar, stringedNewChar);
  console.log("Ex.18.", newString);
}

replaceCharacter("Hello World", "o", "u");
replaceCharacter("Hello World", "o", 2);

/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/

function titleCase(sentence) {
  const transformedString = sentence.split(" ");
  console.log("Ex.19.", transformedString);
  for (let i = 0; i < transformedString.length; i++) {
    const word = transformedString[i];
    if (transformedString.length > 0) {
      transformedString[i] =
        word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  }
  const finalString = transformedString.join(" ");
  console.log("Ex.19.", finalString);
}

titleCase("Log the transformed string.");

//İlk harfleri büyüttükten sonra devamının eklenmesi konusunda Gemini'dan destek aldım.

/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - 'red' -> log: 'Stop'
     - 'yellow' -> log: 'Caution'
     - 'green' -> log: 'Go'
     - anything else -> 'Invalid color'
*/

function trafficLight(color) {
  switch (color) {
    case "red":
      console.log("Ex.20.", "Stop");
      break;
    case "yellow":
      console.log("Ex.20.", "Caution");
      break;
    case "green":
      console.log("Ex.20.", "Go");
      break;
    default:
      console.log("Ex.20.", "Invalid color");
  }
}

trafficLight("green");
trafficLight("white");

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log 'Long string' or 'Short string'.
*/

function isLongString(str) {
  //This time I prefer not to do the type-check, instead I tried to convert all value types to string.
  const convertedToString = String(str);

  if (convertedToString.length > 10) {
    console.log("Ex.21.", "Long string");
  } else {
    console.log("Ex.21.", "Short string");
  }
}

isLongString("This is a long string.");
isLongString("Too short");
isLongString(8498394839489);

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes 'spam'.
   - If it does, log 'This text is spam.'
   - Otherwise, log 'This text is not spam.'
*/

function isSpam(text) {
  const lowerCaseText = text.toLowerCase();
  if (lowerCaseText.includes("spam")) {
    console.log("Ex.22.", "This text is spam.");
  } else {
    console.log("Ex.22.", "This text is not spam.");
  }
}

isSpam("I am a spam text.");
isSpam("I am a normal text.");

/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: 'John Doe' -> 'J.D.'
*/

function getInitials(fullName) {
  if (typeof fullName !== "string") {
    console.log("Please provide a string value.");
    return;
  }

  const newArray = fullName.split(" ");
  console.log("Ex.23.", newArray);
  const initials = newArray.map((initial) => initial[0].toUpperCase() + ".");
  const joinedInitials = initials.join("");
  console.log("Ex.23.", joinedInitials);
}

//map() metodunu Gemini'dan öğrenerek yaptım.

getInitials("Sample Name");

/*
24. Switch: Month to Season
   - Define a function `getSeason(monthNum)` (1-12). Use switch or if-else:
     - 12, 1, 2  -> 'Winter'
     - 3, 4, 5   -> 'Spring'
     - 6, 7, 8   -> 'Summer'
     - 9, 10, 11 -> 'Autumn'
   - Log the season or 'Invalid month' if out of range.
*/

function getSeason(monthNum) {
  if (typeof monthNum !== "number") {
    console.log(
      "Ex.24.",
      'Please provide the month number in "number" format.'
    );
    return;
  }

  switch (monthNum) {
    case 12:
    case 1:
    case 2:
      console.log("Ex.24.", "Winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Ex.24.", "Spring");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Ex.24.", "Summer");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Ex.24.", "Autumn");
      break;
    default:
      console.log("Ex.24.", "Invalid month");
  }
}

getSeason(2);
getSeason(5);
getSeason(8);
getSeason(10);

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log 'Contains number' or 'No number found'.
*/

function containsNumber(str) {
  if (typeof str !== "string") {
    console.log("Ex.25.", "Please provide a string value.");
    return;
  }

  for (const char of str) {
    if (char >= "0" && char <= "9") {
      console.log("Ex.25.", "Contains number");
      return;
    }
  }
  console.log("Ex.25.", "No number found");
}

containsNumber("This is string number 5");
containsNumber("There is no number in this string");
containsNumber(55545455);

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/

function padString(str, maxLength) {
  if (typeof str !== "string" || typeof maxLength !== "number") {
    console.log(
      "Ex.26.",
      "Please provide a valid value for both text and maxLength."
    );
    return;
  }

  if (str.length < maxLength) {
    console.log("Ex.26.", str.padEnd(maxLength, "*"));
  }
}

padString("Flower", 10);

/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - 'Can vote' if age >= 18
     - 'Too young to vote' otherwise
*/

function canVote(age) {
  if (typeof age !== "number") {
    console.log("Ex.27.", 'Please provide the age in "number" format.');
    return;
  }

  if (age >= 18) {
    console.log("Ex.27.", "Can vote");
  } else {
    console.log("Ex.27.", "Too young to vote");
  }
}

canVote(18);
canVote(55);
canVote(14);

/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/

function reverseWords(sentence) {
  if (typeof sentence !== "string") {
    console.log("Ex.28.", "Please provide a string value.");
    return;
  }
  const splittedSentence = sentence.split(" ");
  console.log("Ex.28.", splittedSentence);
  const newArray = [];
  for (const words of splittedSentence) {
    const eachWord = words.split("").reverse().join("");
    newArray.push(eachWord);
  }
  console.log("Ex.28.", newArray);
  const finalString = newArray.join(" ");
  console.log("Ex.28.", finalString);
}

reverseWords("Hello my name is Elif");

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log 'Not found' if it's -1.
*/

function findWordPosition(sentence, word) {
  if (typeof sentence !== "string" || typeof word !== "string") {
    console.log("Ex.29.", "Please provide a string value.");
    return;
  }
  const LowerSentence = sentence.toLowerCase();
  const LowerWord = word.toLowerCase();
  const index = LowerSentence.indexOf(LowerWord);
  if (index === -1) {
    console.log("Ex.29.", "Not found");
  } else {
    console.log("Ex.29.", index);
  }
}

findWordPosition("This is a sample sentence.", "sample");
findWordPosition("This is a sample sentence.", "Sample");
findWordPosition("This is a sample sentence.", "hello");
findWordPosition("This is a sample sentence.", 5);

/*
30. Switch: Simple Calculator
   - Define a function `calculate(a, operator, b)` that uses switch to handle:
     - '+' -> a + b
     - '-' -> a - b
     - '*' -> a * b
     - '/' -> a / b
     - Otherwise -> 'Invalid operator'
   - Log the result.
*/

function calculate(a, operator, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log(
      "Ex.30.",
      "Please provide a valid value for both text and number."
    );
    return;
  }

  switch (operator) {
    case "+":
      console.log("Ex.30.", a + b);
      break;
    case "-":
      console.log("Ex.30.", a - b);
      break;
    case "*":
      console.log("Ex.30.", a * b);
      break;
    case "/":
      console.log("Ex.30.", a / b);
      break;
    default:
      console.log("Ex.30.", "Invalid operator");
  }
}
calculate("five", "+", 3);
calculate(5, "+", 3);
calculate(5, "-", 3);
calculate(5, "*", 3);
calculate(6, "/", 3);
calculate(6, "$", 3);

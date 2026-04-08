/*
1. Check Password Length
   - Define a function `checkPassword(password)` that checks if `password` length
     is at least 8 characters.
   - If >= 8, log: "Password length is sufficient."
   - Otherwise, log: "Password is too short."
   - Call the function with different passwords and log the result.
*/

const { Computer } = require("lucide-react");

/* TODO PASSWORD LENGTH CHECK */
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
   - Example: "John Doe" -> "JOHN DOE"
*/
/* TODO NAME CHANGE TO UPPERCASE */
function uppercaseName(name) {
  if (typeof name !== "string") {
    console.log("Ex. 2 : Please provide a string value");
    return;
  } else {
    console.log("Ex. 2 :", name.toUpperCase());
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
/* TODO EMAIL CHANGE TO LOWERCASE */
function normalizeEmail(email) {
  let mailAdress = email.toLowerCase();
  console.log("Ex. 3: Correct email address style is:", mailAdress);
  return;
}
normalizeEmail("USER@Example.COM");

/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/

/* TODO TEXT SEPERATE WITH '@' AND WRITE SECOUND SECTION */
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
console.log("Ex. 4:");
getDomain("jjasdasdas@example.com");

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
  if (typeof sentence !== "string" || typeof word !== "string") {
    console.log("Ex. 5: Please provide sentece and word parameters as string.");
    return;
  }

  if (sentence.includes(word)) {
    console.log("Ex. 5:", word + " found in sentence.");
  } else {
    console.log("Ex. 5:", word + " not found in the sentence.");
  }
}

containsWord("<word> found in sentence.", " ");
containsWord("<word> found in sentence.", "comma found in sentence.");
containsWord("<word> found in sentence.", true);
containsWord(124321321312, 12);

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
    console.log("Ex. 6: This is a PDF file.");
  } else {
    console.log("Ex. 6: Not a PDF file.");
  }
}

checkFileExtension("myassignment.pdf");
checkFileExtension("myassignment.docx");
/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/
function compareNumbers(a, b) {
  // TODO: check that a and b are numbers
  if (a > b) {
    console.log("Ex. 7: a is bigger");
  } else if (b > a) {
    console.log("Ex. 7: b is bigger");
  } else {
    console.log("Ex. 7: Numbers are equal");
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
// TODO: check Palindrome words
function isPalindrome(str) {
  const testStr = str.toLowerCase();
  const reversedstr = testStr.split("").reverse().join("");

  if (testStr === reversedstr) {
    console.log(`EX. 8: ${str} is palindrome.`);
  } else {
    console.log(`EX. 8: ${str} is not palindrome`);
  }
}
isPalindrome("Radar");
isPalindrome("radaT");

/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/
// TODO: check words length then add ...

function truncateString(text, maxLength) {
  if (text.length > maxLength) {
    const shortText = text.slice(0, maxLength);
    console.log(`Ex. 9: ${shortText}...`);
  } else {
    console.log(`Ex. 9: ${text}`);
  }
}

truncateString("Computer", 4);
truncateString("cold", 4);

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
// TODO: check numbers for Even or Odd

function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log(`EX. 10: ${number} is even number`);
  } else {
    console.log(`EX. 10: ${number} is odd number`);
  }
}

evenOrOdd(5);
evenOrOdd(8);
/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
// TODO: protocol check with 'using .startsWith()'
function checkProtocol(url) {
  const testAdress = url.toLowerCase();
  if (testAdress.startsWith("https")) {
    console.log(`Èx. 11: ${url} Secure connection ✅`);
  } else {
    console.log(`Èx. 11: ${url} UNSECURE connection ❌`);
  }
}

checkProtocol("HTTPS:www.google.com");
checkProtocol("HTTP:www.google.com");

/*
12. Switch: Day of the Week
   - Define a function `getDayOfWeek(num)` that uses a switch statement:
     1 -> "Monday"
     2 -> "Tuesday"
     ...
     7 -> "Sunday"
     - Log the matched day or "Invalid day" if out of range.
*/

// value == value
/// value and type === value and type

// TODO: write day of week with use number

function getDayOfWeek(num) {
  if (typeof num === "number") {
    switch (num) {
      case 1:
        console.log("EX. 12: Monday");
        break;
      case 2:
        console.log("EX. 12: Tuesday");
        break;
      case 3:
        console.log("EX. 12: Wednesday");
        break;
      case 4:
        console.log("EX. 12: Thursday");
        break;
      case 5:
        console.log("EX. 12: Friday");
        break;
      case 6:
        console.log("EX. 12: Saturday");
        break;
      case 7:
        console.log("EX. 12: Sunday");
        break;
      default:
        console.log("EX. 12: Invalid day");
    }
  } else {
    console.log("EX. 12: You must enter only number");
  }
}
getDayOfWeek(1);
getDayOfWeek("seven");
getDayOfWeek(7);
getDayOfWeek(9);

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/
// TODO: use repeat() method with function
function repeatWord(word, times) {
  if (typeof word !== "string" || typeof times !== "number" || times < 0) {
    console.log(
      "EX. 13: Please enter first value STRING and secound value POSITIVE NUMBER.",
    );
    return;
  } else {
    console.log(`EX. 13: Futball fans chanted Türkiye ${word.repeat(times)}`);
  }
}

repeatWord("Oley! ", 3);
repeatWord("Gol ", 2);
repeatWord(5, -3);
repeatWord(" 5 ", 3);

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/

// TODO: use replaceAll() method with function for information secure
function censorWord(sentence, target) {
  if (typeof sentence !== "string" || typeof target !== "string") {
    console.log("Ex. 14: Please enter only a string value.");
    return;
  }
  console.log(sentence.replaceAll(target, "****"));
}

censorWord("Ex. 14: User name: Hasan_KAN", "asan_KAN");
console.log("Ex. 14: Please enter secure number from email.");

/* 
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
function startsWithA(str) {
  if (typeof str !== "string") {
    console.log("Ex. 15: Please enter only a string value.");
    return;
  }
  if (str.charAt(0) === "A") {
    console.log("Ex. 15: Word is begin A");
    return;
  } else {
    console.log("Ex. 15: Word is not begin A");
  }
}

startsWithA("Ali");
startsWithA("ali");
startsWithA(234);
/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLastN(text, n) {
  console.log(`Ex. 16: ${text.slice(-n)}`);
  return;
}

sliceLastN("quick", 2);

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
  if (typeof score === "number") {
    switch (true) {
      case score >= 90:
        console.log("EX. 17: A");
        break;
      case score >= 80:
        console.log("EX. 17: B");
        break;
      case score >= 70:
        console.log("EX. 17: C");
        break;
      case score >= 60:
        console.log("EX. 17: D");
        break;
      default:
        console.log("EX. 17: F");
    }
  } else {
    console.log("EX. 17: You must enter only number(0 - 100)");
  }
}

gradeChecker(90);
gradeChecker(83);
gradeChecker(73);
gradeChecker(63);
gradeChecker(15);
gradeChecker("seven");
/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
function replaceCharacter(str, oldChar, newChar) {
  if (
    typeof oldChar !== "string" ||
    typeof newChar !== "string" ||
    typeof str !== "string"
  ) {
    console.log("Ex. 18: Please enter only a string value.");
    return;
  }
  console.log(str.replaceAll(oldChar, newChar));
}

replaceCharacter("Ex. 18: ATa", "a", "A");

/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/
function titleCase(sentence) {
  if (typeof sentence !== "string") {
    console.log("Ex.19: Please enter string sentence.");
    return;
  }
  const result = sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  console.log(`Ex. 19: ${result}`);
}

titleCase("I feel so good!");

/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/

function trafficLight(color) {
  if (typeof color === "string") {
    switch (color) {
      case "red":
        console.log("EX. 20: Stop");
        break;
      case "yellow":
        console.log("EX. 20: Caution");
        break;
      case "green":
        console.log("EX. 20: Go");
        break;
      default:
        console.log("EX. 20: Invalid color");
    }
  } else {
    console.log("EX. 20: You must enter only traffic lights color");
  }
}
trafficLight(1);
trafficLight("red");
trafficLight("green");
trafficLight("yellow");

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/
function isLongString(str) {
  if (10 < str.length) {
    console.log("Ex. 21: Long String");
  } else {
    console.log("Ex. 21: Short String");
  }
}

isLongString("1234567891011");
isLongString("abc");
/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text) {
  const lowerCase = text.toLowerCase();
  if (lowerCase.includes("spam")) {
    console.log("Ex. 22: This text is spam.");
  } else {
    console.log("Ex. 22: This text is not spam.");
  }
}
isSpam("İnformation Blog is nomal article for everyone.");
isSpam("Commercials are spams in Bolgs.");

/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
function getInitials(fullName) {
  if (typeof fullName !== "string") {
    console.log("Ex.23: Please enter string sentence.");
    return;
  }
  const result = fullName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  console.log(`Ex. 23: ${result}`);
}
getInitials("hasan kan");

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
  if (typeof monthNum !== "number") {
    console.log("Ex.24: Please enter number betwen 0-13");
    return;
  }
  if (monthNum == 12 || monthNum == 1 || monthNum == 2) {
    console.log("Ex. 24: Winter");
    return;
  }
  if (monthNum == 3 || monthNum == 4 || monthNum == 5) {
    console.log("Ex. 24: Spring");
    return;
  }
  if (monthNum == 6 || monthNum == 7 || monthNum == 8) {
    console.log("Ex. 24: Summer");
    return;
  }
  if (monthNum == 9 || monthNum == 10 || monthNum == 11) {
    console.log("Ex. 24: Autumn");
    return;
  } else {
    console.log("Ex. 24: Invalid month");
  }
}

getSeason(3);
getSeason(6);
getSeason(9);
getSeason(2);
getSeason(13);
getSeason("A");
/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/
function containsNumber(str) {
  if (str.match(/\d/)) {
    console.log("Ex. 25: Contains number");
  } else {
    console.log("Ex. 25: No number found");
  }
}
containsNumber("A4");
containsNumber("Abcd");
/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
function padString(str, maxLength) {
  if (str.length < maxLength) {
    const userName = str.padStart(maxLength, "*");
    console.log(`Ex. 26: user name:/ account number: ${userName}`);
  } else {
    console.log(`Ex. 26: ${str}`);
  }
}

padString("n", 5);

/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
function canVote(age) {
  if (age >= 18) {
    console.log("Ex. 27: Can vote");
  } else {
    console.log("Ex. 27: Too young to vote");
  }
}
canVote(18);
canVote(17);
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
    console.log("Ex.28: Please enter string sentence.");
    return;
  }
  const result = sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
  console.log(`Ex. 28: ${result}`);
}
reverseWords("THE RED CAR IS CRASH .");
/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
function findWordPosition(sentence, word) {
  if (typeof sentence !== "string" || typeof word !== "string") {
    console.log("Ex. 29: Please enter only string values.");
    return;
  }
  const index = sentence.indexOf(word);

  if (index === -1) {
    console.log("Ex. 29: Not found");
  } else {
    console.log(`Ex. 29: Found at index ${index}`);
  }
}

findWordPosition("I love JavaScript", "love");
findWordPosition("I love JavaScript", "Python");

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
  // 'calculate' yerine 'operator' yazıyoruz
  switch (operator) {
    case "+":
      console.log(`EX. 30: ${a + b}`);
      break;
    case "-":
      console.log(`EX. 30: ${a - b}`);
      break;
    case "*":
      console.log(`EX. 30: ${a * b}`);
      break;
    case "/":
      if (b === 0) {
        console.log("EX. 30: Cannot divide by zero, change it.");
      } else {
        console.log(`EX. 30: ${a / b}`);
      }
      break;
    default:
      console.log("EX. 30: Invalid operator");
  }
}

calculate(1, "+", 2);
calculate(3, "-", 2);
calculate(3, "*", 2);
calculate(8, "/", 2);

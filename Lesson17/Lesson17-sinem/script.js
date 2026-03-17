/*
1. Check Password Length
   - Define a function `checkPassword(password)` that checks if `password` length
     is at least 8 characters.
   - If >= 8, log: "Password length is sufficient."
   - Otherwise, log: "Password is too short."
   - Call the function with different passwords and log the result.
*/
console.log("Exp.1");
checkPassword(1234444563728);
checkPassword(1234);

function checkPassword(password) {
  const passwordString = String(password);
  if (passwordString.length >= 8) {
    console.log("evet");
  } else {
    console.log("hayır");
  }
}

/*
2. Uppercase Name
   - Define a function `uppercaseName(name)` that converts a given name to uppercase.
   - Log the uppercase result to the console.
   - Example: "John Doe" -> "JOHN DOE"
*/
console.log("Exp.2");
function uppercaseName(name) {
  if (name) {
    console.log(name.toUpperCase());
    return;
  } else {
    console.log("No name provided");
  }
}
uppercaseName();
uppercaseName("john Doe");

/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/
console.log("Exp.3");
function normalizeEmail(email) {
  if (typeof email === "string") {
    console.log(email.toLowerCase());
  } else {
    console.log("Lütfen bir e-posta adresi sağlayın.");
  }
}

normalizeEmail("sinemDEMIrAl@cOUTlook.com");
normalizeEmail(546);

/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/
console.log("Exp.4");
function getDomain(email) {
  if (typeof email !== "string") {
    console.log("dont that");
    return;
  }

  /* const startIndex = email.indexOf('@') + 1;
  const domain = email.substring(startIndex); */
  //const domain = email.substring(5);
  const domain = email.split("@");
  console.log(domain[1]);
}

getDomain(2323);
getDomain("user@example.com");

/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/
console.log("Exp.5");
function containsWord(sentence, word) {
  if (typeof sentence !== "string" || typeof word !== "string") {
    console.log("please try again");
    return;
  }
  if (sentence.includes(word)) {
    console.log(word + " found in sentence.");
  } else {
    console.log(word + " not found in sentence.");
  }
}

containsWord("bence gerek yok", "bence");
containsWord("bence gerek yok", "bence yok");
containsWord("bence gerek yok", false);
containsWord(1413412342, 4);

// && - all values must be true for expression to be true (like multiplication by 0)
// true && false && true && true => false
// || -
// true || false || true => true (is like +)

/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/
console.log("Exp.6");
function checkFileExtension(filename) {
  if (typeof filename !== "string") {
    console.log("please try again");
    return;
  }
  if (filename.endsWith(".pdf")) {
    console.log("This is a PDF file.");
  } else {
    console.log("Not a PDF file.");
  }
}
checkFileExtension("mybaby.pdf");
checkFileExtension("mywork.docx");

console.log("Exp.6-1");

function checkFileExtension2(filename) {
  if (typeof filename === "string")
    if (filename.endsWith(".pdf")) {
      console.log("This is a PDF file.");
    }
  if (typeof filename !== "string");
  else {
    console.log("try again");
  }
}
checkFileExtension2("mybaby.pdf");
checkFileExtension2(23);

/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/

console.log("Exp.7");

function compareNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Please try again.");
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
compareNumbers(5, 1);
compareNumbers(5, 7);
compareNumbers(1, 1);
compareNumbers("aa", 1);

/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards.
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/

console.log("Exp.8");

function isPalindrome(str) {
  if (typeof str !== "string") {
    console.log("please try again.");
    return;
  }
  const arrayValues = str.split("");
  const reverseArrayValues = arrayValues.reverse();
  const reverseString = reverseArrayValues.join("");
  if (str === reverseString) {
    console.log(str + " is a palindrome");
  } else {
    console.log(str + " is not a palindrome");
  }
}

isPalindrome(3);
isPalindrome("ana");
isPalindrome("sinem");

/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/
console.log("Exp.9");

function truncateString(text, maxLength) {
  if (typeof text !== "string" || typeof maxLength !== "number") {
    console.log("please try again.");
    return;
  }
  if (text.length > maxLength) {
    console.log(text.slice(0, maxLength) + "...");
  } else {
    console.log(text);
  }
}

truncateString("İstanbul çok güzel", 8);
truncateString("mavi", 8);

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
console.log("Exp.10");

function evenOrOdd(number) {
  if (typeof number !== "number") {
    console.log("Please try again.");
    return;
  }
  if (number % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

evenOrOdd(6);
evenOrOdd(7);

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
console.log("Exp.11");

function checkProtocol(url) {
  if (typeof url !== "string") {
    console.log("Please try again.");
    return;
  }
  if (url.startsWith("https")) {
    console.log("Secure connection " + "'" + url.toLowerCase() + "'");
  } else {
    console.log("Unsecure connection.");
  }
}

checkProtocol(
  "https://tRANSLATE.GOOGLE.com/?sl=en&tl=tr&text=%22Unsecure%20connection%22&op=translate"
);
checkProtocol(
  "/translate.google.com/?sl=en&tl=tr&text=%22Unsecure%20connection%22&op=translate"
);
checkProtocol(45);

/*
12. Switch: Day of the Week
   - Define a function `getDayOfWeek(num)` that uses a switch statement:
     1 -> "Monday"
     2 -> "Tuesday"
     ...
     7 -> "Sunday"
     - Log the matched day or "Invalid day" if out of range.
*/
console.log("Exp.12");

function getDayOfWeek(num) {
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
      console.log("Invalid day");
      break;
  }
}

getDayOfWeek(7);
getDayOfWeek(6);
getDayOfWeek(5);
getDayOfWeek("hi");

// value == value
/// value and type === value and type

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/
console.log("Exp.13");

function repeatWord(word, times) {
  if (typeof word !== "string" || typeof times !== "number") {
    console.log("Please try again.");
    return;
  } else {
    console.log(word.repeat(times));
  }
}

repeatWord("sinem ", 3);
repeatWord("sinem ", 6);

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
console.log("Exp.14");

function censorWord(sentence, target) {
  if (typeof sentence !== "string" || typeof target !== "string") {
    console.log("Please try again.");
    return;
  } else {
    console.log(sentence.replace(target, "***"));
  }
}

censorWord("istanbul çok güzel bir şehir.", "güzel");

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
console.log("Exp.15");

function startsWithA(str) {
  if (typeof str !== "string") {
    console.log("Please try again.");
    return;
  } else if (str.startsWith("A")) {
    console.log("Starts with " + str.charAt(0));
  } else {
    console.log("Does not start with A");
  }
}

startsWithA("anne");
startsWithA("Anne");
startsWithA("Sinem");
startsWithA(3);

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
console.log("Exp.16");

function sliceLastN(text, n) {
  if (typeof text !== "string" || n !== "string") {
    console.log("Please try again.");
    return;
  }

  console.log(text.slice(-n));
}

sliceLastN("sinem", 1);

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
console.log("Exp.17");

function gradeChecker(score) {
  if (typeof score !== "number" || score < 0 || score > 100) {
    console.log("Please try again.");
    return;
  }
  switch (true) {
    case score >= 90:
      console.log("A");
      break;
    case score >= 80:
      console.log("B");
      break;
    case score >= 70:
      console.log("C");
      break;
    case score >= 60:
      console.log("D");
      break;
    case score < 60:
      console.log("F");
  }
}

gradeChecker(95);
gradeChecker(85);
gradeChecker(75);
gradeChecker(65);
gradeChecker(30);
gradeChecker("a");

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
console.log("Exp.18");

function replaceCharacter(str, oldChar, newChar) {
  if (typeof str !== "string") {
    console.log("Please try again.");
    return;
  } else {
    console.log(str.replaceAll(oldChar, newChar));
  }
}

replaceCharacter("annesi", "n", "b");
replaceCharacter("bababababababa", "a", 1);
replaceCharacter("nenenenenenenene", "n", "d");

/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/
console.log("Exp.19");

function titleCase(sentence) {
  if (typeof sentence !== "string") {
    console.log("Please try again.");
    return;
  } else {
    const newSentence = sentence.split(" ");
    for (let i = 0; i < newSentence.length; i++) {
      newSentence[i] =
        newSentence[i].charAt(0).toUpperCase() + newSentence[i].slice(1);
    }
    console.log(newSentence.join(" "));
  }
}

titleCase("istanbul is very beautiful city.");
titleCase(1995);
titleCase("Every day is a new day.");

/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/
console.log("Exp.20");

function trafficLight(color) {
  if (typeof color !== "string") {
    console.log("Please try again.");
    return;
  }
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
trafficLight(45);
trafficLight("green");
trafficLight("blue");

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/
console.log("Exp.21");

function isLongString(str) {
  if (typeof str !== "string") {
    console.log("Please try again.");
    return;
  }
  const strLength = str.length;
  if (strLength >= 10) {
    console.log("Long string");
  } else {
    console.log("Short string");
  }
}

isLongString("str");
isLongString("Every day is a new day.");
isLongString(456);

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
console.log("Exp.22");

function isSpam(text) {
  if (typeof text !== "string") {
    console.log("Please try again.");
    return;
  }
  const textLow = text.toLowerCase();
  if (textLow.includes("spam")) {
    console.log("This text is spam.");
  } else {
    console.log("This text is not spam.");
  }
}

isSpam("When they launched their website they sent thousands of spams.");
isSpam(35);
isSpam("Every day is a new day.");

/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
console.log("Exp.23");

function getInitials(fullName) {
  if (typeof fullName !== "string") {
    console.log("Please try again.");
    return;
  } else {
    const nameUpper = fullName.split(" ");
    for (let i = 0; i < nameUpper.length; i++) {
      nameUpper[i] = nameUpper[i].charAt(0).toUpperCase();
    }
    console.log(nameUpper.join(".") + ".");
  }
}
getInitials("Sinem Güner");
getInitials(67);

/*
24. Switch: Month to Season
   - Define a function `getSeason(monthNum)` (1-12). Use switch or if-else:
     - 12, 1, 2  -> "Winter"
     - 3, 4, 5   -> "Spring"
     - 6, 7, 8   -> "Summer"
     - 9, 10, 11 -> "Autumn"
   - Log the season or "Invalid month" if out of range.
*/
console.log("Exp.24");

function getSeason(monthNum) {
  if (typeof monthNum !== "number") {
    console.log("Please enter a number.");
    return;
  }
  switch (monthNum) {
    case 12:
    case 1:
    case 2:
      console.log("Winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Spring");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Summer");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Autumn");
      break;
    default:
      console.log("Invalid month");
  }
}
getSeason(1);
getSeason(2);
getSeason(3);
getSeason(4);
getSeason(5);
getSeason(6);
getSeason(7);
getSeason(8);
getSeason(9);
getSeason(10);
getSeason(11);
getSeason(12);
getSeason(13);
getSeason("monthNum");

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/
console.log("Exp.25");

function containsNumber(str) {
  if (typeof str !== "string") {
    console.log("Please write some words.");
    return;
  }
  const text = str.match(/\d/);
  if (text) {
    console.log("Contains number");
  } else {
    console.log("No number found");
  }
}

containsNumber("love str");
containsNumber("23 Nisan Ulusal Egemenlij ve Çocuk Bayramı");
containsNumber(45654);

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
console.log("Exp.26");

function padString(str, maxLength) {
  if (typeof str !== "string" || typeof maxLength !== "number") {
    console.log("Please write some words.");
    return;
  }
  if (str.length < maxLength) {
    console.log(str.padEnd(maxLength - str.length, "*"));
  } else {
    console.log(str);
  }
}

padString("I am very tired.", 10);
padString("str", 10);
padString(567, 5);

/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
console.log("Exp.27");

function canVote(age) {
  if (typeof age !== "number") {
    console.log("Please enter your age.");
    return;
  }
  if (age >= 18) {
    console.log("Can vote");
  } else {
    console.log("Too young to vote");
  }
}

canVote(16);
canVote(25);
canVote("sinem");

/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/
console.log("Exp.28");

function reverseWords(sentence) {
  if (typeof sentence !== "string") {
    console.log("Please write some words.");
    return;
  }
  const text = sentence.split(" ");
  const textRev = text.reverse();
  const textNew = textRev.join(" ");
  console.log(textNew);
}

reverseWords("23 Nisan Ulusal Egemenlij ve Çocuk Bayramı");
reverseWords("Istanbul is very cool.");
reverseWords(1981);

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
console.log("Exp.29");

function findWordPosition(sentence, word) {
  if (typeof sentence !== "string" || typeof word !== "string") {
    console.log("Please write some words.");
    return;
  }
  if (sentence.indexOf(word) >= 0) {
    console.log(sentence.indexOf(word));
  } else {
    console.log(sentence.indexOf(-1), "Not Found");
  }
}

findWordPosition("23 Nisan Ulusal Egemenlij ve Çocuk Bayramı", "Ulusal");
findWordPosition(
  "When they launched their website they sent thousands of spams.",
  "When"
);
findWordPosition(
  "When they launched their website they sent thousands of spams.",
  "sent"
);
findWordPosition(
  "When they launched their website they sent thousands of spams.",
  "send"
);
findWordPosition(3213, "Hi!");

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
console.log("Exp.30");

function calculate(a, operator, b) {
  switch (operator) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;
    default:
      console.log("Invalid operator");
  }
}

calculate(2, "+", 2);
calculate(2, "-", 2);
calculate(2, "*", 2);
calculate(2, "/", 2);

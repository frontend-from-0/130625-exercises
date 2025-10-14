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
    console.log('Please provide a string value');
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
    console.log ('Please provide a string value');
  } 
  else {
    console.log(email.toLowerCase());
  }
}
normalizeEmail("PelinTURAN09@gmail.coM")

/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/
function getDomain(email) {
  if (typeof email !== 'string') {
    console.log('Please provide a string value');
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
  // TODO: add type
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
  // TODO: check that a and b are numbers
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
  const normalizeStr = str.toLowerCase();
  const reversedStr = normalizeStr.split('').reverse().join('');
  if (normalizeStr === reversedStr) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
}
isPalindrome("Talat");
isPalindrome("İrfan");

/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/
function truncateString (text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength)+ "...";
  } else {
    return text;
  }
}
console.log(truncateString ("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget aliquet orci. Pellentesque nibh dolor, convallis eget ultrices eu, laoreet a nunc. Ut maximus, nisl quis maximus fringilla, justo nulla semper dolor, placerat tincidunt odio nisl ut tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", 20));

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
evenOrOdd(28);
evenOrOdd(81);

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
function checkProtocol(url) {
const normalizeUrl = url.toLowerCase ();
  if(normalizeUrl.startsWith("https")) {
    console.log("Secure connection");
  } else {
    console.log("Unsecure connection");
  }
}
checkProtocol("https://github.com/dashboard");
checkProtocol("www.github.com/dashboard");

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
  let answer ="";
  switch (num) {
    case 1:
      answer = "Monday";
      break;
    case 2:
      answer = "Tuesday";
      break;
    case 3:
      answer = "Wednesday";
      break;
    case 4:
      answer = "Thursday";
      break;
    case 5:
      answer = "Friday";
      break;
    case 6:
      answer = "Saturday";
      break;
    case 7:
      answer = "Sunday";
      break;
    default:
      answer = "Invalid day";
      break;
  }
  return answer;
}
console.log(getDayOfWeek(4));
console.log(getDayOfWeek(15));
// value == value
/// value and type === value and type

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/
function repeatWord(word, times) {
  return word.repeat(times);
}
console.log(repeatWord("pelin", 3));
/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
function censorWord(sentence, target) {
  return target.replaceAll(target, "****");
}
console.log(censorWord("Bu görevde anahtar kelime gizlidir.", "gizlidir"));
/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
function startsWithA(str) {
  if (str.charAt(0)=== "A") {
    console.log("Starts with A");
  } else {
    console.log("Does not start with A");
  }
}
startsWithA("A bird is flying.");
startsWithA("Two birds are flying.");
/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLastN(text, n) {
  return text.slice(-n);
}
console.log(sliceLastN("Coding is fun", 6));
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
  let grade="";
  if (score >=90){
    grade ="A";
  }
  else if (score >= 80){
    grade ="B";
  }
  else if (score >= 70){
    grade ="C";
  }
  else if (score >= 60){
    grade ="D";
  }
  else {
    grade ="F";
  }
  console.log(grade);
}
gradeChecker(95);
gradeChecker(84);
gradeChecker(72);
gradeChecker(69);
gradeChecker(43);
/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
function replaceCharacter(str, oldChar, newChar) {
  return str.replaceAll(oldChar, newChar);
}
console.log(replaceCharacter("Birds fly over mountains", "mountains", "rivers"));

/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/
function titleCase(sentence) {
  const words = sentence.split(" ");
  const titleCasedWords = words.map (word => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
  });
  return titleCasedWords.join(" ");
}
console.log(titleCase("bEars lIveS in mOUNTAins."));
/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/
function trafficLight(color) {
  let message = "";
  switch (color) {
    case "red":
      message = "Stop";
      break;
    case "yellow":
      message = "Caution";
      break;
    case "green":
      message = "Go";
      break;
    default:
      message = "Invald color";
      break;
  }
  console.log(message);
}
trafficLight("yellow");
trafficLight("blue");
trafficLight("green");

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/
function isLongString(str) {
  if (str.length>10) {
    console.log("Long string");
  } else {
    console.log("Short string");
  } 
  }
isLongString("Coding");
isLongString("Frontend developer");

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text) {
const lowerText = text.toLowerCase();
if (lowerText.includes("spam")) {
console.log("This text is spam.");
  } else {
    console.log("This text is not spam.");
  } 
}
isSpam("Secure is important");
isSpam("Avoid spams");

/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
function getInitials(fullName) {
  let nameParts = fullName.split(" ");
  let initialsArrays = nameParts.map (nameParts => {
    return nameParts.charAt(0).toUpperCase();
  });
  let initials = initialsArrays.join(".");
  console.log(initials+ ".")
}
getInitials("pelin turan kurudirek"); 

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
  let answer ="";
  switch (monthNum) {
    case 12:
    case 1:
    case 2:
      answer = "Winter";
      break;
    case 3:
    case 4:
    case 5:
      answer = "Spring";
      break;
    case 6:
    case 7:
    case 8:
      answer = "Summer";
      break;
    case 9:
    case 10:
    case 11:
      answer = "Autumn";
      break;
    default:
      answer = "Invalid month";
      break;
  }
  console.log(answer);
}
getSeason(7);
getSeason(25);

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/
function containsNumber(str) {
  if (str.match(/\d/)) {
     console.log("Contains number");
  } else {
    console.log("No number found");
  }
}
containsNumber("Pelin09");
containsNumber("Pelin");

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
function padString(str, maxLength) {
  if(str.length < maxLength) {
    return str.padEnd(maxLength, "*");
  } else {
    return str;
  }
}
console.log(padString("Pelin", 8));
console.log(padString("Pelin", 5));
/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
function canVote(age) {
  if(age >= 18) {
    console.log("Can vote");
  } else {
    console.log("Too young to vote");
  }
}
canVote(15);
canVote(18);
canVote(37);

/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/
function reverseWords(sentence) {
  let words = sentence.split(" ");
  let reversedWords = words.map (word => {
    let reversedWord = word.split("").reverse().join("");
    return reversedWord;
  });
  return reversedWords.join(" ");
}
console.log(reverseWords("this is a test sentence")); 

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
function findWordPosition(sentence, word) {
  let index = sentence.indexOf(word);
  if (index>=0){
    console.log(index);
  } else {
    console.log("Not found");
  }
}
findWordPosition("I love cats.", "cats");
findWordPosition("Cats are adorable.", "Cats");
findWordPosition("Dogs are funny.", "Cats");

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
  let answer = "";
  switch(operator) {
    case "+":
    answer = a + b;
    break;
    case "-":
    answer = a - b;
    break;
    case "*":
    answer = a * b;
    break;
    case "/":
    answer = a / b;
    break;
    default:
    answer = "Invalid operator";
    break;
  }
  console.log(answer);
}
calculate(80, "+", 5); 
calculate(68, "/", 4);
calculate(7, "**", 2);
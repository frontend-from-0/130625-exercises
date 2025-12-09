const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const onlyLetters = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s-]+$/; //I added Turkish alphabet characters.
const cardPattern = /^(\d{4}\s){3}\d{4}$/;
/*I researched the regex for bank card number. 
There are different formats for different banks, but the most common regex is the one we used in the lesson. So I kept it same.
Also, I read about Luhn Algorithm which is used to validate credit card numbers, but I didn't implement it here as it might be too complex for this exercise.*/
const expDatePattern = /^(0[1-9]|1[0-2])\/(2[5-9]|3[0-9]|40)$/; // I updated the regex to only allow dates between 2025 and 2040.
const cvvPattern = /^\d{3,4}$/;

const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");

const firstNameInput = document.getElementById("firstname");
const firstNameError = document.getElementById("firstNameError");
const lastNameInput = document.getElementById("lastname");
const lastNameError = document.getElementById("lastNameError");

const cardInput = document.getElementById("cardNumber");
const cardNumberError = document.getElementById("cardNumberError");

const expDate = document.getElementById("expDate");
const expDateError = document.getElementById("expDateError");

const cvvInput = document.getElementById("cvv");
const cvvError = document.getElementById("cvvError");

const submitButton = document.getElementById("submitBtn");

const form = document.getElementById("checkoutForm");
const successMessage = document.getElementById("success");

let formValid = true;

function validateEmail(email) {
  if (!emailPattern.test(email)) {
    emailError.innerText =
      "Please enter email address in the correct format (e.g. name@gmail.com)";
    emailError.classList.remove("hidden");
    emailInput.classList.add("error-border");
    emailInput.setAttribute("aria-invalid", "true");
  } else {
    emailError.innerText = "";
    emailError.classList.add("hidden");
    emailInput.classList.remove("error-border");
    emailInput.removeAttribute("aria-invalid");
  }
  validateForm();
}

function validatePhone(phone) {
  if (!phonePattern.test(phone)) {
    phoneError.innerText =
      "Please enter phone number in the following format: +90 123 456 7890";
    phoneError.classList.remove("hidden");
    phoneInput.classList.add("error-border");
    phoneInput.setAttribute("aria-invalid", "true");
  } else {
    phoneError.innerText = "";
    phoneError.classList.add("hidden");
    phoneInput.classList.remove("error-border");
    phoneInput.removeAttribute("aria-invalid");
  }
  validateForm();
}

function validateName(name, nameError, firstNameInput) {
  if (!onlyLetters.test(name)) {
    nameError.innerText = "Only letters, whitespaces and dashes are allowed.";
    nameError.classList.remove("hidden");
    firstNameInput.classList.add("error-border");
    firstNameInput.setAttribute("aria-invalid", "true");
  } else if (!(name.trim().length > 0)) {
    nameError.classList.remove("hidden");
    firstNameInput.classList.add("error-border");
    firstNameInput.setAttribute("aria-invalid", "true");
    nameError.innerText = "Enter more than one character.";
  } else {
    nameError.innerText = "";
    nameError.classList.add("hidden");
    firstNameInput.classList.remove("error-border");
    firstNameInput.removeAttribute("aria-invalid");
  }
  validateForm();
}

function validateCard(number) {
  if (!cardPattern.test(number)) {
    cardNumberError.innerText =
      "Please enter card number in the following format: 1234 5678 9101 1121";
    cardNumberError.classList.remove("hidden");
    cardInput.classList.add("error-border");
    cardInput.setAttribute("aria-invalid", "true");
  } else {
    cardNumberError.innerText = "";
    cardNumberError.classList.add("hidden");
    cardInput.classList.remove("error-border");
    cardInput.removeAttribute("aria-invalid");
  }
  validateForm();
}

function validateExpDate(date) {
  if (!expDatePattern.test(date)) {
    expDateError.innerText =
      "Please enter a valid expiration date in the following format: MM/YY";
    expDateError.classList.remove("hidden");
    expDate.classList.add("error-border");
    expDate.setAttribute("aria-invalid", "true");
  } else {
    expDateError.innerText = "";
    expDateError.classList.add("hidden");
    expDate.classList.remove("error-border");
    expDate.removeAttribute("aria-invalid");
  }
  validateForm();
}

function validateCVV(cvv) {
  if (!cvvPattern.test(cvv)) {
    cvvError.innerText =
      "Please enter the CVV in the following format: 123 or 1234";
    cvvError.classList.remove("hidden");
    cvvInput.classList.add("error-border");
    cvvInput.setAttribute("aria-invalid", "true");
  } else {
    cvvError.innerText = "";
    cvvError.classList.add("hidden");
    cvvInput.classList.remove("error-border");
    cvvInput.removeAttribute("aria-invalid");
  }
  validateForm();
}

function validateForm() {                      
  if (
    emailPattern.test(emailInput.value) &&
    phonePattern.test(phoneInput.value) &&
    onlyLetters.test(firstNameInput.value) &&
    onlyLetters.test(lastNameInput.value) &&
    cardPattern.test(cardInput.value) &&
    expDatePattern.test(expDate.value) &&
    cvvPattern.test(cvvInput.value)
  ) {
    formValid = true;
  } else {
    formValid = false;
  }
  enableSubmit();
}

function enableSubmit() {
  if (formValid) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "true");
  }
}

emailInput.addEventListener("blur", () => validateEmail(emailInput.value));
phoneInput.addEventListener("blur", () => validatePhone(phoneInput.value));
firstNameInput.addEventListener("blur", () =>
  validateName(firstNameInput.value, firstNameError, firstNameInput)
);
lastNameInput.addEventListener("blur", () =>
  validateName(lastNameInput.value, lastNameError, lastNameInput)
);
cardInput.addEventListener("blur", () => validateCard(cardInput.value));
expDate.addEventListener("blur", () => validateExpDate(expDate.value));
cvvInput.addEventListener("blur", () => validateCVV(cvvInput.value));

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
  if (formValid) {
    form.classList.add("hidden");
    successMessage.classList.remove("hidden");
  }
});

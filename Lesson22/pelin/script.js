const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const onlyLetters = /^[a-zA-Z\s-]+$/;
const cardPattern = /^(\d{4}\s){3}\d{4}$/;
const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
const cvvPattern = /^\d{3}$/;
/* 
- What are required input fields? - all fields are required here
- Select elements in JS
- trigger validation on form submit
- trigger validation on input change or on blur
*/

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

const submitBtn = document.getElementById("submitBtn");
const inputs = [
  emailInput,
  phoneInput,
  firstNameInput,
  lastNameInput,
  cardInput,
  expDate,
  cvvInput,
];

const errors = [
  emailError,
  phoneError,
  firstNameError,
  lastNameError,
  cardNumberError,
  expDateError,
  cvvError,
];

const form = document.getElementById("checkoutForm");
const success = document.getElementById("success");

function isRequired(value, errorElement) {
  if (value.trim().length === 0) {
    errorElement.innerText = "This field is required.";
    errorElement.classList.remove("hidden");
    return false;
  }

  errorElement.innerText = "";
  errorElement.classList.add("hidden");
  return true;
}

function validateEmail(email) {
  if (!isRequired(emailInput.value, emailError)) {
    emailInput.setAttribute("aria-invalid", "true");
    return;
  } else if (!emailPattern.test(email)) {
    emailError.innerText =
      "Please enter email address in the correct format (e.g. name@gmail.com)";
    emailError.classList.remove("hidden");
    emailInput.setAttribute("aria-invalid", "true");
  } else {
    emailError.innerText = "";
    emailError.classList.add("hidden");
    emailInput.removeAttribute("aria-invalid");
  }
}

function validatePhone(phone) {
  if (!isRequired(phoneInput.value, phoneError)) {
    phoneInput.setAttribute("aria-invalid", "true");
    return;
  } else if (!phonePattern.test(phone)) {
    phoneError.innerText =
      "Please enter phone in the following format: +90 123 456 7890";
    phoneError.classList.remove("hidden");
    phoneInput.setAttribute("aria-invalid", "true");
  } else {
    phoneError.innerText = "";
    phoneError.classList.add("hidden");
    phoneInput.removeAttribute("aria-invalid");
  }
}

function validateName(name, nameError) {
  const inputElement = nameError.previousElementSibling;

  if (!isRequired(name, nameError)) {
    inputElement.setAttribute("aria-invalid", "true");
    return;
  } else if (!onlyLetters.test(name)) {
    nameError.innerText = "Only letters, whitespaces and - are allowed.";
    nameError.classList.remove("hidden");
    inputElement.setAttribute("aria-invalid", "true");
  } else {
    nameError.innerText = "";
    nameError.classList.add("hidden");
    inputElement.removeAttribute("aria-invalid");
  }
}

function validateCard(number) {
  if (!isRequired(cardInput.value, cardNumberError)) {
    cardInput.setAttribute("aria-invalid", "true");
    return;
  } else if (!cardPattern.test(number)) {
    cardNumberError.innerText =
      "Please enter card number in the following format: 1234 5678 9101 1121";
    cardNumberError.classList.remove("hidden");
    cardInput.setAttribute("aria-invalid", "true");
  } else {
    cardNumberError.innerText = "";
    cardNumberError.classList.add("hidden");
    cardInput.removeAttribute("aria-invalid");
  }
}

function validateExpDate(date) {
  if (!isRequired(expDate.value, expDateError)) {
    expDate.setAttribute("aria-invalid", "true");
    return;
  } else if (!expDatePattern.test(date)) {
    expDateError.innerText =
      "Please enter a expiration date in the following format: MM/YY";
    expDateError.classList.remove("hidden");
    expDate.setAttribute("aria-invalid", "true");
  } else {
    expDateError.innerText = "";
    expDateError.classList.add("hidden");
    expDate.removeAttribute("aria-invalid");
  }
}

function validateCvv(number) {
  if (!isRequired(cvvInput.value, cvvError)) {
    cvvInput.setAttribute("aria-invalid", "true");
    return;
  } else if (!cvvPattern.test(number)) {
    cvvError.innerText = "Please enter CVV number in the following format: 123";
    cvvError.classList.remove("hidden");
    cvvInput.setAttribute("aria-invalid", "true");
  } else {
    cvvError.innerText = "";
    cvvError.classList.add("hidden");
    cvvInput.removeAttribute("aria-invalid");
  }
}

function updateSubmitButton() {
  if (
    inputs.every((input) => input.value.trim().length > 0) &&
    errors.every((err) => err.classList.contains("hidden"))
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

emailInput.addEventListener("input", () => validateEmail(emailInput.value));
phoneInput.addEventListener("input", () => validatePhone(phoneInput.value));
firstNameInput.addEventListener("input", () =>
  validateName(firstNameInput.value, firstNameError)
);
lastNameInput.addEventListener("input", () =>
  validateName(lastNameInput.value, lastNameError)
);
cardInput.addEventListener("input", () => validateCard(cardInput.value));
expDate.addEventListener("input", () => validateExpDate(expDate.value));
cvvInput.addEventListener("input", () => validateCvv(cvvInput.value));
inputs.forEach((input) => {
  input.addEventListener("input", updateSubmitButton);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.add("hidden");
  success.classList.remove("hidden");
});

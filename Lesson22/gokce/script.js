const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const onlyLetters = /^[a-zA-Z\s-]+$/;
const cardPattern = /^(\d{4}\s){3}\d{4}$/;
const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
const cvvCodePattern = /^\d{3,4}$/;
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

const expDateInput = document.getElementById("expDate");
const expDateError = document.getElementById("expDateError");

const cvvCodeInput = document.getElementById("cvv");
const cvvCodeError = document.getElementById("cvvCodeError");

const submitBtn = document.getElementById("submitBtn");

const checkoutForm = document.getElementById("checkoutForm");
const successMessage = document.getElementById("success");

let formValid = true;

function validateEmail(email) {
  if (!emailPattern.test(email)) {
    emailError.innerText =
      "Please enter email address in the correct format (e.g. name@gmail.com)";
    emailError.classList.remove("hidden");
    emailInput.setAttribute("aria-invalid", "true");
    emailInput.classList.add("invalid");

    formValid = false;
  } else {
    emailError.innerText = "";
    emailError.classList.add("hidden");
    emailInput.removeAttribute("aria-invalid");
    emailInput.classList.remove("invalid");
  }
}

function validatePhone(phone) {
  if (!phonePattern.test(phone)) {
    phoneError.innerText =
      "Please enter phone in the following format: +90 123 456 7890";
    phoneError.classList.remove("hidden");

    phoneInput.setAttribute("aria-invalid", "true");
    phoneInput.classList.add("invalid");

    formValid = false;
  } else {
    phoneError.innerText = "";
    phoneError.classList.add("hidden");
    phoneInput.removeAttribute("aria-invalid");
    phoneInput.classList.remove("invalid");
  }
}

function validateName(name, nameError, inputElement) {
  if (!onlyLetters.test(name)) {
    nameError.innerText = "Only letters, whitespaces and - are allowed.";
    nameError.classList.remove("hidden");
    inputElement.setAttribute("aria-invalid", "true");
    inputElement.classList.add("invalid");
    formValid = false;
  } else if (!(name.trim().length > 0)) {
    nameError.classList.remove("hidden");
    nameError.innerText = "Enter more than one character.";
    inputElement.setAttribute("aria-invalid", "true");
    inputElement.classList.add("invalid");
    formValid = false;
  } else {
    nameError.innerText = "";
    nameError.classList.add("hidden");
    inputElement.removeAttribute("aria-invalid");
    inputElement.classList.remove("invalid");
  }
}

function validateCard(number) {
  number = number.trim();
  if (!cardPattern.test(number)) {
    cardNumberError.innerText =
      "Please enter card number in the following format: 1234 5678 9101 1121";
    cardNumberError.classList.remove("hidden");

    cardInput.setAttribute("aria-invalid", "true");
    cardInput.classList.add("invalid");

    formValid = false;
  } else {
    cardNumberError.innerText = "";
    cardNumberError.classList.add("hidden");
    cardInput.removeAttribute("aria-invalid");
    cardInput.classList.remove("invalid");
  }
}

function validateExpDate(date) {
  if (!expDatePattern.test(date)) {
    expDateError.innerText =
      "Please enter a expiration date in the following format: MM/YY";
    expDateError.classList.remove("hidden");

    expDateInput.setAttribute("aria-invalid", "true");
    expDateInput.classList.add("invalid");

    formValid = false;
  } else {
    expDateError.innerText = "";
    expDateError.classList.add("hidden");
    expDateInput.removeAttribute("aria-invalid");
    expDateInput.classList.remove("invalid");
  }
}

function validateCvvCode(code) {
  if (!cvvCodePattern.test(code)) {
    cvvCodeError.innerText =
      "Please enter a cvv in the following format: 123 OR 1234";
    cvvCodeError.classList.remove("hidden");

    cvvCodeInput.setAttribute("aria-invalid", "true");
    cvvCodeInput.classList.add("invalid");

    formValid = false;
  } else {
    cvvCodeError.innerText = "";
    cvvCodeError.classList.add("hidden");
    cvvCodeInput.removeAttribute("aria-invalid");
    cvvCodeInput.classList.remove("invalid");
  }
}

function validationAllFields() {
  formValid = true;
  validateEmail(emailInput.value);
  validatePhone(phoneInput.value);
  validateName(firstNameInput.value, firstNameError, firstNameInput);
  validateName(lastNameInput.value, lastNameError, lastNameInput);
  validateCard(cardInput.value);
  validateExpDate(expDateInput.value);
  validateCvvCode(cvvCodeInput.value);
}

function checkEmptyFields() {
  const fields = [
    { input: emailInput, error: emailError },
    { input: phoneInput, error: phoneError },
    { input: firstNameInput, error: firstNameError },
    { input: lastNameInput, error: lastNameError },
    { input: cardInput, error: cardNumberError },
    { input: expDateInput, error: expDateError },
    { input: cvvCodeInput, error: cvvCodeError },
  ];
  formValid = true;

  fields.forEach((section) => {
    if (
      section.input.value.length === 0 ||
      section.error.classList.contains("hidden") === false
    ) {
      formValid = false;
      submitBtn.disabled = true;
      section.input.setAttribute("aria-invalid", "true");
    } else {
      section.input.removeAttribute("aria-invalid");
    }
  });
  if (formValid === true) {
    submitBtn.disabled = false;
  }
}

emailInput.addEventListener("input", () => {
  validateEmail(emailInput.value);
  checkEmptyFields();
});
phoneInput.addEventListener("input", () => {
  validatePhone(phoneInput.value);
  checkEmptyFields();
});

firstNameInput.addEventListener("input", () => {
  validateName(firstNameInput.value, firstNameError, firstNameInput);
  checkEmptyFields();
});

lastNameInput.addEventListener("input", () => {
  validateName(lastNameInput.value, lastNameError, lastNameInput);
  checkEmptyFields();
});

cardInput.addEventListener("input", () => {
  validateCard(cardInput.value);
  checkEmptyFields();
});

expDateInput.addEventListener("input", () => {
  validateExpDate(expDateInput.value);
  checkEmptyFields();
});

cvvCodeInput.addEventListener("input", () => {
  validateCvvCode(cvvCodeInput.value);
  checkEmptyFields();
});

checkoutForm.addEventListener("submit", function (event) {
  event.preventDefault();

  validationAllFields();
  if (formValid === true) {
    checkoutForm.style.display = "none";
    checkEmptyFields();
    successMessage.classList.remove("hidden");
    const fullName = `${firstNameInput.value} ${lastNameInput.value}`;
    successMessage.textContent =
      "Dear " + fullName + ", your form submitted successfully!";
  }
});

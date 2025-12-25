const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const onlyLetters = /^[a-zA-Z\s-]+$/;
const cardPattern = /^(\d{4}\s){3}\d{4}$/;
const expDatePattern = /^(0[1-9]|1[0-2])\/(2[5-9]|[3-9]\d)$/; // Revised this pattern after a little research to 2025-2099.
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

const expDateInput = document.getElementById("expDate");
const expDateError = document.getElementById("expDateError");
const cvvInput = document.getElementById("cvv");
const cvvError = document.getElementById("cvvError");
const inputGroups = document.querySelectorAll(".input-group");
const form = document.getElementById("checkoutForm");
const submitButton = document.getElementById("submitBtn");

const successMessage = document.getElementById("success");

let formValid = true;

function validateEmail(email) {
  if (!emailPattern.test(email)) {
    emailError.innerText =
      "Please enter email address in the correct format (e.g. name@gmail.com)";
    emailError.classList.remove("hidden");
    formValid = false;
  } else {
    emailError.innerText = "";
    emailError.classList.add("hidden");
  }
}

function validatePhone(phone) {
  if (!phonePattern.test(phone)) {
    phoneError.innerText =
      "Please enter phone in the following format: +90 123 456 7890";
    phoneError.classList.remove("hidden");
    formValid = false;
  } else {
    phoneError.innerText = "";
    phoneError.classList.add("hidden");
  }
}

function validateName(name, nameError) {
  if (!onlyLetters.test(name)) {
    nameError.innerText = "Only letters, whitespaces and - are allowed.";
    nameError.classList.remove("hidden");
    formValid = false;
  } else if (!(name.trim().length > 0)) {
    nameError.classList.remove("hidden");
    nameError.innerText = "Enter more than one character.";
    formValid = false;
  } else {
    nameError.innerText = "";
    nameError.classList.add("hidden");
  }
}

function validateCard(number) {
  if (!cardPattern.test(number)) {
    cardNumberError.innerText =
      "Please enter card number in the following format: 1234 5678 9101 1121";
    cardNumberError.classList.remove("hidden");
    formValid = false;
  } else {
    cardNumberError.innerText = "";
    cardNumberError.classList.add("hidden");
  }
}

function validateExpDate(date) {
  if (!expDatePattern.test(date)) {
    expDateError.innerText =
      "Please enter a expiration date in the following format: MM/YY";
    expDateError.classList.remove("hidden");
    formValid = false;
  } else {
    expDateError.innerText = "";
    expDateError.classList.add("hidden");
  }
}

function validateCvv(cvv) {
  if (!cvvPattern.test(cvv)) {
    cvvError.innerText =
      "Please enter a CVV number in the following format: 123 or 1234";
    cvvError.classList.remove("hidden");
    formValid = false;
  } else {
    cvvError.innerText = "";
    cvvError.classList.add("hidden");
  }
}

function validateForm() {
  if (
    emailPattern.test(emailInput.value) &&
    phonePattern.test(phoneInput.value) &&
    onlyLetters.test(firstNameInput.value) &&
    onlyLetters.test(lastNameInput.value) &&
    cardPattern.test(cardInput.value) &&
    expDatePattern.test(expDateInput.value) &&
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

function generateOrderNumber() {
  let lastOrderNumber = localStorage.getItem("lastOrderNumber");
  if (!lastOrderNumber) {
    lastOrderNumber = 1000;
  } else {
    lastOrderNumber = parseInt(lastOrderNumber, 10) + 1;
  }
  localStorage.setItem("lastOrderNumber", lastOrderNumber);
  return lastOrderNumber;
}

function showOrderDetails() {
  const lastOrderNumber = generateOrderNumber();
  const orderNumber = document.getElementById("confirmed-number");
  const confirmedDate = document.getElementById("confirmed-date");

  if (orderNumber) {
  orderNumber.textContent = lastOrderNumber;
  }

  const today = new Date();
  const deliveryDate = new Date();
  deliveryDate.setDate(today.getDate() + 4);

  const options = { year: "numeric", month: "long", day: "numeric" };
  if (confirmedDate) {
    confirmedDate.textContent = deliveryDate.toLocaleDateString(
      undefined,
      options
    );
    }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
  if (formValid) {
    form.classList.add("hidden");
    successMessage.classList.remove("hidden");
    showOrderDetails();
  }
});

emailInput.addEventListener("input", () => validateEmail(emailInput.value));
phoneInput.addEventListener("input", () => validatePhone(phoneInput.value));
firstNameInput.addEventListener("input", () =>
  validateName(firstNameInput.value, firstNameError)
);
lastNameInput.addEventListener("input", () =>
  validateName(lastNameInput.value, lastNameError)
);
cardInput.addEventListener("input", () => validateCard(cardInput.value));
expDateInput.addEventListener("input", () =>
  validateExpDate(expDateInput.value)
);
cvvInput.addEventListener("input", () => validateCvv(cvvInput.value));

inputGroups.forEach((group) => {
  group.addEventListener("input", validateForm);
});
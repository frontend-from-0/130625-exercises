const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const onlyLetters = /^[a-zA-Z\s-]+$/;
const cardPattern = /^(\d{4}\s){3}\d{4}$/;
const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
const cvvPattern = /^\d{3,4}$/;

const checkoutForm = document.getElementById('checkoutForm');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('success');

const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phoneError');

const firstNameInput = document.getElementById('firstname');
const firstNameError = document.getElementById('firstNameError');

const lastNameInput = document.getElementById('lastname');
const lastNameError = document.getElementById('lastNameError');

const cardInput = document.getElementById('cardNumber');
const cardNumberError = document.getElementById('cardNumberError');

const expDateInput = document.getElementById('expDate');
const expDateError = document.getElementById('expDateError');

const cvvInput = document.getElementById('cvv');
const cvvError = document.getElementById('cvvError');

const validationState = {
  email: false,
  phone: false,
  firstname: false,
  lastname: false,
  cardnumber: false,
  expdate: false,
  cvv: false
};

function checkFormValidity() {
  const isFormValid = Object.values(validationState).every(value => value === true);
  submitBtn.disabled = !isFormValid;
}

function handleValidationResult(inputElement, errorElement, isValid, errorMessage, stateKey) {
  if (!isValid) {
    errorElement.innerText = errorMessage;
    errorElement.classList.remove('hidden');
    inputElement.setAttribute('aria-invalid', 'true');
    validationState[stateKey] = false;
  } else {
    errorElement.innerText = '';
    errorElement.classList.add('hidden');
    inputElement.removeAttribute('aria-invalid');
    validationState[stateKey] = true;
  }
  checkFormValidity();
}

function validateEmail(email) {
  const isValid = emailPattern.test(email);
  handleValidationResult(emailInput, emailError, isValid, 'Please enter a valid email address (e.g. name@example.com).', 'email');
}

function validatePhone(phone) {
  const isValid = phonePattern.test(phone);
  handleValidationResult(phoneInput, phoneError, isValid, 'Please enter a valid phone number format (e.g. +90 555 123 4567).', 'phone');
}

function validateName(name, inputElement, errorElement, stateKey) {
  let isValid = true;
  let errorMsg = '';

  if (name.trim().length === 0) {
    isValid = false;
    errorMsg = 'This field cannot be empty.';
  } else if (!onlyLetters.test(name)) {
    isValid = false;
    errorMsg = 'Only letters, whitespaces and dashes are allowed.';
  }

  handleValidationResult(inputElement, errorElement, isValid, errorMsg, stateKey);
}

function validateCard(number) {
  const isValid = cardPattern.test(number);
  handleValidationResult(cardInput, cardNumberError, isValid, 'Card format: 1234 5678 9101 1121.', 'cardnumber');
}

function validateExpDate(date) {
  const isValid = expDatePattern.test(date);
  handleValidationResult(expDateInput, expDateError, isValid, 'Expiration date format: MM/YY.', 'expdate');
}

function validateCvv(cvv) {
  const isValid = cvvPattern.test(cvv);
  handleValidationResult(cvvInput, cvvError, isValid, 'CVV must be 3 or 4 digits.', 'cvv');
}

emailInput.addEventListener('input', () => validateEmail(emailInput.value));
phoneInput.addEventListener('input', () => validatePhone(phoneInput.value));
firstNameInput.addEventListener('input', () => validateName(firstNameInput.value, firstNameInput, firstNameError, 'firstname'));
lastNameInput.addEventListener('input', () => validateName(lastNameInput.value, lastNameInput, lastNameError, 'lastname'));
cardInput.addEventListener('input', () => validateCard(cardInput.value));
expDateInput.addEventListener('input', () => validateExpDate(expDateInput.value));
cvvInput.addEventListener('input', () => validateCvv(cvvInput.value));

checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const isFormValid = Object.values(validationState).every(value => value === true);
  
  if (isFormValid) {
    checkoutForm.classList.add('hidden');
    successMessage.classList.remove('hidden');
  }
});
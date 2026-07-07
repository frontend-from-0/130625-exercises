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

const expDate = document.getElementById('expDate');
const expDateError = document.getElementById('expDateError');
const cvvInput = document.getElementById('cvv'); 
const cvvError = document.getElementById('cvvError');
const checkoutForm = document.getElementById('checkoutForm');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('success');
let formValid = true;

function validateEmail(email) {
  if (!emailPattern.test(email)) {
    emailError.innerText =
      'Please enter email address in the correct format (e.g. name@gmail.com)';
    emailError.classList.remove('hidden');
    formValid = false;
  } else {
    emailError.innerText = '';
    emailError.classList.add('hidden');
  }
}

function validatePhone(phone) {
  if (!phonePattern.test(phone)) {
    phoneError.innerText =
      'Please enter phone in the following format: +90 123 456 7890';
    phoneError.classList.remove('hidden');
    formValid = false;
  } else {
    phoneError.innerText = '';
    phoneError.classList.add('hidden');
  }
}

function validateName(name, nameError) {
  if (!onlyLetters.test(name)) {
    nameError.innerText = 'Only letters, whitespaces and - are allowed.';
    nameError.classList.remove('hidden');
    formValid = false;
  } else if (!(name.trim().length > 0)) {
    nameError.classList.remove('hidden');
    nameError.innerText = 'Enter more than one character.';
    formValid = false;
  } else {
    nameError.innerText = '';
    nameError.classList.add('hidden');
  }
}

function validateCard(number) {
  if (!cardPattern.test(number)) {
    cardNumberError.innerText =
      'Please enter card number in the following format: 1234 5678 9101 1121';
    cardNumberError.classList.remove('hidden');
    formValid = false;
  } else {
    cardNumberError.innerText = '';
    cardNumberError.classList.add('hidden');
  }
}

function validateExpDate(date) {
  if (!expDatePattern.test(date)) {
    expDateError.innerText =
      'Please enter a expiration date in the following format: MM/YY';
    expDateError.classList.remove('hidden');
    formValid = false;
  } else {
    expDateError.innerText = '';
    expDateError.classList.add('hidden');
  }
}
function validateCVV(cvv) {
  if (!cvvPattern.test(cvv)) {
    cvvError.innerText = 'CVV must be 3 digits.';
    cvvError.classList.remove('hidden');
    formValid = false;
  } else {
    cvvError.innerText = '';
    cvvError.classList.add('hidden');
  }
}
function checkForm() {
  const isEmailValid = emailPattern.test(emailInput.value);
  const isPhoneValid = phonePattern.test(phoneInput.value);
  const isFirstNameValid = onlyLetters.test(firstNameInput.value) && firstNameInput.value.trim().length > 0;
  const isLastNameValid = onlyLetters.test(lastNameInput.value) && lastNameInput.value.trim().length > 0;
  const isCardValid = cardPattern.test(cardInput.value);
  const isExpValid = expDatePattern.test(expDate.value);
  const isCvvValid = cvvPattern.test(cvvInput.value);

  submitBtn.disabled = !(isEmailValid && isPhoneValid && isFirstNameValid && isLastNameValid && isCardValid && isExpValid && isCvvValid);
}
emailInput.addEventListener('input', () => { validateEmail(emailInput.value); checkForm(); });
phoneInput.addEventListener('input', () => { validatePhone(phoneInput.value); checkForm(); });
firstNameInput.addEventListener('input', () => {
  validateName(firstNameInput.value, firstNameError); checkForm(); });
lastNameInput.addEventListener('input', () => {
  validateName(lastNameInput.value, lastNameError); checkForm(); });
cardInput.addEventListener('input', () => {validateCard(cardInput.value); checkForm(); });
expDate.addEventListener('input', () => {validateExpDate(expDate.value); checkForm(); });
cvvInput.addEventListener('input', () => {validateCVV(cvvInput.value); checkForm(); });

checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  checkoutForm.classList.add('hidden'); 
  successMessage.classList.remove('hidden'); 
});
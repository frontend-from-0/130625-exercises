/*
1. Declare variable that store elements that we need to use for this task

2. Add event listeners (on click - buttons , on change - inputs)

3. Take data from current element and show it in the target output field.

*/

const onlyLetters = /^[a-zA-Z\s]+$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const dateInput = document.getElementById('date');
const dateOutput = document.getElementById('selected-date');
const timeslotButtons = document.querySelectorAll('.slot');
const selectedTimeOutput = document.getElementById('selected-time');
const form = document.getElementById('booking_form');
const confirmation = document.getElementById('confirmation');
const confirmedDate = document.getElementById('confirmed-date');
const confirmedTime = document.getElementById('confirmed-time');
const confirmButton = document.getElementById('confirm');

const nameInput = document.getElementById("name");
const nameInputError = document.getElementById("nameError");
const nameOutput = document.getElementById("given-username");
const emailInput = document.getElementById("email");
const emailInputError = document.getElementById("emailError");
const emailOutput = document.getElementById("given-email");
const confirmedName = document.getElementById('confirmed-name');
const confirmedEmail = document.getElementById('confirmed-email');

let formValid = true;

// TODO: set min date for tomorrow or any other future date


const data = {
  date: null,
  time: null,
  name: null,
  email:null,
};

//added personal info part to the form

function validateName(name,nameError) {
  if (!onlyLetters.test(name)) {
    nameError.innerText = 'Please enter a valid username.';
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

  nameInput.addEventListener('change', () => {
    nameOutput.textContent = nameInput.value;
    data.name = nameInput.value;
    allowSubmit();
  })
};

nameInput.addEventListener('input', () => validateName(nameInput.value, nameInputError));

function validateEmail(email,emailError) {
  if (!emailPattern.test(email)) {
    emailError.innerText = 'Please enter a valid email address.';
    emailError.classList.remove('hidden');
    formValid = false;
  } else {
    emailError.innerText = '';
    emailError.classList.add('hidden');
  }
  emailInput.addEventListener('change', () => {
    emailOutput.textContent=emailInput.value;
    data.email = emailInput.value;
    allowSubmit();
  })
};

emailInput.addEventListener('input', () => validateEmail(emailInput.value, emailInputError));

//added functionality to show date line on click if supported

dateInput.addEventListener('click',() => {
  if(typeof dateInput.showPicker === 'function'){
    dateInput.showPicker();
  }
})
dateInput.addEventListener('change', () => {
  dateOutput.textContent = dateInput.value;
  data.date = dateInput.value;

  allowSubmit();
});

//added deselect function for timeslot buttons

timeslotButtons.forEach(function (element) {
  element.addEventListener('click', () => {
    timeslotButtons.forEach(slot => {
      slot.classList.remove('selected');
    });
    element.classList.add('selected');
    showSelectedTime(element);
  });
});



function showSelectedTime(element) {
  element.classList.add('selected');
  // TODO: deselect element if another one is selected
  selectedTimeOutput.textContent = element.textContent;
  data.time = element.textContent;
  allowSubmit();
}

function allowSubmit() {
  if (data.date && data.time && data.name && data.email) {
    confirmButton.removeAttribute('disabled');
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!data.date && !data.time && !data.name && !data.email) return;

  form.classList.add('hidden');
  confirmation.classList.remove('hidden');
  confirmedName.textContent=data.name;
  confirmedEmail.textContent=data.email;
  confirmedDate.textContent = data.date;
  confirmedTime.textContent = data.time;
});


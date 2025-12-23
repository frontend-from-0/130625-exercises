/*
1. Declare variable that store elements that we need to use for this task

2. Add event listeners (on click - buttons , on change - inputs)

3. Take data from current element and show it in the target output field.

*/
const dateInput = document.getElementById('date');
const dateOutput = document.getElementById('selected-date');
const timeslotButtons = document.querySelectorAll('.slot');
const selectedTimeOutput = document.getElementById('selected-time');
const form = document.getElementById('booking_form');
const confirmation = document.getElementById('confirmation');
const confirmedDate = document.getElementById('confirmed-date');
const confirmedTime = document.getElementById('confirmed-time');
const confirmButton = document.getElementById('confirm');
const userNameInput = document.getElementById('user-name');
const displayName = document.getElementById('display-name');
const userEmailInput = document.getElementById('user-email');
const displayEmail = document.getElementById('display-email');
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const tomorrowFormatted = tomorrow.toISOString().split('T')[0];
dateInput.setAttribute('min', tomorrowFormatted);



const data = {
  date: null,
  time: null,
  name: null,
  email: null,
};

dateInput.addEventListener('change', () => {
  dateOutput.textContent = dateInput.value;
  data.date = dateInput.value;

  allowSubmit();
});
userNameInput.addEventListener('change', () => {
  displayName.textContent = userNameInput.value;
  data.name = userNameInput.value;
});

userEmailInput.addEventListener('change', () => {
  displayEmail.textContent = userEmailInput.value;
  data.email = userEmailInput.value;
});

timeslotButtons.forEach(function (element) {
  element.addEventListener('click', () => showSelectedTime(element));
});

function showSelectedTime(element) {
  const activeSlot = document.querySelector('.slot.selected');
  if (activeSlot) {
    activeSlot.classList.remove('selected');
  }
  element.classList.add('selected');
  selectedTimeOutput.textContent = element.textContent;
  data.time = element.textContent;
  allowSubmit();
}




function allowSubmit() {
  if (data.date && data.time) {
    confirmButton.removeAttribute('disabled');
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!data.date && !data.time) return;

  form.classList.add('hidden');
  confirmation.classList.remove('hidden');
  confirmedDate.textContent = data.date;
  confirmedTime.textContent = data.time;
  document.getElementById('confirmed-name').textContent = data.name;
  document.getElementById('confirmed-email').textContent = data.email;
});

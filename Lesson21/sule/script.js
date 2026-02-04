/*
1. Declare variable that store elements that we need to use for this task

2. Add event listeners (on click - buttons , on change - inputs)

3. Take data from current element and show it in the target output field.

*/
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);


const yyyy = tomorrow.getFullYear();
const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
const dd = String(tomorrow.getDate()).padStart(2, '0');

const minDate = `${yyyy}-${mm}-${dd}`;
dateInput.min = minDate; 

const dateInput = document.getElementById('date');
const dateOutput = document.getElementById('selected-date');
const timeslotButtons = document.querySelectorAll('.slot');
const selectedTimeOutput = document.getElementById('selected-time');
const form = document.getElementById('booking_form');
const confirmation = document.getElementById('confirmation');
const confirmedDate = document.getElementById('confirmed-date');
const confirmedTime = document.getElementById('confirmed-time');
const confirmButton = document.getElementById('confirm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email'); 
const selectedName = document.getElementById('selected-name');   
const selectedEmail = document.getElementById('selected-email');   
const confirmedName = document.getElementById('confirmed-name');   
const confirmedEmail = document.getElementById('confirmed-email');


// TODO: set min date for tomorrow or any other future date

const data = {
  name: null,
  email: null,
  date: null,
  time: null,
};


dateInput.addEventListener('change', () => {
  dateOutput.textContent = dateInput.value;
  data.date = dateInput.value;

  allowSubmit();
});

timeslotButtons.forEach(function (element) {
  element.addEventListener('click', () => showSelectedTime(element));
});

function showSelectedTime(element) {
    timeslotButtons.forEach(btn => btn.classList.remove('selected'));
  element.classList.add('selected');
  // TODO: deselect element if another one is selected
  selectedTimeOutput.textContent = element.textContent;
  data.time = element.textContent;
  allowSubmit();
}

function allowSubmit() {
  if (data.name && data.email && data.date && data.time) {
    confirmButton.removeAttribute('disabled');
  } else {
    confirmButton.setAttribute('disabled', 'true');
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!data.name || !data.email || !data.date || !data.time) return;

  form.classList.add('hidden');
  confirmation.classList.remove('hidden');

  confirmedName.textContent = data.name;
  confirmedEmail.textContent = data.email;
  confirmedDate.textContent = data.date;
  confirmedTime.textContent = data.time;
});

nameInput.addEventListener("blur", () => {
  data.name = nameInput.value.trim();
  selectedName.textContent = data.name || "-";
  allowSubmit();
});

emailInput.addEventListener("blur", () => {
  data.email = emailInput.value.trim();
  selectedEmail.textContent = data.email || "-";
  allowSubmit();
});

/*
1. Declare variable that store elements that we need to use for this task

2. Add event listeners (on click - buttons , on change - inputs)

3. Take data from current element and show it in the target output field.

*/

const dateInput = document.getElementById('date');
function getTomorrowDateISO() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
}
function setMinDate() {
  const minDate = getTomorrowDateISO();
  dateInput.min = minDate;
}

setMinDate();
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

  if (element.disabled) return;

  const alreadySelected = element.classList.contains('selected');

  if (alreadySelected) {
    element.classList.remove('selected');
    data.time = "";
    selectedTimeOutput.textContent = "-";
    allowSubmit();
    return;
  }
 
  timeslotButtons.forEach((btn) => btn.classList.remove('selected'));
  element.classList.add('selected');
  data.time = element.textContent.trim();
  selectedTimeOutput.textContent = data.time;
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

  setValidUI(nameInput, data.name !== "");

  allowSubmit();
});

emailInput.addEventListener("blur", () => {
  const value = emailInput.value.trim();
  const isValid = emailInput.checkValidity();
  const errorSpan = document.getElementById("email-error");

  if (!isValid) {
    errorSpan.textContent =
      value === "" ? "Email is required." : "Please enter a valid email address.";
    emailInput.classList.add("is-invalid");
  } else {
    errorSpan.textContent = "";
    emailInput.classList.remove("is-invalid");
  }

  data.email = isValid ? value : null;
  selectedEmail.textContent = data.email || "-";

  setValidUI(emailInput, isValid);
  allowSubmit();
});

function setValidUI(inputEl, isValid) {
  const wrap = inputEl.closest(".input-wrap");
  if (!wrap) return;

  const tick = wrap.querySelector(".tick");
  if (!tick) return;

  inputEl.classList.toggle("is-valid", isValid);
  tick.classList.toggle("show", isValid);
}



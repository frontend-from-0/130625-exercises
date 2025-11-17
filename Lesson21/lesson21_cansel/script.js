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
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameOutput = document.getElementById('selected-name');
const emailOutput = document.getElementById('selected-email');
const confirmedName = document.getElementById('confirmed-name');
const confirmedEmail = document.getElementById('confirmed-email');

function setMinDate() {
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0'); 
  const dd = String(today.getDate()).padStart(2, '0');
  
  const minDate = `${yyyy}-${mm}-${dd}`;
  dateInput.setAttribute('min', minDate);
}
const data = {
  name: null,
  email: null,
  date: null,
  time: null,
};
nameInput.addEventListener('change', () => {
  data.name = nameInput.value;
  nameOutput.textContent = data.name || '-';
  allowSubmit();
});
emailInput.addEventListener('change', () => {
  data.email = emailInput.value;
  emailOutput.textContent = data.email || '-';
  allowSubmit();
});
dateInput.addEventListener('change', () => {
  dateOutput.textContent = dateInput.value;
  data.date = dateInput.value;
  data.time = null;
  selectedTimeOutput.textContent = '-';
  timeslotButtons.forEach(btn => {
    btn.classList.remove('selected');
    btn.disabled = false; 
  });

  const selectedDate = dateInput.value;
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const todayString = `${yyyy}-${mm}-${dd}`;

  const currentHour = now.getHours(); 

  if (selectedDate === todayString) {
    timeslotButtons.forEach(button => {
      const slotTime = button.textContent;
      const slotHour = parseInt(slotTime.split(':')[0]);

      if (slotHour <= currentHour) {
        button.disabled = true;
      } else {
        button.disabled = false;
      }
    });
  } else {
    timeslotButtons.forEach(button => {
      button.disabled = false;
    });
  }
  allowSubmit();
});

timeslotButtons.forEach(function (element) {
  element.addEventListener('click', () => showSelectedTime(element));
});

function showSelectedTime(element) {
 timeslotButtons.forEach(function (btn) {
    btn.classList.remove('selected');
  });
  element.classList.add('selected');
  selectedTimeOutput.textContent = element.textContent;
  data.time = element.textContent;
  allowSubmit();
}

function allowSubmit() {
  if (data.date && data.time && data.name && data.email) {
    confirmButton.removeAttribute('disabled');
  } else {
    confirmButton.setAttribute('disabled', 'true');
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!data.date || !data.time || !data.name || !data.email) return;
  

  form.classList.add('hidden');
  confirmation.classList.remove('hidden');
  confirmedName.textContent = data.name;
  confirmedEmail.textContent = data.email;
  confirmedDate.textContent = data.date;
  confirmedTime.textContent = data.time;
});

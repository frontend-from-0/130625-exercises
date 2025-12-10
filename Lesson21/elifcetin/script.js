const dateInput = document.getElementById('date');

const dateOutput = document.getElementById('selected-date');

const timeslotButtons = document.querySelectorAll('.slot');
const selectedTimeOutput = document.getElementById('selected-time');
const form = document.getElementById('booking_form');
const confirmation = document.getElementById('confirmation');
const confirmedDate = document.getElementById('confirmed-date');
const confirmedTime = document.getElementById('confirmed-time');
const confirmButton = document.getElementById('confirm');
let timer;
const userNameInput = document.getElementById('firstName');
const userNameOutput = document.getElementById('selected-username');
const userEmailInput = document.getElementById('email');
const userEmailOutput = document.getElementById('selected-email');
const confirmedUsername = document.getElementById('confirmed-username');
const confirmedEmail = document.getElementById('confirmed-email');


const data = {
  date: null,
  time: null,
  username: null,
  email: null,
};

const today = new Date();
today.setDate(today.getDate() + 3); 


const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;
dateInput.max= "2026-01-31"



userNameInput.addEventListener("input", () => {
  clearTimeout(timer);

  timer = setTimeout(() => {
    userNameOutput.textContent = userNameInput.value;
  }, 400); 
 data.username = userNameInput.value.trim()
  allowSubmit() 
});

userEmailInput.addEventListener("input", () => {
  clearTimeout(timer); // clean the timer

  timer = setTimeout(() => { // start the new timer
    userEmailOutput.textContent = userEmailInput.value; // if user doesnt write anything in a second, write the FINAL output.
  }, 400); 
 data.email = userEmailInput.value.trim()
  allowSubmit() 
});



// TODO: set min date for tomorrow or any other future date


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
  if (data.date && data.time  && data.username && data.email ) {
    confirmButton.removeAttribute('disabled');
  } else {
    confirmButton.setAttribute("disabled", "true");
  }
}



form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  form.classList.add('hidden');
  confirmation.classList.remove('hidden');
  confirmedDate.textContent = data.date
  confirmedTime.textContent = data.time
  confirmedEmail.textContent = data.email
  confirmedUsername.textContent = data.username
  

});










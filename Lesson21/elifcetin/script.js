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
let nameTimer; //FIXED
let emailTimer; // FIXED
const userNameInput = document.getElementById('fullName'); // FIXED
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

clearTimeout()

userNameInput.addEventListener("input", () => {
  clearTimeout(nameTimer); // clean the timer

  nameTimer = setTimeout(() => { // start the new timer
    userNameOutput.textContent = userNameInput.value; 
    data.username = userNameInput.value.trim();
  allowSubmit()
    // if user doesnt write anything in a second, write the FINAL output.
  }, 800); 
    
});
  

userEmailInput.addEventListener("input", () => {
  clearTimeout(emailTimer); // clean the timer

  emailTimer = setTimeout(() => { // start the new timer
    userEmailOutput.textContent = userEmailInput.value;
    data.email = userEmailInput.value.trim();
     allowSubmit()
    // if user doesnt write anything in a second, write the FINAL output.
  }, 400); 
  
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
  
  form.classList.remove('booking'); //FIXED
  form.classList.add('hidden')
  confirmation.classList.remove('hidden');
  confirmedDate.textContent = data.date
  confirmedTime.textContent = data.time
  confirmedEmail.textContent = data.email
  confirmedUsername.textContent = data.username
  

});










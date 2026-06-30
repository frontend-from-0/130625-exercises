/*
1. Declare variable that store elements that we need to use for this task

2. Add event listeners (on click - buttons , on input/change - inputs)

3. Take data from current element and show it in the target output field.
*/

const guestName = document.getElementById("user");
const enterName = document.getElementById("selected-name");
const enterMail = document.getElementById("email");
const mail = document.getElementById("selected-email");
const dateInput = document.getElementById("date");
const dateOutput = document.getElementById("selected-date");
const timeslotButtons = document.querySelectorAll(".slot");
const selectedTimeOutput = document.getElementById("selected-time");
const form = document.getElementById("booking_form");
const confirmation = document.getElementById("confirmation");
const confirmedName = document.getElementById("confirmed-name");
const confirmedEmail = document.getElementById("confirmed-email");
const confirmedDate = document.getElementById("confirmed-date");
const confirmedTime = document.getElementById("confirmed-time");
const confirmButton = document.getElementById("confirm");

// TODO: set min date for tomorrow or any other future date

const today = new Date();

today.setDate(today.getDate() + 1);

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
const formatDate = `${year}-${month}-${day}`;

dateInput.min = formatDate;

const data = {
  name: null,
  email: null,
  date: null,
  time: null,
};

guestName.addEventListener("input", () => {
  const value = guestName.value;

  enterName.textContent = value;
  data.name = value.trim() === "" ? null : value;

  allowSubmit();
});

enterMail.addEventListener("input", () => {
  const value = enterMail.value;

  mail.textContent = value;
  data.email = value.trim() === "" ? null : value;

  allowSubmit();
});

dateInput.addEventListener("change", () => {
  dateOutput.textContent = dateInput.value;
  data.date = dateInput.value;

  allowSubmit();
});

timeslotButtons.forEach(function (element) {
  element.addEventListener("click", () => showSelectedTime(element));
});
// TODO: deselect element if another one is selected
function showSelectedTime(element) {
  timeslotButtons.forEach((btn) => btn.classList.remove("selected"));

  element.classList.add("selected");

  selectedTimeOutput.textContent = element.textContent;
  data.time = element.textContent;

  allowSubmit();
}

function allowSubmit() {
  if (data.name && data.email && data.date && data.time) {
    confirmButton.removeAttribute("disabled");
  } else {
    confirmButton.setAttribute("disabled", "true");
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!data.date || !data.time || !data.name || !data.email) return;

  form.classList.add("hidden");
  confirmation.classList.remove("hidden");

  confirmedName.textContent = data.name;
  confirmedEmail.textContent = data.email;
  confirmedDate.textContent = data.date;
  confirmedTime.textContent = data.time;
});

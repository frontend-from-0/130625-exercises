/*
1. Declare variable that store elements that we need to use for this task

2. Add event listeners (on click - buttons , on change - inputs)

3. Take data from current element and show it in the target output field.

*/
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const dateInput = document.getElementById("date");
const nameOutput = document.getElementById("selected-name");
const emailOutput = document.getElementById("selected-email");
const dateOutput = document.getElementById("selected-date");
const timeslotButtons = document.querySelectorAll(".slot");
const selectedTimeOutput = document.getElementById("selected-time");
const form = document.getElementById("booking_form");
const header = document.querySelector("header");
const confirmation = document.getElementById("confirmation");
const confirmedName = document.getElementById("confirmed-name");
const confirmedEmail = document.getElementById("confirmed-email");
const confirmedDate = document.getElementById("confirmed-date");
const confirmedTime = document.getElementById("confirmed-time");
const confirmButton = document.getElementById("confirm");

const data = {
  name: null,
  email: null,
  date: null,
  time: null,
};

nameInput.addEventListener("change", () => {
  nameOutput.textContent = nameInput.value;
  data.name = nameInput.value;
  allowSubmit();
});

emailInput.addEventListener("change", () => {
  emailOutput.textContent = emailInput.value;
  data.email = emailInput.value;
  allowSubmit();
});

dateInput.addEventListener("change", () => {
  dateOutput.textContent = dateInput.value;
  data.date = dateInput.value;
  // Deselect element if date is changed
  timeslotButtons.forEach((btn) => btn.classList.remove("selected"));
  selectedTimeOutput.textContent = "-";
  data.time = null;
  confirmButton.setAttribute("disabled", "true");
  allowSubmit();
});

timeslotButtons.forEach(function (element) {
  element.addEventListener("click", () => showSelectedTime(element));
});

// Set min date for tomorrow or any other future date
function setMinDate() {
  const minSelectableDate = new Date();
  minSelectableDate.setDate(minSelectableDate.getDate() + 1);
  const year = minSelectableDate.getFullYear();
  const month = String(minSelectableDate.getMonth() + 1).padStart(2, "0");
  const day = String(minSelectableDate.getDate()).padStart(2, "0");
  const minDate = `${year}-${month}-${day}`;
  dateInput.min = minDate;
}
setMinDate();

// Deselect element if another one is selected
function showSelectedTime(element) {
  timeslotButtons.forEach((btn) => {
    btn.classList.remove("selected");
  });
  element.classList.add("selected");
  selectedTimeOutput.textContent = element.textContent;
  data.time = element.textContent;
  allowSubmit();
}

function allowSubmit() {
  if (data.name && data.email && data.date && data.time) {
    confirmButton.removeAttribute("disabled");
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!data.date && !data.time) return;

  form.classList.add("hidden");
  header.classList.add("hidden");
  confirmation.classList.remove("hidden");
  confirmedName.textContent = data.name;
  confirmedEmail.textContent = data.email;
  confirmedDate.textContent = data.date;
  confirmedTime.textContent = data.time;
});

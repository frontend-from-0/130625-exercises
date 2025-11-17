/*
1. Declare variable that store elements that we need to use for this task

2. Add event listeners (on click - buttons , on change - inputs)

3. Take data from current element and show it in the target output field.

*/

const nameInput = document.getElementById("name");
const nameOutput = document.getElementById("entered-name");
const emailInput = document.getElementById("email");
const emailOutput = document.getElementById("entered-email");

const todaysDate = new Date();
const year = todaysDate.getFullYear();
const month = ("0" + (todaysDate.getMonth() + 1)).slice(-2);
const day = ("0" + (todaysDate.getDate() + 1)).slice(-2);
const minDate = `${year}-${month}-${day}`;

const dateInput = document.getElementById("date");
dateInput.setAttribute("min", minDate);

const dateOutput = document.getElementById("selected-date");
const timeslotButtons = document.querySelectorAll(".slot");
const selectedTimeOutput = document.getElementById("selected-time");
const form = document.getElementById("booking_form");
const confirmation = document.getElementById("confirmation");
const confirmedDate = document.getElementById("confirmed-date");
const confirmedTime = document.getElementById("confirmed-time");
const confirmedName = document.getElementById("confirmed-name");
const confirmedEmail = document.getElementById("confirmed-email");
const confirmButton = document.getElementById("confirm");
const formTitle = document.getElementById("title");

// TODO: set min date for tomorrow or any other future date

const data = {
  name: null,
  email: null,
  date: null,
  time: null,
};

nameInput.addEventListener("input", () => {
  nameOutput.textContent = nameInput.value;
  data.name = nameInput.value;

  allowSubmit();
});

emailInput.addEventListener("input", () => {
  emailOutput.textContent = emailInput.value;
  data.email = emailInput.value;

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

function showSelectedTime(element) {
  timeslotButtons.forEach((button) => {
    if (button.classList.contains("selected")) {
      button.classList.remove("selected");
    }
  });
  element.classList.add("selected");
  // TODO: deselect element if another one is selected

  selectedTimeOutput.textContent = element.textContent;
  data.time = element.textContent;
  allowSubmit();
}

function allowSubmit() {
  if (data.name && data.email && data.date && data.time) {
    confirmButton.removeAttribute("disabled");
  }
  else {
        confirmButton.setAttribute("disabled", true);
    }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!data.date && !data.time && !data.name && !data.email) return;

  form.classList.add("hidden");
  formTitle.classList.add("hidden");
  confirmation.classList.remove("hidden");
  confirmedName.textContent = data.name;
  confirmedEmail.textContent = data.email;
  confirmedDate.textContent = data.date;
  confirmedTime.textContent = data.time;
});

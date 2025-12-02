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
const nameInput = document.getElementById("name");
const nameOutput = document.getElementById("display-name");

const emailInput = document.getElementById("email");
const emailOutput = document.getElementById("display-email");

// TODO: set min date for tomorrow or any other future date

function setMinDay() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return `${tomorrow.getFullYear()}-${String(tomorrow.getMonth() + 1).padStart(
    2,
    "0",
  )}-${String(tomorrow.getDate()).padStart(2, "0")}`;
}

function setMaxDay() {
  const today = new Date();
  const maxDay = new Date(today);
  maxDay.setDate(maxDay.getDate() + 15);
  return `${maxDay.getFullYear()}-${String(maxDay.getMonth() + 1).padStart(
    2,
    "0",
  )}-${String(maxDay.getDate()).padStart(2, "0")}`;
}
window.addEventListener("load", function() {
  dateInput.min = setMinDay();
  dateInput.max = setMaxDay();
});


const data = {
  name: null,
  email: null,
  date: null,
  time: null,
};

function togglePersonalInfoPart() {
  nameOutput.textContent = nameInput.value.trim();
  data.name = nameInput.value.trim();
  emailOutput.textContent = emailInput.value.trim();
  data.email = emailInput.value.trim();
  allowSubmit();
}
nameInput.addEventListener("input", togglePersonalInfoPart);
emailInput.addEventListener("input", togglePersonalInfoPart);

dateInput.addEventListener("change", () => {
  dateOutput.textContent = dateInput.value;
  data.date = dateInput.value;

  allowSubmit();
});

timeslotButtons.forEach(function (element) {
  element.addEventListener("click", () => showSelectedTime(element));
});

function showSelectedTime(element) {
  const isAlreadySelected = element.classList.contains("selected");
  // TODO: deselect element if another one is selected
  timeslotButtons.forEach((btn) => btn.classList.remove("selected"));
  if (!isAlreadySelected) {
    //yani ilk kez seçim yapılıyorsa
    element.classList.add("selected");
    selectedTimeOutput.textContent = element.textContent; //data.time ın içini dolduralım
    data.time = element.textContent;
  } else {
    //seçili butona tekrar tıkklanırsa vazgeçildi demektir.
    selectedTimeOutput.textContent = ""; //o zaman da data.time ın içini boşaltalım
    data.time = "";
  }
  allowSubmit();
}

function allowSubmit() {
  if (data.date && data.time && data.name && data.email) {
    // confirmButton.removeAttribute("disabled");
    confirmButton.disabled = false;
  } else {
    confirmButton.disabled = true;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  form.classList.add("hidden");
  confirmation.classList.remove("hidden");
  confirmedDate.textContent = data.date;
  confirmedTime.textContent = data.time;
  confirmedName.textContent = data.name;
  confirmedEmail.textContent = data.email;
});


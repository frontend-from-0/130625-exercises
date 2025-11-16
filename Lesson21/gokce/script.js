/*
1. Declare variable that store elements that we need to use for this task

2. Add event listeners (on click - buttons , on change - inputs)

3. Take data from current element and show it in the target output field.

*/
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
const hiddenPersonalInfoPart = document.getElementById("personal-div");
const clientNamePart = document.getElementById("hidden-name-part");
const emailInput = document.getElementById("email");
const emailOutput = document.getElementById("display-email");

// TODO: set min date for tomorrow or any other future date
const today = new Date();
// 1. Yarının Tarihini Hesaplama (Minimum Tarih)
//    - Önce bugünün kopyasını alıyoruz (değişkenler karışmasın diye).
const minDate = new Date(today);
minDate.setDate(minDate.getDate() + 1); // Tarihi bir gün ileri taşı

// 2. Maksimum Tarihi Hesaplama (Örneğin 30 gün sonrası)
const maxDate = new Date(today);
maxDate.setDate(maxDate.getDate() + 30); // Tarihi 30 gün ileri taşı

// date kısmına yazabilmek için bu şekle getirmemiz gerekiyot:(YYYY-MM-DD Metin Formatı)

const minDateString = `${minDate.getFullYear()}-${(minDate.getMonth() + 1) //month olduğunda 1 ekliyoruz. pad startı da tarihlerin başında 0 olacağı için koyuyoruz
  .toString()
  .padStart(2, "0")}-${minDate.getDate().toString().padStart(2, "0")}`;

const maxDateString = `${maxDate.getFullYear()}-${(maxDate.getMonth() + 1)
  .toString()
  .padStart(2, "0")}-${maxDate.getDate().toString().padStart(2, "0")}`;

//html e ekleme
dateInput.min = minDateString;
dateInput.max = maxDateString;

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
  if (nameInput.value.trim() !== "" && emailInput.value.trim() !== "") {
    hiddenPersonalInfoPart.style.display = "none";
    clientNamePart.style.display = "block";
  } else {
    hiddenPersonalInfoPart.style.display = "block";
    clientNamePart.style.display = "none";
    nameOutput.textContent = "";
    emailOutput.textContent = "";
  }
  allowSubmit();
}
nameInput.addEventListener("blur", togglePersonalInfoPart);
emailInput.addEventListener("blur", togglePersonalInfoPart);

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
  clientNamePart.style.display = "none";
});

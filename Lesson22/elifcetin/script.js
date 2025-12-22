const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const onlyLetters = /^[a-zA-Z\s-]+$/;
const cardPattern = /^(\d{4}\s){3}\d{4}$/;
const cardExpirationPattern = /^(0[1-9]|1[0-2])\/\d{2}$/
const cardCvvPattern = /^[0-9]{3}$/;

/* 
- What are required input fields? - all fields are required here
- Select elements in JS
- trigger validation on form submit
- trigger validation on input change or on blur
*/

const emailInput = document.getElementById('email')
const emailError = document.getElementById('emailError')
const phoneInput = document.getElementById('phone')
const phoneError = document.getElementById('phoneError')
const firstNameInput = document.getElementById('firstname');
const firstNameError = document.getElementById('firstNameError');
const lastNameInput = document.getElementById('lastname');
const lastNameError = document.getElementById('lastNameError');
const cardNumberInput = document.getElementById('cardNumber');
const cardNumberError = document.getElementById('cardNumberError');
const cardExpirationInput = document.getElementById('expDate');
const cardExpirationError = document.getElementById('expDateError');
const cardCvvInput = document.getElementById('cvv');
const cardCvvError = document.getElementById('cvvError');
const successMessage = document.getElementById('success');
const form = document.getElementById('checkoutForm');
const confirmedEmail = document.getElementById('confirmed-email');
const confirmedPhoneNumber = document.getElementById('confirmed-number');
const confirmedNameSurname = document.getElementById('confirmed-nameSurname')





let formValid = true;




function validateEmail(email) {
  console.log('email validation triggered')
  if (!emailPattern.test(email)) {
    emailError.innerText = "Please enter valid email adress";
    emailError.classList.remove("hidden");
    formValid = false
  } else {
    emailError.innerText = "";
    emailError.classList.add("hidden");
  }
  validateAll()
}




function validatePhone(phone) {
  if (!phonePattern.test(phone)) {
    phoneError.innerText = "Please enter valid phone number +90 123 456 7890";
    phoneError.classList.remove("hidden");
     formValid = false
  } else{
    phoneError.innerText = '';
    phoneError.classList.remove('hidden')
  }
  validateAll()
}



function validateFirstname(name, firstNameError) {
  if (!onlyLetters.test(name)) //if input DOESNT contain letters,
  {
    firstNameError.innerText = "only letters are allowed";
    firstNameError.classList.remove("hidden");
    formValid = false;
  } else if (!(name.trim().length > 0)) { // if this is not true, then error message is shown
    firstNameError.classList.remove("hidden");
    firstNameError.innerText = "Enter more than one character";
    formValid = false
  } else{
    firstNameError.innerText = ''
    firstNameError.classList.add('hidden');
  }
  validateAll()
}



function validateCard(number){
  if (!cardPattern.test(number)) {
    cardNumberError.innerText = "Please enter valid card number 0000 0000 0000 0000";
    cardNumberError.classList.remove("hidden");
     formValid = false
  } else{
    cardNumberError.innerText = '';
    cardNumberError.classList.add('hidden')
  }
  validateAll()
}

function validateExpressionDate(date){
  if(!cardExpirationPattern.test(date)){
    cardExpirationError.innerText = "Please provide a valid exp date";
    cardExpirationError.classList.remove("hidden");
    formValid = false;
  } else{
    cardExpirationError.innerText = '';
    cardExpirationError.classList.add('hidden')
  }
  validateAll()
}


function validateCvv(cvv){
  if(!cardCvvPattern.test(cvv)){
    cardCvvError.innerText = "Please provide a valid CVV expression";
    cardCvvError.classList.remove('hidden');
  } else{
    cardCvvError.innerText = '';
    cardCvvError.classList.add('hidden');
  } 
  validateAll()
}


function validateAll() {
  const submitBtn = document.getElementById("submitBtn");
  const fieldsFilled = // is there anything left after trimming the inputs' value?
    emailInput.value.trim() !== "" && // After cleaning the input, this value is NOT an empty string -> SHOULD BE TRUE. YES, THE VALUE IS NOT AN EMPTY STRING
    phoneInput.value.trim() !== "" && // VALUE IS NOT AN EMPTY STRING 
    firstNameInput.value.trim() !== "" && // value is not an empty string
    lastNameInput.value.trim() !== "" &&
    cardNumberInput.value.trim() !== "" &&
    cardExpirationInput.value.trim() !== "" &&
    cardCvvInput.value.trim() !== "";
  const containsHidden =
    !firstNameError.classList.contains("hidden") || // firstNameError.classlist DOES NOT contain hidden,
    !lastNameError.classList.contains("hidden") ||
    //if lastNameError classlist DOES NOT contain hidden,
    !cardNumberError.classList.contains("hidden") ||
    !cardExpirationError.classList.contains("hidden") ||
    !cardCvvError.classList.contains("hidden");
  if (fieldsFilled && !containsHidden) { // if all fields are filled, AND errors dont contain class hidden
    submitBtn.disabled = false;
    submitBtn.addEventListener("mouseover", function () {
      submitBtn.style.backgroundColor = "#49ff4fff";
      submitBtn.style.cursor = 'pointer'
    });
    submitBtn.addEventListener("mouseout", function () {
      submitBtn.style.backgroundColor = "#fff";
    });
    submitBtn.addEventListener('click', function(e){
    const nameAndSurname = `${firstNameInput.value} ${lastNameInput.value}`
    form.classList.add('hidden');
    successMessage.classList.remove('hidden');
    confirmedNameSurname.textContent = nameAndSurname;
    confirmedEmail.textContent = emailInput.value;
    confirmedPhoneNumber.textContent = phoneInput.value;
    e.preventDefault();
   })
  
  } else {
    submitBtn.disabled = false;
    submitBtn.addEventListener("mouseover", function () {
      submitBtn.style.backgroundColor = "#ff4949ff";
    });
    submitBtn.disabled = true;
    submitBtn.addEventListener("mouseout", function () {
      submitBtn.style.backgroundColor = "#fff";
    });
  }

}

/* WRONG PRACTICE
const emailInput = document.getElementById('email')
const emailError = document.getElementById('emailError')
*/
/*
function validateEmail(emailInput) {
  console.log('email validation triggered')
  if (!emailPattern.test(emailInput.value)) {
    emailError.innerText = "Please enter valid email adress";
    emailError.classList.remove("hidden");
    formValid = false
  } else {
    emailError.innerText = "";
    emailError.classList.add("hidden");
  }
}
*/

emailInput.addEventListener("input", () => validateEmail(emailInput.value));
phoneInput.addEventListener("input", () => validatePhone(phoneInput.value));
firstNameInput.addEventListener("input", () =>
  validateFirstname(firstNameInput.value, firstNameError)
);
lastNameInput.addEventListener("input", () =>
  validateFirstname(lastNameInput.value, lastNameError)
);
cardNumberInput.addEventListener('input', ()=>validateCard(cardNumberInput.value));
cardExpirationInput.addEventListener('input', ()=> validateExpressionDate(cardExpirationInput.value))
cardCvvInput.addEventListener('input', ()=> validateCvv(cardCvvInput.value))
// show the confirmation of the page when everything is successful
// make sure it is ok with accessibility rules
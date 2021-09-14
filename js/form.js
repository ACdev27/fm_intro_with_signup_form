/*
Click button
Dovalidation

Checks if any inputs are empty

If an input is empty
	Make its border red
	Add exclamtoin icon inside input
	Add Unique error messag under the input

  <button type="submit" class="btn">Claim your free trial</button>

  - Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

     <input type="text" id="first-name" name="firstName" placeholder="First Name">
    <input type="text" id="last-name" name="lastName" placeholder="Last Name">
    <input type="email" id="email" name="email" placeholder="Email Address">
    <input type="password" name="password" id="password" placeholder="Password">

  */

// Get references to input fields
const form = document.querySelector('form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Get reference to submit button & add event listener
document.querySelector('button').addEventListener('click', validateForm);

// Validated form function
function validateForm(e) {

  // Reset error warning
  resetError(firstNameInput);
  resetError(lastNameInput);
  resetError(emailInput);
  resetError(passwordInput);

  resetErrorMessages();

  if (firstNameInput.value.trim() === "") {
    showInputError(firstNameInput, 'First Name cannot be empty');
  }

  if (lastNameInput.value.trim() === "") {
    showInputError(lastNameInput, 'Last Name cannot be empty');
  }

  if (emailInput.value.trim() === "") {
    showInputError(emailInput, 'Email cannot be empty');
  }

  if (passwordInput.value.trim() === "") {
    showInputError(passwordInput, 'Password cannot be empty');
  }
   e.preventDefault();

 }

 function resetError(inputEl) {
  inputEl.classList.remove("input-error");
 }

 function resetErrorMessages() {
  let errorMsg = document.querySelectorAll('div.error-message');
  errorMsg.forEach((element => {
    element.remove();
  }))
 }

 // Show error border and error message for input fields
 // Arguments: name of input element, error message
 function showInputError(inputEl, message) {
  inputEl.classList.add("input-error");
  let errorMsg = inputEl + "Error";
  errorMsg = document.createElement("div");
  errorMsg.classList.add("error-message");
  errorMsg.textContent = message;
  form.insertBefore(errorMsg, inputEl.nextElementSibling);
}


// errorMsg.textContent = "First Name cannont be empty";

    // firstNameInput.classList.add("input-error");
    // firstNameError = document.createElement("div");
    // firstNameError.classList.add("error-message");
    // firstNameError.textContent = "First Name cannont be empty";
    // form.insertBefore(firstNameError, firstNameInput.nextElementSibling);

    // firstNameInput.classList.remove("input-error");
    // lastNameInput.classList.remove("input-error");
    // emailInput.classList.remove("input-error");
    // passwordInput.classList.remove("input-error");
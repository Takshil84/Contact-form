document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent form from submitting

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const successMessage = document.getElementById('successMessage');

  let isValid = true;

  // Clear previous messages
  document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
  successMessage.textContent = '';

  // Name validation
  if (name.value.trim() === '') {
    showError(name, 'Name is required');
    isValid = false;
  }

  // Email validation
  if (email.value.trim() === '') {
    showError(email, 'Email is required');
    isValid = false;
  } else if (!validateEmail(email.value)) {
    showError(email, 'Please enter a valid email');
    isValid = false;
  }

  // Message validation
  if (message.value.trim() === '') {
    showError(message, 'Message is required');
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = 'Form submitted successfully!';
    // Optionally clear form
    name.value = '';
    email.value = '';
    message.value = '';
  }
});

function showError(input, message) {
  const errorDisplay = input.parentElement.querySelector('.error-message');
  errorDisplay.textContent = message;
}

function validateEmail(email) {
  const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// Define variables for form and submit button
const subscriptionForm = document.querySelector('.notify-me-form');
const submitBtn = document.querySelector('button[type="submit"]');
const emailField = document.querySelector('.email-field');
const userEmailInput = document.querySelector('input[name="email"]');
const emailError = document.querySelector('#email-error');
const popUp = document.querySelector('#pop-up');

// Function to validate email format
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Add event listener for form submission
subscriptionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Handle form submission logic here
  console.log('Form submitted');
  const email = userEmailInput.value;
  console.log('Email:', email);
  if (!isValidEmail(email)) {
    userEmailInput.classList.add('error-field');
    emailError.classList.remove('hide');
  } else {
    userEmailInput.classList.remove('error-field');
    emailError.classList.add('hide');
    emailField.style.marginBottom = '0';
    // Show pop-up notification
    popUp.classList.remove('hide');
    // Reset form after submission
    subscriptionForm.reset();
    // Hide pop-up notification
    setTimeout(() => {
      popUp.classList.add('slide-down');
      // Remove from DOM after animation
      setTimeout(() => {
        popUp.classList.add('hide');
        popUp.classList.remove('slide-down');
      }, 1000); // Match this duration with CSS animation duration
    }, 3000); // Hide after 3 seconds
  }
});

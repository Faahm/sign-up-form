function validateForm(e) {
  e.preventDefault();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  alert("Form submitted successfully!");
}

function validatePassword(input) {
  const password = input.value;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
  const validationMessage = document.getElementById(
    "password-validation-message"
  );

  if (!passwordRegex.test(password)) {
    validationMessage.textContent =
      "Password must have at least 8 characters, one uppercase letter, one digit, and one symbol (!@#$%^&*()).";
  } else {
    validationMessage.textContent = "";
  }
}

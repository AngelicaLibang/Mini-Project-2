function signup() {
  var newUsername = document.getElementById("new-username").value;
  var newPassword = document.getElementById("new-password").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  var firstName = document.getElementById("first_name").value;
  var lastName = document.getElementById("last_name").value;
  var birthdate = document.getElementById("birthdate").value;
  var email = document.getElementById("email").value;

  if (
    newUsername === "" ||
    newPassword === "" ||
    confirmPassword === "" ||
    firstName === "" ||
    lastName === "" ||
    birthdate === "" ||
    email === ""
  ) {
    document.getElementById("signup-error-message").innerText =
      "All fields are required.";
  } else if (newPassword !== confirmPassword) {
    document.getElementById("signup-error-message").innerText =
      "Passwords do not match.";
  } else {
    // Perform further validation or submit the form
    document.getElementById("signup-error-message").innerText =
      "Sign up successful!";
    // You can add additional code to submit the form to a server or perform other actions.
  }
}

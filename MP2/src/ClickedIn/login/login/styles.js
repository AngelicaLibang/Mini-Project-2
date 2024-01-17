function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check credentials (this is just a basic example, not secure for production)
  if (username === "your_username" && password === "your_password") {
    document.getElementById("error-message").innerText = "Login successful!";
  } else {
    document.getElementById("error-message").innerText =
      "Invalid username or password. Please try again.";
  }
}

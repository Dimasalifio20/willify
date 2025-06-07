function validate() {
  let input_username = document.getElementById("username");
  let input_email = document.getElementById("email");
  let input_password = document.getElementById("password");
  let input_age = document.getElementById("age");
  let input_male = document.querySelector('input[name="gender"][value="male"]');
  let input_female = document.querySelector('input[name="gender"][value="female"]');

  if(input_username.value == "" || input_password.value == "" || input_email.value == "" || input_age.value == "") {
      alert("Please input all fields");
      return false;
  } else if(input_username.value.length < 3) {
      alert("Username must be at least 3 characters long");
      return false;
  } else if(!input_email.value.endsWith("@gmail.com")) {
      alert("Email must be a Gmail address");
      return false;
  } else if(input_password.value.length < 8) {
      alert("Password must be at least 8 characters long");
      return false;
  } else if(input_age.value < 18) {
      alert("You must be at least 18 years old");
      return false;
  } else if(!input_male.checked && !input_female.checked) {
      alert("Choose a Gender");
      return false;
  }
  return true;
}

const registerForm = document.getElementById('register-form');
if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validate()) {
      window.location.href = "home.html";
    }
  });
}

const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username === "" || password === "") {
      alert("Please fill username and password");
    } else {
      window.location.href = "home.html";
    }
  });
}

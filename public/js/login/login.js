// const loginForm = document.querySelector("form.login");
// const signupForm = document.querySelector("form.signup");
// const loginBtn = document.querySelector("label.login");
// const signupBtn = document.querySelector("label.signup");
// const signupLink = document.querySelector(".signup-link a");
// const loginText = document.querySelector(".title-text .login");
// const signupText = document.querySelector(".title-text .signup");

// signupBtn.onclick = () => {
//   loginForm.style.marginLeft = "-50%";
//   loginText.style.marginLeft = "-50%";
// };

// loginBtn.onclick = () => {
//   loginForm.style.marginLeft = "0%";
//   loginText.style.marginLeft = "0%";
// };

// signupLink.onclick = () => {
//   signupBtn.click();
//   return false;
// };

// -------------------------------------------------

const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('#login-btn')
  .addEventListener('click', loginFormHandler);

// document
//   .querySelector('signup-form')
//   .addEventListener('submit', signupFormHandler);
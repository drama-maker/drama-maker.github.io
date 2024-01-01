document.addEventListener('DOMContentLoaded', function () {
  const loginSection = document.getElementById('login');
  const registerSection = document.getElementById('register');

  const showLogin = () => {
      loginSection.style.display = 'block';
      registerSection.style.display = 'none';
  };

  const showRegister = () => {
      loginSection.style.display = 'none';
      registerSection.style.display = 'block';
  };

  document.getElementById('login-link').addEventListener('click', showLogin);
  document.getElementById('register-link').addEventListener('click', showRegister);

  function registerUser(email, password) {
      $.ajax({
          type: 'POST',
          url: 'http://localhost:5000/register',
          contentType: 'application/json',
          data: JSON.stringify({ email, password }),
          success: function (data) {
              console.log(data.message);
          },
          error: function (error) {
              console.error('Error:', error.responseText);
          }
      });
  }

  function loginUser(email, password, rememberMe) {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:5000/login',
        contentType: 'application/json',
        data: JSON.stringify({ email, password, remember_me: rememberMe }),
        success: function (data) {
            console.log(data.message);

            if (data.redirect) {
                window.location.href = data.redirect;
            } else {
                alert('Invalid email or password');
            }
        },
        error: function (error) {
            console.error('Error:', error.responseText);
        }
    });
}
const rememberMeCheckbox = document.getElementById('remember-me');
const loginForm = document.querySelector('#login form');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = rememberMeCheckbox.checked;
    loginUser(email, password, rememberMe);
});
const continueButton = document.getElementById('continue-button');
continueButton.addEventListener('mousedown', function () {
    continueButton.classList.add('active');
});
continueButton.addEventListener('mouseup', function () {
    continueButton.classList.remove('active');
});
});
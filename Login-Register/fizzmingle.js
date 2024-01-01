document.addEventListener('DOMContentLoaded', function() {
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

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = rememberMeCheckbox.checked;
    loginUser(email, password, rememberMe);
  });
  const continueButton = document.getElementById('continue-button');
  continueButton.addEventListener('mousedown', function() {
    continueButton.classList.add('active');
  });
  continueButton.addEventListener('mouseup', function() {
    continueButton.classList.remove('active');
  });
});

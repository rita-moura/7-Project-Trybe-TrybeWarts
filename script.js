const getInputEmail = document.querySelector('#email-login');
const getInputPassword = document.querySelector('#password-login');
const getButtonFormsSubmit = document.querySelector('#submit-btn');
const getInputChackbox = document.querySelector('#agreement');
const getButtonLogin = document.querySelector('.submit');

function login() {
  if (getInputEmail.value === 'tryber@teste.com' && getInputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function submitForms() {
  getButtonFormsSubmit.disabled = false;
}

getButtonLogin.addEventListener('click', login);
getInputChackbox.addEventListener('click', submitForms);

window.onload = function disableButton() {
  getButtonFormsSubmit.disabled = true;
};

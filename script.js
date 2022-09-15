const getInputEmail = document.querySelector('#email-login');
const getInputPassword = document.querySelector('#password-login');
const getButtonFormsSubmit = document.querySelector('#submit-btn');
const getInputChackbox = document.querySelector('#agreement');
const getTextarea = document.querySelector('#textarea');
const getCounter = document.querySelector('#counter');
const maxLength = 500;
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

function counterTextarea() {
  const countDecrement = maxLength - getTextarea.value.length;
  getCounter.textContent = countDecrement;
}

getButtonLogin.addEventListener('click', login);
getInputChackbox.addEventListener('click', submitForms);
getTextarea.addEventListener('input', counterTextarea);

window.onload = function disableButton() {
  getButtonFormsSubmit.disabled = true;
};

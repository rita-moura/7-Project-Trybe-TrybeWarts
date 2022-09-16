const getInputEmail = document.querySelector('#email-login');
const getInputPassword = document.querySelector('#password-login');
const getButtonFormsSubmit = document.querySelector('#submit-btn');
const getInputChackbox = document.querySelector('#agreement');
const getTextarea = document.querySelector('#textarea');
const getCounter = document.querySelector('#counter');
const getNome = document.querySelector('#input-name');
const getSobrenome = document.querySelector('#input-lastname');
const getEmail = document.querySelector('#input-email');
const getOl = document.querySelector('#ol-dados-forms');
const getHome = document.querySelector('#label-casa');
const getFamily = document.querySelector('#label-family');
const getContent = document.querySelector('#label-content');
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
  const maxLength = 500;
  const countDecrement = maxLength - getTextarea.value.length;
  getCounter.textContent = countDecrement;
}

function getForm(event) {
  event.preventDefault();
  const textNome = document.createElement('li');
  const textEmail = document.createElement('li');
  const textHomeFamily = document.createElement('li');
  const textContent = document.createElement('li');
  const textAreaDados = document.createElement('li');
  textNome.innerText = `Nome: ${getNome.value} ${getSobrenome.value}`;
  textEmail.innerText = `Email: ${getEmail.value}`;
  console.log(textEmail);
  textHomeFamily.innerText = `Casa: ${getHome.value} Família: ${getFamily.value}`;
  textContent.innerText = `Matérias: ${getContent.value}`;
  textAreaDados.innerText = `Observações: ${getTextarea.value}`;
  getOl.appendChild(textNome);
  getOl.appendChild(textEmail);
  getOl.appendChild(textHomeFamily);
  getOl.appendChild(textContent);
  getOl.appendChild(textAreaDados);
}

getButtonLogin.addEventListener('click', login);
getInputChackbox.addEventListener('click', submitForms);
getTextarea.addEventListener('input', counterTextarea);
getButtonFormsSubmit.addEventListener('click', getForm);

window.onload = function disableButton() {
  getButtonFormsSubmit.disabled = true;
};

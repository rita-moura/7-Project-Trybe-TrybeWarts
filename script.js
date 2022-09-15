const getInputEmail = document.querySelector('#email-login');
const getInputPassword = document.querySelector('#password-login');
const getButtonFormsSubmit = document.querySelector('#submit-btn');
const getInputChackbox = document.querySelector('#agreement');
const getTextarea = document.querySelector('#textarea');
const getCounter = document.querySelector('#counter');
const getNome = document.querySelector('#input-name');
const getSobrenome = document.querySelector('#input-lastname');
const getEmail = document.querySelector('#inputemail');
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

function getForm() {
  const liDados = document.createElement('li');
  const textNome = document.createElement('p');
  const textEmail = document.createElement('p');
  const textHomeFamily = document.createElement('p');
  const textContent = document.createElement('p');
  const textAreaDados = document.createElement('p');
  textNome.innerText = `Nome: ${getNome.value} ${getSobrenome.value}`;
  textEmail.innerText = `Email: ${getEmail.value}`;
  textHomeFamily.innerText = `Casa: ${getHome.value}, Família: ${getFamily.value}`;
  textContent.innerText = `Matérias: ${getContent.value}`;
  textAreaDados.innerText = `Observações: ${getTextarea.value}`;
  liDados.appendChild(textNome);
  liDados.appendChild(textEmail);
  liDados.appendChild(textHomeFamily);
  liDados.appendChild(textContent);
  liDados.appendChild(textAreaDados);
  getOl.appendChild(liDados);
}
console.log(getForm());

getButtonLogin.addEventListener('click', login);
getInputChackbox.addEventListener('click', submitForms);
getTextarea.addEventListener('input', counterTextarea);

window.onload = function disableButton() {
  getButtonFormsSubmit.disabled = true;
};

const getInputEmail = document.querySelector('#email-login');
const getInputPassword = document.querySelector('#password-login');
const getButtonFormsSubmit = document.querySelector('#submit-btn');
const getInputChackbox = document.querySelector('#agreement');
const getTextarea = document.querySelector('#textarea');
const getCounter = document.querySelector('#counter');
const getNome = document.querySelector('#input-name');
const getSobrenome = document.querySelector('#input-lastname');
const getUl = document.querySelector('#ul-dados-forms');
const getEmail = document.querySelector('.E-mail');
const getFamily = document.querySelectorAll('.family');
const getSubjects = document.querySelectorAll('.subject');
const getButtonLogin = document.querySelector('.submit');

function creatElement(element, text) {
  const newElement = document.createElement(element);
  newElement.innerText = text;
  return newElement;
}

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

function getValueFamily() {
  for (let index = 0; index < getFamily.length; index += 1) {
    if (getFamily[index].checked) {
      return getFamily[index].value;
    }
  }
}

function getSubjectsValue() {
  let subjects = '';
  for (let index = 0; index < getSubjects.length; index += 1) {
    if (getSubjects[index].checked) {
      subjects += getSubjects[index].value;
      return subjects;
    }
  }
}

function getForm(event) {
  event.preventDefault();
  getUl.appendChild(creatElement('li', `Nome: ${getNome.value} ${getSobrenome.value}`));
  getUl.appendChild(creatElement('li', `Email: ${getEmail.value}`));
  getUl.appendChild(creatElement('li', `Família: ${getValueFamily()}`));
  getUl.appendChild(creatElement('li', `Matérias: ${getSubjectsValue()}`));
  getUl.appendChild(creatElement('li', `Observações: ${getTextarea.value}`));
}

getButtonLogin.addEventListener('click', login);
getInputChackbox.addEventListener('click', submitForms);
getTextarea.addEventListener('input', counterTextarea);
getButtonFormsSubmit.addEventListener('click', getForm);

window.onload = function disableButton() {
  getButtonFormsSubmit.disabled = true;
};

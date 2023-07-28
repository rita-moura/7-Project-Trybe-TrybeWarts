const getInputEmail = document.querySelector('#email-login');
const getInputPassword = document.querySelector('#password-login');
const getButtonFormsSubmit = document.querySelector('#submit-btn');
const getInputChackbox = document.querySelector('#agreement');
const getTextarea = document.querySelector('#textarea');
const getCounter = document.querySelector('#counter');
const getEvaluationForm = document.querySelector('#evaluation-form');
const getSubjects = document.querySelectorAll('.subject');
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

function getSubjectsValue() {
  const subjects = [];
  let string = 'Matérias: ';

  getSubjects.forEach((subject) => {
    if (subject.checked) subjects.push(subject.value);
  });

  for (let index = 0; index < subjects.length; index += 1) {
    string += `${subjects[index]}`;
    if (index !== subjects.length - 1) {
      string += ', ';
    }
  }
  return string;
}

function createFormData(event) {
  const getName = document.querySelector('#input-name').value;
  const getLastName = document.querySelector('#input-lastname').value;
  const getAssessment = document.querySelector('input[name="rate"]:checked').value;
  const getFamily = document.querySelector('input[name="family"]:checked').value;
  const getEmail = document.querySelector('.E-mail').value;
  const getTextareaObs = document.querySelector('#textarea').value;
  const getHouse = document.querySelector('#house').value;
  event.preventDefault();
  getEvaluationForm.style.display = 'none';
  document.querySelector('#name').innerText = `Nome:  ${getName} ${getLastName}`;
  document.querySelector('#email').innerText = `Email:  ${getEmail}`;
  document.querySelector('#houseSelect').innerText = `Casa: ${getHouse}`;
  document.querySelector('#family').innerText = `Família:  ${getFamily}`;
  document.querySelector('#matter').innerText = getSubjectsValue();
  document.querySelector('#assessments').innerText = `Avaliação:  ${getAssessment}`;
  document.querySelector('#comments').innerText = `Observações:  ${getTextareaObs}`;
}

getButtonLogin.addEventListener('click', login);
getInputChackbox.addEventListener('click', submitForms);
getTextarea.addEventListener('input', counterTextarea);
getButtonFormsSubmit.addEventListener('click', createFormData);

window.onload = function disableButton() {
  getButtonFormsSubmit.disabled = true;
};

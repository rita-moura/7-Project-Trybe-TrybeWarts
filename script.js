const getInputEmail = document.querySelector('#email-login');
const getInputPassword = document.querySelector('#password-login');
const getButtonSubmit = document.querySelector('.submit');

function login() {
  if (getInputEmail.value === 'tryber@teste.com' && getInputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
getButtonSubmit.addEventListener('click', login);

import { signUp, InfoProfileEmail } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const Register = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class='container-login'>
    <div class='box-login'>
     <img src='images/Cinelist.png' class='login-icon'>
      <form class='login'>
        <input class='input-login' id="email" type="email" placeholder="E-mail" required>
        <p class='infoText'>Senha de no mínimo 6 caracteres</p>
        <input class='input-login' id="password" type="password" placeholder="Senha" required>
        <input type='password' class='input-login' id='password-confirm' placeholder='Confirmar senha'/>
        <button type='submit' class='button' id='button-register'>Registrar-se</button>
        <p class='infoText marginText'>Ao cadastre-se você concorda com nossos termos de uso.</p>
      </form>
    </div>
  </div>
  `;

  const btnRegister = rootElement.querySelector('#button-register');
  const email = rootElement.querySelector('#email');
  const password = rootElement.querySelector('#password');

  btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    signUp(email.value, password.value)
      .then(() => {
        InfoProfileEmail();
        onNavigate('/allMovies');
      })
      .catch(() => {
        alert('Falha ao realizar o cadastro');
      });
  });
  return rootElement;
};

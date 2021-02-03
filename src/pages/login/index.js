import { onNavigate } from '../../utils/history.js';
import { signIn, loginGoogle } from '../../services/index.js';

export const Login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.classList.add('container-login');
  rootElement.innerHTML = `
  <div class='login-box'>
    <div id='button-return'><a class='btn-return'> &#10094; Voltar </a></div>
      <header class="login-header">
        <br />
          <img src="/img/logo.cc.transparente.png" alt="Logo">
          <br />
      </header>
        <p class='we-love'>We Love &nbsp; <span class='short-films'>Short Films <3</span></p>
    <div class='form-box'>
        <form class='form-login'>
          <label for="userEmail">E-mail:</label>
          <br/>
          <input id="userEmail" class="btn" type="text" placeholder="Email" />
          <br/>
          <label for="userPassword">Password:</label>
          <br/>
          <input id="userPassword" class="btn" type="password" placeholder="Password" autocomplete="off" >
          <br />
          <button id="btn-sign-in">SIGN IN</button>
        </form>


      </div>
      <div class='slice'><span>OR</span></div>
      <div class='google-signin'>
      <button id="btn-google">SIGN IN WITH GOOGLE</button>
      <p>Do not have an account? &nbsp; <a id="register" class='register'>Register</a></p>
    </div>
 
  </div>
`;

  // Função Botão Voltar a Home
  const backButton = rootElement.querySelector('#button-return');
  backButton.addEventListener('click', () => {
    onNavigate('/home');
  });

  // Função de Registro
  const btnRegister = rootElement.querySelector('#register');
  btnRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  const userEmail = rootElement.querySelector('#userEmail');
  const userPassword = rootElement.querySelector('#userPassword');
  const btnLogin = rootElement.querySelector('#btn-sign-in');

  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const email = userEmail.value;
    const password = userPassword.value;
    signIn(email, password);
  });

  const btnGoogle = rootElement.querySelector('#btn-google');
  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle();
  });
  return rootElement;
};

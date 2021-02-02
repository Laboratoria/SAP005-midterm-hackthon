import { onNavigate } from '../../utils/history.js';
import { signIn, loginGoogle } from '../../services/index.js';

export const Login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.classList.add('container-login');
  rootElement.innerHTML = `
      <div class="login-box">
      <div class="login-header"><img src="/img/logo.cc.transparente.png" alt="Logo"></div>
      <p class="about"><font color="#30261D">We Love</font> <font color="#BF2604">Short Films <3</font> </p>
      <form id="formLogin" class="login">
      <p>E-mail:</p>
      <input id="userEmail" class="btn" type="text" placeholder="Email" >
      <p>Password:</p>
      <input id="userPassword" class="btn" type="password" placeholder="Senha" autocomplete="off" >    
      <p><button id="btn-sign-in"> Login </button> </p>
      <p>Or</p>
      <button id="btn-google">SIGN IN WITH GOOGLE</button>
      <p>Do not have an account? <button id="register">Register</button></p>
    </form>
      </div>
`;

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

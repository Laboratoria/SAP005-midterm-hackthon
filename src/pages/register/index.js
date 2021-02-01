import { signUp } from '../../services/index.js';

export const Register = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class='container-login'>
    <div class='box-login'>
     <img src='images/Cinelist.png' class='login-icon'>
      <form class='login'>
        <input type='email' class='input-login' id ='email' placeholder ='E-mail'/>
        <p class='infoText'>Senha de no mínimo 6 caracteres</p>
        <input type='password' class='input-login' id='password' placeholder='Senha'/>
        <input type='password' class='input-login' id='password-confirm' placeholder='Confirmar senha'/>
        <button type='submit' class='buttonPage' id='button-register'>Registrar-se</button>
        <p class='infoText marginText'>Ao cadastre-se você concorda com nossos termos de uso.</p>
      </form>
    </div>
  </div>
  `;

  rootElement.querySelector('#button-register').addEventListener('click', (e) => {
    const email = rootElement.querySelector('#email').value;
    const password = rootElement.querySelector('#password').value;
    e.preventDefault();
    signUp(email, password)
      .catch(() => {
        alert('Falha ao realizar o cadastro');
      });
  });
  return rootElement;
};

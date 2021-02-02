import {
  signIn, signInGoogle, saveUser, verifyUser,
} from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const Login = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class='container-login'>
    <div class='box-login'>
        <img src='images/Cinelist.png'>
      <form>          
        <input class='input-login' id='e-mail' placeholder ='E-mail'/>
        <input type='password' class='input-login' id='my-password' placeholder='Senha'  autocomplete="off"/>    
        <button type='submit' class='button' id='button-login'>Entrar</button>
        <p>ou</p>
        <button class='button' id='button-google'>Entrar com o Google</button>
        <p class='infoText marginText'>Não tem uma conta? <b><span id='button-create-account' class='colorSpan'>Cadastre-se</span></p>
        <script type='module' src='./register/index.js'></script>
      </form>
    </div>
  </div>
  `;
  const emailButton = rootElement.querySelector('#e-mail');
  const passwordButton = rootElement.querySelector('#my-password');

  rootElement.querySelector('#button-login').addEventListener('click', (e) => {
    const email = emailButton.value;
    const password = passwordButton.value;
    console.log(email)
    console.log(password)

    e.preventDefault();
    signIn(email, password)
      .then(() => {
        onNavigate('/mainList');
      })
      .catch(() => {
        alert('Email e/ou senha incorretos');
      });
  });

  rootElement.querySelector('#button-google').addEventListener('click', (e) => {
    e.preventDefault();
    signInGoogle()
      .then(() => {
        verifyUser()
          .then((result) => {
            if (result.size < 1) {
              saveUser();
              onNavigate('/mainList');
            } else {
              onNavigate('/mainList');
            }
          });
      })
      .catch(() => {
        alert('Você não conectou com o Google, tente novamente');
      });
  });

  rootElement.querySelector('#button-create-account').addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/register');
  });

  return rootElement;
};

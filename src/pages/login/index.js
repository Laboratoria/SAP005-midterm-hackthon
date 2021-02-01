import { signIn, signInGoogle, checkLogin } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const Login = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <h>Hello Word!</h>
    <div class='container'>
      <div>
        <form class='container-login'>          
          <input type='email' class='input-login' id='e-mail' placeholder ='E-mail'/>
          <input type='password' class='input-login' id='my-password' placeholder='Senha'/>    
          <button type='submit' class='button-login' id='button-login'>Entrar</button>
          <button type='submit' class='button-create-account' id='button-create-account'>Criar Conta</button>
          <button class='button-google' id='button-google'><img id='img-google' src='images/google.png' alt='img-google'></button>
          <label class='google' >Entrar com o Google</label>
          <script type='module' src='./register/index.js'></script>
        </form>
      </div>
    </div>
  `;
  rootElement.querySelector('#button-login').addEventListener('click', (e) => {
    const email = rootElement.querySelector('#e-mail').value;
    const password = rootElement.querySelector('#my-password').value;
    e.preventDefault();
    return signIn(email, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        checkLogin(user);
        onNavigate('/mainList');
        alert('Login realizado com sucesso');
      })
      .catch(() => {
        alert('Email e/ou senha incorretos');
        onNavigate('/');
      });
  });

  rootElement.querySelector('#button-google').addEventListener('click', (e) => {
    e.preventDefault();
    return signInGoogle()
      .then(() => {
        const user = firebase.auth().currentUser;
        checkLogin(user);
        onNavigate('/mainList');
        alert('Login realizado com sucesso');
      })
      .catch(() => {
        alert('Você não conectou com o Google, tente novamente');
        onNavigate('/');
      });
  });

  rootElement
    .querySelector('#button-create-account')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/register');
    });

  return rootElement;
};

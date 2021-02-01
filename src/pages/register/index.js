import { signUp, saveUser } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const Register = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <form class='container-register'>
      <h1 class='paragrafe'>Crie sua conta</h1>
      <input type='email' class='input-register' id ='email' placeholder ='E-mail'/>
      <input type='password' class='input-register' id='password' placeholder='Senha'/>
      <input type='password' class='input-register' id='password-confirm' placeholder='Confirmar senha'/>
      <p class='instruction'>A senha deve ter no mínimo 6 dígitos</p>
      <button type='submit' class='button-register' id='button-register'>Registrar-se</button>
    </form>
  `;

  rootElement.querySelector('#button-register').addEventListener('click', (e) => {
    const email = rootElement.querySelector('#email').value;
    const password = rootElement.querySelector('#password').value;
    e.preventDefault();
    signUp(email, password)
      .then((userUpdate) => {
        saveUser(userUpdate.user, email);
        alert('Conta criada com sucesso');
        onNavigate('/mainList');
      })
      .catch(() => {
        alert('Falha ao realizar o cadastro');
      });
  });
  return rootElement;
};
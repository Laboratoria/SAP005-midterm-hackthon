import { creatingAccountWithEmail } from '../../services/index.js'
import { onNavigate } from '../../utils/history.js'

export const Register = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <div id='logo-register'><img src='/img/logo.cc.transparente.png'></div>
        <h1>We love short films <3</h1>
        <form>
          <p>Name:</p>
          <input id='username' type='text' placeholder='Name' requiered><br>
          <p>Last Name:</p>
          <input id='lastname-user' type='text' placeholder='Last Name' required><br>
          <p>E-mail:</p>
          <input id='email-user' type='email' placeholder='Input e-mail' required><br>
          <p>Password:</p>
          <input id='password-user' type='password' placeholder='Password' required><br>
          <p>Confirm Password :</p>
          <input id='confirm-password' type='password' placeholder='Confirm Password' required><br>
          <button id='submit-data' type='submit'>SIGN UP</button>
      </form>`;

  const registerAccount = rootElement.querySelector('#submit-data');
  registerAccount.addEventListener('click', (evt) =>{
    evt.preventDefault();
    const username = rootElement.querySelector('#username').value;
    const lastname = rootElement.querySelector('#lastname-user').value;
    const email = rootElement.querySelector('#email-user').value;
    const password = rootElement.querySelector('#password-user').value;
    const confirmPassword = rootElement.querySelector('#confirm-password').value;

    if (email == '') {
      // eslint-disable-next-line no-alert
      alert('Oops, you need to fill in your e-mail to continue with the registration.');
    } else {
      creatingAccountWithEmail(username, email, password);
      onNavigate('/home');
    }
  });
  return rootElement;
};
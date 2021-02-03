import { creatingAccountWithEmail } from '../../services/index.js'
import { onNavigate } from '../../utils/history.js'

export const Register = () => {
  const rootElement = document.createElement('div');
  rootElement.classList.add('container-register');
  rootElement.innerHTML = `
    <div id='logo-register'><img src='/img/logo.cc.transparente.png'></div>
      <div id='title-register'> 
         <p> We love <span style="color: #BF2604;">short films</span>
          <span class="material-icons" style="color: #BF2604;">
            favorite_border
          </span>
        </p>
      </div>
    <div id='inputs-register'> 
      <form >
        <label for='username'>Name:</label><br>
        <input id='username' class='new-user' type='text' placeholder='Name' requiered><br>
        <label for='lastname-user'>Last Name:</label><br>
        <input id='lastname-user' class='new-user' type='text' placeholder='Last Name' required><br>
        <label for='email-user'>E-mail:</label><br>
        <input id='email-user' class='new-user' type='email' placeholder='Input e-mail' required><br>
        <label for='password'>Password:</label><br>
        <input id='password-user' class='new-user' type='password' placeholder='Password' required><br>
        <label for='confirm-password'>Confirm Password:</label><br>
        <input id='confirm-password' class='new-user' type='password' placeholder='Confirm Password' required><br>
        <button id='submit-data'>SIGN UP</button>
      </form>
    </div>`;

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

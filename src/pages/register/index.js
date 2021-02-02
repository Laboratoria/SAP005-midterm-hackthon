import { signUp, saveUser } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

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
        <button type='submit' class='button' id='button-register'>Registrar-se</button>
        <p class='infoText marginText'>Ao cadastre-se você concorda com nossos termos de uso.</p>
      </form>
    </div>
  </div>
  `;
  let db = firebase.firestore();
 

  rootElement.querySelector('#button-register').addEventListener('click', (e) => {
    const email = rootElement.querySelector('#email').value;
    const password = rootElement.querySelector('#password').value;
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        const userId = firebase.auth().currentUser.uid
        console.log(userId)
        db.collection("users").doc(userId).set({
          email: email,
          id: userId,          
          listToWatch:[],
          listwatched:[]
       })
        
        alert('Conta criada com sucesso');
        onNavigate('/allmovies');
      })
      .catch(() => {
        alert('Falha ao realizar o cadastro');
      });
  });
  return rootElement;
};

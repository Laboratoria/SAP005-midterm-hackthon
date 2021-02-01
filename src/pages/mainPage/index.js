import { onNavigate } from '../../utils/history.js';

export const MainPage = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <div class='slider'>
        <figure>
          <img src='images/Cinelist.bg.png'>
        </figure>
        <div class='banner'>
          <img src='images/Cinelist.png'>
          <h1 class='textbanner colorText'>faça listas comentadas de filmes que já assistiu e que deseja assistir</h1>
          <p class='textbanner colorText'>acesse onde quiser. <br> atualize quando quiser.</p>
          <p class='colorText sizeText'>Pronto para ter seus filmes sempre a mão?</p>
          <button id='login' class='button'> Entrar </button><br>
        </div>
      </div>  
  `;

  const bottunLogin = rootElement.querySelector('#login');

  bottunLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  return rootElement;
};

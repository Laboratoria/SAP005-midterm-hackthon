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
          <h1 class='text-banner-title'>faça listas comentadas de filmes que já assistiu e que deseja assistir</h1>
          <p class='text-banner-main'>acesse onde quiser. <br> atualize quando quiser.</p>
          <p class='text-banner'>Pronto para ter seus filmes sempre a mão?</p>
          <button id='login' class='button-start'> Entrar </button><br>
        </div>
      </div>  
  `;

  const bottunLogin = rootElement.querySelector('#login');

  bottunLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  return rootElement;
};

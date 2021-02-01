import { onNavigate } from '../../utils/history.js';

export const MenuList = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <div class='menuListas'> 
      <div class='lista slider'>
        <figure>
          <img src='images/Cinelist.bg.png'>
        </figure>
        <div class='position'>
          <p class='textbanner colorText'>FAÇA LISTAS COMENTADAS DE FILMES QUE JÁ ASSISTIU E SAIBA SEMPRE QUAIS FILMES MAIS TE AGRADAM.</p>
          <button id='btnWatchList' class='button'>VER FILMES ASSISTIDOS</button>
        </div>
      </div>
      <div class='lista slider'>
        <figure>
          <img src='images/Cinelist.bg.png'>
        </figure>
        <div class='position'> 
          <p class='textbanner colorText'>FAÇA LISTAS COMENTADAS DE FILMES QUE JÁ ASSISTIU E SAIBA SEMPRE QUAIS FILMES MAIS TE AGRADAM.</p>
          <button id='btnToWatchList' class='button'>VER FILMES PARA ASSISTIR</button>
        </div>
      </div>
    </div> 
  `;
  const btnWatchList = rootElement.querySelector('#btnWatchList');
  const btnToWatchList = rootElement.querySelector('#btnToWatchList');

  btnWatchList.addEventListener('click', () => {
    onNavigate('/watchList');
  });

  btnToWatchList.addEventListener('click', () => {
    onNavigate('/toWatchList');
  });

  return rootElement;
};

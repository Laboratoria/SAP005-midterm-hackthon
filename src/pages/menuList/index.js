import { onNavigate } from '../../utils/history.js';
import { Navigation } from '../../components/navigation.js';

export const MenuList = () => {
  const nav = Navigation();
  const rootElement = document.createElement('div');

  rootElement.appendChild(nav);

  const contentElement = () => {
    const boxElement = document.createElement('div');
    boxElement.innerHTML = `
    <div class='menuListas'> 
      <div class='lista slider'>
        <figure>
          <img src='images/Cinelist.bg.png'>
        </figure>
        <div class='menu-position'>
          <p class='text-watched'>FAÇA UMA LISTA COMENTADA DE FILMES QUE JÁ ASSISTIU E SAIBA SEMPRE QUAIS FILMES MAIS TE AGRADAM.</p>
          <button id='btnWatchList' class='btnWatchList'>VER FILMES ASSISTIDOS</button>
        </div>
      </div>
      <div class='lista slider'>
        <figure>
          <img class = "background-menuList" src='images/Cinelist.bg.png'>
        </figure>
        <div class='menu-position'> 
          <p class='text-toWatch'>FAÇA UMA LISTA DE FILMES QUE DESEJA ASSISTIR E SAIBA SEMPRE QUAIS FILMES ESCOLHER.</p>
          <button id='btnToWatchList' class='btnToWatchList'>VER FILMES PARA ASSISTIR</button>
        </div>
      </div>
    </div> 
  `;
    return boxElement;
  };
  rootElement.appendChild(contentElement());

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

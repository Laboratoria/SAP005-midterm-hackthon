//import { logOut, getCurrentUser } from '../services/index.js';
//import { onNavigate } from '../../utils/history.js';

export const createMenu = () => {
  //const user = getCurrentUser();
  const footerContainer = document.createElement('footer');
  footerContainer.innerHTML = `
    <nav class="menu">
        <button id="home" class="button-icon-feed">
            <span class="material-icons">home</span>
        </button>

        <button id="favorites" class="button-icon-feed">
            <span class="material-icons">favorite</span>
        </button>

        <button id="watchlist" class="button-icon-feed">
            <span class="material-icons">bookmark</span>
        </button>
        
        <button id="discarded" class="button-icon-feed">
            <span class="material-icons">delete</span>
        </button>

        <button id="logout" class="button-icon-feed">
            <span class="material-icons">logout</span>
        </button>
    </nav>
  `;

  const homeButton = footerContainer.querySelector('#home');
  homeButton.addEventListener('click', sendHome);

  const favoritesButton = footerContainer.querySelector('#favorites');
  favoritesButton.addEventListener('click', sendFavorites);

  const watchListButton = footerContainer.querySelector('#watchlist');
  watchListButton.addEventListener('click', sendWatchList);

  const discardedButton = footerContainer.querySelector('#discarded');
  discardedButton.addEventListener('click', sendDiscarded);
  
  const logOutButton = footerContainer.querySelector('#logout');
  logOutButton.addEventListener('click', sendLogOut);

  return footerContainer;
};

const sendHome = () => {
    onNavigate('/');
};

const sendFavorites = () => {
  console.log("criar página de favoritos")
};

const sendWatchList = () => {
  console.log("criar lista de filmes pra ver")
};

const sendDiscarded = () => {
  console.log("criar página de filmes que não quero ver")
};

const sendLogOut = () => {
  console.log("logout")
/*  logOut()
    .then(() => {
      onNavigate('/');
    });
*/    
};




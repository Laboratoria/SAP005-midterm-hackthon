//import { logOut } from '../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const createMenu = () => {
  const footerContainer = document.createElement('footer');
  footerContainer.innerHTML = `
    <nav class="menu">
        <button id="home" class="button-menu">
            <span class="material-icons">home</span>
        </button>

        <button id="favorites" class="button-menu">
            <span class="material-icons">favorite</span>
        </button>

        <button id="watchlist" class="button-menu">
            <span class="material-icons">bookmark</span>
        </button>
        
        <button id="discarded" class="button-menu">
            <span class="material-icons">delete</span>
        </button>

        <button id="logout" class="button-menu">
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
    onNavigate('/home');
};

const sendFavorites = () => {
  onNavigate('/favorites');
};

const sendWatchList = () => {
  onNavigate('/watchlist');
};

const sendDiscarded = () => {
  onNavigate('/watchlist');
};

const sendLogOut = () => {
  console.log("logout")
/*  logOut()
    .then(() => {
      onNavigate('/');
    });
*/    
};

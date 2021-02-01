import { Login } from './pages/login/index.js';
import { Register } from './pages/register/index.js';
import { MainPage } from './pages/mainPage/index.js';
import { allMovies } from './pages/mainList/index.js';
import { } from './pages/menuList/index.js';
import { ToWatchList } from './pages/toWatchList/index.js';
import { WatchList } from './pages/watchList/index.js';
import { onNavigate } from './utils/history.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/': MainPage,
    '/login': Login,
    '/register': Register,
    '/allMovies': allMovies,
    '/allMovies': allMovies,
    '/watchList': WatchList,
    '/toWatchList': ToWatchList,
  };

  rootDiv.innerHTML = '';

  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);

window.addEventListener('load', () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      onNavigate('/mainList');
    } else {
      onNavigate('/');
    }
  });
});

/* window.addEventListener('load', () => {
  document
    .getElementById('mainPage')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/');
    });
  document
    .getElementById('login')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/login');
    });
  document
    .getElementById('register')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/register');
    });
  document
    .getElementById('allMovies')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/allMovies');
    });
  document
    .getElementById('allMovies')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/allMovies');
    });
  document
    .getElementById('watchList')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/watchList');
    });
  document
    .getElementById('toWatchList')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/toWatchList');
    });
  routeRender();
}); */

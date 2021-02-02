import { Main } from './pages/main/index.js';
import { Home } from './pages/home/index.js';
import { Login } from './pages/login/index.js';
import { Register } from './pages/register/index.js';
import { Favorites } from './pages/likes/index.js'
import { WatchList } from './pages/watchlist/index.js'
import { onNavigate } from './utils/history.js';
import { DiscardedList } from './pages/discarded/index.js';
import { filterGenre, filterImdb, filterYear, filterRuntime } from './pages/home/index.js';
//import { verifyUserLogged } from './services/index.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/': Main,
    '/login': Login,
    '/register': Register,
    '/home': Home,
    '/favorites': Favorites,
    '/watchlist': WatchList, 
    '/discardedlist': DiscardedList
  };

  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
  document
    .getElementById('main')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/')
    });
  document
    .getElementById('login')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/login')
    });
  document
    .getElementById('register')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/register')
    });
  document
    .getElementById('home')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/home')
      filterGenre();
      filterImdb();
      filterYear();
      filterRuntime();
    });    
  document
    .getElementById('favorites')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/favorites')
    });
  document
    .getElementById('watch')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/watchlist')
    });
  document
    .getElementById('deleted')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/discardedlist')
    });    

  routeRender();
});

// ROTA PARA NÃO DEIXAR O USUÁRIO NÃO LOGADO ACESSAR A PÁGINA "HOME" REDIRECIONA PRA PÁGINA PRINCIPAL SEM USUÁRIO LOGADO
//DESCOMENTAR MAIS PRA FRENTE NO PROJETO E LEMBRAR DE DESCOMENTAR A FUNÇÃO DO FIREBASE
/*
const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/': Main,
    '/login': Login,
    '/register': Register,
    '/home': Home,
    '/favorites': Favorites,
    '/watchlist': WatchList, 
    '/discardedlist': DiscardedList
  };
  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', (e) => {
  e.preventDefault();
  verifyUserLogged((user) => {
    if (user) {
      onNavigate('/home');
    } else {
      onNavigate('/');
    }
  });
});
routeRender();
*/

import { Home } from './pages/home/index.js';
import { Login } from './pages/login/index.js';
import { Register } from './pages/register/index.js';
import { Favorites } from './pages/likes/index.js'
import { WatchList } from './pages/watchlist/index.js'
import { DiscardedList } from './pages/discarded/index.js';

const root = document.querySelector('#root');
const auth = firebase.auth();

const routes = {
  '/': Login,
  '/register': Register,
  '/home': Home,
  '/favorites': Favorites,
  '/watchlist': WatchList, 
  '/discardedlist': DiscardedList
};

const renderRoute = () => {
  auth.onAuthStateChanged((user) => {
    console.log(user);
    let path = window.location.pathname;
    console.log(path);
    if (!user && path !== '/register') {
      path = '/';
      window.history.replaceState(null, null, path);
    }
    if (user && (path === '/' || path === '/register')) {
      path = '/home';
      window.history.replaceState(null, null, path);
    }
    root.innerHTML = '';
    root.appendChild(routes[path]());
  });
};

window.addEventListener('popstate', () => renderRoute());
window.addEventListener('load', () => renderRoute());

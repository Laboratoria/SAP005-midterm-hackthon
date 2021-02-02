import { Login } from './pages/login/index.js';
import { Register } from './pages/register/index.js';
import { MainPage } from './pages/mainPage/index.js';
import { MainList } from './pages/mainList/index.js';
import { MenuList } from './pages/menuList/index.js';
import { ToWatchList } from './pages/toWatchList/index.js';
import { WatchList } from './pages/watchList/index.js';
import { onNavigate } from './utils/history.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/': MainPage,
    '/login': Login,
    '/register': Register,
    '/mainList': MainList,
    '/menuList': MenuList,
    '/watchList': WatchList,
    '/toWatchList': ToWatchList,
  };

  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
  
  routeRender();
});

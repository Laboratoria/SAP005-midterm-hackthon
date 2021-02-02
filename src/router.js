// Este é seu ponto de entrada da sua aplicação
import { Home } from './Pages/Home/index.js';
import { Search } from './Pages/Search/index.js';
import { onNavigate } from './utils/history.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/' : Home,
    '/search': Search,

  };

  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
  document
    .getElementById('logo')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/')
    });

    document
    .getElementById('search')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/search')
    });

    routeRender();
  });
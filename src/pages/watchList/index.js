import { signOut } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const WatchList = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <header>
        <nav class="nav-watchList">
          <div class="menu-bar">
            <img class="logo-header" src="images/Cinelist.png" alt="Logo CineList"/>
            <a class="menu-list" href="/menuList" id="menu-list">Listas</a>
          </div>
          <button type="submit" class="button" id="sign-out">SAIR</button>
        </nav>
      </header>
      <div class="backgroundPoster" id="">
        <img class="poster" src="" alt="Capa do filme ..."/>
        </div>
      </div>
    `;
  const logoutButton = rootElement.querySelector('#sign-out');
  logoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    signOut()
      .then(() => {
        onNavigate('/');
      });
  });

  return rootElement;
};

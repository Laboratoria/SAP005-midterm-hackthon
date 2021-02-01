import { signOut } from "../../services/index.js";

export const WatchList = () => {
  const rootElement = document.createElement('header');
  rootElement.innerHTML = `
      <nav>
        <img class="logo-header" src="../images/logo-cinelist.png" alt="Logo CineList"/>
        <a href="/menuList" id="menu-list">Listas</a>
        <button type="submit" id="sign-out">SAIR</button>
      </nav>
    `;
  const logoutButton = rootElement.querySelector("#sign-out");
  logoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    signOut();
  })
 return rootElement;
};
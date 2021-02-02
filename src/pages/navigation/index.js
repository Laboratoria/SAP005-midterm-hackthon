import {
    onNavigate
} from '../../utils/history.js';
import { signOut } from '../../services/index.js';
export const Navigation = () => {
    const navigation = document.createElement('nav');
    navigation.classList.add('navigation')
    navigation.innerHTML = `
    <nav class="nav-watchList">
    <div class="menu-bar">
      <img class="logo-header" src="images/Cinelist.png" alt="Logo CineList"/>
      <p id="lista" class="colorText">Filmes</p>
      <p id="menulista" class="colorText">Listas</p>
    </div>
    <button type="submit" class="button" id="sign-out">SAIR</button>
  </nav>
    `;
    const lista = navigation.querySelector('#lista');
    const menuLista = navigation.querySelector('#menulista');

    lista.addEventListener('click', () => {
        onNavigate('/mainList');
    });

    menuLista.addEventListener('click', () => {
        onNavigate('/menuList');
    });

    const logoutButton = navigation.querySelector('#sign-out');
    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        signOut()
            .then(() => {
                onNavigate('/');
            });
    });

    return navigation;
};
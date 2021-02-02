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
      <ul class="menu-list">
         <li id="lista" class="colorText">Filmes</li>
         <li id="menulista" class="colorText">  Listas</li>
      </ul>  
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
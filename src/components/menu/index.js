//import { logOut, getCurrentUser } from '../services/index.js';
//import { onNavigate } from '../../utils/history.js';

export const createMenu = () => {
  //const user = getCurrentUser();
  const footerContainer = document.createElement('footer');
  footerContainer.innerHTML = `
    <nav class="menu">
        <button id="home" class="button-icon-feed"><img src="../../img/logout.png" height="35px" width="35px"></button>
        <button id="favorites" class="button-icon-feed"><img src="../../img/logout.png" height="35px" width="35px"></button>
        <button id="watchlist" class="button-icon-feed"><img src="../../img/logout.png" height="35px" width="35px"></button>
        <button id="discarded" class="button-icon-feed"><img src="../../img/logout.png" height="35px" width="35px"></button>
        <button id="logout" class="button-icon-feed"><img src="../../img/logout.png" height="35px" width="35px"></button>
    </nav>
  `;

  //const logOutButton = footerContainer.querySelector('#logout');
  //logOutButton.addEventListener('click', sendLogOut);

  return footerContainer;
};

/*
const sendLogOut = () => {
  logOut()
    .then(() => {
      onNavigate('/');
    });
};
*/

import {
  films
} from '../../pages/home/mock.js'
import {
  printFilms,
  showSerchResult
} from '../../pages/home/index.js'

export const header = () => {
  const topHeader = document.createElement('header');
  topHeader.classList.add('header-container');
  let userName = firebase.auth().currentUser.displayName;

  topHeader.innerHTML = `
    <div class="header-body">
      <img class="logo-header" src='../../img/logo.cc.transparente.png' alt="Logo Curta Curtas"/>
      <input type="text" id="search" placeholder="Search by title or director" class="search-title-director">
      <span class="material-icons icon-search">
        search
      </span>
      <p class="header-user">${userName}</p>
      <span class="material-icons icon-heart">
        favorite_border
      </span>
      <button type="button" class="btn-login">SIGN IN</button>
      <button type="button" class="btn-register">SIGN UP</button>
    </div>
  `;

  topHeader.querySelector('#search')
    .addEventListener('keyup', () => {
      const nameSearch = "";
      const searchValue = topHeader.querySelector('#search').value;
      searchForName(films, searchValue)
    });

  function searchForName(data, condicao) {
    const dataTest = data.filter(search => search.title.toUpperCase().includes(condicao.toUpperCase()));
    getMoviesFilter(dataTest)

  };
  const getMoviesFilter = (data) => {
    // eslint-disable-next-line no-restricted-syntax
    const getCatalogueSection = document.querySelector('#catalogue');
    for (const i of data) {

      fetch(`http://www.omdbapi.com/?t=${i.title}&apikey=ce12da02`)
        .then((response) => response.json())
        .then((json) => {
          getCatalogueSection.innerHTML= ''
          getCatalogueSection.appendChild((printFilms(json)));
        });
    };

  };

  const btnLogin = topHeader.querySelector('.btn-login');
  const btnRegister = topHeader.querySelector('.btn-register');
  const greetingUser = topHeader.querySelector('.header-user');
  const iconHeart = topHeader.querySelector('.icon-heart');

  const path = window.location.pathname;
  if (path === '/home') {
    btnLogin.classList.add('hidden');
    btnRegister.classList.add('hidden');
  } else if (path === '/') {
    btnLogin.classList.remove('hidden');
    btnRegister.classList.remove('hidden');
    greetingUser.classList.add('hidden');
    iconHeart.classList.add('hidden');
  }
  return topHeader;
};

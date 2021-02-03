//import { header } from '../../components/header/index.js';
import { createMenu } from '../../components/menu/index.js';
import { films } from '../home/mock.js';

export const Favorites = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <section class="lists">
      <section id="header"></section>
      <section class="body-container">
        <h4 class="list-name">My favorites <span class="material-icons">favorite</span></h4>
        <section id="my-favorites" class="lists"></section>
      </section>
      <section id="menu"></section>
    </section>
    `;


  const getMenuSection = rootElement.querySelector('#menu');
  getMenuSection.appendChild(createMenu());

    const getListSection = rootElement.querySelector('#my-favorites');      
    getFilms(getListSection);

    return rootElement;
  };

  const getFilms = (section) => {
    const currentUserId = firebase.auth().currentUser.uid;
    firebase.firestore().collection('users').doc(currentUserId).get().then((films) => {
      for (const film of Object.entries(films.data().likes)) {
        section.appendChild(createCards(film[1]));
      }
    })
  };

  function createCards(film) {
    const cardsContainer = document.createElement('section');
    cardsContainer.innerHTML += `
    <section class="card-list">
        <p class="title-list">${film.title_film.toUpperCase()}</p>
        <img class="poster-list" src="${film.poster_film}">
    </section>    
    `
    return cardsContainer;
  }

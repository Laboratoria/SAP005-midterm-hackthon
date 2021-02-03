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

    //const getHeaderSection = rootElement.querySelector('#header');
    //getHeaderSection.appendChild(header());

    const getListSection = rootElement.querySelector('#my-favorites');      
    getFilms(getListSection);

    return rootElement;
  };

  const getFilms = async (section) => {
    for (const i of films) {
       await fetch(`http://www.omdbapi.com/?t=${i.title}&apikey=ce12da02`)
            .then((response) => response.json())
            .then((json) => {
                section.appendChild(createCards(json));
            });
    }
  };

  function createCards(json) {
    const cardsContainer = document.createElement('section');
    cardsContainer.innerHTML += `
    <section class="card-list">
        <p class="title-list">${json.Title.toUpperCase()}</p>
        <img class="poster-list" src="${json.Poster}">
    </section>    
    `
    return cardsContainer;
  }
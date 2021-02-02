import { header } from '../../components/header/index.js';
import { createMenu } from '../../components/menu/index.js';
import { films } from '../home/mock.js'

export const WatchList = () => {
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
    <section class="lists">
      <section id="header"></section>
      <section id="my-watch-list" class="lists"></section>
      <section id="menu"></section>
    </section>
    `;

    const getMenuSection = rootElement.querySelector('#menu');
    getMenuSection.appendChild(createMenu());

    const getHeaderSection = rootElement.querySelector('#header');
    getHeaderSection.appendChild(header());

    return rootElement;
  };


  const getFilms = () => {
    for (const i of films) {
        fetch(`http://www.omdbapi.com/?t=${i.title}&apikey=ce12da02`)
            .then((response) => response.json())
            .then((json) => {
                const getContainer = document.querySelector('#my-watch-list');
                getContainer.appendChild(createCards(json));
                createCards(json)
            });
    }        
  };
  getFilms();

  function createCards(json) {
    const cardsContainer = document.createElement('section');
    cardsContainer.innerHTML += `
    <p class="title">${json.Title}</p>
    <img class="image" src="${json.Poster}">
    `
    return cardsContainer
  }
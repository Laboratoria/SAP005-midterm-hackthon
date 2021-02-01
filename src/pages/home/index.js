/* eslint-disable no-console */
import { films } from './mock.js';
import { createMenu } from '../../components/menu/index.js'

export const Home = () => {

  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <section class="main-page">
    <section id="header"></section>
    <section id="catalogue"></section>
    <section id="menu"></section>
  </section>
`;
  
const getAllFilms = () => {
  for (const i of films) {
    getFilms(i);
  }
}
getAllFilms();

const getMenuSection = rootElement.querySelector('#menu');
  getMenuSection.appendChild(createMenu());

  return rootElement;
};

const getFilms = (i) => {
  fetch(`http://www.omdbapi.com/?t=${i.title}&apikey=ce12da02`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      const getCatalogueSection = document.querySelector('#catalogue');
      getCatalogueSection.appendChild(printFilms(json));
      printFilms(json);
    })
}

const printFilms = (json) => {
  const filmsContainer = document.createElement('section');
  filmsContainer.classList.add('films-container')
  filmsContainer.innerHTML += `
    <section class="movie-box">
      <p class="title">${json.Title}</p>
        <img class="image" src="${json.Poster}">
    </section>
   `
   return filmsContainer;
}

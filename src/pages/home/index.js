/* eslint-disable no-console */
import { films } from './mock.js';
import { createMenu } from '../../components/menu/index.js';

const printFilms = (json) => {
  const filmsContainer = document.createElement('section');
  filmsContainer.innerHTML += `
    <section class="movie-box">
      <section class="carousel-container">
        <p>${json.Title}</p>
        <img class="image" src="${json.Poster}">
      <section> 
      <section class="details">
        <p>Awards: ${json.Awards}</p>
        <p>Plot: ${json.Plot}</p>
        <p>Genre: ${json.Genre}</p>
        <p>Director: ${json.Director}</p>
        <p>Year: ${json.Year}</p>
        <p>IMDb Rating: ${json.imdbRating}</p>
        <p>Runtime: ${json.Runtime}</p>
      </section>
    </section> `;

  return filmsContainer;
};

const getFilms = (i) => {
  fetch(`http://www.omdbapi.com/?t=${i.title}&apikey=ce12da02`)
    .then((response) => response.json())
    .then((json) => {
      // console.log(json);
      const getCatalogueSection = document.querySelector('#catalogue');
      getCatalogueSection.appendChild(printFilms(json));

      printFilms(json);
    });
};

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
  // shorterFilms(i) ATIVAR DEPOIS DE CRIAR OS BOTOES
  // newFilms(i)
  // imdbFilms(i)
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
      //console.log(json)
      const getCatalogueSection = document.querySelector('#catalogue');
      getCatalogueSection.appendChild(printFilms(json));
      printFilms(json);
    })
}

const printFilms = (json) => {
  const filmsContainer = document.createElement('section');
  filmsContainer.classList.add('films-container')
  filmsContainer.innerHTML += `
    <section id="box-${json.imdbID}" class="movie-box">
      <p class="title">${json.Title}</p>
        <img class="image" src="${json.Poster}">
        <button id="info-${json.imdbID}" class="info">info</button>
    </section>
    <section class="info-container"></section>
   `
   const allInfo = document.querySelectorAll('.info')
   //console.log(allInfo)

   allInfo.forEach((button) => {
    button.addEventListener('click', (e) => {
      const idFilm = e.target.parentNode.parentNode.parentNode
      console.log(idFilm)
      fetch(`http://www.omdbapi.com/?i=${idFilm}&apikey=ce12da02`)
     .then(response => response.json())
     .then(json =>  { //console.log(json)

       document.querySelector('.info-container').innerHTML =
       `
        <div class="details"> 
          <p>Awards: ${json.Awards}</p>
          <p>Plot: ${json.Plot}</p>
          <p>Genre: ${json.Genre}</p>
          <p>Director: ${json.Director}</p>
          <p>Year: ${json.Year}</p>
          <p>IMDb Rating: ${json.imdbRating}</p>
          <p>Runtime: ${json.Runtime}</p>
          </div>
        `
     })
    })
  })
   return filmsContainer
   function imdbFilms(i) {

      fetch(`http://www.omdbapi.com/?t=${i.title}&apikey=ce12da02`)
                  .then(response => response.json())
                  .then(json =>  { console.log(json)

                        if(json.imdbRating > 7.5 ){

                         listArea.innerHTML += ` 
                         <div class="movie-box">
                           <img src="${json.Poster}">
                           <p>${json.Title}</p>
                           <p>Awards: ${json.Awards}</p>
                           <p>Plot: ${json.Plot}</p>
                           <p>Genre: ${json.Genre}</p>
                           <p>Director: ${json.Director}</p>
                           <p>Year: ${json.Year}</p>
                           <p>IMDb Rating: ${json.imdbRating}</p>
                           <p>Runtime: ${json.Runtime}</p>
                         </div>
                           `  
                        }
                     })
   }

   //FUNÇÃO FILMES MAIS CURTOS:

   function shorterFilms(i) {

      fetch(`http://www.omdbapi.com/?t=${i.title}&apikey=ce12da02`)
                  .then(response => response.json())
                  .then(json =>  { console.log(json)

                     for(let x = 0; x < 11; x++){
                        if(json.Runtime ==  `${x} min`){

                         listArea.innerHTML += ` 
                         <div class="movie-box">
                           <img src="${json.Poster}">
                           <p>${json.Title}</p>
                           <p>Awards: ${json.Awards}</p>
                           <p>Plot: ${json.Plot}</p>
                           <p>Genre: ${json.Genre}</p>
                           <p>Director: ${json.Director}</p>
                           <p>Year: ${json.Year}</p>
                           <p>IMDb Rating: ${json.imdbRating}</p>
                           <p>Runtime: ${json.Runtime}</p>
                         </div>
                           `  
                        } 
                     }
                  })
   }
 
   //FUNÇÃO MAIS RECENTES:

   function newFilms(i) {

      fetch(`http://www.omdbapi.com/?t=${i.title}&apikey=ce12da02`)
                  .then(response => response.json())
                  .then(json =>  { console.log(json)

                        if(json.Year >= '2015'){

                         listArea.innerHTML += ` 
                         <div class="movie-box">
                           <img src="${json.Poster}">
                           <p>${json.Title}</p>
                           <p>Awards: ${json.Awards}</p>
                           <p>Plot: ${json.Plot}</p>
                           <p>Genre: ${json.Genre}</p>
                           <p>Director: ${json.Director}</p>
                           <p>Year: ${json.Year}</p>
                           <p>IMDb Rating: ${json.imdbRating}</p>
                           <p>Runtime: ${json.Runtime}</p>
                         </div>
                           `  
                        } 
                  })
   }
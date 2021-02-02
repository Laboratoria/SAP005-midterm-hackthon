/* eslint-disable no-console */
import { films } from './mock.js';
import { createMenu } from '../../components/menu/index.js';


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
    <section id="filters-area">
      <button id="imdb-btn">Melhores Notas no IMDb</button>
      <button id="runtime-btn">Menor tempo de duração</button>
      <button id="news-btn">Mais recentes</button>
    </section>
    <section id="catalogue"></section>
    <section id="info"></section>
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


const printFilms = (json) => {
  const filmsContainer = document.createElement('section');
  filmsContainer.classList.add('films-container')
  filmsContainer.innerHTML += `
    <section data-id="${json.imdbID}" class="movie-box">
      <p class="title">${json.Title}</p>
        <img class="image" src="${json.Poster}">
        <button id="info-${json.imdbID}" class="info">info</button>
    </section>
    <section id="info-details${json.imdbID}"></section>
   `

   const allInfo = document.querySelectorAll('.info')
   allInfo.forEach((button) => {

   button.addEventListener('click', (e) => {
   getMoviesInfos(e)
   })
 })
   return filmsContainer;
}


function getMoviesInfos(e) {
  const idFilm = e.target.parentNode.parentNode.parentNode

  fetch(`http://www.omdbapi.com/?i=${idFilm.dataset.id}&apikey=ce12da02`)
   .then(response => response.json())
   .then(json =>  { //console.log(json)

  const movieContainer = document.querySelector('#info')
  movieContainer.appendChild(showFilmsDetails(json))
 
 })
}

const createDetailsBox = document.createElement('div')

function showFilmsDetails(json) {
 
  createDetailsBox.innerHTML =
  `<section class="info-container">
    <div class="poster-info"><img src="${json.Poster}"> 
    <p><b>${json.Title}</b> <br><br><br>
    IMDb Rating: ${json.imdbRating} <br><br>
    Director: ${json.Director} <br><br>
    Year: ${json.Year}</p>
    </div>
    
      <div class="details"> 
        <p> <b>Plot:</b>  ${json.Plot}</p> <br>
        <p>Genre: ${json.Genre}</p> <br>
        <p>Runtime: ${json.Runtime}</p> <br>
        <p>Awards: ${json.Awards}</p>
      </div>
    </section>
  `
  return createDetailsBox;
}



   function imdbFilms(i) {

      fetch(`http://www.omdbapi.com/?t=${i.title}&apikey=ce12da02`)
                  .then(response => response.json())
                  .then(json =>  { console.log(json)

                        if(json.imdbRating > 7.5 ){

                      document.querySelector('.films-container').innerHTML += ` 
                         <section data-id="${json.imdbID}" class="movie-box">
                            <p class="title">${json.Title}</p>
                             <img class="image" src="${json.Poster}">
                             <button id="info-${json.imdbID}" class="info">info</button>
                         </section>
                         <section id="info-details${json.imdbID}"></section>    
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
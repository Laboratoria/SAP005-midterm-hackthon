/* eslint-disable no-console */
import { films } from './mock.js';
import { createMenu } from '../../components/menu/index.js';
import { header } from '../../components/header/index.js';

const getFilms = (i) => {
  fetch(`http://www.omdbapi.com/?t=${i.title}&apikey=ce12da02`)
    .then((response) => response.json())
    .then((json) => {
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
    // eslint-disable-next-line no-restricted-syntax
    for (const i of films) {
      getFilms(i);
    }
  };
  getAllFilms();

  const getMenuSection = rootElement.querySelector('#menu');
  getMenuSection.appendChild(createMenu());

  const getHeaderSection = rootElement.querySelector('#header');
  getHeaderSection.appendChild(header());
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

    <section id="info-details${json.imdbID}" class="showing">

    <section class"buttons-details">
    <button class="like" id="like-${json.imdbID}">
      <span class="material-icons">thumb_up_alt</span>
    </button>

    <button class="dislike" id="dislike-${json.imdbID}">
      <span class="material-icons">thumb_down_alt</span>
    </button>

    <button class="save" id="save-${json.imdbID}">
      <span class="material-icons">bookmark</span>
    </button>

    <button id="close-container-${json.imdbID}">
      <span class="material-icons">close</span>
    </button>
  </section>


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
    `;

  const allInfo = filmsContainer.querySelectorAll('.info');
  allInfo.forEach((button) => {
    button.addEventListener('click', (e) => {
      showDetailsContainer(e);
    });
  });
  return filmsContainer;
};

function showDetailsContainer(e) {
  const idFilmCard = e.target.parentNode;
  toggleDetailsContainer(idFilmCard, true);

  const likeButton = document.getElementById(`like-${idFilmCard.dataset.id}`);
  likeButton.addEventListener('click', () => {
    console.log("Pegou o click do like")
  })

  const dislikeButton = document.getElementById(`dislike-${idFilmCard.dataset.id}`);
  dislikeButton.addEventListener('click', () => {
    console.log("Pegou o click do dislike")
  })

  const saveMovieButton = document.getElementById(`save-${idFilmCard.dataset.id}`);
  saveMovieButton.addEventListener('click', () => {
    console.log("Pegou o click de salvar")
  })

  //save
  const closeDetailsButton = document.getElementById(`close-container-${idFilmCard.dataset.id}`);
  closeDetailsButton.addEventListener('click', () => {
    toggleDetailsContainer(idFilmCard, false);
  })
}

function toggleDetailsContainer(card, show) {
  const cardFilm = card;
  const holderDetailsContainer = document.querySelector(`#info-details${cardFilm.dataset.id}`)
  if (show) { 
    holderDetailsContainer.classList.add('display');
  } else {
    holderDetailsContainer.classList.remove('display');
  }
}

//  FUNÇÃO MAIS RECENTES:
/*

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

*/
/* eslint-disable no-console */
import { films } from './mock.js';
import { createMenu } from '../../components/menu/index.js';
import { header } from '../../components/header/index.js';
import { createMenuFilter } from '../../components/filter/index.js'

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
    <section id="catalogue" id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </section>
    <section id="filters-area">
      <button id="imdb-btn">Melhores Notas no IMDb</button>
      <button id="runtime-btn">Menor tempo de duração</button>
      <button id="news-btn">Mais recentes</button>
    </section>
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

  const getMenuFilterSection = rootElement.querySelector('#filters-area');
  getMenuFilterSection.appendChild(createMenuFilter());

  return rootElement;
};

const printFilms = (json) => {
  const filmsContainer = document.createElement('section');
  filmsContainer.classList.add('films-container');
  filmsContainer.innerHTML += `
    <section class="carousel-inner" data-id="${json.imdbID}" class="movie-box">
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

  const closeDetailsButton = document.getElementById(`close-container-${idFilmCard.dataset.id}`);
  closeDetailsButton.addEventListener('click', () => {
    toggleDetailsContainer(idFilmCard, false);
  })
}

function toggleDetailsContainer(card, show) {
  const cardFilm = card;
  const holderDetailsContainer = document.querySelector(`#info-details${cardFilm.dataset.id}`)
  if (show) {
    document.querySelector('.showing').classList.remove('display')
    holderDetailsContainer.classList.add('display');
  } else {
    holderDetailsContainer.classList.remove('display');
  }
}

const sortByMostRecent = async () => {
  let dataMovie = []

  for (let item of films) {
    await fetch(`http://www.omdbapi.com/?t=${item.title}&apikey=ce12da02`)
      .then((response) => response.json())
      .then((json) => {
        dataMovie.push(json);
      })
  }
  
  dataMovie.sort(function (a, b) {
    if (+a.Year < +b.Year) return 1;
    if (+a.Year > +b.Year) return -1;
    return 0;
  })
}
sortByMostRecent();


/* eslint-disable no-console */
import { films } from './mock.js';

export const Home = () => {
  const rootElement = document.createElement('div');
  rootElement.classList.add('container-films');

  function getFilms(i) {
    fetch(`http://www.omdbapi.com/?t=${i.title}&apikey=ce12da02`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        rootElement.innerHTML += `  
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
          `;
      });
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const i of films) {
    getFilms(i);
  }
  return rootElement;
};

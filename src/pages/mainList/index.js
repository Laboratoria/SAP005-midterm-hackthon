import { Navigation } from '../../components/navigation.js';
import { saveMovieToWatch, saveMovieWatched } from '../../services/index.js';

export const MainList = () => {
  const nav = Navigation();
  const rootElement = document.createElement('div');

  rootElement.appendChild(nav);

  const contentElement = () => {
    const boxElement = document.createElement('div');
    boxElement.classList.add('bgList');

    let movie = '';

    const allMovies = async () => {
      const fetchMovies = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=5050539d52522a0616ff555db4437bd6&language=pt-BR',
      );
      const list = await fetchMovies.json();
      const showList = list.results;

      await showList.forEach((img) => {
        boxElement.innerHTML = movie += `
        <div class = "backgroundPoster" id = "${img.poster_path}">
          <img class = "poster"  src = "https://image.tmdb.org/t/p/original/${img.poster_path}">
          <div class = "btnAdd">
            <button id ="watched">+ASSISTIDO</button>
            <button id ="toWatch">+ASSISTIR</button>
          </div>
        </div>`;
      });

      const toWatch = document.querySelectorAll('#toWatch');
      toWatch.forEach((button) => {
        button.addEventListener('click', async (e) => {
          e.preventDefault();
          const btnWatched = e.target.parentNode.parentNode.querySelector('#watched');
          const containerFeed = String(e.target.parentNode.parentNode.id);
          saveMovieToWatch(containerFeed);
          button.classList.add('none');
          btnWatched.classList.add('none');
        });
      });

      const watched = document.querySelectorAll('#watched');
      watched.forEach((button) => {
        button.addEventListener('click', async (e) => {
          e.preventDefault();
          const btnToWatch = e.target.parentNode.parentNode.querySelector('#toWatch');
          const containerFeed = String(e.target.parentNode.parentNode.id);
          saveMovieWatched(containerFeed);
          button.classList.add('none');
          btnToWatch.classList.add('none');
        });
      });
    };
    allMovies();
    return boxElement;
  };
  rootElement.appendChild(contentElement());
  return rootElement;
};

import {
  Navigation
} from '/pages/navigation/index.js';
export const MainList = () => {
  const nav = Navigation();
  const rootElement = document.createElement('div');

  rootElement.appendChild(nav);

  const contentElement = () => {
    const boxElement = document.createElement('div');

    const db = firebase.firestore();
    let movie = '';

    const allMovies = async () => {
      const fetchMovies = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=5050539d52522a0616ff555db4437bd6&language=pt-BR',
      );
      const list = await fetchMovies.json();
      const showList = list.results;

      await showList.forEach((img) => {
        boxElement.innerHTML =
          movie += `
        <div class = "backgroundPoster" id = "${img.poster_path}">
          <img class = "poster"  src = "https://image.tmdb.org/t/p/original/${img.poster_path}">
          <div class = "btnAdd">
            <button id ="watched">+ASSISTIDO</button>
            <button id ="toWatch">+ASSISTIR</button>
          </div>
        </div>
      </div>`;
      });

      const toWatch = document.querySelectorAll('#toWatch');
      toWatch.forEach((button) => {
        button.addEventListener('click', async (e) => {
          e.preventDefault();
          const userId = firebase.auth().currentUser.uid;
          const containerFeed = e.target.parentNode.parentNode;
          db.collection('users').doc(userId).update({
            listToWatch: firebase.firestore.FieldValue.arrayUnion(containerFeed.id),
          });
        });
      });

      const watched = document.querySelectorAll('#watched');
      watched.forEach((button) => {
        button.addEventListener('click', async (e) => {
          e.preventDefault();
          const userId = firebase.auth().currentUser.uid;
          const containerFeed = e.target.parentNode.parentNode;
          db.collection('users').doc(userId).update({
            listwatched: firebase.firestore.FieldValue.arrayUnion(containerFeed.id),
          });
        });
      });
    };
    allMovies();

    return boxElement;
  };

  rootElement.appendChild(contentElement())
  return rootElement;
};
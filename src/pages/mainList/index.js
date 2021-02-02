/* eslint-disable no-param-reassign */
import { Navigation } from '../../components/navigation.js';
import { SaveComment } from '../../services/index.js';

export const MainList = () => {
  const nav = Navigation();
  const rootElement = document.createElement('div');

  rootElement.appendChild(nav);

  const contentElement = () => {
    const boxElement = document.createElement('div');
    boxElement.classList.add('bgList');

    const db = firebase.firestore();
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
          <div id='modal' class="open-comments">
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

      const modal = document.querySelector('#modal');
      const watched = document.querySelectorAll('#watched');
      watched.forEach((button) => {
        button.addEventListener('click', async (e) => {
          e.preventDefault();
          modal.classList.remove('none');
          const WriteComment = () => {
            const modalTemplate = `
            <button class="" id="btnClose">&#10006;</button>
            <button class="" id="btnConfirm">Enviar</button>
            <textarea type="text" id="commentText" placeholder="Escreva um comentario sobre "></textarea>
            `;
            modal.innerHTML = modalTemplate;

            const btnConfirm = modal.querySelector('#btnConfirm');
            const comment = modal.querySelector('#commentText');
            const btnClose = modal.querySelector('#btnClose');

            btnClose.addEventListener('click', () => {
              modal.classList.add('none');
            });

            btnConfirm.addEventListener('click', () => {
              SaveComment(comment.value)
                .then(() => {
                  comment.value = '';
                  modal.classList.add('none');
                  const userId = firebase.auth().currentUser.uid;
                  const containerFeed = e.target.parentNode.parentNode;
                  db.collection('users').doc(userId).update({
                    listwatched: firebase.firestore.FieldValue.arrayUnion(containerFeed.id),
                  });
                  button.classList.add('none');
                });
            });
            return modal;
          };
          WriteComment();
        });
      });
    };
    allMovies();
    return boxElement;
  };
  rootElement.appendChild(contentElement());
  return rootElement;
};

import { Navigation } from '../../components/navigation.js';
import { movieDeletWatched } from '../../components/movieDeletWatched.js';

export const WatchList = () => {
  const auth = firebase.auth().currentUser;
  const user = auth.uid;

  const nav = Navigation();
  const rootElement = document.createElement('div');
  rootElement.appendChild(nav);

  let watched = document.createElement('header');
  watched.innerHTML = `<header class = "toWatchHeader">
  <img class = "watched" src = "../../images/assistidos.png" alt = "Assistidos">
  </header>`
  rootElement.appendChild(watched);

  const contentElement = () => {
    const boxElement = document.createElement('div');

    const docRef = firebase.firestore().collection('users').doc(user);

    docRef.get().then((doc) => {
      if (doc.exists) {
        const listwatched = doc.data().listwatched;

        let movie = '';

        listwatched.forEach((listwatched) => {
          boxElement.classList.add('bgList');
          boxElement.innerHTML = movie += `
          <div class = "backgroundPoster" id = "${listwatched}">
            <img class = "poster"  src = "https://image.tmdb.org/t/p/original/${listwatched}">
            <div class = "btnAdd">
              <button id ="delet">Apagar</button>
            </div>
          </div>
        </div>`;
          const buttonDelet = boxElement.querySelectorAll('#delet');
          buttonDelet.forEach((button) => {
            button.addEventListener('click', (e) => {
              const box = e.target.parentNode.parentNode;
              const idMove = box.id;
              const watched = doc.data().listwatched;
              movieDeletWatched(idMove, watched);
              button.classList.add('none');
              box.classList.add('none');
            });
          });
        });
      }
    }).catch((error) => {
      alert('Error getting document:', error);
    });

    return boxElement;
  };
  rootElement.appendChild(contentElement());

  return rootElement;
};

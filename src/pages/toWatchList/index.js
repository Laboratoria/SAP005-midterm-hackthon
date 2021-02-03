import { Navigation } from '../../components/navigation.js';
import { movieDeletToWatch } from '../../components/movieDeletToWatch.js';

export const ToWatchList = () => {
  const auth = firebase.auth().currentUser;
  const user = auth.uid;

  const nav = Navigation();
  const rootElement = document.createElement('div');
  rootElement.appendChild(nav);

  let toWatch = document.createElement('header');
  toWatch.innerHTML = `<header class = "toWatchHeader">
  <img class = "toWatch" src = "../../images/a_assistir.png" alt = "A assistir">
  </header>`
  rootElement.appendChild(toWatch);

  const contentElement = () => {
    const boxElement = document.createElement('div');

    const docRef = firebase.firestore().collection('users').doc(user);

    docRef.get().then((doc) => {
      if (doc.exists) {
        const listToWatch = doc.data().listToWatch;

        let movie = '';

        listToWatch.forEach((listToWatch) => {
          boxElement.classList.add('bgList');
          boxElement.innerHTML = movie += `
          <div class = "backgroundPoster" id = "${listToWatch}">
            <img class = "poster"  src = "https://image.tmdb.org/t/p/original/${listToWatch}">
            <div class = "btnAdd">
              <button id ="delet">Apagar</button>
              <button id ="watched">+ASSISTIDO</button>
            </div>
          </div>`;

          const watched = document.querySelectorAll('#watched');
          watched.forEach((button) => {
            button.addEventListener('click', async (e) => {
              e.preventDefault();
              const db = firebase.firestore();
              const userId = firebase.auth().currentUser.uid;
              const containerFeed = e.target.parentNode.parentNode;
              db.collection('users').doc(userId).update({
                listToWatch: firebase.firestore.FieldValue.arrayRemove(containerFeed.id),
                listwatched: firebase.firestore.FieldValue.arrayUnion(containerFeed.id),
              });
              button.classList.add('none');
              containerFeed.classList.add('none');
            });
          });

          const buttonDelet = boxElement.querySelectorAll('#delet');
          buttonDelet.forEach((button) => {
            button.addEventListener('click', (e) => {
              const box = e.target.parentNode.parentNode;
              const idMove = box.id;
              const towatch = doc.data().listToWatch;
              movieDeletToWatch(idMove, towatch);
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

import { Navigation } from '../../components/navigation.js';

export const ToWatchList = () => {
  const auth = firebase.auth().currentUser;
  const user = auth.uid;

  const nav = Navigation();
  const rootElement = document.createElement('div');

  rootElement.appendChild(nav);

  const contentElement = () => {
    const boxElement = document.createElement('div');

    const docRef = firebase.firestore().collection('users').doc(user);

    docRef.get().then((doc) => {
      if (doc.exists) {
        const listToWatch = doc.data().listToWatch;

        let movie = ''

        listToWatch.forEach((listToWatch) => {
          boxElement.classList.add('bgList')
          boxElement.innerHTML =
            movie += `
          <div class = "backgroundPoster" id = "${listToWatch}">
            <img class = "poster"  src = "https://image.tmdb.org/t/p/original/${listToWatch}">
            <div class = "btnAdd">
              <button id ="delet">Apagar</button>
              <button id ="watched">+ASSISTIDO</button>
            </div>
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
            });
          });

          const buttonDelet = boxElement.querySelectorAll("#delet")
          buttonDelet.forEach((button) => {

            button.addEventListener('click', (e) => {
              const box = e.target.parentNode.parentNode;
              const idMove = box.id
              const towatch = doc.data().listToWatch;
              console.log(idMove, towatch)

              movieDelet(idMove, towatch);

            })
          })



        });
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });

    return boxElement
  }
  rootElement.appendChild(contentElement())

  return rootElement;
};

const movieDelet = (idMove, towatch) => {
  const auth = firebase.auth().currentUser;
  const user = auth.uid;

  const docs = firebase.firestore().collection("users").doc(user)
  if (towatch.includes(idMove)) {
    let indice = towatch.indexOf(idMove);
    while (indice >= 0) {
      towatch.splice(indice, 1);
      indice = towatch.indexOf(idMove);
    }
    docs.update({
      listToWatch : towatch
    })
  }
   console.log(towatch);
}
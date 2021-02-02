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

        const listwatched = doc.data().listwatched;
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
        });
      } else {
        console.log('No such document!');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });

    return boxElement
  }
  rootElement.appendChild(contentElement())

  return rootElement;
};
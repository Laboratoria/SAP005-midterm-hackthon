import { Navigation } from '../../components/navigation/navigation.js';

export const WatchList = () => {
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
  
        listwatched.forEach((listwatched) => {
          boxElement.classList.add('bgList')
          boxElement.innerHTML =
            movie += `
          <div class = "backgroundPoster" id = "${listwatched}">
            <img class = "poster"  src = "https://image.tmdb.org/t/p/original/${listwatched}">
            <div class = "btnAdd">
              <button id ="delet">Apagar</button>
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

    const buttonDelet = boxElement.querySelectorAll("#delet")
    buttonDelet.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.target.parentNode;
        console.log('oi')
      })
    })


    return boxElement
  }
  rootElement.appendChild(contentElement())

  return rootElement;
};

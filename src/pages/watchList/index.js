import { Navigation } from '../../components/navigation/navigation.js';

export const WatchList = () => {
  const auth = firebase.auth().currentUser;
  const user = auth.uid;

  const nav = Navigation();
  const rootElement = document.createElement('div');

  rootElement.appendChild(nav);

  const contentElement = () => {
    const boxElement = document.createElement('div');
    boxElement.innerHTML = `
    <div class = "backgroundPoster" id = "/vRTScutueW9gLF3dSo2Za7o0v7n.jpg">
    <img class = "poster"  src = "https://image.tmdb.org/t/p/original//vRTScutueW9gLF3dSo2Za7o0v7n.jpg">
    <div class = "btnAdd">
      <button id ="">Aapagar</button>
    </div>
  </div>
</div>`;

    const docRef = firebase.firestore().collection('users').doc(user);

    docRef.get().then((doc) => {
      if (doc.exists) {
        console.log(doc.data().listwatched);
        console.log(doc.data().listToWatch);
      } else {
        console.log('No such document!');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });

    return boxElement;
  };
  rootElement.appendChild(contentElement());

  return rootElement;
};

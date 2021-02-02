export const movieDeletWatched = (idMove, watched) => {
  const auth = firebase.auth().currentUser;
  const user = auth.uid;

  const docs = firebase.firestore().collection('users').doc(user);
  if (watched.includes(idMove)) {
    let indice = watched.indexOf(idMove);
    while (indice >= 0) {
      watched.splice(indice, 1);
      indice = watched.indexOf(idMove);
    }
    docs.update({
      listwatched: watched,
    });
  }
};

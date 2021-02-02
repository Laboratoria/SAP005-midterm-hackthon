export const movieDeletToWatch = (idMove, towatch) => {
  const auth = firebase.auth().currentUser;
  const user = auth.uid;

  const docs = firebase.firestore().collection('users').doc(user);
  if (towatch.includes(idMove)) {
    let indice = towatch.indexOf(idMove);
    while (indice >= 0) {
      towatch.splice(indice, 1);
      indice = towatch.indexOf(idMove);
    }
    docs.update({
      listToWatch: towatch,
    });
  }
};

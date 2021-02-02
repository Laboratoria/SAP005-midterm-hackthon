export const saveUser = () => {
  const user = firebase.auth().currentUser;
  return firebase.firestore().collection('users').doc(user.uid).set({
    userId: user.uid,
    email: user.email,
    listToWatch: [],
    listwatched: [],
    listComments: [],
  });
};

export const signUp = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

export const verifyUser = () => firebase.firestore().collection('users')
  .where('email', '==', firebase.auth().currentUser.email).get();

export const signIn = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const signOut = () => firebase.auth().signOut();

export const saveMovieToWatch = (containerFeed) => {
  const user = firebase.auth().currentUser;
  return firebase.firestore().collection('users').doc(user.uid).update({
    listToWatch: firebase.firestore.FieldValue.arrayUnion(containerFeed),
  });
};

export const saveMovieWatched = (containerFeed) => {
  const user = firebase.auth().currentUser;
  return firebase.firestore().collection('users').doc(user.uid).update({
    listwatched: firebase.firestore.FieldValue.arrayUnion(containerFeed),
  });
};

export const saveUser = (user) => firebase.firestore().collection('users').doc(user.email).add({
  userId: user.uid,
  email: user.email,
  listToWatch: [],
  listwatched: [],
});

export const signUp = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

export const signIn = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const signOut = () => firebase.auth().signOut();

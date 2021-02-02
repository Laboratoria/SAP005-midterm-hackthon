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

export const checkLogin = () => firebase.auth().onAuthStateChanged((user) => user);

export const UserInfoUid = () => firebase.auth().currentUser.uid;

export const InfoProfileEmail = () => {
  firebase.firestore().collection('users').doc(UserInfoUid()).set({
    email: firebase.auth().currentUser.email,
  });
};

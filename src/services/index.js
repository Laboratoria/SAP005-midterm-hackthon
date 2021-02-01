import { onNavigate } from '../utils/history.js';

export const saveUser = (user, userEmail) => {
  firebase.firestore().collection('users').doc(userEmail).add({
    userId: user.uid,
    email: userEmail,
  })
    .then(() => true)
    .catch((error) => error);
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

export const signOut = () => firebase.auth().signOut().then(onNavigate('/'));

export const checkLogin = () => firebase.auth().onAuthStateChanged((user) => user);

export const verifyUserLogged = (callback) => firebase.auth().onAuthStateChanged(callback);

export const logOut = () => firebase.auth().signOut();



  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCm0WY8UlDv52OFu_IXzxoIATA2dMPJVYA",
    authDomain: "curta-curtas.firebaseapp.com",
    projectId: "curta-curtas",
    storageBucket: "curta-curtas.appspot.com",
    messagingSenderId: "364432431987",
    appId: "1:364432431987:web:c840ee27c2841f5a3ec306",
    measurementId: "G-270DDGLK4G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

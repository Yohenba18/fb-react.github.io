// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDFhY8apijBcXTfmVFkzTwqoRyMP-l4I3M",
    authDomain: "facebook-clone-e9c34.firebaseapp.com",
    projectId: "facebook-clone-e9c34",
    storageBucket: "facebook-clone-e9c34.appspot.com",
    messagingSenderId: "937391717849",
    appId: "1:937391717849:web:aa5543cc28bdf286872dc8",
    measurementId: "G-49LCP66SZG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
  
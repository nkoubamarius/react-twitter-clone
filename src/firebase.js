import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQADgy5c1J603VUOhK41FvbrWY1Un4GgE",
    authDomain: "twitter-clone-dcffc.firebaseapp.com",
    databaseURL: "https://twitter-clone-dcffc.firebaseio.com",
    projectId: "twitter-clone-dcffc",
    storageBucket: "twitter-clone-dcffc.appspot.com",
    messagingSenderId: "629455129687",
    appId: "1:629455129687:web:bc9fed67fa9f9753166712",
    measurementId: "G-P0CZ88N82H"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;

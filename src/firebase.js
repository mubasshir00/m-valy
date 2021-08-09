// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDRew6UAjtt_wNKGWliLv4Y-1EmHse8Zr0",
    authDomain: "m-valy.firebaseapp.com",
    projectId: "m-valy",
    storageBucket: "m-valy.appspot.com",
    messagingSenderId: "575954047970",
    appId: "1:575954047970:web:a2e74456c957bdaa8f9fbb",
    measurementId: "G-GNRGZTYWB0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  export{db,auth}

  
import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAX1ruMaDwZXjROj14Lvg9Va6C9jZ-3Fx0",
  authDomain: "personal-website-eed2a.firebaseapp.com",
  projectId: "personal-website-eed2a",
  storageBucket: "personal-website-eed2a.appspot.com",
  messagingSenderId: "549453010995",
  appId: "1:549453010995:web:4ce7584501ec08ab71ab46",
});

var db = firebaseApp.firestore();

export { db };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6ELJOpwZcSm8xRGsgsTzMbis3dTnCvLo",
  authDomain: "slack-clone-acb2f.firebaseapp.com",
  projectId: "slack-clone-acb2f",
  storageBucket: "slack-clone-acb2f.appspot.com",
  messagingSenderId: "317975863235",
  appId: "1:317975863235:web:aa715ca3ff8c6047126776",
  //measurementId: "G-5QKX013343"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };

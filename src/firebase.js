// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-SQYflP0Igy6TY5ahlIoqSALVdflhpq0",
  authDomain: "slack-react-11c0e.firebaseapp.com",
  projectId: "slack-react-11c0e",
  storageBucket: "slack-react-11c0e.appspot.com",
  messagingSenderId: "137047571920",
  appId: "1:137047571920:web:05e712b73280232699cdd5",
  measurementId: "G-5739QV75HX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };

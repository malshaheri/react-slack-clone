// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB47q8f9iTb3B3fcC94Vuqo3JewaCA3VOs",
  authDomain: "slack-elena.firebaseapp.com",
  projectId: "slack-elena",
  storageBucket: "slack-elena.appspot.com",
  messagingSenderId: "185662325255",
  appId: "1:185662325255:web:a612733b268dae1452e0a2",
  // measurementId: "G-0B0BMCWEMR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };

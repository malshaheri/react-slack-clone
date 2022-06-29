// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCe3duCVdn6TMImddNWkJhO_xyf-Vb6gfM",
  authDomain: "slack-clone-ahmed.firebaseapp.com",
  projectId: "slack-clone-ahmed",
  storageBucket: "slack-clone-ahmed.appspot.com",
  messagingSenderId: "656019284504",
  appId: "1:656019284504:web:12c55da500b92a42c1d96d",
  // measurementId: "G-VF5R3MRFLR"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };

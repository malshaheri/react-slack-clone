// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBZAMVf_TEvC1vkeDYm9XIbORY-_SPQXy8",
  authDomain: "dialaslackreact.firebaseapp.com",
  projectId: "dialaslackreact",
  storageBucket: "dialaslackreact.appspot.com",
  messagingSenderId: "842180155509",
  appId: "1:842180155509:web:24df8037f5f91f5ed0003c",
  measurementId: "G-P4MFFJ9VNR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export const database = getDatabase(firebaseApp);

export { auth, provider, db, firebaseApp };

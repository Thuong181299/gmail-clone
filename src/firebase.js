import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2k_KS-ZJelmXN2dclQUOvMoXIdHdLTcc",
  authDomain: "clone-5c996.firebaseapp.com",
  projectId: "clone-5c996",
  storageBucket: "clone-5c996.appspot.com",
  messagingSenderId: "568973337159",
  appId: "1:568973337159:web:7dc85a75d3d2b649c34762",
  measurementId: "G-T1908HJNKR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };

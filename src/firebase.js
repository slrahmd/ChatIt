import firebase from 'firebase/compat/app';  // Firebase v9
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const firebaseConfig = {
    apiKey: "AIzaSyC3i1y-nVY3zUSrZbTYYX65DfeBrAA8Ynw",
    authDomain: "chatit-469cf.firebaseapp.com",
    projectId: "chatit-469cf",
    storageBucket: "chatit-469cf.appspot.com",
    messagingSenderId: "985786021587",
    appId: "1:985786021587:web:e252fd993cf298f4f90626",
    measurementId: "G-G5Y63S5NW5"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
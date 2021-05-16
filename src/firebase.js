import firebase from 'firebase';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAF4ZzkfN8lDmgImxT8TqBvvEJ-H7bZwCQ",
    authDomain: "onevaxindia.firebaseapp.com",
    projectId: "onevaxindia",
    storageBucket: "onevaxindia.appspot.com",
    messagingSenderId: "661702546811",
    appId: "1:661702546811:web:07b02cf7d91bcabd9359de",
    measurementId: "G-CN2G6P4M3E"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;

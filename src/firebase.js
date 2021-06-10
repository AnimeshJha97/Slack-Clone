import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5kbR-CuK_8lsrcqTsMt9EUi19Hb3J0RQ",
    authDomain: "slack-clone-8b588.firebaseapp.com",
    projectId: "slack-clone-8b588",
    storageBucket: "slack-clone-8b588.appspot.com",
    messagingSenderId: "336468030691",
    appId: "1:336468030691:web:652dbc5bee509f07c481d6",
    measurementId: "G-Z66LH4EPJ1"
};

const firebaseApp  = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
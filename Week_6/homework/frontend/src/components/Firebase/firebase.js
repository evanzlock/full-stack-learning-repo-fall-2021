import firebase from "firebase/compat/app";
import "firebase/compat/auth"; //v9

//TODO: ADD configuration
const firebaseConfig = {
    apiKey: "AIzaSyAn-fh_PyYbLHkeN8nHlCLG3SwwDxBuIVg",
    authDomain: "todo-8340a.firebaseapp.com",
    projectId: "todo-8340a",
    storageBucket: "todo-8340a.appspot.com",
    messagingSenderId: "676763001180",
    appId: "1:676763001180:web:e9810163846479d29b2199",
    measurementId: "G-DTRYX1TYGN"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase };
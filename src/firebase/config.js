import * as firebase from "firebase/app";
import 'firebase//auth'
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-GOFAVVqcCVfgiVVHY67z3AE3Yw_e_Oc",
    authDomain: "campus-recruitment-syste-e0da7.firebaseapp.com",
    databaseURL: "https://campus-recruitment-syste-e0da7.firebaseio.com",
    projectId: "campus-recruitment-syste-e0da7",
    storageBucket: "campus-recruitment-syste-e0da7.appspot.com",
    messagingSenderId: "448578546618",
    appId: "1:448578546618:web:abcd415b4b1204389c0b83"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
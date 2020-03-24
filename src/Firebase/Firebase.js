import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "todos-project-6912b.firebaseapp.com",
    databaseURL: "https://todos-project-6912b.firebaseio.com",
    projectId: "todos-project-6912b",
    storageBucket: "todos-project-6912b.appspot.com",
    messagingSenderId: "312389965150",
    appId: "1:312389965150:web:d7e5e0c30854f61c776bcf",
    measurementId: "G-0WLL7PCQ4J"
}

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
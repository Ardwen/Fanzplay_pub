
import firebase from 'firebase/compat';
const config = {

    apiKey: "AIzaSyComkk4cpC6-8qoh7m0U9PQsAn2f0A15Y0",

    authDomain: "fanzplay.firebaseapp.com",

    databaseURL: "https://fanzplay-default-rtdb.firebaseio.com",

    projectId: "fanzplay",

    storageBucket: "fanzplay.appspot.com",

    messagingSenderId: "656018055173",

    appId: "1:656018055173:web:3127e810751eda5058fc6c",

    measurementId: "G-6TQ7Z4X5LB"

  };

firebase.initializeApp(config);
export const auth=firebase.auth;
export const db=firebase.firestore();

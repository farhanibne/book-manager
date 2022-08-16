import { initializeApp } from "firebase/app";

import firebase from 'firebase';
import "firebase/database" ; 

const firebaseConfig = {
    apiKey: "####################",
    authDomain: "####################",
    projectId: "####################",
    storageBucket: "####################",
    messagingSenderId: "####################",
    appId: "####################",
    measurementId: "####################"
};

// Initialize Firebase
if(!firebase.apps.length){firebase.initializeApp(firebaseConfig);}
 
export {firebase}

import { initializeApp } from "firebase/app";

import firebase from 'firebase';
import "firebase/database" ; 

const firebaseConfig = {
    apiKey: "AIzaSyBg2PqJMcNTCmKMl3HA9JZ_dt2DvFCccMA",
    authDomain: "library-dz.firebaseapp.com",
    projectId: "library-dz",
    storageBucket: "library-dz.appspot.com",
    messagingSenderId: "259709038349",
    appId: "1:259709038349:web:535b7f8fc0963a969b8a44",
    measurementId: "G-BY73DS0Q4C"
};

// Initialize Firebase
if(!firebase.apps.length){firebase.initializeApp(firebaseConfig);}
 
export {firebase}
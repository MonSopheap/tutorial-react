// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEQfvj3pByV2qF5KyqmWFryGjgU2SzuFI",
    authDomain: "auth-development-84fbb.firebaseapp.com",
    projectId: "auth-development-84fbb",
    storageBucket: "auth-development-84fbb.appspot.com",
    messagingSenderId: "287043883057",
    appId: "1:287043883057:web:eca1d9a1d7ae193fd30510"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const firebaseAuth = getAuth(app);

export { firebaseAuth }
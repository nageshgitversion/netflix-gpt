import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEzy6IBqz2qYixTENfROOczA5bX59deuk",
  authDomain: "netflixgpt-f9c94.firebaseapp.com",
  projectId: "netflixgpt-f9c94",
  storageBucket: "netflixgpt-f9c94.appspot.com",
  messagingSenderId: "258607447761",
  appId: "1:258607447761:web:80b7f9c6a0f318cd030ff0",
  measurementId: "G-9492ZYQ2ZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
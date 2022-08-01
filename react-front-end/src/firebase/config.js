// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import "firebase/storage";
import "firebase/firestore";
import * as firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtA8UbuvHOxhzSNlbEgnwG2iaQfJvl9wU",
  authDomain: "trpstr-424aa.firebaseapp.com",
  projectId: "trpstr-424aa",
  storageBucket: "trpstr-424aa.appspot.com",
  messagingSenderId: "282746753192",
  appId: "1:282746753192:web:25b5d93d91b6790a69b29d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };

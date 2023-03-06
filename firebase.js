// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjlRptPZaaNCli2rdUfB0HnHktXZQqXjQ",
  authDomain: "crewblastyacht.firebaseapp.com",
  projectId: "crewblastyacht",
  storageBucket: "crewblastyacht.appspot.com",
  messagingSenderId: "306259817147",
  appId: "1:306259817147:web:4cf66ed650feccbf63ef9e",
  measurementId: "G-MVHV3MMFPS"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const storage = getStorage(app);

export {app, db, auth, storage };
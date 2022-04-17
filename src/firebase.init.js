// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCadRQari_6JfD-pwgbl8zDRVy5JXNqwMI",
  authDomain: "ema-john-simple-project-58636.firebaseapp.com",
  projectId: "ema-john-simple-project-58636",
  storageBucket: "ema-john-simple-project-58636.appspot.com",
  messagingSenderId: "1062660635563",
  appId: "1:1062660635563:web:9408883cbb8b8f8a06f0ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
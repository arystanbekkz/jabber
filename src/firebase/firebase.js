// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrI7t3CXMpnJuQ0ke9rF3vXBCzSAFxcZ0",
  authDomain: "webchat-15320.firebaseapp.com",
  projectId: "webchat-15320",
  storageBucket: "webchat-15320.appspot.com",
  messagingSenderId: "176289064455",
  appId: "1:176289064455:web:12e24bcc8f3e0ac56e6ca2",
  measurementId: "G-HGQ7ZZ6KGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider};
export default db;
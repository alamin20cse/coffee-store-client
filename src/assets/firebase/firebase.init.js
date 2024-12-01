// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdzSVy5ShMjH2Tm9t9-lRzQzMqM6e0xLk",
  authDomain: "coffee-store-self.firebaseapp.com",
  projectId: "coffee-store-self",
  storageBucket: "coffee-store-self.firebasestorage.app",
  messagingSenderId: "886801455151",
  appId: "1:886801455151:web:182a2250a687fa6f2b4eda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

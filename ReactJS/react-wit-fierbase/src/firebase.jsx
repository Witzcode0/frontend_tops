// Import the Firebase modules that you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // For authentication
import { getFirestore } from "firebase/firestore";  // For Firestore database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp2r_owVZAUO3K7TS1Te2zCkCDQxh8PZI",
  authDomain: "react-first-project-b4b5c.firebaseapp.com",
  projectId: "react-first-project-b4b5c",
  storageBucket: "react-first-project-b4b5c.appspot.com",
  messagingSenderId: "150338066598",
  appId: "1:150338066598:web:0a877d22a129c311fe7c67",
  measurementId: "G-9V3NFLW2NV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services that you want to use
export const auth = getAuth(app);
export const db = getFirestore(app);

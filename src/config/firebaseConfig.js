// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH-2jbLWt9bYKHV-SIIRP7GI4p_OHXRjc",
  authDomain: "react-ruru.firebaseapp.com",
  projectId: "react-ruru",
  storageBucket: "react-ruru.appspot.com",
  messagingSenderId: "1091985881743",
  appId: "1:1091985881743:web:487c622307ee9ae2dacefa",
  measurementId: "G-03MWDRQM15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3J69cIyoZsIIgVvivxaQaMOGynBb4fVo",
  authDomain: "onlinetails-bb4ba.firebaseapp.com",
  projectId: "onlinetails-bb4ba",
  storageBucket: "onlinetails-bb4ba.appspot.com",
  messagingSenderId: "548191456236",
  appId: "1:548191456236:web:b4eef1ddb57cfd5a6acec9",
  measurementId: "G-H9TKGMYQ8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
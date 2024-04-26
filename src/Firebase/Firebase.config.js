// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuM38ukMaAh9x-JzW4Bdi3V94A2q_xy1w",
  authDomain: "dragon-news-cc407.firebaseapp.com",
  projectId: "dragon-news-cc407",
  storageBucket: "dragon-news-cc407.appspot.com",
  messagingSenderId: "806027572737",
  appId: "1:806027572737:web:c725e066abe213c0e13200",
  measurementId: "G-W2MXTZ6QSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;
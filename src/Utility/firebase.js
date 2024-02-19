import firebase from "firebase/compat/app";
import {getAuth} from  'firebase/auth';
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3YdqsHk_TOK-dlAJk08k91VZUwUAQjtI",
  authDomain: "clone-2024-91ab6.firebaseapp.com",
  projectId: "clone-2024-91ab6",
  storageBucket: "clone-2024-91ab6.appspot.com",
  messagingSenderId: "191398132390",
  appId: "1:191398132390:web:2fd5d7c2cb11fc6cee5267",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =  app.firestore();
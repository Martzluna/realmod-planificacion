import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB-_tgZ5dBpt0686E7Z-uPDx5Wvrlhcg-Y",
  authDomain: "realmod-615d7.firebaseapp.com",
  projectId: "realmod-615d7",
  storageBucket: "realmod-615d7.appspot.com",
  messagingSenderId: "1050861806305",
  appId: "1:1050861806305:web:1c3fc03d5ddcff4f5b4da0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const baseDato = getFirestore();

export {
    app,
    google,
    facebook,
    baseDato,
  
  }





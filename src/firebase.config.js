import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA4-C_NMBGK7TQl6BdDAJk2lhz67ge9Fgg",
  authDomain: "task-manager-08.firebaseapp.com",
  projectId: "task-manager-08",
  storageBucket: "task-manager-08.appspot.com",
  messagingSenderId: "816311041887",
  appId: "1:816311041887:web:3493eba5ac4deec5f840ea",
  measurementId: "G-5VB5STSGMN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

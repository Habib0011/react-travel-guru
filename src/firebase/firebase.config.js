// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTNHq0TpL5zq08p__SujnK346eyu6C9wc",
  authDomain: "react-travel-guru-e887f.firebaseapp.com",
  projectId: "react-travel-guru-e887f",
  storageBucket: "react-travel-guru-e887f.appspot.com",
  messagingSenderId: "684496253338",
  appId: "1:684496253338:web:e2d0e6a255f0145ecd4a23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
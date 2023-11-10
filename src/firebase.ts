// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAOATQ0vSh8Whwc8xlHLvajCXXRKH20UY",
  authDomain: "nwitter-reloaded-a3cb6.firebaseapp.com",
  projectId: "nwitter-reloaded-a3cb6",
  storageBucket: "nwitter-reloaded-a3cb6.appspot.com",
  messagingSenderId: "879438411146",
  appId: "1:879438411146:web:e79768d0cd91f4b03d0473"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// @ts-ignore
export const auth = getAuth(app)
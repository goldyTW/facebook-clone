// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk6Yg_RB6vwXTzQexwNwJOroW1pSWEezU",
  authDomain: "facebook-2-yt-5f446.firebaseapp.com",
  projectId: "facebook-2-yt-5f446",
  storageBucket: "facebook-2-yt-5f446.appspot.com",
  messagingSenderId: "175123646048",
  appId: "1:175123646048:web:9b5b38a9d72cdfdb7ae505"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export {app, db, storage}
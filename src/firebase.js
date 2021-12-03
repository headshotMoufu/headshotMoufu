// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEL-183CkwBQn-TVjQpkgVvCEbfmsGpk8",
  authDomain: "headshotmoufu.firebaseapp.com",
  projectId: "headshotmoufu",
  storageBucket: "headshotmoufu.appspot.com",
  messagingSenderId: "669475035696",
  appId: "1:669475035696:web:53dcde240743fff2682bf5",
  measurementId: "G-HN0R76256F",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
getAnalytics(app)
export const db = getFirestore()

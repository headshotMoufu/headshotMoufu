// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ9FOXLfQpX6gUa24LFiotumwpz6AT-DM",
  authDomain: "makeinfluencer-b1bb9.firebaseapp.com",
  projectId: "makeinfluencer-b1bb9",
  storageBucket: "makeinfluencer-b1bb9.appspot.com",
  messagingSenderId: "747255551982",
  appId: "1:747255551982:web:460b10d0e30e21d0e060ff",
  measurementId: "G-43S4SV93D3",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
getAnalytics(app)
export const db = getFirestore()

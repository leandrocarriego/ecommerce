// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_hhBbt4iG0sDyiQ_TyS41xpPviTYvVu4",
  authDomain: "ecommerce-a99c2.firebaseapp.com",
  projectId: "ecommerce-a99c2",
  storageBucket: "ecommerce-a99c2.appspot.com",
  messagingSenderId: "1048078545910",
  appId: "1:1048078545910:web:8a93600d6da751a4200dd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
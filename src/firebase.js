// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, setDoc  , getDocs , getFirestore , where , query , deleteDoc  , updateDoc , increment  , getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword , getAuth , signOut } from 'firebase/auth';



// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAqNayCYyKAEfBFSxKvtQfZFRK_XodXhew",
  authDomain: "mylcafe.firebaseapp.com",
  projectId: "mylcafe",
  storageBucket: "mylcafe.appspot.com",
  messagingSenderId: "167456088067",
  appId: "1:167456088067:web:3733f024642701d8efae36"
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();


export { db , setDoc , doc , where , query , collection , getDocs   , deleteDoc , updateDoc , increment , getDoc , signInWithEmailAndPassword , auth , signOut } ;
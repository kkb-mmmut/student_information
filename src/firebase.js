import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; 
const firebaseConfig = {

  apiKey: "AIzaSyCZ7S8RpJqGc9CRExDI-3mdQkRfzqkUnY8", 
  authDomain: "student-info-b318f.firebaseapp.com",
  databaseURL:"https://student-info-b318f.firebaseapp.com",
  projectId: "student-info-b318f", 
  storageBucket: "student-info-b318f.appspot.com", 
  messagingSenderId: "898576022326", 
  appId: "1:898576022326:web:0266596c90ed33c6251197"

};
firebase.initializeApp(firebaseConfig); 
export const firestore = firebase.firestore();
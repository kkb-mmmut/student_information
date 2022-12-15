import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as firebase from 'firebase';
// import "firebase/firestore";
// import firebase from 'firebase/compat/app';
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore"; 
// const firebaseConfig = {

//   apiKey: "AIzaSyCZ7S8RpJqGc9CRExDI-3mdQkRfzqkUnY8", 
//   authDomain: "student-info-b318f.firebaseapp.com",
//   databaseURL:"https://student-info-b318f.firebaseapp.com",
//   projectId: "student-info-b318f", 
//   storageBucket: "student-info-b318f.appspot.com", 
//   messagingSenderId: "898576022326", 
//   appId: "1:898576022326:web:0266596c90ed33c6251197"

// };
// firebase.initializeApp(firebaseConfig); 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

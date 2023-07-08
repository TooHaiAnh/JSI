// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassworda,
  signOut
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1DT8eBh-LGg-TeMgUHOG0eyMCcdYSDKs",
  authDomain: "buoi6-4cb55.firebaseapp.com",
  projectId: "buoi6-4cb55",
  storageBucket: "buoi6-4cb55.appspot.com",
  messagingSenderId: "1078197705770",
  appId: "1:1078197705770:web:f422b5d603ec30cc517753",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

document.getElementById("signout").onclick = () => {
    signOut() .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    };
    onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          var uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
      
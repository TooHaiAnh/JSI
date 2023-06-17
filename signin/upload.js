import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js"
import { getFirestore, collection, getDocs, addDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js"


// Your web app's Firebase configuration
const firebaseConfig = { 
    apiKey : "AIzaSyC-05yE959HrF8NNfgkKkuAAHypTXncn5g" , 
    authDomain : "baicuoikhoajsi.firebaseapp.com" , 
    projectId : "baicuoikhoajsi" , 
    storageBucket : "baicuoikhoajsi.appspot.com" , 
    messagingSenderId : "953335025294" , 
    appId : "1:953335025294:web:b62d51edc0dd60d37183df" , 
    measurementId : "G-8JVVLVMVYX" 

  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

document.getElementById("Upload").onclick = async () => {
    try {
      const docRef = await addDoc(collection(db, "information"), {
        Name: document.getElementById("Name").value,
        Link: document.getElementById("Link").value,
        Description :document.getElementById("Description").value,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
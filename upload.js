import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js"
import { getFirestore, collection, getDocs, addDoc, doc, onSnapshot, setDoc, updateDoc, deleteDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-05yE959HrF8NNfgkKkuAAHypTXncn5g",
  authDomain: "baicuoikhoajsi.firebaseapp.com",
  projectId: "baicuoikhoajsi",
  storageBucket: "baicuoikhoajsi.appspot.com",
  messagingSenderId: "953335025294",
  appId: "1:953335025294:web:b62d51edc0dd60d37183df",
  measurementId: "G-8JVVLVMVYX"

};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

document.getElementById("Uploadnew").onclick = async () => {
  try {
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  let dataUpload = "";
  const querySnapshot = await getDocs(collection(db, "information"))
  querySnapshot.forEach((doc) => {
    dataUpload = ` 
  
  <h1 style="color:white;font-size:50px;"> ${doc.data().Name}</h1> <br>
  <img src ="${doc.data().Link} " style="width:700px;height:300px;"> 
  
  `;
  const button = document.createElement("button")
  button.innerHTML = dataUpload
  button.onclick = () => {
    window.location.href = "newDiv.html"
    localStorage.setItem("Description", JSON.stringify(doc.data().Place));
    localStorage.setItem("Name", JSON.stringify(doc.data().Name));
    localStorage.setItem("Pic", JSON.stringify(doc.data().Link));
  }
  document.getElementById("dataUpload").appendChild(button);
  }
  )

    ;
}

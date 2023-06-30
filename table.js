import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js"
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    doc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-05yE959HrF8NNfgkKkuAAHypTXncn5g",
    authDomain: "baicuoikhoajsi.firebaseapp.com",
    projectId: "baicuoikhoajsi",
    storageBucket: "baicuoikhoajsi.appspot.com",
    messagingSenderId: "953335025294",
    appId: "1:953335025294:web:b62d51edc0dd60d37183df",
    measurementId: "G-8JVVLVMVYX",

};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

async function deleteId(Id) {
    await deleteDoc(doc(db, "informaion", Id));
}
const db = getFirestore(app);
let dataUpload = "";
const querySnapshot = await getDocs(collection(db, "information"));
querySnapshot.forEach((doc) => {
    console.log(doc.data());
    dataUpload += ` 
      <tr> 
      <td> ${doc.data().Name} </td>
      <td> ${doc.data().Link} </td>
      <td> ${doc.data().Description} </td>
      <td> ${doc.id} </td>
      <td> <button> Update </button></td>
      <td> <button onclick=${deleteId("${doc.id}")}> Delete </button></td>
     
      </tr>
      `;

})
document.getElementById("data").innerHTML = dataUpload;
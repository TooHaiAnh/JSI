import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js"
import { getFirestore, collection, getDoc, addDoc, doc, onSnapshot,setDoc,updateDoc, deleteDoc, getDocs} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js"


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

let NameBox =document.getElementById("Namebox");
let Link =document.getElementById("Link")
let Rollbox =document.getElementById("Rollbox");
let Place =document.getElementById("Place");

let AddBtn =document.getElementById("Addbtn")
let UpdBtn =document.getElementById("Updbtn")
let DelBtn =document.getElementById("Delbtn")
let RetBtn =document.getElementById("Retbtn")



async function AddDocument_CustomId() {
    var ref = doc(db,"information",Rollbox.value);

    const docRef = await setDoc(
        ref,{
            Name : NameBox.value,
            RollNo:Rollbox.value,
            Link:Link.value,
            Place:Place.value


        }
    )
    .then(()=> {alert( "data added");})
    .catch((error)=> {alert( "data"+error);});
}
AddBtn.addEventListener("click",AddDocument_CustomId)




async function GetData(){
    var ref = doc(db,"information",Rollbox.value);
    const  docSnap = await getDoc(ref);
    if(docSnap.exists()) {
        NameBox.value = docSnap.data().Name;
        Link.value = docSnap.data().Link;
}

    else{
        alert("data not found");
    }}
RetBtn.addEventListener("click",GetData)







async function UpdateData() {
    var ref = doc(db,"information",Rollbox.value);

 updateDoc(
        ref,{
            Name : NameBox.value,
            Link:Link.value,

        }
    )
    .then(()=> {alert( "data updated");})
    .catch((error)=> {alert( "data "+error);});
}
UpdBtn.addEventListener("click",UpdateData)





async function DeleteData(){
    var ref = doc(db,"information",Rollbox.value);
    const  docSnap = await getDoc(ref);
    
    
    
    if(!docSnap.exists()) {
       alert("data does not exist");
       return;
}
    await deleteDoc(ref)
    .then(()=> {alert( "data deleted");})
    .catch((error)=> {alert( "data not deleted " +error);});
     }
DelBtn.addEventListener("click",DeleteData) 




let newData = "";
const querySnapshot = await getDocs(collection(db,"information"))
querySnapshot.forEach((doc) => {
    newData += `
    <tr>
    <td> ${doc.data().RollNo}</td>
    <td> ${doc.data().Name}</td>
    <td> <a href ="${doc.data().Link} " target="_blank" style="width:100px;height:100px;"> Picture </a> </td>
    </tr>
    `
})
document.getElementById("data").innerHTML = newData

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
  const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

document.getElementById("Upload").onclick = async () => {
    try {
      const docRef = await addDoc(collection(db, "information"), {
        Name: document.getElementById("Email").value,
        Password: document.getElementById("Password").value,
        Username :document.getElementById("fname").value,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerlink.addEventListener('click', ()=>{
    wrapper.classList.add('active')
});

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active.popup')
});
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active.popup')
});

function signup(e){
    event.preventDefault();
    var username = document.getElementById( 'fname').ariaValueMax;
    var email = document.getElementById( 'Email').ariaValueMax;
    var password = document.getElementById( 'Password').ariaValueMax;
    var user = {
        fname: username,
        Email: email,
        Password: password,
    };
    var json = JSON.stringify( user);
    localStorage.setItem(username,json);
    alert('dang ki thanh cong')
 }    
 function login(e){
    event.preventDefault();
    var email = document.getElementById('emailAddress');
    var password = document.getElementById('passWord')
    var user = localStorage.getItem(Email);
    var data = json.parse(user);
    if(user == null){
        alert('vui long nhap thong tin')
    }
    else if(user == data.user && email == data.email && password==data.password){
        alert('dang nhap thanh cong')
        window.localStorage.href='listing.html'

    }
 }
 

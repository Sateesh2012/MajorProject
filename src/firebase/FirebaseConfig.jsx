// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIq2xsreiEDBW4yRuauK4cqvH4M0pjl7I",
  authDomain: "myfirstapp-b7ad2.firebaseapp.com",
  projectId: "myfirstapp-b7ad2",
  storageBucket: "myfirstapp-b7ad2.appspot.com",
  messagingSenderId: "817342824778",
  appId: "1:817342824778:web:6467624c2ba9becde601b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;

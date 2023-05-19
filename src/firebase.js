import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAsj1kbsldQI-ZIjaFK40oPrTcW25H0Yus",
  authDomain: "react-notes-7c360.firebaseapp.com",
  projectId: "react-notes-7c360",
  storageBucket: "react-notes-7c360.appspot.com",
  messagingSenderId: "593000433325",
  appId: "1:593000433325:web:d28e1e5435aecb04d46824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
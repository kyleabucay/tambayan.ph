import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    getDoc, 
    getDocs, 
    doc
 } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6CGBV8ynz5lAdwYjKJPJkkeiZtVKtb4c",
  authDomain: "tambayanph-fe457.firebaseapp.com",
  projectId: "tambayanph-fe457",
  storageBucket: "tambayanph-fe457.firebasestorage.app",
  messagingSenderId: "111334951592",
  appId: "1:111334951592:web:2d8020cff31e34b3a1909d",
  measurementId: "G-0YYGWT3YM8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// Database References
const dormsCollectionRef = collection(db, "featuredDorms")
const carinderiaCollectionRef = collection(db, "featuredCarinderias")

export async function getDorms() {
    const snapshot = await getDocs(dormsCollectionRef)
    const dorms = snapshot.docs.map(document => ({
        ...document.data(),
        id: document.id
    }))

    return dorms
}

export async function getCarinderias() {
    const snapshot = await getDocs(carinderiaCollectionRef)
    const carinderias = snapshot.docs.map(document => ({
        ...document.data(),
        id: document.id
    }))
    
    return carinderias
}
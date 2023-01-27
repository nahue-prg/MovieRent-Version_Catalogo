// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClYyDsRr08vB_9vvoZJIlw6oua2ZQX7rw",
  authDomain: "movierent-85c45.firebaseapp.com",
  projectId: "movierent-85c45",
  storageBucket: "movierent-85c45.appspot.com",
  messagingSenderId: "438822527025",
  appId: "1:438822527025:web:b5344932aca964c3bd7510"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



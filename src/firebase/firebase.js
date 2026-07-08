// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9sOd2cD36jx8sdqDlS-Rpz1-CD75erQU",
  authDomain: "aurelia-dental-lab.firebaseapp.com",
  projectId: "aurelia-dental-lab",
  storageBucket: "aurelia-dental-lab.firebasestorage.app",
  messagingSenderId: "145306410744",
  appId: "1:145306410744:web:a2cf6221af6ca3de03a50d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("Firebase qoşuldu:", app);

export const db = getFirestore(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPLBR8eP7Wr5f23lN0n8iNpbvmJSdTEj8",
  authDomain: "task-manager-e48aa.firebaseapp.com",
  projectId: "task-manager-e48aa",
  storageBucket: "task-manager-e48aa.firebasestorage.app",
  messagingSenderId: "700718942612",
  appId: "1:700718942612:web:1707703370755ef55f6781",
  measurementId: "G-M0TSMXP1L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;
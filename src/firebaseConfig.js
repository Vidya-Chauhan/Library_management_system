// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAUOUuuOyOAbT30rOpH_XZdXGDgUb9PAo",
  authDomain: "librarymanagement-79f84.firebaseapp.com",
  projectId: "librarymanagement-79f84",
  storageBucket: "librarymanagement-79f84.appspot.com",
  messagingSenderId: "985569033442",
  appId: "1:98569033442:web:df02e4265731b18a1c72bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// ✅ Export everything properly
export { auth, app, db };


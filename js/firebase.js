import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCK4_wnzu51_TyzoMgYiwxJDU2Bfz6XYoI",
  authDomain: "green-plus-energy.firebaseapp.com",
  projectId: "green-plus-energy",
  storageBucket: "green-plus-energy.firebasestorage.app",
  messagingSenderId: "1091903698132",
  appId: "1:1091903698132:web:5e9a3ce187421dbe273741",
  measurementId: "G-R9FQ4T1MEP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, app, db };

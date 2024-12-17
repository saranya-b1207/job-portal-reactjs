import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5L4_HiDbfHcLl_yZJS2B8abnLZrx2bJk",
  authDomain: "job-portal-reactjs.firebaseapp.com",
  projectId: "job-portal-reactjs",
  storageBucket: "job-portal-reactjs.firebasestorage.app",
  messagingSenderId: "45476752745",
  appId: "1:45476752745:web:0f034a80265bbfb763a1f8",
  measurementId: "G-YHRRNSRR78"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtynQkEl2Vqwv_-gcDM5XLW0Ds6nuvYXY",
  authDomain: "casamientoyamiagus.firebaseapp.com",
  projectId: "casamientoyamiagus",
  storageBucket: "casamientoyamiagus.appspot.com",
  messagingSenderId: "643420046317",
  appId: "1:643420046317:web:c81f47c09deada85599de4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db
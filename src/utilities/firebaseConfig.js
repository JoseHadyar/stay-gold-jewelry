import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAg7Ldcb5IZP2JWZZB02YY0xxOZkPiZwQ",
  authDomain: "staygold-j.firebaseapp.com",
  projectId: "staygold-j",
  storageBucket: "staygold-j.appspot.com",
  messagingSenderId: "690307976600",
  appId: "1:690307976600:web:7957db55dec6a7b30c2fed"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
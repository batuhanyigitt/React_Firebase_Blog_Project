import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxXXqEeeiDlhcr97yk8V4kWSGHfD5d6KY",
  authDomain: "blogproject-76461.firebaseapp.com",
  projectId: "blogproject-76461",
  storageBucket: "blogproject-76461.appspot.com",
  messagingSenderId: "237318670683",
  appId: "1:237318670683:web:18e6290e48d5b4b5e9327e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
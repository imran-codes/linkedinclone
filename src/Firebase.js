import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDwBbHRGKHvzAFgZast42QROv7zn2q1_k",
  authDomain: "linkedin-clone-4db49.firebaseapp.com",
  projectId: "linkedin-clone-4db49",
  storageBucket: "linkedin-clone-4db49.appspot.com",
  messagingSenderId: "47054752179",
  appId: "1:47054752179:web:467263f6cb1ccdf9b3a3c6",
  measurementId: "G-X73J3K8SB4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
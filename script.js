alert("JS dey run 🔥");
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function signUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    alert("Account created 🔥");
    console.log(userCredential.user);
  })
  .catch((error) => {
    alert(error.code + " : " + error.message);
  });
}

function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    alert("Login successful 🔥");
    console.log(userCredential.user);
  })
  .catch((error) => {
    alert(error.code + " : " + error.message);
  });
}

// VERY IMPORTANT FIX FOR SPCK
window.signUp = signUp;
window.login = login;

console.log("App running 🔥");
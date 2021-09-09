import logo from './logo.svg';
import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBqXmcm9QHT4l0VcDZJTT-LIglLlDYDnc0",
  authDomain: "barc0de.firebaseapp.com",
  projectId: "barc0de",
  storageBucket: "barc0de.appspot.com",
  messagingSenderId: "359999706099",
  appId: "1:359999706099:web:c9c9c4faf0843c95a77886",
  measurementId: "G-RPNEDJM94T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

//const signOut = () => firebase.auth.signOut();
//<button onClick={signInWithGoogle}>Sign In</button>
    
function App() {
  return (
    <div id="App">
      
      </div>
  );
  }

export default App;

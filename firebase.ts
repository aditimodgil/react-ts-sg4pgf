import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAjmMpkfCj8uRy3IK4HUIwKNiwAxLvZMfE",
  authDomain: "loginapp-36712.firebaseapp.com",
  projectId: "loginapp-36712",
  storageBucket: "loginapp-36712.appspot.com",
  messagingSenderId: "990046491359",
  appId: "1:990046491359:web:a44aadd73fb4a194904f6a"
});

export const auth = app.auth();
export default app;

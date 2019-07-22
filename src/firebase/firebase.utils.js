import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "crwn-cloyhing.firebaseapp.com",
  databaseURL: "https://crwn-cloyhing.firebaseio.com",
  projectId: "crwn-cloyhing",
  storageBucket: "",
  messagingSenderId: "680392676705",
  appId: "1:680392676705:web:e54fb50b0757b370"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

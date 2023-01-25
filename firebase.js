import firebase from "firebase";
import { FIREBASE_API_KEY } from "@env";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "food-delivery-example-3707a.firebaseapp.com",
  projectId: "food-delivery-example-3707a",
  storageBucket: "food-delivery-example-3707a.appspot.com",
  messagingSenderId: "945265372549",
  appId: "1:945265372549:web:1ec7a3df0002e6b3f628ec",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

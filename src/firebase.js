import firebase from 'firebase'
import 'firebase/firestore' 

const  firebaseConfig = {
  apiKey: "AIzaSyDcMIOpCOlrqBVIxvIu_StcR3RMi-7b1ng",
  authDomain: "segundoparcial-b372e.firebaseapp.com",
  databaseURL: "https://segundoparcial-b372e.firebaseio.com",
  projectId: "segundoparcial-b372e",
  storageBucket: "segundoparcial-b372e.appspot.com",
  messagingSenderId: "926361008065",
  appId: "1:926361008065:web:55c20dabdddc3203ad2140"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  export const bdd=firebase.firestore();
import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
var firebaseConfig = {
  apiKey: 'AIzaSyAmAovN9MnMtsBpXNqcmc_VlW9IHdAUp6E',
  authDomain: 'covid-ht.firebaseapp.com',
  databaseURL: 'https://covid-ht-default-rtdb.firebaseio.com',
  projectId: 'covid-ht',
  storageBucket: 'covid-ht.appspot.com',
  messagingSenderId: '504282301512',
  appId: '1:504282301512:web:697f9bdccabf13cbe0847d'
}

export const db = firebase.initializeApp(firebaseConfig).firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };

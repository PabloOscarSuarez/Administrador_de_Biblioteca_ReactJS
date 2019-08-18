import { createStore, compose } from "redux";
import { reactReduxFirebase } from "react-redux-firebase";
import { reduxFirestore } from "redux-firestore";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//importo mi rootReducer
import { rootReducer } from "./reducers/index.js";

// Configuracion de  firestore.
const firebaseConfig = {
  apiKey: "AIzaSyAkzT8B_jtBInxMB27FU3K_GQYiydEKiHI",
  authDomain: "bibliostore-17198.firebaseapp.com",
  databaseURL: "https://bibliostore-17198.firebaseio.com",
  projectId: "bibliostore-17198",
  storageBucket: "bibliostore-17198.appspot.com",
  messagingSenderId: "761034385177",
  appId: "1:761034385177:web:f8b4bd1e595548ec",
};

// inicializar firebase
firebase.initializeApp(firebaseConfig);

// configuracion de react-redux
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

// crear el enhacer con compose de redux y firestore
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

// Creo el store
const store = createStoreWithFirebase(
  rootReducer,
  compose(reactReduxFirebase(firebase))
);
export default store;

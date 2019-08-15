import { combineReducers } from "redux";
import firebaseReducer from "./firebaseReducers/firebaseReducer";
import firestoreReducer from "./firestoreReducers/firestoreReducer";
import { usuarios } from "./usuariosReducers/buscarUsuarioReducer";

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  usuario: usuarios
});

import firebase from "firebase";
import {combineReducers, createStore} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';

// add firebase config here
var firebaseConfig = {
    apiKey: "AIzaSyBFZ1xudIrgVsVM0odt9K14gyQnFBjFW0c",
    authDomain: "chatapp-2eddb.firebaseapp.com",
    databaseURL: "https://chatapp-2eddb.firebaseio.com",
    projectId: "chatapp-2eddb",
    storageBucket: "chatapp-2eddb.appspot.com",
    messagingSenderId: "1028321828991",
    appId: "1:1028321828991:web:ccec534262d82fcaacdf4a",
    measurementId: "G-MBTCSH2V98"
  };    

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

const initialState = {};
export const store = createStore(rootReducer, initialState);

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};
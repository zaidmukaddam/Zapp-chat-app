import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyCQH7tDyeXJyMovNhRjF1ZW4RJpsb9RiwE",
  authDomain: "zapp-chat-app.firebaseapp.com",
  databaseURL: "https://zapp-chat-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "zapp-chat-app",
  storageBucket: "zapp-chat-app.appspot.com",
  messagingSenderId: "307648452753",
  appId: "1:307648452753:web:34bf5a74442bea027ec730",
  measurementId: "G-M6400KCJQQ"
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage  from "@react-native-async-storage/async-storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBaU6SNeGnc4lpiJvf7Tart0O5hArQIds",
    authDomain: "fir-lectures-a4e89.firebaseapp.com",
    projectId: "fir-lectures-a4e89",
    storageBucket: "fir-lectures-a4e89.appspot.com",
    messagingSenderId: "415007947751",
    appId: "1:415007947751:web:625b2f95c735cd5c10db42"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, { persistence: getReactNativePersistence(ReactNativeAsyncStorage) });

export { app, auth }

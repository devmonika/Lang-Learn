// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,

  // apiKey: "AIzaSyBvTaMUR7gSUVyPs2qY3AE3kVGzfKn4XHg",
  // authDomain: "lang-learn-29061.firebaseapp.com",
  // projectId: "lang-learn-29061",
  // storageBucket: "lang-learn-29061.appspot.com",
  // messagingSenderId: "588571312323",
  // appId: "1:588571312323:web:3ef42e283bb00a97fb2276",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
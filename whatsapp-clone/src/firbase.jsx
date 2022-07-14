// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCueqHqU7hV2HJdp5Z5qbbfadoqW7Ff_8A",
  authDomain: "whatsapp-clone-e3762.firebaseapp.com",
  projectId: "whatsapp-clone-e3762",
  storageBucket: "whatsapp-clone-e3762.appspot.com",
  messagingSenderId: "1078018381604",
  appId: "1:1078018381604:web:bde6e322f95d2d508b45b1",
  measurementId: "G-Z4VVQJTHG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCovIREC0zwHC5DXWzTGSqAB2lWOoB1yGI",
    authDomain: "la-jungla-react-js.firebaseapp.com",
    projectId: "la-jungla-react-js",
    storageBucket: "la-jungla-react-js.appspot.com",
    messagingSenderId: "281138061312",
    appId: "1:281138061312:web:21d4bd7014ff1b51e378e5"
};
    
const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
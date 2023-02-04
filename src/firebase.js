import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCtJLUk27tCtnbOEV3cBm1F0r8xKuq_iOE",
    authDomain: "f-bus-university.firebaseapp.com",
    projectId: "f-bus-university",
    storageBucket: "f-bus-university.appspot.com",
    messagingSenderId: "537426451758",
    appId: "1:537426451758:web:9dada74656a757337faebf",
    measurementId: "G-LXGZS5WCPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
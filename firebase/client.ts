// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALw-PlpRqyacERcRHSb88qUm4JANWYw54",
    authDomain: "echohire-fde3c.firebaseapp.com",
    projectId: "echohire-fde3c",
    storageBucket: "echohire-fde3c.firebasestorage.app",
    messagingSenderId: "547628345749",
    appId: "1:547628345749:web:43a6c93038f46bed45ae9c",
    measurementId: "G-63QPL1SJ2S"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
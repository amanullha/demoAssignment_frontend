// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOYIYwnHwWZ0Xv_o9OSPyToYTBZXGjF5w",
    authDomain: "test-assignment-dca75.firebaseapp.com",
    projectId: "test-assignment-dca75",
    storageBucket: "test-assignment-dca75.appspot.com",
    messagingSenderId: "967444087736",
    appId: "1:967444087736:web:7a9d2f06595a4fd34a854d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
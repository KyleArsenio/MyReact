import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4j9Aq0rxTV5bv9e8SbggDvm_iaNe2fqg",
    authDomain: "kylereact-1acf1.firebaseapp.com",
    databaseURL: "https://kylereact-1acf1-default-rtdb.firebaseio.com",
    projectId: "kylereact-1acf1",
    storageBucket: "kylereact-1acf1.appspot.com",
    messagingSenderId: "604122430572",
    appId: "1:604122430572:web:8913f0cde6ef053e71ac49",
    measurementId: "G-B1YFS63K15"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
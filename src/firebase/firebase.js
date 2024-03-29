import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCJtv27ZPTBDo4dK-CwiAEsohlL2BukztI",
    authDomain: "whatsapp-clone-43df6.firebaseapp.com",
    projectId: "whatsapp-clone-43df6",
    storageBucket: "whatsapp-clone-43df6.appspot.com",
    messagingSenderId: "326895346554",
    appId: "1:326895346554:web:c9a58c3bab6fb8fe9cacc3",
    measurementId: "G-N2LPT490Y5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyB3z96KZphU-jJiYmYOAebiMOalr7J_7Bs",
    authDomain: "whats-app-94036.firebaseapp.com",
    databaseURL: "https://whats-app-94036-default-rtdb.firebaseio.com",
    projectId: "whats-app-94036",
    storageBucket: "whats-app-94036.appspot.com",
    messagingSenderId: "657546113837",
    appId: "1:657546113837:web:aefbe935dbb405ce1cd9a4"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();

export {auth,storage}

export default firebase

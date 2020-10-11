import firebase from "firebase/app";

//import firebase storage
import "firebase/storage";

const firebaseConfig = {
    // your firebase config goes here.
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase };

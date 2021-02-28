import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import firebase from "firebase";
// const firebaseApp=firebase.initializeApp({
//   apiKey: "AIzaSyCTIvF1t8hL64wAHxOMpgftBiPSXZ0gUvw",
//   authDomain: "instagram-clone-29a65.firebaseapp.com",
//   databaseURL: "https://instagram-clone-29a65.firebaseio.com",
//   projectId: "instagram-clone-29a65",
//   storageBucket: "instagram-clone-29a65.appspot.com",
//   messagingSenderId: "222738772162",
//   appId: "1:222738772162:web:a6ee709ac7f1194d944b5b",
//   measurementId: "G-WZYZ85S02N"
// });

// const db=firebaseApp.firestore();
// const auth= firebase.auth();
// const storage=firebase.storage();
// export {db,auth,storage};
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARwv07BwfEEzE6jEe9CQ7qXJNrcpFDgjQ",
  authDomain: "vaccinator-cf826.firebaseapp.com",
  projectId: "vaccinator-cf826",
  storageBucket: "vaccinator-cf826.appspot.com",
  messagingSenderId: "812751301320",
  appId: "1:812751301320:web:546217a5c34e61b9bdd3fd",
  measurementId: "G-W94MSHV16R"
};
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const db = firebase.firestore();
  // export const firestore = firebase.firestore();
  export const provider = new firebase.auth.GoogleAuthProvider();
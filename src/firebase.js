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
const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
    apiKey: "AIzaSyDeKOj7ieMx1AZIU7V_zBqw9vXUy2Q94LY",
    authDomain: "vaccine-center-hackathon.firebaseapp.com",
    projectId: "vaccine-center-hackathon",
    storageBucket: "vaccine-center-hackathon.appspot.com",
    messagingSenderId: "837534922536",
    appId: "1:837534922536:web:6edb0ea4a229648b39c21d",
    measurementId: "G-847Y70WM68"
  };
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };
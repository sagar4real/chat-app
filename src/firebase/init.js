 import firebase from'firebase'
 import firestore from'firebase/firestore'

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBJkIDqOqhqiOVwAh9RR_OvU3UUQrAdFp4",
    authDomain: "chat-d3afe.firebaseapp.com",
    projectId: "chat-d3afe",
    storageBucket: "chat-d3afe.appspot.com",
    messagingSenderId: "459471643389",
    appId: "1:459471643389:web:5ec68678e802e7d0865494",
    measurementId: "G-WSQZV9L00S"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({timestampsInSnapshots:true})
  firebase.analytics();

  export default firebaseApp.firestore();
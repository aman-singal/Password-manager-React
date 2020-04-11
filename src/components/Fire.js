import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAgoPDMuuWIc1OGSNeFUZez8_RxzdvqQmQ",
    authDomain: "password-manager-react-7cbfd.firebaseapp.com",
    databaseURL: "https://password-manager-react-7cbfd.firebaseio.com",
    projectId: "password-manager-react-7cbfd",
    storageBucket: "password-manager-react-7cbfd.appspot.com",
    messagingSenderId: "478316100381",
    appId: "1:478316100381:web:8abe1f17343742b5203ff4",
    measurementId: "G-NZYC26EWLT"
  };
  // Initialize Firebase
  const Fire = firebase.initializeApp(firebaseConfig);

  export default Fire
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyDqbFj3yJEOaYagF5CBOxZrSUKIVJKin5Q",
    authDomain: "slack-d79cf.firebaseapp.com",
    projectId: "slack-d79cf",
    storageBucket: "slack-d79cf.appspot.com",
    messagingSenderId: "890851802040",
    appId: "1:890851802040:web:9804095b543c6017292d4d",
    measurementId: "G-75SWCWFB87"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
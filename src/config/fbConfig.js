 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/firebase-auth';
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCjECZzlKfYaqQ4yefXJMvWfogZxt1into",
    authDomain: "test-noti-5dd89.firebaseapp.com",
    databaseURL: "https://test-noti-5dd89.firebaseio.com",
    projectId: "test-noti-5dd89",
    storageBucket: "test-noti-5dd89.appspot.com",
    messagingSenderId: "323614501317"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;
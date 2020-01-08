import * as firebase from "firebase";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVezFzQDkNr4jtoerL8ALJuOusr_nisQc",
  authDomain: "chatapp-a8671.firebaseapp.com",
  databaseURL: "https://chatapp-a8671.firebaseio.com",
  projectId: "chatapp-a8671",
  storageBucket: "chatapp-a8671.appspot.com",
  messagingSenderId: "331145354254",
  appId: "1:331145354254:web:83918520329e30531a705f",
  measurementId: "G-TDCHEB8QC3"
};

const reqHeader = {
  Authorization:
    "key=AAAATRnNHA4:APA91bEpG20WnR9k-fmsM2JTNsHkehvasJ6FPz5LtD_Y7KXDJC-z5EWBIH2xo_G6_GM5X-jHH-ZcpuYn7iKOljrh5odN1AYC1wWIaJsl_AQTeuxRTzLWzPj5VbicmfZJGfsjU8bC3mZ-",
  "Content-Type": "application/json"
};

var initializedFirebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
  "BK5l23epSNRf2p3zrbqA890reqW4FmXQJU7bjxMnZEKhqsrg3odPGfRM0mzW3eZYTMXlNAh2L9YPT_sFlDtJwMQ"
);

export { database, messaging, reqHeader };

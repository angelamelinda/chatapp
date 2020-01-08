import * as firebase from "firebase";
import "firebase/firestore";
import { config } from "./config";

const reqHeader = {
  Authorization: config.authorizationKey,
  "Content-Type": "application/json"
};

const initializedFirebaseApp = firebase.initializeApp(config.firebaseConf);

const database = firebase.database();

const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(config.vapidKey as string);

export { database, messaging, reqHeader };

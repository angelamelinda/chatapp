export const config = {
  firebaseConf: {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    projectId: process.env.REACT_APP_PROJECT_ID,
    appId: process.env.REACT_APP_APP_ID,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID
  },
  authorizationKey: process.env.REACT_APP_AUTHORIZATION_KEY,
  vapidKey: process.env.REACT_APP_VAPID_KEY
};

import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.create.initializeApp({
  apiKey:process.env.REACT_APP_FIREBASe_API_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
  databaseURL:process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId:process.env. REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:process.env.REACT_APP_FIREBASE_STORGAE_BUCKET,
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSANGING_SENDER_ID,
  appId:REACT_APP_FIREBASE_APP_ID
})
import firebase from "firebase/app";
import "firebase/auth";

let app = firebase.initializeApp({
  apiKey: "AIzaSyDmERCBIVoXfD9DRl4Ee4OLH57LrO8ifhA",
  authDomain: "authdevelopment-b436f.firebaseapp.com",
  projectId: "authdevelopment-b436f",
  storageBucket: "authdevelopment-b436f.appspot.com",
  messagingSenderId: "949929831459",
  appId: "1:949929831459:web:3c4df4a2c4987f75791596",
});

export const auth = app.auth();

export default app;

import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

//we need to see the db

//we need config here
const config = {
  apiKey: "AIzaSyD8XgryuHrvAtvkaXiOK08ZAAlvCxnEdXE",
  authDomain: "netflix-dcc74.firebaseapp.com",
  databaseURL: "https://netflix-dcc74.firebaseio.com",
  projectId: "netflix-dcc74",
  storageBucket: "netflix-dcc74.appspot.com",
  messagingSenderId: "533757771827",
  appId: "1:533757771827:web:a953e47749ceed35ca6346",
  measurementId: "G-71D6VFM39X",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };

import firebase from 'firebase/app'
import Rebase from 're-base'
import database from 'firebase/database'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCTX_AX7BVEeZlGuL0A6A6SWj46xI0Tdhg",
  authDomain: "chatarang-5f8df.firebaseapp.com",
  databaseURL: "https://chatarang-5f8df.firebaseio.com",
  projectId: "chatarang-5f8df",
  storageBucket: "",
  messagingSenderId: "868857127017"
};
const app = firebase.initializeApp(config);
const db = firebase.database(app)

export default Rebase.createClass(db)
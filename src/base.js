import firebase from 'firebase/app'
import Rebase from 're-base'
import 'firebase/database'
import 'firebase/auth'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCTX_AX7BVEeZlGuL0A6A6SWj46xI0Tdhg",
  authDomain: "chatarang-5f8df.firebaseapp.com",
  databaseURL: "https://chatarang-5f8df.firebaseio.com",
  projectId: "chatarang-5f8df",
  storageBucket: "",
  messagingSenderId: "868857127017"
};
const app = firebase.initializeApp(config)

// Configure authentication
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const githubProvider = new firebase.auth.GithubAuthProvider()
export const auth = firebase.auth()

// Configure database and Rebase
const db = firebase.database(app)
const base = Rebase.createClass(db)
export default base
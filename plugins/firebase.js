import firebase from 'firebase'
import 'firebase/firestore' //if use firestore

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDtahCo1lrcuVoj8NPWEvIU-rzvsfBIFgs",
    authDomain: "firstproject-e00c3.firebaseapp.com",
    databaseURL: "https://firstproject-e00c3.firebaseio.com",
    projectId: "firstproject-e00c3",
    storageBucket: "firstproject-e00c3.appspot.com",
    messagingSenderId: "996737502775"
  })
}

//firebase.firestore().settings({ timestampsInSnapshots: true })

const db = firebase.firestore()
const storage = firebase.storage() //if use storage

export { storage, db }
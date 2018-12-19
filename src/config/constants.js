import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAjXMvbkMzuSlYBZ-J4FMdBmcXsngwUzt4",
  authDomain: "barcamp-cdae6.firebaseapp.com",
  databaseURL: "https://barcamp-cdae6.firebaseio.com",
  projectId: "barcamp-cdae6",
  storageBucket: "barcamp-cdae6.appspot.com",
  messagingSenderId: "527337965450"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

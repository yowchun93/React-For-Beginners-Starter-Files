import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBti8Z9bSpas3h0gQprnNnFpKc03-gfIEs",
  authDomain: "catch-of-the-day-c7578.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-c7578.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;
import admin from "firebase-admin";
import firebase from ".";

const firestore = admin.firestore(firebase);

export default firestore;
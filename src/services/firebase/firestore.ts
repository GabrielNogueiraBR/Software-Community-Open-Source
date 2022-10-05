import admin from "firebase-admin";
import firebase from "./index";

const firestore = admin.firestore(firebase);

export default firestore;

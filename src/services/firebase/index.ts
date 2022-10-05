import admin from "firebase-admin";

const firebase = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      }),
    })
  : admin.app();

export default firebase;

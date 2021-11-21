const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");

const app = express();
const cred = require("./key.json");

admin.initializeApp({
    credential: admin.credential.cert(cred),
    databaseURL: "https://cookie-1deef-default-rtdb.firebaseio.com/",
});
const port = 3000;
const db = admin.firestore();

app.get("/users", async (req, res) => {
    const snapshot = await db.collection("users").get();
    const users = [];
    snapshot.forEach((doc) => {
        users.push(doc.data());
    });
    return res.json({ msg: "Success", data: users });
});
exports.api = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

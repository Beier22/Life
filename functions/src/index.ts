import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {DependencyFactory} from "./dependency-factory";

const serviceAccount = require("../secret.json");
const df = new DependencyFactory();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://life-867de.firebaseio.com"
});

exports.setStock = functions.firestore
    .document('products/{prodId}')
    .onCreate((snap, context) => {
        return df.getProductController().setStock(snap, context);
    });

exports.updateProduct = functions.firestore
  .document('products/{prodId}')
  .onUpdate((snap, context) => {
    return df.getProductController().updateProduct(snap, context);
  });




// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

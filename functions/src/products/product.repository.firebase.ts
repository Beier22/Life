import * as admin from 'firebase-admin';
import {ProductRepository} from './product.repository';
import {Stock} from "../models/stock";

export class ProductRepositoryFirebase implements ProductRepository {

  db(): FirebaseFirestore.Firestore {
    return admin.firestore();
  }


  setStock(stock: Stock): Promise<any> {
    return this.db().doc(`stock/${stock.uid}`).set(
      stock
    ).catch();
  }


  updateProduct(prodId: string, stock: Stock): Promise<any> {
    return this.db().doc(`stock/${prodId}`).set(
      stock
    ).catch();
  }
}

import * as admin from 'firebase-admin';
import {ProductRepository} from './product.repository';
import {Stock} from "../models/stock";

export class ProductRepositoryFirebase implements ProductRepository {

    setStock(stock: Stock): Promise<any> {
        return this.db().doc(`stock/${stock.uid}`).set(
            stock
        );
    }

    db(): FirebaseFirestore.Firestore {
        return admin.firestore();
    }
}

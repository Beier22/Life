import * as admin from 'firebase-admin';
import {ProductRepository} from './product.repository';
import {Stock} from '../models/stock';
import {Product} from '../models/product';
import {Order} from '../models/order';

export class ProductRepositoryFirebase implements ProductRepository {

  db(): FirebaseFirestore.Firestore {
    return admin.firestore();
  }


  setStock(stock: Stock): Promise<any> {
    return this.db().doc(`stock/${stock.uid}`).set(
      stock
    ).catch();
  }


  updateProduct(prodId: string, product: Product): Promise<any> {
    return this.db().doc(`stock/${prodId}`).get().then(function(doc) {
      const stock: Stock = doc.data() as Stock;
      stock.name = product.name;
      return admin.firestore().doc(`stock/${prodId}`).set(
        stock
      )
    })
  }

  getProduct(prodId: string): Promise<any> {
    return this.db().doc(`products/${prodId}`).get().then(function(doc) {
      return doc.data() as Product
    })
  }

  buy(order: Order): Promise<any> {
    return this.db().doc(`orders/${order.uid}`).set(
      order
    );
  }
}

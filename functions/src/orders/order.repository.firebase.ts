import {OrderRepository} from './order.repository';
import {OrderLine} from '../models/orderLine';
import * as admin from 'firebase-admin';
import {Order} from '../models/order';

export class OrderRepositoryFirebase implements OrderRepository{



  db(): FirebaseFirestore.Firestore {
    return admin.firestore();
  }
  async createOrderLines(ols: OrderLine[]): Promise<any> {
    let docIds: string[] = [];
    for (const ol of ols){
      const temp = this.db().collection(`orderlines`).add(ol).then(function(doc)  {
        docIds.push(doc.id);
      });
      console.log(temp);
    }
    return docIds;
  }

  setOrder(order: Order): Promise<any> {
    return this.db().doc(`orders/${order.uid}`).set(order);
  }

}

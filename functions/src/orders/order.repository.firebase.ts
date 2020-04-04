import {OrderRepository} from './order.repository';
// import {OrderLine} from '../models/orderLine';
import * as admin from 'firebase-admin';
import {Order} from '../models/order';

export class OrderRepositoryFirebase implements OrderRepository{

  test(id: string, order: Order): Promise<any> {
    return this.db().doc(`test/${id}`).set(
      order
    )
  }

  db(): FirebaseFirestore.Firestore {
    return admin.firestore();
  }
/*
  createOrderLines(ols: OrderLine[]): Promise<any> {
    for (let ol of ols){
      return this.db().doc(`orderlines/${ol.uid}`).set(
        ol
      )
    }
    return undefined as any;
  }*/

}

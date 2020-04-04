import {OrderRepository} from './order.repository';
import {OrderLine} from '../models/orderLine';
import * as admin from 'firebase-admin';

export class OrderRepositoryFirebase implements OrderRepository{



  db(): FirebaseFirestore.Firestore {
    return admin.firestore();
  }
  async createOrderLines(ols: OrderLine[]): Promise<any> {

    for (const ol of ols){
      const temp = this.db().collection(`orderlines`).add(ol);
      console.log(temp);
      // temp = await this.db().doc(`orderlines/${ol.uid}`).(
      //   ol
      // )
    }
    return undefined as any;
  }

}

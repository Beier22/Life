import {OrderController} from './order.controller';
import {DocumentSnapshot} from 'firebase-functions/lib/providers/firestore';
import {EventContext} from 'firebase-functions';
import {Order} from '../models/order';
import {OrderService} from './order.service';

export class OrderControllerFirebase implements OrderController {

  constructor(
    private orderService: OrderService
  ) {
  }


  processOrder(snap: DocumentSnapshot, context: EventContext): Promise<void> {
    const order = snap.data() as Order;
    return this.orderService.processOrder(context.params.orderId, order);
  }
}

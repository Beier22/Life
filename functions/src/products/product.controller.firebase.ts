import {DocumentSnapshot} from 'firebase-functions/lib/providers/firestore';
import {Change, EventContext} from 'firebase-functions';
import {Product} from '../models/product';
import {ProductController} from './product.controller';
import {ProductService} from './product.service';
import {Order} from '../models/order';

export class ProductControllerFirebase implements ProductController {

  constructor(private productService: ProductService) {
  }

  setStock(snap: DocumentSnapshot, context: EventContext): Promise<void> {
      const product = snap.data() as Product;
      return this.productService.setStock(context.params.prodId, product);
  }

  updateProduct(snap: Change<DocumentSnapshot>, context: EventContext): Promise<void> {
    const productAfter = snap.after.data() as Product;
    return this.productService.updateProduct(context.params.prodId, productAfter);
  }

  buy(snap: DocumentSnapshot, context: EventContext): Promise<void> {
    const order = snap.data() as Order;
    return this.productService.buy(context.params.orderId, order);
  }
}

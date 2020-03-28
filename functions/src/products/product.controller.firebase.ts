import {DocumentSnapshot} from 'firebase-functions/lib/providers/firestore';
import {EventContext} from 'firebase-functions';
import {Product} from '../models/product';
import {ProductController} from './product.controller';
import {ProductService} from './product.service';

export class ProductControllerFirebase implements ProductController {

    constructor(private productService: ProductService) {
    }

    setStock(snap: DocumentSnapshot, context: EventContext): Promise<void> {
        const product = snap.data() as Product;
        return this.productService.setStock(context.params.prodId, product);
    }
}

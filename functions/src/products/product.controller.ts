import {DocumentSnapshot} from 'firebase-functions/lib/providers/firestore';
import {Change, EventContext} from 'firebase-functions';


export interface ProductController {
  setStock(snap: DocumentSnapshot, context: EventContext): Promise<void>;
  updateProduct(snap: Change<DocumentSnapshot>, context: EventContext): Promise<void>;
  buy(snap: DocumentSnapshot, context: EventContext): Promise<void>;
}

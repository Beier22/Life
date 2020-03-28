import {DocumentSnapshot} from 'firebase-functions/lib/providers/firestore';
import {EventContext} from 'firebase-functions';


export interface ProductController {
    setStock(snap: DocumentSnapshot, context: EventContext): Promise<void>;
}

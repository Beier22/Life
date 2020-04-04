import {Product} from './product';

export interface OrderLine {
  uid: string;
  product: Product;
  amount: number;
}

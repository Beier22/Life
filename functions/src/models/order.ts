import {Product} from './product';

export interface Order {
  uid?: string;
  product: Product;
  amount: number;
}

import {OrderLine} from './orderLine';

export interface Order {
  uid: string;
  date: number;
  ols: OrderLine[];
  amount: number;
}

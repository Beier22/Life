import {OrderLine} from '../models/orderLine';
import {Order} from '../models/order';

export interface OrderRepository {

  createOrderLines(ols: OrderLine[]): Promise<any>;
  setOrder(order: Order): Promise<any>;

}

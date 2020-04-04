import {OrderLine} from '../models/orderLine';

export interface OrderRepository {

  createOrderLines(ols: OrderLine[]): Promise<any>;

}

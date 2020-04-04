import {Order} from '../models/order';

export interface OrderRepository {

  // createOrderLines(ols: OrderLine[]): Promise<any>;
  test(id: string, order: Order): Promise<any>;

}

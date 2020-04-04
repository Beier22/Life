import {Order} from '../models/order';
import {OrderRepository} from './order.repository';
import {ProductRepository} from '../products/product.repository';
import {OrderLine} from '../models/orderLine';


export class OrderService{

  constructor(
    private orderRepository: OrderRepository,
    private productRepository: ProductRepository
  ) {}


  processOrder(orderId: string, order: Order): Promise<any> {
    console.log(this.productRepository);
    return this.createOrderLines(order);
  }

  async createOrderLines(order: Order): Promise<any> {
    const lines: OrderLine[] = await this.addProductInfo(order.ols);
    await this.orderRepository.createOrderLines(lines);
  }

// This uses the product ID of an orderline to add all information of the product to the orderline
  async addProductInfo(ols: OrderLine[]): Promise<OrderLine[]>{
    const lines: OrderLine[] = [];
    for (const ol of ols){
      ol.product = await this.productRepository.getProduct(ol.product.uid);
      lines.push(ol);
    }
    return lines;
  }
}

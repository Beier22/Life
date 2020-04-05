import {Order} from '../models/order';
import {OrderRepository} from './order.repository';
import {ProductRepository} from '../products/product.repository';
import {OrderLine} from '../models/orderLine';
import {Stock} from '../models/stock';


export class OrderService{

  constructor(
    private orderRepository: OrderRepository,
    private productRepository: ProductRepository
  ) {}


  processOrder(orderId: string, order: Order): Promise<Order> {
    console.log(this.productRepository);
    order.uid = orderId;
    const temp = this.updateStockInfo(order.ols);
    console.log(temp);
    return this.createOrderLines(order);
  }

  async createOrderLines(order: Order): Promise<any> {
    const lines: OrderLine[] = await this.setProductInfo(order.ols);
    await this.orderRepository.createOrderLines(lines);
    order.ols = lines;
    return this.orderRepository.setOrder(order);
  }

// This uses the product ID of an orderline to add all information of the product to the orderline,
// then calls a method to update stock and purchase info before returning
  async setProductInfo(ols: OrderLine[]): Promise<OrderLine[]>{
    const lines: OrderLine[] = [];
    for (const ol of ols){
      ol.product = await this.productRepository.getProduct(ol.product.uid);
      lines.push(ol);
    }
    // const temp = this.updateStockInfo(lines);
    // console.log(temp);
    return lines;
  }

  async updateStockInfo(ols: OrderLine[]): Promise<any> {
    for (let ol of ols){
      const uid = ol.product.uid;
      const tempStock: Stock = await this.productRepository.getStock(uid);
      tempStock.amount -= ol.amount;
      const test = await this.productRepository.setStock(tempStock);
      ol.product.timesPurchased += ol.amount;
      const test2 = await this.productRepository.setProduct(uid, ol.product);
      console.log(test + '' + test2);
    }
    return ols;
  }
}

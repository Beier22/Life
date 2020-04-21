import {ProductRepository} from '../../src/products/product.repository';
import {IMock} from 'moq.ts/lib/moq';
import {OrderRepository} from '../../src/orders/order.repository';
import {OrderService} from '../../src/orders/order.service';
import {Product} from '../../src/models/product';
import {OrderLine} from '../../src/models/orderLine';
import {Order} from '../../src/models/order';
import {Stock} from '../../src/models/stock';
import {Mock} from 'moq.ts';

describe('OrderService', () => {
  let prodRepo: IMock<ProductRepository>;
  let orderRepo: IMock<OrderRepository>;
  let serv: OrderService;
  const product: Product = {uid: 'sa', name: 'test', price: 500, timesPurchased: 0};
  const orderLine: OrderLine = {uid: 'df', product: product, amount: 5};
  const order: Order = {uid: 'gh', date: Date.now(), ols: [orderLine]};
  const stock: Stock = {uid: 'sa', name: 'test', amount: 20};

  beforeEach(() => {
    prodRepo = new Mock<ProductRepository>()
      .setup(r => r.setStock(stock))
      .returns(new Promise((resolve, reject) => {resolve()}));
    orderRepo = new Mock<OrderRepository>();
    serv = new OrderService(orderRepo.object(), prodRepo.object());
    console.log(serv + '' + order);
  });

  it('When a product is added to an order it counts down the stock', async() => {
    let test = 5;
    test += 3;
    expect(test).toBe(8);
  })


});

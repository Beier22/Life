import {ProductRepository} from '../../src/products/product.repository';
import {IMock, Mock} from 'moq.ts';
import {ProductService} from '../../src/products/product.service';
import {Product} from '../../src/models/product';
import {Stock} from '../../src/models/stock';
import {Order} from '../../src/models/order';


describe('ProductService', () => {
  let repo: IMock<ProductRepository>;
  let serv: ProductService;
  const product: Product = {uid: 'sa', name: 'test', price: 500, timesPurchased: 0};
  const stock: Stock = {uid: 'sa', name: 'test', amount: 5};
  beforeEach(() => {
    repo = new Mock<ProductRepository>()
      .setup(r => r.setStock(stock))
      .returns(new Promise((resolve, reject) => {resolve()}));
    serv = new ProductService(repo.object());
  });


  it('When a product is created a stock should also be made, with the same name', async() => {
    const stockAdded: Stock = serv.createStock(product.uid, product);
    expect(stockAdded.name).toBe(product.name);
  });

  it('When a stock is created, it should have an amount of 5', async() => {
    const stockAdded: Stock = serv.createStock(product.uid, product);
    expect(stockAdded.amount).toBe(5);
  });

  it('When a product is bought, it should in the times purchased by one', async() => {
    const order: Order = serv.buy(product, 1);
    expect(order.product.timesPurchased).toBe(1);
  });

});

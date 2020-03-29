import { Product } from '../models/product'
import { ProductRepository } from './product.repository'
import {Stock} from "../models/stock";

export class ProductService {
    constructor(private productRepository: ProductRepository) {}

    setStock(prodId: string, product: Product): Promise<any> {
        const stock: Stock = this.createStock(prodId, product);
        return this.productRepository.setStock(stock);
    }

    createStock(prodId: string, product: Product): Stock {
      const stock: Stock = {
        uid: prodId,
        name: product.name,
        amount: 5
      };
      return stock;
    }

    updateProduct(prodId: string, productAfter: Product): Promise<any> {
      const product: Product = productAfter;
      const stock: Stock = this.createStock(prodId, product);
      return this.productRepository.updateProduct(prodId, stock);
    }
}

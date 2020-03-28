import { Product } from '../models/product'
import { ProductRepository } from './product.repository'
import {Stock} from "../models/stock";

export class ProductService {
    constructor(private productRepository: ProductRepository) {}

    setStock(prodId: string, product: Product): Promise<any> {
        const stock: Stock = {
            uid: prodId,
            name: product.name,
            amount: 5
        };
        return this.productRepository.setStock(stock);
    }

}

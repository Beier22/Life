import {Stock} from "../models/stock";
import {Product} from '../models/product';

export interface ProductRepository {
    setStock(stock: Stock): Promise<any>;
    updateProduct(prodId: string, product: Product): Promise<any>;
}

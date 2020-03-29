import {Stock} from "../models/stock";

export interface ProductRepository {
    setStock(stock: Stock): Promise<any>;
    updateProduct(prodId: string, stock: Stock): Promise<any>;
}

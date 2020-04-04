import {ProductController} from "./products/product.controller";
import {ProductRepository} from "./products/product.repository";
import {ProductRepositoryFirebase} from "./products/product.repository.firebase";
import {ProductService} from "./products/product.service";
import {ProductControllerFirebase} from "./products/product.controller.firebase";
import {OrderController} from './orders/order.controller';
import {OrderRepository} from './orders/order.repository';
import {OrderRepositoryFirebase} from './orders/order.repository.firebase';
import {OrderService} from './orders/order.service';
import {OrderControllerFirebase} from './orders/order.controller.firebase';

export class DependencyFactory {
    getProductController(): ProductController {
        const repo: ProductRepository = new ProductRepositoryFirebase();
        const service: ProductService = new ProductService(repo);
        return new ProductControllerFirebase(service);
    }

    getOrderController(): OrderController {
      const prodRepo: ProductRepository = new ProductRepositoryFirebase();
      const orderRepo: OrderRepository = new OrderRepositoryFirebase();
      const service: OrderService = new OrderService(orderRepo, prodRepo);
      return new OrderControllerFirebase(service);
    }

}

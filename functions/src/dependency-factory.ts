import {ProductController} from "./products/product.controller";
import {ProductRepository} from "./products/product.repository";
import {ProductRepositoryFirebase} from "./products/product.repository.firebase";
import {ProductService} from "./products/product.service";
import {ProductControllerFirebase} from "./products/product.controller.firebase";

export class DependencyFactory {
    getProductController(): ProductController {
        const repo: ProductRepository = new ProductRepositoryFirebase();
        const service: ProductService = new ProductService(repo);
        return new ProductControllerFirebase(service)
    }

}
import { Module } from "@nestjs/common";
import { ProductRepositoryModule } from "./repository/product-repository.module";
import { ProductService } from "./services/product.service";
import { PRODUCT_SERVICE_TOKEN } from "./interfaces/product-service.interface";
import { ProductsController } from "./controllers/products.controller";
import { ProductServiceMock } from "./services/__mocks__/product.service.mock";

@Module({
  imports: [ProductRepositoryModule],
  providers: [{
    provide: PRODUCT_SERVICE_TOKEN,
    useClass: ProductService
  }],
  controllers: [ProductsController]
})
export class ExampleModule {}

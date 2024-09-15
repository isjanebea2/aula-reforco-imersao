import { Module } from "@nestjs/common";
import { ProductRepositoryModule } from "./repository/product-repository.module";
import { ProductService } from "./services/product.service";
import { PRODUCT_SERVICE_TOKEN } from "./interfaces/product-service.interface";
import { ProductsController } from "./controllers/products.controller";

@Module({
  imports: [ProductRepositoryModule],
  providers: [],
  controllers: [ProductsController]
})
export class ExampleModule {}

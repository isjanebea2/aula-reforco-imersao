import { CreateProductDto } from '../../dtos/create-product.dto';
import { Product } from '../../entities/product.entity';
import { ProductServiceInterface } from '../../interfaces/product-service.interface';

export class ProductServiceMock implements ProductServiceInterface {
  private readonly products: Product[] = [];
  create(body: CreateProductDto): Promise<Product> {
    this.products.push(body.toEntity());
    return Promise.resolve(body.toEntity());
  }
  list(): Promise<Product[]> {
    return Promise.resolve(this.products);
  }
}

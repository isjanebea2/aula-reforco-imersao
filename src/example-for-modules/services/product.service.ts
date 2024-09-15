import { Inject } from '@nestjs/common';
import { CreateProductDto } from '../dtos/create-product.dto';
import { Product } from '../entities/product.entity';
import { PRODUCT_REPO_TOKEN, ProductRepositoryInterface } from '../interfaces/product-repository.interface';

export class ProductService implements ProductService {
  constructor(
    @Inject(PRODUCT_REPO_TOKEN)
    private readonly productRepository: ProductRepositoryInterface,
  ) {}

  async create(body: CreateProductDto): Promise<Product> {
    return await this.productRepository.create(body.toEntity());
  }

  async list() {
    return this.productRepository.find();
  }
}

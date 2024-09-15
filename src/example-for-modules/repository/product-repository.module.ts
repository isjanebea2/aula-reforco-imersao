import { Module } from '@nestjs/common';
import { PRODUCT_REPO_TOKEN } from '../interfaces/product-repository.interface';
import { ProductRepository } from './product-repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [{
    provide: PRODUCT_REPO_TOKEN,
    useClass: ProductRepository
  }],
  exports: [PRODUCT_REPO_TOKEN],
})
export class ProductRepositoryModule {}

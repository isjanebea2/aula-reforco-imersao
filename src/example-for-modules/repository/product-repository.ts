import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "../entities/product.entity";
import { ProductRepositoryInterface } from "../interfaces/product-repository.interface";

export class ProductRepository implements ProductRepositoryInterface {

  constructor (
   @InjectRepository(Product) 
   private readonly productRepository: Repository<Product> 
  ) {}
  async create(product: Omit<Product, 'id'>): Promise<Product> {
     const newProduct = this.productRepository.create(product)
     return await this.productRepository.save(newProduct)
  }

  async find(): Promise<Product[]> {
    return this.productRepository.find()
  }
}
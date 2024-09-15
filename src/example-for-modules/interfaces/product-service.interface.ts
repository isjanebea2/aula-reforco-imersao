import { CreateProductDto } from "../dtos/create-product.dto";
import { Product } from "../entities/product.entity";

export interface ProductServiceInterface { 
   create(body: CreateProductDto): Promise<Product>
   list(): Promise<Product[]>
}

export const PRODUCT_SERVICE_TOKEN = Symbol() 
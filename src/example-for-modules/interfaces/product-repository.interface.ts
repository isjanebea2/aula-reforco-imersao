import { Product } from "../entities/product.entity"

export interface ProductRepositoryInterface {
   create(product: Omit<Product, 'id'>): Promise<Product>
   find(): Promise<Product[]>
}

export const PRODUCT_REPO_TOKEN = Symbol()


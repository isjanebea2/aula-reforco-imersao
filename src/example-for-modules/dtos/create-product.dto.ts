import { Product } from "../entities/product.entity"

export class CreateProductDto {
   
   public name: string

   toEntity(): Product {
     return new Product(this.name)
   }
}
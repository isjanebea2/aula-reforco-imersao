import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ProductStatus } from '../enums/product-status.enum';

@Entity('product')
export class Product {
  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'status', type: 'varchar', default: ProductStatus.DRAFT })

  @PrimaryGeneratedColumn({ type: 'bigint' })
  public id: number;

  constructor(name: string) {
    this.name = name
  }
}

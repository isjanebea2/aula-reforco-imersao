import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  UseInterceptors,
} from '@nestjs/common';

import { CreateProductDto } from '../dtos/create-product.dto';
import { ProductServiceInterface } from '../interfaces/product-service.interface';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productService: ProductServiceInterface,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(ClassSerializerInterceptor)
  async create(@Body() body: CreateProductDto) {
    return this.productService.create(body);
  }

  @Get()
  async list() {
    return this.productService.list();
  }
}

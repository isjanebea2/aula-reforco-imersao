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
import { PRODUCT_SERVICE_TOKEN, ProductServiceInterface } from '../interfaces/product-service.interface';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE_TOKEN)
    private readonly productService: ProductServiceInterface,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(ClassSerializerInterceptor)
  async create(@Body() body: CreateProductDto) {
    const dto = new CreateProductDto()
    dto.name = body.name
    return this.productService.create(dto);
  }

  @Get()
  async list() {
    return this.productService.list();
  }
}

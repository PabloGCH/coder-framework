import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.create(createProductDto);
  }

  @Get()
  async findAll() {
    return await this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params :any) {
    return await this.productsService.findOne(params.id);
  }

  @Patch(':id')
  async update(@Param() params :any, @Body() updateProductDto: UpdateProductDto) {
    return await this.productsService.update(params.id, updateProductDto);
  }

  @Delete(':id')
  async remove(@Param() params :any) {
    return await this.productsService.remove(params.id);
  }
}

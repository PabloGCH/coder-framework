import { Injectable } from '@nestjs/common';
import { ApiResponse } from 'src/interfaces/response.interface';
import { CreateProductDto } from './dto/create-product.dto';
import { OutputProductDto } from './dto/output-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductDocument } from './models/product.mongo.model';

@Injectable()
export class ProductsService {
    constructor(@InjectModel('products') private productModel :Model<ProductDocument> ) {}

    async create(createProductDto: CreateProductDto) :Promise<ApiResponse> {
        try {
            let newObject = await this.productModel.create(createProductDto);
            return {
                success: true,
                message: 'Product created successfully',
                data: newObject
            };
        } catch (error) {
            console.log(error);
            return {
                success: false,
                message: 'Failed to create product',
                error: error,
                data: {}
            };
        }
    }

    async findAll() :Promise<ApiResponse> {
        try {
            let products = await this.productModel.find();
            let productsDto = products.map(product => {
                return new OutputProductDto(product);
            });
            return {
                success: true,
                message: 'Products retrieved successfully',
                data:  productsDto || []
            }
        }
        catch (error) {
            return {
                success: false,
                message: 'Failed to retrieve products',
                error: error,
                data: []
            };
        }
    }

    async findOne(id: number|string) :Promise<ApiResponse> {
        try {
            let product = await this.productModel.findById(id);
            return {
                success: true,
                message: 'Product retrieved successfully',
                data: product
            };
        }
        catch (error) {
            return {
                success: false,
                message: 'Failed to retrieve product',
                error: error,
                data: {}
            };
        }
    }

    async update(id: number|string, updateProductDto: UpdateProductDto) :Promise<ApiResponse> {
;       try {
            let product = await this.productModel.findByIdAndUpdate(id, updateProductDto);
            return {
                success: true,
                message: 'Product updated successfully',
                data: product
            };
        }
        catch (error) {
            return {
                success: false,
                message: 'Failed to update product',
                error: error,
                data: updateProductDto
            };
        }
    }

    async remove(id: number|string) :Promise<ApiResponse> {
        try {
            let product = await this.productModel.findByIdAndDelete(id);
            return {
                success: true,
                message: 'Product deleted successfully',
                data: product
            };
        }
        catch (error) {
            return {
                success: false,
                message: 'Failed to delete product',
                error: error,
                data: {}
            };
        }
    }
}

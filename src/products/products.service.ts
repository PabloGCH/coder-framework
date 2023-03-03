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
                error: JSON.stringify(error),
                data: {}
            };
        }
    }

    async findAll() :Promise<ApiResponse> {
        try {
            //GET ALL PRODUCTS FROM DB
            //let products = await ProductMongoModel.find();
            //PARSE THE PRODUCTS TO DTO
            /*let productsDto = products.map(product => {
                return new OutputProductDto(product);
            });*/
            //RETURN THE PRODUCTS
            return {
                success: true,
                message: 'Products retrieved successfully',
                data: []//productsDto
            };
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

    async findOne(id: number) :Promise<ApiResponse> {
        try {
            //GET PRODUCT FROM DB
            //RETURN THE PRODUCT
            return {
                success: true,
                message: 'Product retrieved successfully',
                data: {}
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

    async update(id: number, updateProductDto: UpdateProductDto) :Promise<ApiResponse> {
;       try {
            //UPDATE PRODUCT IN DB
            //PASS IN THE DTO
            //RETURN THE PRODUCT
            return {
                success: true,
                message: 'Product updated successfully',
                data: updateProductDto
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

    async remove(id: number) :Promise<ApiResponse> {
        try {
            //DELETE PRODUCT FROM DB
            //RETURN THE PRODUCT
            return {
                success: true,
                message: 'Product deleted successfully',
                data: {}
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

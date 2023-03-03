import { Injectable } from '@nestjs/common';
import { ApiResponse } from 'src/interfaces/response.interface';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    async create(createProductDto: CreateProductDto) :Promise<ApiResponse> {
        try {
            //ADD PRODUCT TO DB
            //PASS IN THE DTO
            //RETURN THE PRODUCT
            return {
                success: true,
                message: 'Product created successfully',
                data: createProductDto
            };
        } catch (error) {
            return {
                success: false,
                message: 'Failed to create product',
                data: createProductDto
            };
        }
    }

    async findAll() :Promise<ApiResponse> {
        try {
            //GET ALL PRODUCTS FROM DB
            //RETURN THE PRODUCTS
            return {
                success: true,
                message: 'Products retrieved successfully',
                data: {}
            };
        }
        catch (error) {
            return {
                success: false,
                message: 'Failed to retrieve products',
                data: {}
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
                data: {}
            };
        }
    }
}

import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './models/product.mongo.model';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'products',
            schema: ProductSchema 
        }]),
    ],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {}

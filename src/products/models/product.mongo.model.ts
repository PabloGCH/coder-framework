import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type ProductDocument = Product & HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop({required: true})
    name: string;
    @Prop({required: true})
    description: string;
    @Prop({required: true})
    price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly price: string;
}

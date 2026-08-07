import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  ValidateNested,
} from 'class-validator';

export class ProductItem {
  @IsNumber()
  price!: number;

  @IsNumber()
  quantity!: number;
}
export class CreateOrderDto {
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ProductItem)
  items!: ProductItem[];

  @IsNumber()
  @IsNotEmpty()
  hour: number = 0;
}

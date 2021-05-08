import { IsMongoId, IsNotEmpty, IsDate, IsArray } from 'class-validator';
import { OmitType, PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsMongoId()
  @ApiProperty()
  readonly customer: string;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  readonly date: Date;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  readonly products: string[];
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class FxRatesDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  fromCurrency: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  toCurrency: string;
}

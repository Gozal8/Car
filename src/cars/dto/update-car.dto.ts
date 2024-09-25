import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  model?: string;

  @IsNumber()
  @IsOptional()
  year?: number;

  @IsNumber()
  @IsOptional()
  price?: number;
}


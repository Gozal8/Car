import { Controller, Get, Post, Param, Body, Delete, Patch, UseInterceptors } from '@nestjs/common';
import { CarService } from './cars.service';
import { Car } from './Model/car.entity';
import { LoggingInterceptor } from 'src/loggin.interceptor';




@UseInterceptors(LoggingInterceptor)
export class CarController {
  
  constructor(private readonly carService: CarService) {}

  @Get()
  findAll(): Promise<Car[]> {
    return this.carService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Car> {
    return this.carService.findOne(+id);
  }

  @Post()
  create(@Body() car: Car): Promise<Car> {
    return this.carService.create(car);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() car: Partial<Car>): Promise<Car> {
    return this.carService.update(+id, car);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.carService.remove(+id);
  }
}





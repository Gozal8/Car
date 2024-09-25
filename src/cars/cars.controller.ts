// src/cars/cars.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  // GET barcha mashinalar
  @Get()
  findAll(@Query('year') year?: number, @Query('price') price?: number) {
    return this.carsService.findAll({ year, price });
  }

  // GET bir mashinani olish
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.carsService.findOne(id);
  }

  // POST mashina yaratish
  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  // PUT mashinani yangilash
  @Put(':id')
  update(@Param('id') id: number, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(id, updateCarDto);
  }

  // DELETE mashinani o'chirish
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.carsService.remove(id);
  }
}




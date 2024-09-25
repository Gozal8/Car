// src/cars/cars.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.model';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  // GET barcha mashinalarni olish
  async findAll(filters: { year?: number; price?: number }) {
    const query = this.carRepository.createQueryBuilder('car');

    if (filters.year) {
      query.andWhere('car.year = :year', { year: filters.year });
    }

    if (filters.price) {
      query.andWhere('car.price = :price', { price: filters.price });
    }

    return await query.getMany();
  }

  // GET bir mashinani olish
  async findOne(id: number): Promise<Car> {
    const car = await this.carRepository.findOne({ where: { id } });
    if (!car) {
      throw new NotFoundException('Car not found');
    }
    return car;
  }

  // POST mashina yaratish
  async create(createCarDto: CreateCarDto): Promise<Car> {
    const newCar = this.carRepository.create(createCarDto);
    return await this.carRepository.save(newCar);
  }

  // PUT mashinani yangilash
  async update(id: number, updateCarDto: UpdateCarDto): Promise<Car> {
    const car = await this.findOne(id);
    Object.assign(car, updateCarDto);
    return await this.carRepository.save(car);
  }

  // DELETE mashinani o'chirish
  async remove(id: number): Promise<void> {
    const car = await this.findOne(id);
    await this.carRepository.remove(car);
  }
}






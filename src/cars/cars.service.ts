import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './Model/car.entity';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}

  findAll(): Promise<Car[]> {
    return this.carRepository.find();
  }

  findOne(id: number): Promise<Car> {
    return this.carRepository.findOneBy({ id });
  }

  create(car: Car): Promise<Car> {
    return this.carRepository.save(car);
  }

  async update(id: number, car: Partial<Car>): Promise<Car> {
    await this.carRepository.update(id, car);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.carRepository.delete(id);
  }
}








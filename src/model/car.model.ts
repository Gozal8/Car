import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cars')
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column()
  make: string;

  @Column()
  year: number;

  @Column()
  pricePerDay: number;

  @Column({ default: true })
  available: boolean;
}

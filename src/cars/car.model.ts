import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  price: number;
}

  
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cars')
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column()
  brand: string;

  @Column()
  price: number;

  @Column({ default: true })
  available: boolean;

  @Column({ nullable: true })
  year: number; // Mashinaning chiqarilgan yili

  @Column({ nullable: true })
  color: string; // Mashinaning rangi
}

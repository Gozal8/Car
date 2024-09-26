import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from '../src/model/car.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'your_password',
      database: 'car_rental',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CarModule,
  ],
})
export class AppModule {}




 
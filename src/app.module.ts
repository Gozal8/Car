import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsModule } from './cars/cars.module';
import { databaseConfig } from './cars/config/database.config';  
@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig), 
    CarsModule,
  ],
})
export class AppModule {}




 
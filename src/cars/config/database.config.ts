import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'psql', 
  database: 'n13',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};




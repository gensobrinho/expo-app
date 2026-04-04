import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resolve } from 'path';
import databaseConfiguration from './database.configuration';
import { getDBConfig } from './db.config.factory';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfiguration],
      isGlobal: true,
      envFilePath: [resolve(process.cwd(), '.env'), resolve(process.cwd(), 'backend/.env')],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: getDBConfig,
    }),
  ],
})
export class DatabaseModule {}

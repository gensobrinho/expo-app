import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import databaseConfiguration from './database.configuration';
import { getDBConfig } from './db.config.factory';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfiguration],
      isGlobal: true,
      envFilePath: [
        join(__dirname, '..', '..', '.env'),
        join(__dirname, '..', '..', '..', '.env'),
      ],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: getDBConfig,
    }),
  ],
})
export class DatabaseModule {}

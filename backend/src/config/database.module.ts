import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfiguration from './database.configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDBConfig } from './db.config.factory';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [databaseConfiguration],
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: getDBConfig,
        })
    ]
})
export class DatabaseModule {}

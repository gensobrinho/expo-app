import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const getDBConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>('database.host'),
  port: Number(configService.get<number>('database.port')),
  username: configService.get<string>('database.username'),
  password: configService.get<string>('database.password'),
  database: configService.get<string>('database.name'),
  ssl: configService.get<boolean>('database.ssl'),
  autoLoadEntities: true,
  synchronize: false,
  migrations: ['dist/database/migrations/*.js'],
  migrationsRun: true,
});

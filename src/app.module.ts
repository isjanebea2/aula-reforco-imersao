import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {

        const IS_PRODUCTION = configService.get('NODE_ENV') === 'production';

        return {
          type: 'postgres',
          host: configService.getOrThrow<string>('DB_HOST'),
          username: configService.getOrThrow<string>('DB_USER'),
          password: configService.getOrThrow<string>('DB_PASSWORD'),
          database: configService.getOrThrow<string>('DB_DATABASE'),
          entities: [__dirname + '/../**/*.entity.{ts|js}'],
          autoLoadEntities: true,
          synchronize: IS_PRODUCTION ? false : true,
          logger: IS_PRODUCTION ? 'error' : 'debug',
        } as TypeOrmModuleAsyncOptions;
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

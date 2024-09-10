
## Configuração inicial do projeto (init setup)
- configuração do env
- configuração do banco de dados
- remoção de arquivos que não serão utilizados


#### Instalação da  config Service lib

Permite carregar os valores no .env e acessá-los de forma dinâmica. 

[Documentação](https://docs.nestjs.com/techniques/configuration)

```bash
npm i --save @nestjs/config
```

No app
```typescript
  const configService = app.get<ConfigService>(ConfigService)

  const APP_PORT = configService.get<number>('PORT', 3000)
```

 Nos servicos

```typescript
   constructor(private readonly configService: ConfigService) {}
```


### Banco de dados | configuração Typeorm 

[Documentação](https://docs.nestjs.com/techniques/database)

```bash
npm install --save @nestjs/typeorm typeorm mysql2
```

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Configuração sugerida.

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}

```

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Configuração recomendada com o configService.

@Module({
  imports: [
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
})
export class AppModule {}

```

### Referências 
https://reflectoring.io/spring-hexagonal/


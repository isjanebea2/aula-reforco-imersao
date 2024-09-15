
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
dotenv
```typescript
  const configService = app.get<ConfigService>(ConfigService)

  const APP_PORT = process.env.PORT
```

 Nos servicos

```typescript
   constructor(private readonly configService: ConfigService) {}
```


### Banco de dados | configuração Typeorm | pg adapter

[Documentação](https://docs.nestjs.com/techniques/database)

```bash
npm install --save @nestjs/typeorm typeorm mysql2 pg
```

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Configuração sugerida.

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
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
          port: 5432
          host: configService.getOrThrow<string>('DB_HOST'), // recupera o .env do projeto
          username: configService.getOrThrow<string>('DB_USER'),
          password: configService.getOrThrow<string>('DB_PASSWORD'),
          database: configService.getOrThrow<string>('DB_DATABASE'),
          entities: [__dirname + '/../**/*.entity.{ts|js}'],  // carrega automaticamente as entidades
          autoLoadEntities: true, // carrega automaticamente as entidades
          synchronize: IS_PRODUCTION ? false : true, // impede que alterações indesejadas seja feita com clientes reais
          logger: IS_PRODUCTION ? 'error' : 'debug', // imprime no terminal as consultas feitas no banco
        } as TypeOrmModuleAsyncOptions;
      },
    }),
  ],
})
export class AppModule {}

```


### Nestjs 
https://docs.nestjs.com/fundamentals/dynamic-modules

https://docs.nestjs.com/techniques/validation

https://docs.nestjs.com/providers

https://docs.nestjs.com/modules

https://docs.nestjs.com/fundamentals/custom-providers

https://docs.nestjs.com/techniques/configuration

https://docs.nestjs.com/techniques/database

https://typeorm.io/repository-api

### Referências 

https://www.youtube.com/watch?v=bw7So5GMkyg&t=5s

https://www.freecodecamp.org/portuguese/news/os-principios-solid-da-programacao-orientada-a-objetos-explicados-em-bom-portugues/

https://medium.com/solutions-architecture-patterns/anti-corruption-layer-pattern-bd75e1f2be7f

https://renatogontijo.medium.com/aggregate-root-na-modelagem-de-dom%C3%ADnios-ricos-7317238e6d97

https://alistair.cockburn.us/hexagonal-architecture/

https://medium.com/bemobi-tech/ports-adapters-architecture-ou-arquitetura-hexagonal-b4b9904dad1a

https://medium.com/sicreditech/arquitetura-e-design-ports-and-adapters-hexagonal-onion-architecture-e-clean-architecture-1632f6451a20

https://refactoring.guru/design-patterns/command/typescript/example

https://refactoring.guru/design-patterns/adapter/typescript/example

https://refactoring.guru/refactoring/smells/oo-abusers

https://medium.com/@jonesroberto/desing-patterns-parte-8-adapter-21ed67ceb9ed

https://dev.to/oliverigor27/entendendo-heranca-e-composicao-3ehc

import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLGatewayModule, GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OwnersModule } from './owners/owners.module';
import { Owner } from './owners/entities/owner.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [OwnersModule,
    GraphQLFederationModule.forRoot(
      {
        autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql')
      }
    ),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'test',
      entities: [Owner],
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

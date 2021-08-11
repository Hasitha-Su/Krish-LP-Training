import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Location } from './locations/entities/location.entity';
import { LocationsModule } from './locations/locations.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [LocationsModule,
      GraphQLFederationModule.forRoot({
        autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
      }),
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'test',
        entities: [Location],
        synchronize: true,
      }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { PetsModule } from './pets/pets.module';
import { Pet } from './pets/entities/pet.entity';
import { Owner } from './pets/entities/owner.entity';
import { Location } from './pets/entities/location.entity';

@Module({
  imports: [PetsModule,
    GraphQLFederationModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
      buildSchemaOptions: {
        orphanedTypes: [Owner, Location],
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'test',
      entities: [Pet],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
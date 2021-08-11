import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { PetModule } from './pet/pet.module';
import { Pet } from './pet/entities/pet.entity';
import { Owner } from './owner/entities/owner.entity';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [
    PetModule,
    OwnerModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'Pet-Service',
      // entities: ["dist/**/*.entity{.ts, .js}"],
      entities: [Pet, Owner],
      synchronize: true,
    }),
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Owner } from './owner/entities/owner.entity';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [
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
      database: 'Owner',
      // entities: ["dist/**/*.entity{.ts, .js}"],
      entities: [Owner],
      synchronize: true,
    }),
  ],
})

export class AppModule {}
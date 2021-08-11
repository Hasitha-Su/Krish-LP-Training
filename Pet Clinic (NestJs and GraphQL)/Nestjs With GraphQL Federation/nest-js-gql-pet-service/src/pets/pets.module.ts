import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';
import { OwnerResolver } from './owner.resolver';
import { LocationResolver } from './location.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Pet])],
  providers: [PetsResolver, PetsService, OwnerResolver, LocationResolver]
})

export class PetsModule {}
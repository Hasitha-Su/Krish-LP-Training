import { Module } from '@nestjs/common';
import { PetsService } from './service/pets.service';
import { PetsController } from './pets.controller';
import { PetRepository } from './repository/pet.repository';
import { Pet, PetSchema } from './schemas/Pet.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([ {name:Pet.name, schema: PetSchema}])],
  controllers: [PetsController],
  providers: [PetsService, PetRepository]
})
export class PetsModule {}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePetDto } from '../dto/create-pet.dto';
import { Pet } from '../schemas/Pet.schema';
import { PetRepository } from '../repository/pet.repository';
import { UpdatePetDto } from '../dto/update-pet.dto';

@Injectable()
export class PetsService {

  constructor(private petRepository: PetRepository) { }

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    return await this.petRepository.create(createPetDto)
  }

  async findAll(): Promise<Pet[]> {
    return await this.petRepository.findAll()
  }

  findOne(id: string): Promise<Pet> {
    let pet = this.petRepository.findOne(id)
    if (!pet) {
      throw new NotFoundException(`Pet with Id: ${id} not found`)
    }
    return pet
  }

  // update(updatePetDto: UpdatePetDto): Promise<Pet>{
  //   return this.petRepository.update(updatePetDto)
  // }

  async delete(id: string): Promise<boolean> {
    let x = await this.petRepository.delete(id);
    console.log(x)
    return x;
  }

}
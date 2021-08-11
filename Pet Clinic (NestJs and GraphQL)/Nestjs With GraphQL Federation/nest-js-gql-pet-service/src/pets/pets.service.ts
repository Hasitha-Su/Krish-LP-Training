import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {

  constructor(@InjectRepository(Pet) private petRepository: Repository<Pet>){}

  async create(createPetInput: CreatePetInput): Promise<Pet> {
    return await this.petRepository.save(createPetInput);
  }

  async findAll():Promise<Pet[]> {
    return await this.petRepository.find();
  }

  async findOne(id: string):Promise<Pet> {
    return await this.petRepository.findOne(id);
  }

  async update(id: string, updatePetInput: UpdatePetInput) {
    return `This action updates a #${id} pet`;
  }

  async remove(id: string) {
    return this.petRepository.delete(id);
  }

  async forOwner(id: string){
    return await this.petRepository.find({"ownerId": id})
  }

  async forLocation(id: string){
    return await this.petRepository.find({"locationId": id})
  }
}
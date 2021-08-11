import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Pet } from './entities/pet.entity';
import { OwnerService } from '../owner/owner.service';
import { Owner } from 'src/owner/entities/owner.entity';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private petRepository: Repository<Pet>,
    private ownerService: OwnerService,
  ) {}

  create(pet: CreatePetInput) {
    let p = this.petRepository.create(pet);
    return this.petRepository.save(p);
  }

  async findAll(): Promise<Pet[]> {
    return await this.petRepository.find();
  }

  async findOne(id: string): Promise<Pet> {
    return await this.petRepository.findOne(id);
  }

  update(id: string, updatePetInput: UpdatePetInput) {
    let pet: Pet = this.petRepository.create(updatePetInput);
    pet.id = id;
    return this.petRepository.save(pet);
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }

  async getOwner(id: string): Promise<Owner> {
    return await this.ownerService.findOne(id);
  }
}

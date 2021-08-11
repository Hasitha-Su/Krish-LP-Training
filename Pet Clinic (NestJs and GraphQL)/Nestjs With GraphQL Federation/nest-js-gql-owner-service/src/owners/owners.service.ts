import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OwnersService {

  constructor(@InjectRepository(Owner) private ownerRepository: Repository<Owner>){}

  async create(createOwnerInput: CreateOwnerInput) {
    return await this.ownerRepository.save(createOwnerInput);
  }

  async findAll(): Promise<Owner[]> {
    return await this.ownerRepository.find();
  }

  async findOne(id: string):Promise<Owner> {
    return await this.ownerRepository.findOne(id);
  }

  async update(id: string, updateOwnerInput: UpdateOwnerInput) {
    //return await this.ownerRepository;
    return `This action updates a #${id} pet`;
  }

  async remove(id: string) {
    return await this.ownerRepository.delete(id);
  }
}
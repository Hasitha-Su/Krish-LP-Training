import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOwnerDto } from '../dto/create-owner.dto';
import { Owner } from '../schemas/Owner.schema';
import { OwnerRepository } from '../repository/owner.repository';
import { UpdateOwnerDto } from '../dto/update-owner.dto';

@Injectable()
export class OwnersService {

  constructor(private ownerRepository: OwnerRepository) { }

  async create(createOwnerDto: CreateOwnerDto): Promise<Owner> {
    return await this.ownerRepository.create(createOwnerDto)
  }

  async findAll(): Promise<Owner[]> {
    return await this.ownerRepository.findAll()
  }

  findOne(id: string): Promise<Owner> {
    let owner = this.ownerRepository.findOne(id)
    if (!owner) {
      throw new NotFoundException(`Owner with Id: ${id} not found`)
    }
    return owner
  }

  // update(updateOwnerDto: UpdateOwnerDto): Promise<Owner>{
  //   return this.ownerRepository.update(updateOwnerDto)
  // }

  async delete(id: string): Promise<boolean> {
    let x = await this.ownerRepository.delete(id);
    console.log(x)
    return x;
  }

}
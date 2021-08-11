import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerDto } from './dto/create-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner) private ownerRepository: Repository<Owner>,
  ) {}

  async create(owner: CreateOwnerDto): Promise<Owner> {
    let ownr = this.ownerRepository.create(owner);
    return await this.ownerRepository.save(ownr);
  }

  async findAll(): Promise<Owner[]> {
    // let own: Owner = new Owner()
    // own.id = "346g43565-gb64536y-e5gb65"
    // own.firstName = "Hasitha"
    // own.lastName = "Subhashana"
    // own.city = "dsadas"
    // own.designation = "dasdsd"

    // return [own]
    return await this.ownerRepository.find({
      relations: ["pets"] 
    });
  }

  async findOne(id: string): Promise<Owner> {
    return await this.ownerRepository.findOne({relations:["pets"]});
  }

  remove(id: string) {
    return `This action removes a #${id} owner`;
  }
}

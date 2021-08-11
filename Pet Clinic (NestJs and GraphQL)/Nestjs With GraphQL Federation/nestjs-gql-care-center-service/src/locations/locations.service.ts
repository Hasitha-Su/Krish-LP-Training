import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationsService {

  constructor(@InjectRepository(Location) private locRepositroy:Repository<Location>){}

  async create(createLocationInput: CreateLocationInput):Promise<Location> {
    return await this.locRepositroy.save(createLocationInput);
  }

  async findAll():Promise<Location[]> {
    return await this.locRepositroy.find();
  }

  async findOne(id: string):Promise<Location> {
    return await this.locRepositroy.findOne(id);
  }

  update(id: string, updateLocationInput: UpdateLocationInput) {
    return `This action updates a #${id} location`;
  }

  remove(id: string) {
    return `This action removes a #${id} location`;
  }
}
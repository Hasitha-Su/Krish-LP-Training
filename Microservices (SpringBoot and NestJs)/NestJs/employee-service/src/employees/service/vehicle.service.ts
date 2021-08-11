import { VehicleRepository } from "../repository/vehicle.repository";
import { Vehicle } from "../schemas/Vehicle.schemas";
import { VehicleCreateDto } from "../dto/VehicleCreate.dto"
import { Injectable } from "@nestjs/common";

@Injectable()
export class VehicleService {

    constructor(private vehicleRepository: VehicleRepository){}

    async create(vehicleCreateDto: VehicleCreateDto): Promise<Vehicle>{
        return await this.vehicleRepository.create(vehicleCreateDto)
    }

    async findAll(): Promise<Vehicle[]>{
        return await this.vehicleRepository.findAll()
    }
}
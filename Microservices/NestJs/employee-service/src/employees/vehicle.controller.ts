import { Body, Controller, Get, Post } from "@nestjs/common";
import { Vehicle } from "./schemas/Vehicle.schemas";
import { VehicleService } from "./service/vehicle.service";
import { VehicleCreateDto } from "./dto/VehicleCreate.dto"

@Controller("vehicles")
export class VehicleController{

    constructor(private vehicleService: VehicleService){}

    @Post()
    async create(@Body() vehicleCreateDto: VehicleCreateDto): Promise<Vehicle>{
        return await this.vehicleService.create(vehicleCreateDto)
    }

    @Get()
    async getAll(){
        return this.vehicleService.findAll()
    }
}